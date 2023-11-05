import express from "express";
import mongoose from "mongoose";

import Questions from "../models/questions.models.js";
import SlugBuilder from "../helpers/slug.helper.js";

// const router = express.Router();
export const getAllQuestion = async (req, res) => {
  try {
    const questions = await Questions.find();

    res.status(200).json(questions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllQuestionByThema = async (req, res) => {
  const { nameThema } = req.params;
  // const normalText = SlugBuilder.changeSlugToNormal(nameThema);
  try {
    const questions = await Questions.find({ slug: nameThema });

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
  const { idThema, thema, question, inputType } = req.body;

  const newQuestion = new Questions({
    idThema,
    thema,
    question,
    inputType,
  });

  // generate slug
  const slug = SlugBuilder.build(thema);
  newQuestion.slug = slug;

  try {
    await newQuestion.save();

    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateQuestion = async (req, res) => {
  const { id } = req.params;
  const { idThema, thema, question, inputType } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updateQuestion = {
    idThema,
    thema,
    question,
    inputType,
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
