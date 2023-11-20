import express from "express";
import {
  getAllTema,
  createTema,
  deleteTema, 
} from "../controllers/tema.controller.js";

const router = express.Router();

router.get("/", getAllTema);
router.post("/", createTema);
router.delete("/:idThema", deleteTema);

export default router;