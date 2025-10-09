const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./connection");
const Workout = require("./Models/Workout");

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectDB();


app.get("/api/workouts", async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ date: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/workouts", async (req, res) => {
  try {
    const workout = new Workout(req.body);
    await workout.save();
    res.json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/api/workouts/:id", async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

