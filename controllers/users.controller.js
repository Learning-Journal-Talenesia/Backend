import express from "express";
import mongoose from "mongoose";

import usersModel from "../models/users.models.js";

// const router = express.Router();
export const getAllUsers = async (req, res) => {
    try {
      const users = await usersModel.find();
  
      res.status(200).json(users);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

export const createUsers = async (req, res) => {
  const {idThema, thema, idUser, userName, qna, createdAt} = req.body;
  const existingUser = await usersModel.findOne({ idThema, idUser });

  if (existingUser) {
      return res.status(409).json({ message: 'User with the same idThema and idUser already exists.' });
  }

  const newUsers = new usersModel({
    idThema,
    thema,
    idUser,
    userName,
    qna,
    createdAt
  });

  try {
    await newUsers.save();

    res.status(201).json(newUsers);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateUsers = async (req, res) => {
    const { idThema, idUser } = req.params;
    const { qna, createdAt } = req.body;
  
    try {
      const user = await usersModel.findOne({ idThema, idUser });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }                  
      user.qna = qna;
      user.createdAt = createdAt;
  
      const updatedUser = await user.save();
  
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deleteUsers = async (req, res) => {
    const { idThema, idUser } = req.params;
  
    try {
      const user = await usersModel.findOne({ idThema, idUser });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await user.deleteOne();
  
      res.json({ message: 'User deleted successfully.' });
    } catch (error) {      
      res.status(500).json({ message: 'Internal Server Error' });
    }
};
