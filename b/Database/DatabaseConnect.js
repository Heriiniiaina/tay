import mongoose from "mongoose";
//Soloina url mongo le process.env.MONGO_URI
export const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database URI : " + process.env.MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}