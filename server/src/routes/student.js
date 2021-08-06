import express from "express";
import Student from "../models/student.model.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  console.log(req.body);
  const students = req.body;
  for (var el of students) {
    console.log(el);
    const newStudent = new Student(el);
    await newStudent.save();
  }
  res.status(201).json("Students Created");
});

router.get("/all", async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      data: students,
    });
  } catch (err) {
    res.status(404).json({ messege: err });
  }
});

export default router;
