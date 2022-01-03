import express from "express";
import { tasksApi } from "./routes/index";
import morgan from "morgan";

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// body parser
app.use(express.json());

// Routes
tasksApi(app);

export default app;
