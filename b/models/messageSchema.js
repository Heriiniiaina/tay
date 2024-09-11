import mongoose from "mongoose";
import validator from "validator";

const messageSchema = mongoose.Schema({
    nom:{
        type: String,
        required: true,
        minLength: [3,"Le nom doit au moins comporter 3 caracteres"]
    },
    prenom:{
        type: String,
        required: true,
        minLength: [3,"Le prenom doit au moins comporter 3 caracteres"]
    },
    email:{
        type:String,
        required: true,
        validate: [validator.isEmail,"Veuillez entrer un email valide"]
    },
    phone:{
        type: String,
        required: true,
        minLength: [10,"Le numero doit comporter exactement 10 caracteres"],
        maxLength: [10,"Le numero doit comporter exactement 10 caracteres"]
    },
    message:{
        type:String,
        required: true 
    }
    
    
})
export const Message = mongoose.model("MEssage",messageSchema)