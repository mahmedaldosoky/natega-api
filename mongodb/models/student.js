import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  seating_no: {
    type: Number,
    required: true,
  },
  arabic_name: {
    type: String,
    required: true,
  },
  total_degree: {
    type: Number,
    required: true,
  },
  student_case: {
    type: Number,
    required: true,
  },
  student_case_desc: {
    type: String,
    required: true,
  },
  c_flage: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Student", studentSchema);
