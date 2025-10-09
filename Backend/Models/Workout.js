const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
type: { type: String, required: true },
date: { type: String, required: true },
duration: { type: Number, required: true },
calories: { type: Number, required: true },
notes: { type: String }
});

module.exports = mongoose.model("Workout", workoutSchema);
