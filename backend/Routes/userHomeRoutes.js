import express from 'express'
import { hotelLookupHandler, roomsLookupHandler } from '../Controllers/homeController.js';

const userHomeRoutes = express.Router();
userHomeRoutes.get('/hotel-search', hotelLookupHandler)
userHomeRoutes.get('/rooms-list', roomsLookupHandler)

export default userHomeRoutes;