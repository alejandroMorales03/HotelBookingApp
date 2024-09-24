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

        return res.status(200).json(rooms);
    } catch (error) {
        console.error('Error looking up hotels:', error);
        return res.status(500).json({ message: 'Error looking up rooms.' });
    }
};