import express from "express";

import Student from "../mongodb/models/student.js";

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    const { arabic_name } = req.body;

    if (!arabic_name) {
      return res
        .status(400)
        .json({ error: "Please provide the arabic_name parameter." });
    }

    // Use a regular expression to perform a case-insensitive search
    const regex = new RegExp(arabic_name, "i");

    // Find all students matching the arabic_name
    const qualifiedStudents = await Student.find({ arabic_name: regex });

    res.json(qualifiedStudents);
  } catch (err) {
    console.error("Error searching students:", err);
    res
      .status(500)
      .json({ error: "An error occurred while searching students." });
  }
});

export default app;
