import { User } from "../model/user.js";

export const saveUser = async (req, res) =>{
 
    try{
        // frontend se data aayega req.body me
        const userdata = req.body;
        // jo data frontend se aaya h use new user m save krenge
        const newUser = new User(userdata);
        await newUser.save();
        // agar user save ho jata h to success message bhejenge
        res.status(200).json(
            {   
                success: true,
                message: "User saved successfully"
            }
        )
    }
    // agar user save nahi hota h to error message bhejenge
    catch(error){
        res.status(500).json(
            {
                success: false,
                message: "Error saving user",
            }
        )
    }
}