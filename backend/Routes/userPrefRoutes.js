import express from 'express'
import { changePasswordHandler } from '../Controllers/userPrefController.js';

const userPrefRoutes = express.Router();
userPrefRoutes.post('/change-password', changePasswordHandler);

export default userPrefRoutes;