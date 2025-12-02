
import express from "express";
import {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/UserController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";
import { requireRole } from "../middlewares/roleMiddleware.js";

const router = express.Router();



// AUTH
router.post("/register", register);
router.post("/login", login);


// USERS ADMIN Zone
router.get("/", authMiddleware, requireRole("admin"), getAllUsers);
router.get("/:id", authMiddleware, requireRole("admin"), getUserById);
router.put("/:id", authMiddleware, requireRole("admin"), updateUser);
router.delete("/:id", authMiddleware, requireRole("admin"), deleteUser);

export default router;
