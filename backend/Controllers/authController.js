import Customer from "../Models/customerModel.js";
import SignupAttempt from "../Models/signupAttemptModel.js";
import { generateExpirationTime, generateVerificationCode, hashPassword } from "../Utils/dbUtils.js";
import { comparePasswords, sendVerificationEmail } from "../Utils/authUtils.js"; 
import { Op } from "sequelize";
import { checkPassword } from "../Utils/userUtils.js";


export const handleSignUp = async (req, res) => {
    const { email, firstName, lastName, password, confirmedPassword } = req.body;

  
    if (!(email && firstName && lastName && password && confirmedPassword)) {
        console.error('Missing data in some fields');
        return res.status(400).json({ message: 'Please fill out all the fields' });
    }

    if(!checkPassword({password})){
        console.error('Password does not match requirements');
        return res.status(400).json({message: 'Please include 8 characters, a digit, lower case letter, upper case letter, and a symbol.'});
    }

 
    if (password !== confirmedPassword) {
        console.error('Passwords do not match');
        return res.status(400).json({ message: 'Passwords do not match' });
    }
 
    try {
        
        const existingUser = await Customer.findOne({ where: { email } });

        if (existingUser) {
            return res.status(409).json({ message: 'This email is already associated with an account' });
        }
        

        const verificationCode = generateVerificationCode();
        const expirationTime = generateExpirationTime();
        const hashedPassword = await hashPassword(password);
        

        const existingAttempt = await SignupAttempt.findOne({ where: { email } });
        
        if (existingAttempt) {
            
            await SignupAttempt.update(
                {
                    auth_code: verificationCode,
                    expires_at: expirationTime,
                    password: hashedPassword 
                },
                {
                    where: { email: email }
                }
            );
      
        } else {

            

   
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


export const sendVerificationCodeHandler = async (req, res) => {
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
            }
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
            }
        });

        if (attempt) {
            const extractedCode = attempt.auth_code;

            if (extractedCode === code) {
                await SignupAttempt.destroy({ where: { email: email } });

                
                const { first_name, last_name, password } = attempt;
                await Customer.create({
                    email: email,
                    first_name: first_name,
                    last_name: last_name,
                    password: password
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



export const handleAuthentication = async (req, res) => {
    const { email, password } = req.body;


    if (!(email && password)) {
        console.error('There is missing data in some of the fields');
        return res.status(400).json({ message: 'Please fill out all the fields' });
    }

    try {

        const existingUser = await Customer.findOne({ where: { email: email }});

        if (!existingUser) {
            return res.status(409).json({ message: 'The email and password entered are not associated with an account' })
        }
        
        const isMatch = comparePasswords(password, existingUser.password);

        if (isMatch) {
            return res.status(200).json({ 
                message: 'Login successful', 
                data: {
                    firstName: existingUser.first_name, 
                    lastName: existingUser.last_name, 
                    email: existingUser.email
                } 
            });
        } else {
            console.log('Password does not match');
            return res.status(401).json({ message: 'Invalid email or password' });
        }

       

    } catch (err) {
        console.error('Error during login processing:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const handleForgotPassword = async (req, res) => {
    const { email } = req.body;

    // Validate user input
    if (!email) {
        console.log("Missing email in request");
        return res.status(400).json({ message: 'Bad Request. Please provide your email.' });
    }

    try {
        // Check if the user exists
        const existingUser = await Customer.findOne({ where: { email } });

        if (!existingUser) {
            return res.status(404).json({ message: 'No account associated with this email.' });
        }

        // Generate verification code and expiration time
        const verificationCode = generateVerificationCode();
        const expirationTime = generateExpirationTime();

        // Check for existing sign-up attempts
        const existingAttempt = await SignupAttempt.findOne({ where: { email } });

        if (existingAttempt) {
            // If an existing attempt is found, update the existing entry
            await SignupAttempt.update(
                {
                    auth_code: verificationCode,
                    expires_at: expirationTime
                },
                {
                    where: { email }
                }
            );
        } else {
            // Otherwise, create a new sign-up attempt
            await SignupAttempt.create({
                email: email,
                auth_code: verificationCode,
                expires_at: expirationTime
            });
        }

        // Send the verification email
        await sendVerificationEmail(email, verificationCode);

        return res.status(200).json({ message: 'Verification code sent successfully.' });
    } catch (err) {
        console.error('Error during password reset process:', err);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};