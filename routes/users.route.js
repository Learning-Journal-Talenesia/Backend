import express from "express";
import {
  getAllUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUsers);
router.patch("/:idThema/:idUser", updateUsers);
router.delete("/:idThema/:idUser", deleteUsers);

export default router;
