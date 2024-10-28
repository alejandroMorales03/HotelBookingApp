import { Op } from 'sequelize';
import Hotel from "../Models/hotelModel.js";
import Room from "../Models/roomModel.js";


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
    console.log("in loopkuphandler");
    const { 
        roomID,
        hotelName,
        numBeds,
        hasBathtub,
        hasTV,
        guestCapacity,
        hasMinibar,
        hasWifi,
        roomType,
        hasBalcony
    } = req.query;  

    try {
        //const rooms = await Room.findAll({
        //    where: {
        //        [Op.and]: [
        //            { hotel_name: { [Op.iLike]: `%${hotelName}%` } },
        //            roomNum ? {room_num : `${roomNum}` } : null,
        //            numBeds ? { num_beds: `${numBeds}` } : null,
        //            hasBathtub ? { has_bathtub: `${hasBathtub}` } : null,
        //            hasTV ? { has_tv: `${hasTV}` } : null,
        //            guestCapacity ? { guest_capacity: {[Op.gte]: `${guestCapacity}`} } : null,
        //            hasMinibar ? { has_minibar: `${hasMinibar}` } : null,
        //            hasWifi ? { has_wifi: `${hasWifi}` } : null,
        //            roomType ? { room_type: `${roomType}` } : null,
        //            hasBalcony ? {has_balcony: `${hasBalcony}`} : null
        //        ]
       // roomID ? { room_ID: room_id } : null,
        //    }
        //});
        const rooms = await Room.findAll({
            where: {
                [Op.and]: [
                    { hotel_name: { [Op.iLike]: `%${hotelName}%` } },
                    numBeds ? { num_beds: { [Op.gte]: numBeds } } : null,
                    hasBathtub ? { has_bathtub: hasBathtub } : null,
                    hasTV ? { has_tv: hasTv } : null,
                    guestCapacity ? { guest_capacity: { [Op.gte]: guestCapacity } } : null,
                    hasMinibar ? { has_minibar: hasMinibar } : null,
                    hasWifi ? { has_wifi: hasWifi } : null,
                    roomType ? { room_type: `${roomType}` } : null,
                    hasBalcony ? { has_balcony: hasBalcony } : null
                ]
            }
        });

        //filter the rooms so its only one of each type
        const filteredRooms = [];
        for (const roomItem of rooms) {
            const room = roomItem.dataValues;
            if (!filteredRooms.find(filteredRoom =>
                (filteredRoom["num_beds"] === room["num_beds"]) &&
                (filteredRoom["has_bathtub"] === room["has_bathtub"]) &&
                (filteredRoom["has_tv"] === room["has_tv"]) &&
                (filteredRoom["guest_capacity"] === room["guest_capacity"]) &&
                (filteredRoom["has_minibar"] === room["has_minibar"]) &&
                (filteredRoom["has_wifi"] === room["has_wifi"]) &&
                (filteredRoom["room_type"] === room["room_type"]) &&
                (filteredRoom["has_balcony"] === room["has_balcony"])
               
            )){
                filteredRooms.push(room);
            }
        }
        return res.status(200).json(filteredRooms);
    } catch (error) {
        console.error('Error looking up hotels:', error);
        return res.status(500).json({ message: 'Error looking up rooms.' });
    }
    console.log("end loopkuphandler");

};