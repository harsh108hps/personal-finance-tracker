// models/transactionModel.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: Number,
  type: String, // "income" or "expense"
  category: String,
  description: String,
  date: Date,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  // ✅ Recurring fields
  isRecurring: { type: Boolean, default: false },
  recurrence: { type: String, enum: ['daily', 'weekly', 'monthly', 'yearly', null], default: null },
  nextOccurrence: { type: Date, default: null },
});

module.exports = mongoose.model('Transaction', transactionSchema);
