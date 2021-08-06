import express from "express";
const router = express.Router();

import {
  createLecture,
  getAllLectures,
  getLecture,
  updateLecture,
} from "../controllers/lecture.js";

router.get("/:id", getLecture);
router.post("/", createLecture);
router.get("/", getAllLectures);
router.patch("/join/:id", updateLecture);

export default router;
