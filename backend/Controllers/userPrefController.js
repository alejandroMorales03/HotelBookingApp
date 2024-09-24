import Customer from "../Models/customerModel.js";
import { hashPassword } from "../Utils/dbUtils.js";
export const changePasswordHandler = async(req, res) =>{

    const {email, password} = req.body;

    if(!(email && password)){
        console.error('Bad request. Missing email or password');
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try{
        const hashedPassword = await hashPassword(password);
        await Customer.update(
            {
                password : hashedPassword
            },
            {
                where:{email : email}
            }
        )
        return res.status(200).json({message: 'Your password has been changed successfully'});

    }catch(error){
        console.error('Error updating password:', error); // Log the error for debugging
        return res.status(500).json({ message: 'Your password could not be changed. Try again later.' });
    }
     
}