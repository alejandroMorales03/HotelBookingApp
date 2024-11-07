import { DATE, Op, where } from 'sequelize';
import Hotel from "../Models/hotelModel.js";
import Room from "../Models/roomModel.js";
import Reservations from '../Models/reservationModel.js';
import Customer from '../Models/customerModel.js'

export const hotelLookupHandler = async (req, res) => {
    const { text, pool, gym, service, oceanView, petFriendly } = req.query;



    try {
        // Start with the base conditions
        const whereConditions = {
            [Op.or]: [
                { city: { [Op.iLike]: `%${text}%` } }, 
                { hotel_name: { [Op.iLike]: `%${text}%` } }
            ]
        };
        console.log("Success")

        // Create an array to hold additional conditions
        const additionalConditions = [];

        // Add filters only if they are present
        if (pool === 'true') {
            additionalConditions.push({ has_pool: true });
        }
        if (gym === 'true' ) {
            additionalConditions.push({ has_gym: true });
        }
        if (service === 'true') {
            additionalConditions.push({ has_room_service: true });
        }
        if (oceanView === 'true') {
            additionalConditions.push({ ocean_view: true });
        }
        if (petFriendly === 'true') {
            additionalConditions.push({ is_pet_friendly: true });
        }

        // If there are additional conditions, merge them with the whereConditions
        if (additionalConditions.length > 0) {
            whereConditions[Op.and] = additionalConditions;
        }

        const hotels = await Hotel.findAll({
            where: whereConditions,
        });

        return res.status(200).json(hotels);
    } catch (error) {
        console.error('Error looking up hotels:', error);
        return res.status(500).json({ message: 'Error looking up hotels' });
    }
};



export const roomsLookupHandler = async (req, res) => {
    const { 
        hotelName,
        numBeds,
        numBaths,
        numTv,
        guestCapacity,
        hasMinibar,
        hasWifi,
        roomType
    } = req.query;  

    try {
        const rooms = await Room.findAll({
            where: {
                [Op.and]: [
                    { hotel_name: { [Op.iLike]: `%${hotelName}%` } },
                    numBeds ? { num_beds: `${numBeds}` } : null,
                    numBaths ? { num_baths: `${numBaths}` } : null,
                    numTv ? { num_tv: `${numTv}` } : null,
                    guestCapacity ? { guest_capacity: {[Op.gte]: `${guestCapacity}`} } : null,
                    hasMinibar ? { has_minibar: `${hasMinibar}` } : null,
                    hasWifi ? { has_wifi: `${hasWifi}` } : null,
                    roomType ? { room_type: `${roomType}` } : null
                ]
            }
        });

     
        const filteredRooms = [];
        for (const roomItem of rooms) {
            const room = roomItem.dataValues;
            if(!filteredRooms.find(filteredRoom => 
                (filteredRoom["num_beds"] === room["num_beds"]) &&
                (filteredRoom["num_baths"] === room["num_baths"]) &&
                (filteredRoom["num_tv"] === room["num_tv"]) &&
                (filteredRoom["guest_capacity"] === room["guest_capacity"]) &&
                (filteredRoom["has_minibar"] === room["has_minibar"]) &&
                (filteredRoom["has_wifi"] === room["has_wifi"]) &&
                (filteredRoom["room_type"] === room["room_type"])
            )){
                filteredRooms.push(room);
            }
        }
        return res.status(200).json(filteredRooms);
    } catch (error) {
        console.error('Error looking up hotels:', error);
        return res.status(500).json({ message: 'Error looking up rooms.' });
    }
};
export const reservationStoringHandler = async (req, res) => {
    try {
        const { email, hotelName, checkInDate, checkInTime, checkOutDate, checkOutTime, roomID } = req.body;

        // Validate the date and time formats before processing
        if (!(checkInDate && checkInTime && checkOutDate && checkOutTime)) {
            return res.status(400).json({ message: "Missing or invalid date/time information" });
        }

        const CheckIn = new Date(checkInDate);
        const CheckOut = new Date(checkOutDate);

        const [inHour, inMin] = checkInTime.split(':');
        const [outHour, outMin] = checkOutTime.split(':');

        CheckIn.setHours(inHour);
        CheckIn.setMinutes(inMin);
        CheckIn.setSeconds(0);

        const fCheckIn = CheckIn.toISOString();

        CheckOut.setHours(outHour);
        CheckOut.setMinutes(outMin);
        CheckOut.setSeconds(0);

        const fCheckOut = CheckOut.toISOString();

    
        const existingReservation = await Reservations.findOne({
            where: {
                room_id: roomID,
                check_in_date: { [Op.lt]: fCheckOut },
                check_out_date: { [Op.gt]: fCheckIn }
            }
        });

        if (existingReservation) {
            return res.status(400).json({ message: "Room is already reserved for the selected dates" });
        }

 
        const reservation = await Reservations.create({
            email,
            room_id: roomID,
            check_in_date: fCheckIn,
            check_out_date: fCheckOut,
            hotel_name: hotelName
        });

        return res.status(201).json({
            message: 'Reservation created successfully',
            reservation
        });
    } catch (error) {
        console.error("Error creating reservation:", error);
        return res.status(500).json({ message: 'Error creating reservation', error: error.message });
    }
};

export const makePaymentHandler = async (req, res) => {
    const { cardNumber, cvv, email, roomID, hotelName } = req.body;

    if (!(cardNumber && cvv && email)) {
        return res.status(400).json({ message: "Missing Information" });
    }

    const containsNonNumerical = (variable) => /\D/.test(variable);
    if (cardNumber.length !== 16 || containsNonNumerical(cardNumber)) {
        return res.status(400).json({ message: "Invalid card number" });
    }

    if (cvv.length !== 3 || containsNonNumerical(cvv)) {
        return res.status(400).json({ message: "Invalid CVV" });
    }

    try {
    
        const reservation = await Reservations.findOne({
            where: { email, hotel_name: hotelName, room_id: roomID }
        });

        if (!reservation) {
            return res.status(404).json({ message: "Reservation not found" });
        }

        if (reservation.paid) {
            return res.status(400).json({ message: "Reservation already paid" });
        }

        await Customer.update(
            { credit_card_number: cardNumber, cvv: cvv },
            { where: { email } }
        );

        await Reservations.update(
            { paid: true },
            { where: { email, hotel_name: hotelName, room_id: roomID } }
        );

        res.status(200).json({ message: "Payment processed successfully" });
    } catch (error) {
        console.error("Error processing payment:", error);
        res.status(500).json({ message: "Error processing payment", error: error.message });
    }
};
