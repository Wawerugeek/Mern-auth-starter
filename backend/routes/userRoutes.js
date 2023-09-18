import express from "express";
import {
  authUser,
  registerUser,
  logout,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logout);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
export default router;
