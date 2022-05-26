import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";

import userRoute from "./Routes/Users";
import productoRoute from "./Routes/Productos";

//inicilizacion
const app = express();

app.use(cors());

//middlewares
app.use(morgan("dev"));
app.use(json());

//routes
app.use("/api/users", userRoute);
app.use("/api/productos", productoRoute);

export default app;
