import SignupAttempt from "../Models/signupAttempt.js"; 
import { generateExpirationTime, generateVerificationCode, hashPassword } from "../Utils/dbUtils.js";

export const handleSignUp = async (req, res) => {
    const { email, firstName, lastName, password, confirmedPassword } = req.body;


    if (!(email && firstName && lastName && password && confirmedPassword)) {
        console.error('There is missing data in some of the fields');
        return res.status(400).json({ message: 'Please fill out all the fields' });
    }

    
    if (password !== confirmedPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        
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
                    where: { email }
                }
            );
        } else {
            
            const hashedPassword = await hashPassword(password);

           
            await SignupAttempt.create({
                email,
                first_name: firstName,  
                last_name: lastName,   
                password: hashedPassword,  
                auth_code: verificationCode,
                expires_at: expirationTime
            });
        }

        return res.status(200).json({ message: 'Signup attempt processed successfully' });

    } catch (err) {
        console.error('Error during signup processing:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
