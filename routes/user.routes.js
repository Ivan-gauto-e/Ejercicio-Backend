import express from "express";
const userRouters = express.Router();
import {
  validateRequiredFields,
  isValidEmail,
  isValidPassword,
  handleError,
} from "../utils/validation.utils.js";
import {
  addUser,
  getAllUsers,
  findUserById,
  updateUserById,
  deleteUserById,
  emailExists,
} from "../data/users.data.js";
import { useResolvedPath } from "react-router";

userRouters.get("/", (req, res, next) => {
  try {
    res.json(getAllUsers());
  } catch (error) {
    next(error);
  }
});

userRouters.post("/", (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    res.status(201).send(addUser(req.body));
  } catch (error) {
    next(error);
  }
});

export default userRouters;
