
import errorHandler from "../error/error.js";
import { Rendez } from "../models/rendezVousSchema.js";
import { User  } from "../models/userSchema.js";
export const postRendez = async (req,res,next)=>{

    const{
        nomPatient,
        prenomPatient,
        email,
        phone,
        gender,
        dateRendezVous,
        doctorNom,
        doctorPrenom,
        departement,
        address,
        
    } = req.body
    if(!nomPatient ||
        !prenomPatient ||
        !email ||
        !phone ||
        !gender ||
        !dateRendezVous ||
        !doctorNom ||
        !doctorPrenom ||
        !departement ||
        !address 
        ){
            return next(new errorHandler("Veuillez remplir le formulaire a",400))
        }
        const DoctorFound = await User.find({nom:doctorNom,prenom:doctorPrenom,role:"Doctor",departement:departement})
        console.log(DoctorFound)
       if(DoctorFound.length  ==0)
            return next (new errorHandler("Doctor not found",404))
        if(DoctorFound.length >1){
            return next(new errorHandler("Doctors conflit",404))
        }
        const isRendezVous =await Rendez.find({doctorNom,doctorPrenom,dateRendezVous})
        if(isRendezVous.length >0){
            return (
                next(new errorHandler("Date déja prise",403))
            )
        }
        const doctorId = DoctorFound[0]._id
        const patientId= req.user._id
        const RendezVous =await Rendez.create({nomPatient,
            prenomPatient,
            email,
            phone,
            gender,
            dateRendezVous,
            doctorNom,
            doctorPrenom,
            departement,
        
            doctorId,
            patientId,
            address})
        res.status(200).json({
            success:true,
            message:"Rendez vous envoye",
            RendezVous
        })
}
export const getAllRendezVous = async (req,res,next)=>{
    const RendezVous  = await Rendez.find({})
    res.status(200).json({
        success:true,
        RendezVous
    }) 
}
export const getRendezVous = async (req,res,next)=>{
    const {email} = req.body
    console.log(email)
    if(!email)
        return next(new errorHandler("Remplier ",400))
    const rendez =await Rendez.find({email})
    
    res.status(200).json({
        success:true,
        message:"Liste rendez vous",
        rendez
    })
}
export const UpdateRendezVousStatus = async (req,res,next)=>{
    const {id} = req.params

}
export const DeleteRendezVous = async (req,res,next)=>{
    const {id} = req.params
    const rendez =await Rendez.findById(id)
    await rendez.deleteOne()
    res.status(200).json({
        success:true,
        message:"Rendez vous supprimer"
    })
}