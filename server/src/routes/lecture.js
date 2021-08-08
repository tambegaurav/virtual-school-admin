import express from "express";
const router = express.Router();

import {
  createLecture,
  getAllLectures,
  getLecture,
  updateLecture,
  deleteLecture,
} from "../controllers/lecture.js";

router.delete("/:id", deleteLecture);
router.get("/:id", getLecture);
router.post("/", createLecture);
router.get("/", getAllLectures);
router.patch("/join/:id", updateLecture);

export default router;
