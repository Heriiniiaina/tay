import errorHandler from "../error/error.js"
import { Patient } from "../models/patientSchema.js"
import { generateToken } from "../utils/jwtToken.js"
import multer from "multer";
import fs from "fs"
import path from "path"
import {fileURLToPath} from "url"
import {User} from "../models/userSchema.js"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname,"uploads")
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
export const patientRegister = async (req,res,next)=>{
    const {nom,prenom,email,phone,birth,password} = req.body
    const image = req.file ? req.file.originalname : null
    if(!nom || !prenom || !email || !phone || !birth || !password)
        return next(new errorHandler("Veuillez remplir le formulaire",400))
    const user = await Patient.findOne({email:email})
    if(user)
        return next(new errorHandler(`Un ${user.role} est deja enregistrer avec cette email`,400))
 
    try {
        
        await Patient.create({nom,prenom,email,phone,birth,password,role:"Patient"})
        /*generateToken(user,"Inscription reussi",200,res)*/
        res.status(200).json({
            success:true,
            message:"Inscription reussi"
           })
          console.log(pathDir)
    } catch (error) {
        if(error.name == "ValidationError"){
            const ValidatorError = Object.values(error.errors).map( err=> err.message)
            return next(new errorHandler(ValidatorError.join(" ,"),400))
        }
    }
}
export const patientLogin = async (req,res,next)=>{
    const {email,password} = req.body
    if(!email || !password)
        return next(new errorHandler("Veillez remplir le formulaire",400))
    const user = await Patient.findOne({email})
    if(!user)
        return next(new errorHandler("Email non valide",400))
    const isPassword = await user.comparePassword(password)
    console.log(isPassword)
    if(!isPassword)
        return next(new errorHandler("Mot de passe non valide",400))
   generateToken(user,`${user.role} login reussi`,200,res)
}
export const loggoutPatient = async (req,res,next)=>{
    res.status(200).cookie("patientToken","",{
        httpOnly:true,
        expires:new Date(Date.now())

    }).json({
        success:true,
        message:"Patient deconcté"
    })
}
export const getAllPatient = async (req,res,next)=>{
    const patient = await Patient.find({role:"Patient"})
    res.status(200).json({
        success:true,
        patient
    })
}
export const DeletePatient = async (req,res,next)=>{
    const {id} = req.params
    const doctor =await Patient.findById(id)
    await doctor.deleteOne()
    res.status(200).json({
        success:true,
        message:"Patient vous supprimer"
    })
}
export const getDoctor = async (req,res,next)=>{
    const doc = await User.find({role:"Doctor"})
    res.status(200).json({
        success:true,
        doc
    })
}