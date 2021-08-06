import express from "express";
const router = express.Router();

import {
  createTeacher,
  getAllTeachers,
  login,
} from "../controllers/teacher.js";

router.post("/", createTeacher);
router.get("/all", getAllTeachers);
router.post("/login", login);

export default router;
