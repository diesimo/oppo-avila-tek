import { Router } from "express";
const jwt = require("jsonwebtoken");
const router = Router();

import {
  getProducto,
  createProducto,
} from "../controllers/producto.controller";

router.post("/productos", createProducto);
router.get("/", getProducto);

export default router;
