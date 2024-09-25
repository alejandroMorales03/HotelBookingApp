import { Op } from 'sequelize';
import Hotel from "../Models/hotelModel.js";
import Room from "../Models/roomModel.js";

export const hotelLookupHandler = async (req, res) => {
    const { text } = req.query;  

    try {
        const hotels = await Hotel.findAll({
            where: {
                [Op.or]: [
                    { city: { [Op.iLike]: `%${text}%` } }, 
                    { hotel_name: { [Op.iLike]: `%${text}%` } }
                ]
            }
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
                    guestCapacity ? { guest_capacity: `${guestCapacity}` } : null,
                    hasMinibar ? { has_minibar: `${hasMinibar}` } : null,
                    hasWifi ? { has_wifi: `${hasWifi}` } : null,
                    roomType ? { room_type: `${roomType}` } : null
                ]
            }
        });

        //filter the rooms so its only one of each type
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