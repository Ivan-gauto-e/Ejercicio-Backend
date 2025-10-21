import express from "express";
const Routers = express.Router();
import {
  validateRequiredFields,
  isValidEmail,
  isValidPassword,
  handleError,
  requiredFields,
} from "../utils/validation.utils.js";
import {
  addUser,
  getAllUsers,
  findUserById,
  updateUserById,
  deleteUserById,
  emailExists,
} from "../data/users.data.js";

Routers.get("/", (req, res, next) => {
  try {
    res.json(getAllUsers());
  } catch (error) {
    next(error);
  }
});

Routers.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!validateRequiredFields(req.body, requiredFields)) {
      throw new Error("Campos requeridos faltantes");
    }
    if (!isValidEmail(email)) throw new Error("Email inválido");
    if (!isValidPassword(password)) throw new Error("Contraseña inválida");
    if (emailExists(email)) throw new Error("El email ya está registrado");
    const newUser = addUser(req.body);
    res.status(201).json({ newUser });
  } catch (err) {
    next(err);
  }
});

export default Routers;
