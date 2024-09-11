
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import validator from "validator";
import jwt from "jsonwebtoken"

const userScheme = mongoose.Schema({
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
    birth:{
        type: Date,
        
    },
    password:{
        type: String,
        required: true,
        minLength:[8,"Le mot de passe doit au moins contenir 8 caractere"]
    },
    role:{
        type:String,
        required: true,
        enum:["Admin","Doctor"]
    },
    departement:{
        type:String,
       default:null
    }
})
userScheme.pre("save", async function(next){
    this.password = await  bcrypt.hash(this.password,10)
    
})

userScheme.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}
userScheme.methods.generateJsonWebToken = function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRE
    })
}
export const User = mongoose.model("User",userScheme)