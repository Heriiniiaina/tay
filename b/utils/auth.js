import errorHandler from "../error/error.js"

import jwt from "jsonwebtoken"
import { User } from "../models/userSchema.js"
import { Patient } from "../models/patientSchema.js"
export const isAdminAuth = async(req,res,next)=>{
    const token =  req.cookies.adminToken
    if(!token)
        return next(new errorHandler("Authentification error",400))
    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
    console.log(decode)
    req.user = await User.findById(decode.id)
    console.log(req.user)
    if(req.user.role !="Admin"){
        return next(new errorHandler(`${req.user.role} n'est pas autorise a cette ressoource`,403))
    }
    next()
}
export const isPatienAuth = async (req,res,next)=>{
    const token =  req.cookies.patientToken
    if(!token)
        return next(new errorHandler("Authentification error",400))
    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.user = await Patient.findById(decode.id)
    if(req.user.role !="Patient"){
        return next(new errorHandler(`${req.user.role} n'est pas autorise a cette ressoource`,403))
    }
    next()
}