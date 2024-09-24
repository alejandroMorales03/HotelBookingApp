import nodemailer from 'nodemailer'
import config from '../config/config.js';
import bcrypt from 'bcrypt'


export const sendVerificationEmail = async (email, code) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: config.notifier.user,
            pass: config.notifier.password,
        }
    });

    const mailOptions = {
        from: config.notifier.email, 
        to: email, 
        subject: 'Your Verification Code',
        text: `Your verification code is: ${code}` 
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Verification email sent successfully');
    } catch (error) {
        console.error('Error sending verification email:', error);
        throw error;
    }
};

export const comparePasswords = async (plainPassword, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
    } catch (err) {
        console.error('Error comparing passwords:', err.message);
        throw new Error('Error comparing passwords');
    }
};
