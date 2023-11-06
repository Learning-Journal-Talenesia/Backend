import express from "express";
import {
  createQuestion,
  getAllQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion,
  getAllQuestionByThemaId,
} from "../controllers/questions.controller.js";

const router = express.Router();

router.get("/", getAllQuestion);
router.get("/thema/:idThema", getAllQuestionByThemaId);
router.post("/", createQuestion);
router.get("/:id", getQuestion);
router.patch("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);

export default router;
