import bcrypt from 'bcrypt';
import crypto from 'crypto'; 

export const generateVerificationCode = () => {
    
    return crypto.randomBytes(3).toString('hex').toUpperCase();
};

export const generateExpirationTime = () => {
    
    return new Date(Date.now() + 15 * 60 * 1000).toISOString();
};

export const hashPassword = async (password, saltRounds = 10) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (err) {
        console.error('Error hashing password:', err.message);
        throw new Error('Error hashing password');
    }
};

export const checkPassword = async (password, hash) => {
    try {
        const passwordMatches = await bcrypt.compare(password, hash);
        return passwordMatches;
    } catch (err) {
        console.error('Error checking password:', err.message);
        throw new Error('Error checking password');
    }
};
