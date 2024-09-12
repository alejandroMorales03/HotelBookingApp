import express from 'express';
import { handleSignUp, sendVerificationCodeHandler, verifyCodeHandler,  } from '../Controllers/authController.js';

const authRoutes = express.Router();


authRoutes.post('/signup', handleSignUp);
authRoutes.post('/verify-code', verifyCodeHandler);
authRoutes.post('/request-code', sendVerificationCodeHandler)


export default authRoutes;