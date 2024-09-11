import errorHandler from "../error/error.js";
import {User} from "../models/userSchema.js"
import { generateToken } from "../utils/jwtToken.js";
import multer from "multer";
import fs from "fs"
import path from "path"
import {fileURLToPath} from "url"



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathDir = path.dirname(__dirname)
const uploadsDir = path.join(pathDir,"uploads")
if(!fs.existsSync(uploadsDir))
    fs.mkdirSync(uploadsDir)
const DiskStorage = multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"_"+file.originalname)
    },
    destination:(req,file,cb)=>{
        cb(null,uploadsDir)
    }
})
export const upload = multer({storage:DiskStorage})


// Login
export const login = async (req,res,next)=>{
    const {email,password} = req.body
    if(!email || !password)
        return next(new errorHandler("Veillez remplir le formulaire",400))
    const user = await User.findOne({email})
    if(!user)
        return next(new errorHandler("Email non valide",400))
    const isPassword = await user.comparePassword(password)
    console.log(isPassword)
    if(!isPassword)
        return next(new errorHandler("Mot de passe non valide",400))
   generateToken(user,`${user.role} login reussi`,200,res)
   
}

//Enregistrememnt admin
export const addAdmin =async (req,res,next)=>{
    const {nom,prenom,email,phone,birth,gender,password} = req.body
    if(!nom || !prenom || !email || !phone || !birth || !password)
        return next(new errorHandler("Veuillez remplir le formulaire",400))
    const admin =  await User.findOne({email:email})
    if(admin)
        return next(new errorHandler(`Un ${admin.role} est deja enregistrer avec cette email`,400))
    try {
        console.log("ko")
        const user = User.create({nom,prenom,email,phone,birth,password,role:"Admin"})
        res.status(200).json({
            success:true,
            message:"Admin reussi"
           })
        //generateToken(user, "Inscription réussie", 200, res);
    } catch (error) {
        if(error.name == "ValidationError"){
            const ValidatorError = Object.values(error.errors).map( err=> err.message)
            return next(new errorHandler(ValidatorError.join(" ,"),400))
        }
        console.log(error)
       
    }
}
//Inscription doctera
export const addDoctor = async (req,res,next)=>{
    const {nom,prenom,email,phone,password,departement} = req.body
    if(!nom || !prenom || !email || !phone || !password || !departement)
        return next(new errorHandler("Veuillez remplir le formulaire",400))
    const doctor = await User.findOne({email:email})
    if(doctor)
        return next(new errorHandler(`Un ${doctor.role} est deja enregistrer avec cette email`,400))
    try {
        await User.create({nom,prenom,email,phone,password,departement,role:"Doctor"})
        res.status(200).json({
            success: true,
            message:"Doctor enregistré"
        })
    } catch (error) {
        if(error.name == "ValidationError"){
            const ValidatorError = Object.values(error.errors).map( err=> err.message)
            return next(new errorHandler(ValidatorError.join(" ,"),400))
        }
    }
}
//Maka liste ny doctera
export const getAllDoctor = async (req,res,next)=>{
    const doctor = await User.find({role:"Doctor"})
    res.status(200).json({
        success:true,
        doctor
    })
}
//Maka ny info an'ny user vita login
export const getUSerDetails = async (req,res,next)=>{
    const user = req.user
    res.status(200).json({
        success:true,
        user

    })
}
//Deconnecter
export const loggoutAdmin = async (req,res,next)=>{
    res.status(200).cookie("adminToken","",{
        httpOnly:true,
        expires:new Date(Date.now())

    }).json({
        success:true,
        message:"Admin deconcté"
    })
}
export const DeleteDoctor = async (req,res,next)=>{
    const {id} = req.params
    const doctor =await User.findById(id)
    await doctor.deleteOne()
    res.status(200).json({
        success:true,
        message:"Rendez vous supprimer"
    })
}
