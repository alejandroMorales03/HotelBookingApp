import express from 'express'
import { hotelLookupHandler } from '../Controllers/homeController.js';

const userHomeRoutes = express.Router();
userHomeRoutes.get('/hotel-search', hotelLookupHandler)

export default userHomeRoutes;