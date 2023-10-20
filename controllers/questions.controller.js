import express from "express";
import mongoose from "mongoose";

import Questions from "../models/questions.models.js";

// const router = express.Router();
export const getAllQuestion = async (req, res) => {
  try {
    const questions = await Questions.find();

    res.status(200).json(questions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getQuestion = async (req, res) => {
  const { id } = req.params;

  try {
    const question = await Questions.findById(id);

    res.status(200).json(question);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createQuestion = async (req, res) => {
  const { thema, question, createdAt } = req.body;

  const newQuestion = new Questions({
    thema,
    question,
    createdAt,
  });

  try {
    await newQuestion.save();

    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateQuestion = async (req, res) => {
  const { id } = req.params;
  const { thema, question, createdAt } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updateQuestion = {
    thema,
    question,
    createdAt,
    _id: id,
  };

  await Questions.findByIdAndUpdate(id, updateQuestion, { new: true });

  res.json(updateQuestion);
};

export const deleteQuestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Questions.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
