import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import { notfound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;

import userRoutes from "./routes/userRoutes.js";

connectDB();

const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.use(cookieParser());

App.use("/api/users", userRoutes);

App.get("/", (req, res) => res.send("server iko chonjo"));

App.use(notfound);
App.use(errorHandler);

App.listen(port, () => console.log(`server started at ${port}`));
