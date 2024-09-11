import mongoose from "mongoose";
import validator from "validator";

const rendez = mongoose.Schema({
    nomPatient:{
        type: String,
        required: true,
        minLength: [3,"Le nom doit au moins comporter 3 caracteres"]
    },
    prenomPatient:{
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
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    dateRendezVous:{
        type: Date,
        required:true
    },
    doctorNom:{
        type:String,
        required: true
    },
    doctorPrenom:{
        type:String,
        required: true
    },
    departement:{
        type:String,
        required: true
    },
    hasVisited:{
        type:Boolean,
     
        default:false
    },
    doctorId:{
        type:mongoose.Schema.ObjectId
     
    },
    patientId:{
        type:mongoose.Schema.ObjectId
     
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Ok","Non ok","En attente"],
        default:"En attente"
    }
})

export const Rendez = mongoose.model("Rendez",rendez)