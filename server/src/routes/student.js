import express from "express";
import Student from "../models/student.model.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  console.log(req.body);
  const student = req.body;
  const newStudent = new Student(student);

  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(404).json("Error from createTeacher");
  }
});

export default router;
