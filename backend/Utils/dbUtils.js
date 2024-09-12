import bcrypt from 'bcrypt';
import crypto from 'crypto'; 

export const generateVerificationCode = () => {
    // Generate a 6-character hex string and convert to uppercase
    return crypto.randomBytes(3).toString('hex').toUpperCase();
};

export const generateExpirationTime = () => {
    // Generate an expiration time 15 minutes from now
    return new Date(Date.now() + 15 * 60 * 1000).toISOString();
};

export const hashPassword = async (password, saltRounds = 10) => {
    try {
        // Hash the password with the specified number of salt rounds
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (err) {
        console.error('Error hashing password:', err.message);
        throw new Error('Error hashing password');
    }
};
