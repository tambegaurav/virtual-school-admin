import mongoose from "mongoose";

const lectureSchema = mongoose.Schema(
  {
    name: String,
    teacher_id: String,
    start_time: Date,
    end_time: Date,
    students: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Lecture = mongoose.model("Lecture", lectureSchema);

export default Lecture;
