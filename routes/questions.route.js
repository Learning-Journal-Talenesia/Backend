import express from "express";
import {
  createQuestion,
  getAllQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion,
} from "../controllers/questions.controller.js";

const router = express.Router();

router.get("/", getAllQuestion);
router.post("/", createQuestion);
router.get("/:id", getQuestion);
router.patch("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);

export default router;
