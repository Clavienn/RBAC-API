
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



router.post("/register", register);
router.post("/login", login);


router.get("/", authMiddleware, requireRole("admin"), getAllUsers);
router.get("/:id", authMiddleware, getUserById);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, requireRole("admin"), deleteUser);

export default router;
