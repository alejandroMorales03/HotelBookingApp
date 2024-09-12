import Customer from "../Models/customerModel.js";
import SignupAttempt from "../Models/signupAttemptModel.js"; 
import { generateExpirationTime, generateVerificationCode, hashPassword } from "../Utils/dbUtils.js";
import { sendVerificationEmail } from "../Utils/auhtUtils.js";
import { Op } from "sequelize";

export const handleSignUp = async (req, res) => {
    const { email, firstName, lastName, password, confirmedPassword } = req.body;


    if (!(email && firstName && lastName && password && confirmedPassword)) {
        console.error('There is missing data in some of the fields');
        return res.status(400).json({ message: 'Please fill out all the fields' });
    }

    
    if (password !== confirmedPassword) {
        console.error('Passwords entered by user do not match')
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        const existingUser = await Customer.findOne({where: {email}});

        if(existingUser){
            return res.status(409).json({message: 'This email is already associated with an account'})
        }
        
        const verificationCode = generateVerificationCode();
        const expirationTime = generateExpirationTime();

  
        const existingAttempt = await SignupAttempt.findOne({ where: { email } });

        if (existingAttempt) {
 
            await SignupAttempt.update(
                {
                    auth_code: verificationCode,
                    expires_at: expirationTime
                },
                {
                    where: { email: email }
                }
            );
        } else {
            
            const hashedPassword = await hashPassword(password);

           
            await SignupAttempt.create({
                email: email,
                first_name: firstName,  
                last_name: lastName,   
                password: hashedPassword,  
                auth_code: verificationCode,
                expires_at: expirationTime
            });
        }
        await sendVerificationEmail(email, verificationCode);
        return res.status(200).json({ message: 'Signup attempt processed successfully' });

    } catch (err) {
        console.error('Error during signup processing:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



export const sendVerificationCodeHandler= async (req, res) => {
    const { email } = req.body;

    if (!email) {
        console.log("Missing email in request");
        return res.status(400).json({ message: 'Bad Request.' });
    }

    try {
        const now = new Date();
        const attempt = await SignupAttempt.findOne({
            where: {
                email: email,
                expires_at: {
                    [Op.gt]: now 
                }
            },

        });

        if (attempt) {
            const extractedCode = attempt.auth_code;

            await sendVerificationEmail(email, extractedCode);
            return res.status(200).json({ message: 'Verification code sent' });
        } else {
            return res.status(400).json({ message: 'No valid verification attempt found' });
        }
    } catch (err) {
        console.error('Error during code retrieval and sending:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const verifyCodeHandler = async (req, res) => {
    const { code, email } = req.body;

    if (!(email && code)) {
        console.log("Missing fields in verification request");
        return res.status(400).json({ message: 'Please fill out all the fields' });
    }

    try {
        const now = new Date();
        const attempt = await SignupAttempt.findOne({
            where: {
                email: email,
                expires_at: {
                    [Op.gt]: now 
                }
            },
            
        });

        if (attempt) {
            const extractedCode = attempt.auth_code;

            if (extractedCode === code) {

                await SignupAttempt.destroy({
                    where: { email: email }
                });

                return res.status(200).json({ message: 'Verification Successful' });
            } else {
                return res.status(400).json({ message: 'Invalid code' });
            }
        } else {
            return res.status(400).json({ message: 'No valid verification attempt found' });
        }
    } catch (err) {
        console.error('Error during verification processing:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
