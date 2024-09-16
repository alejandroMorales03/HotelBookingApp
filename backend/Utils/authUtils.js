import nodemailer from 'nodemailer'
import config from '../config/config.js';


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
