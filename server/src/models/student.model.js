import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    name: String,
    standard: String,
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
