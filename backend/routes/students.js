// backend/routes/students.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all students
router.get("/", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// CREATE student
router.post("/", (req, res) => {
  const { name, age } = req.body;
  db.query(
    "INSERT INTO students (name, age) VALUES (?, ?)",
    [name, age],
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Student added!" });
    }
  );
});

// UPDATE student
router.put("/:id", (req, res) => {
  const { name, age } = req.body;
  db.query(
    "UPDATE students SET name=?, age=? WHERE id=?",
    [name, age, req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Student updated!" });
    }
  );
});

// DELETE student
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM students WHERE id=?", [req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ message: "Student deleted!" });
  });
});

module.exports = router;
