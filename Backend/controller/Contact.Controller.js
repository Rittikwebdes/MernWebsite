import Contact from "../Model/Contact.Model.js";
export const contact = async(req,res)=>{
    try {
        const {name,email,message}=req.body;
        const contact = await Contact.findOne({ email });
        if(contact){
            return res.status(400).json({message:"user already exist"})
        }
        const newContact =await new Contact({
name,
email,
message
        })
        newContact.save();
        res.status(200).json({message:"Your message was successfully submitted"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error"})
    }
}