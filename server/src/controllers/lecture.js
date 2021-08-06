import Lecture from "../models/lecture.model.js";
import mongoose from "mongoose";

// router.post("/", createLecture);
export const createLecture = async (req, res) => {
  console.log(req.body);
  const lecture = req.body;
  const newLecture = new Lecture(lecture);

  try {
    await newLecture.save();
    res.status(201).json(newLecture);
  } catch (err) {
    res.status(404).json("Error from createLecture");
  }
};

// router.get("/", getAllLectures);
export const getAllLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find();

    res.status(200).json({
      data: lectures,
    });
  } catch (err) {
    res.status(404).json({ messege: err });
  }
};

// router.get("/:id", getLecture);
export const getLecture = async (req, res) => {
  const { id } = req.params;

  try {
    const lecture = await Lecture.findById(id);

    res.status(200).json(lecture);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// router.patch("/join/:id", updateLecture);
export const updateLecture = async (req, res) => {
  const { id } = req.params; //lecture_id
  const { student_id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Lecture with id: ${id}`);

  const lecture = await Lecture.findById(id);

  lecture.students.push(student_id);

  const updated = await Lecture.findByIdAndUpdate(id, lecture, { new: true }); // or {_id,lecture,{new:true}}
  res.status(200).json(updated);
};
