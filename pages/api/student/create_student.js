export default async function createStudent(req, res) {
  if (req.method != "POST") {
    res
      .status(404)
      .json({ success: false, message: `No API with ${req.method}` });
  } else {
    await dbConnection();
    try {
      const newStudent = new Student({
        name: req.body.name,
        age: req.body.age,
        cgpa: req.body.cgpa,
      });
      await newStudent.save();
      res.status(201).json({ success: true, data: newStudent });
    } catch (error) {
      res.status(404).json({ success: false, error: error.message });
    }
  }
}
