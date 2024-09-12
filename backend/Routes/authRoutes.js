import express from 'express';
import { handleSignUp } from '../Controllers/authController.js';

const authRoutes = express.Router();


authRoutes.post('/signup', handleSignUp);


export default authRoutes;