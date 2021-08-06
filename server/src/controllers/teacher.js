import Teacher from "../models/teacher.model.js";

// router.post("/", createTeacher);
export const createTeacher = async (req, res) => {
  console.log(req.body);
  const teacher = req.body;
  const newTeacher = new Teacher(teacher);

  try {
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (err) {
    res.status(404).json("Error from createTeacher");
  }
};

// router.get("/all", getAllTeachers);
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();

    res.status(200).json({
      data: teachers,
    });
  } catch (err) {
    res.status(404).json({ messege: err });
  }
};

// router.post("/login", login);
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isUserPresent = await Teacher.findOne({ email });

    if (!isUserPresent)
      return res.status(404).json({ message: "Teacher doesn't exist." });

    const isPasswordCorrect = password == isUserPresent.password ? true : false;

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({ result: isUserPresent });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
