import express from "express";
import { getCourse } from "../controller/Course.controller.js";
const router = express.Router()
router.get("/",getCourse);
export default router;