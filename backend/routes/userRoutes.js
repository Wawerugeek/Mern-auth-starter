import express from "express";
import { authUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/auth", authUser);
export default router;
