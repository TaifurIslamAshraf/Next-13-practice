import dbConnection from "@/config/database";
import { Student } from "@/model/student.model";

export default async function getAllStudent(req, res) {
  await dbConnection();
  try {
    const allStudent = await Student.find();
    res.status(200).json({ success: true, student: allStudent });
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
}
