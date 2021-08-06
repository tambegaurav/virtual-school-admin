import express from "express";
import mongoose from "mongoose";
import connect from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import teacherRoutes from "./routes/teacher.js";
import lectRoutes from "./routes/lecture.js";
import stdRoutes from "./routes/student.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/teacher", teacherRoutes);
app.use("/lecture", lectRoutes);
app.use("/student", stdRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Education API");
});

const port = process.env.PORT || 5000;

const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log("Listening on port");
  });
};

export default start;
