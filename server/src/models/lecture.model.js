import mongoose from "mongoose";

const lectureSchema = mongoose.Schema(
  {
    name: String,
    teacher_id: String,
    start_time: String,
    end_time: String,
    zoom_link: String,
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
