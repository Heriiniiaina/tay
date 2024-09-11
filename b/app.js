import express from "express"
import cors from 'cors'
import {config} from "dotenv"
import cookieParser from "cookie-parser"
import fileupload from 'express-fileupload'
import { dbConnect } from "./Database/DatabaseConnect.js"
import messageRoute from "./router/messageRoute.js"
import { errorMidleware } from "./error/error.js"
import userRoute from "./router/userRoute.js"
import patientRoute from "./router/patientRoute.js"
import multer from "multer"
import bodyParser from "body-parser"
import rendezRoute from "./router/rendezRoute.js"
config({"path":"./config/config.env"})
const app = express()
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST","GET","PUT","DELETE"],
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}))
app.use("/api/message",messageRoute)
app.use("/api/user",userRoute)
app.use("/api/patient",patientRoute)
app.use("/api/rendez",rendezRoute)
app.use(errorMidleware)

dbConnect()
export default app
