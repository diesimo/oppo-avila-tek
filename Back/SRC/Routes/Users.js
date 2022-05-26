import { Router } from "express";
const jwt = require("jsonwebtoken");
const router = Router();

import {
  createUser,
  getUsers,
  getOneUser,
  updateUser,
  getOneUserEmail,
} from "../controllers/user.controller";

//Autorization: Bearer <token>
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403); //ruta o acceso prohibido
  }
}

router.post("/register", createUser);
router.get("/", getUsers);

// un solo user
router.get("/:id_usuario", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (error, authData) => {
    if (error) {
      res.sendStatus(403); //ruta o acceso prohibido
    } else {
      res.json({ mensaje: "Ingreso", authData });
      getOneUser;
    }
  });
});

//update usuario
router.put("/:id_usuario", updateUser);

//Loguear usuario
router.post("/login", getOneUserEmail);

router.get("/loginenter");
export default router;
