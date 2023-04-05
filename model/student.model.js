import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  cgpa: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.models = {};

export const Student = mongoose.model("Student", studentSchema);
