import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import { notfound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import path from "path";

const port = process.env.PORT || 5000;

import userRoutes from "./routes/userRoutes.js";

connectDB();

const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.use(cookieParser());

App.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  App.use(express.static(path.join(__dirname, "frontend/dist")));

  App.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  App.get("/", (req, res) => res.send("server iko chonjo"));
}

App.use(notfound);
App.use(errorHandler);

App.listen(port, () => console.log(`server started at ${port}`));
