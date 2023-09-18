import express from "express";
import dotenv from "dotenv";

dotenv.config();
import { notfound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;

import userRoutes from "./routes/userRoutes.js";

const App = express();

App.use("/api/users", userRoutes);

App.get("/", (req, res) => res.send("server iko chonjo"));

App.use(notfound);
App.use(errorHandler);

App.listen(port, () => console.log(`server started at ${port}`));
