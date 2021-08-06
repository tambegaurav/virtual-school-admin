import mongoose from "mongoose";

const teacherSchema = mongoose.Schema(
  {
    name: String,
    school_name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
