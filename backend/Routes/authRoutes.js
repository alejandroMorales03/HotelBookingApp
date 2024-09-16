import express from 'express';
import {
    handleSignUp,
    sendVerificationCodeHandler,
    verifyCodeHandler,
    handleAuthentication
} from '../Controllers/authController.js';

const authRoutes = express.Router();


authRoutes.post('/signup', handleSignUp);
authRoutes.post('/verify-code', verifyCodeHandler);
authRoutes.post('/request-code', sendVerificationCodeHandler);
authRoutes.post('/authentication', handleAuthentication);


export default authRoutes;