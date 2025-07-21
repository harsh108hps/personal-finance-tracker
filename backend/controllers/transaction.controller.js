const Transaction = require('../models/transactionModel');

// Utility to calculate next recurring date
function getNextOccurrenceDate(date, recurrence) {
  const d = new Date(date);
  switch (recurrence) {
    case 'daily':
      d.setDate(d.getDate() + 1);
      break;
    case 'weekly':
      d.setDate(d.getDate() + 7);
      break;
    case 'monthly':
      d.setMonth(d.getMonth() + 1);
      break;
    case 'yearly':
      d.setFullYear(d.getFullYear() + 1);
      break;
    default:
      return null;
  }
  return d;
}

// ✅ Add Transaction with optional recurring fields
exports.addTransaction = async (req, res) => {
  try {
    const { amount, type, category, description, date, isRecurring, recurrence } = req.body;

    const nextOccurrence = isRecurring ? getNextOccurrenceDate(date, recurrence) : null;

    const newTransaction = new Transaction({
      amount,
      type,
      category,
      description,
      date,
      userId: req.user.id,
      isRecurring: isRecurring || false,
      recurrence: isRecurring ? recurrence : null,
      nextOccurrence
    });

    await newTransaction.save();
    res.status(201).json({ message: "Transaction Added", transaction: newTransaction });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.getUserTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id }).sort({ date: -1 });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findById(id);

    if (!transaction) return res.status(404).json({ message: "Transaction Not Found" });

    if (transaction.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not Allowed" });
    }

    await transaction.deleteOne();
    res.status(200).json({ message: "Transaction Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
