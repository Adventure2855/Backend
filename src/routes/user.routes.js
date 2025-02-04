import express, { Router } from "express";
import { registerUser } from "../controllers/user.controller";
const router = express.Router();
import {upload} from "../middlewares/multer.middleware.js"

const route =Router()
router.route("/register").post(registerUser)


export default router;
