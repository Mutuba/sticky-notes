import express from "express";
import {
  registerUser,
  loginUser,
  getSession,
} from "../controllers/authController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/session", getSession);

export default router;
