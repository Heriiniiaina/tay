import express from "express";
import { patientRegister,loggoutPatient ,patientLogin, getAllPatient, upload,DeletePatient, getDoctor} from "../controllers/patientController.js";
import { isPatienAuth } from "../utils/auth.js";

const router = express.Router()

router.post("/register",upload.single("image"),patientRegister)
router.post("/login",patientLogin)
router.get("/patient/loggout",isPatienAuth,loggoutPatient)
router.get("/patients",getAllPatient)
router.get("/getDoc",getDoctor)
router.delete("/deletePat/:id",DeletePatient)
export default router