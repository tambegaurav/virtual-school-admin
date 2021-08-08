import Lecture from "../models/lecture.model.js";
import mongoose from "mongoose";

// router.post("/", createLecture);
export const createLecture = async (req, res) => {
  console.log(req.body);
  const lecture = req.body;

  for (var el of lecture) {
    const newLecture = new Lecture(el);
    await newLecture.save();
  }
  res.status(201).json("Lectures Created");
};

// router.get("/", getAllLectures);
export const getAllLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find().sort({ start_time: 1 });

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

export const deleteLecture = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Lecture with that id");
  await Lecture.findByIdAndRemove(id);
  res.json("Lecture Deleted Successfully");
};
