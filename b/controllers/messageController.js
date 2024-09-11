import errorHandler from "../error/error.js"
import { Message } from "../models/messageSchema.js"

 export const sendMessage = async (req,res,next)=>{
    const {nom,prenom,email,phone,message} = req.body
    if(!nom || !prenom || !email || !phone || !message){
        return next(errorHandler("Veillez remplir le formulaire",400))
    }
    try {
        
        await Message.create({nom,prenom,email,phone,message})
        res.status(200).json({
            success: true,
            message: "Message envoyé"
        })
    } catch (error) {
        if(error.name == "ValidationError"){
            const ValidatorError = Object.values(error.errors).map( err=> err.message)
            return next(new errorHandler(ValidatorError.join(" ,"),400))
        }
    }
 }
 export const getAllMessage = async (req,res,next)=>{
    const messages = await Message.find()
    res.status(200).json({
        success:true,
        messages
    })
 }