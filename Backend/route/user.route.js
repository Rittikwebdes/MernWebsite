import express from "express";
import {login, signup} from "../controller/user.controller.js"
import { contact } from "../controller/Contact.Controller.js";
const router = express.Router()


router.post("/signup",signup)
router.post("/login",login)
router.post("/contact",contact)
export default router;