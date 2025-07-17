const mongoose = require("mongoose");

const savingsGoalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  targetAmount: { type: Number },
  savedAmount: { type: Number, default: 0 },
  dueDate: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model("SavingsGoal", savingsGoalSchema);
