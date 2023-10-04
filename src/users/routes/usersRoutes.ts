import express from "express";
import {
  handleGetUser,
  handleGetUsers,
  handleUserRegistration,
  handleLogin,
  // handleEditUser,
  // handleDeleteUser,
} from "../controllers/usersControllers";
import { auth } from "../../auth/providers/jwt";
const router = express.Router();

router.get("/", auth, handleGetUsers);
router.get("/:id", auth, handleGetUser);
router.post("/", handleUserRegistration);
router.post("/login", handleLogin);
// router.put("/:id", auth, handleEditUser);
// router.delete("/:id", auth, handleDeleteUser);

export default router;
