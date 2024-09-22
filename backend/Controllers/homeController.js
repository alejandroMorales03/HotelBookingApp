import { Op } from 'sequelize';
import Hotel from "../Models/hotelModel.js";

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
