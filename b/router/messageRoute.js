import express from "express";
import { getAllMessage, sendMessage } from "../controllers/messageController.js";
import { isAdminAuth } from "../utils/auth.js";


const router = express.Router()

router.post("/send",sendMessage)
router.get("/getAll",isAdminAuth,getAllMessage)
export default router