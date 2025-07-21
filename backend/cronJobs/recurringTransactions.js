const cron = require("node-cron");
const Transaction = require("../models/transactionModel");

cron.schedule("0 0 * * *", async () => { // Every day at midnight
  const today = new Date().toISOString().split('T')[0]; // yyyy-mm-dd

  const dueTxns = await Transaction.find({
    isRecurring: true,
    nextOccurrence: { $lte: new Date(today) },
  });

  for (let txn of dueTxns) {
    const newTxn = new Transaction({
      ...txn._doc,
      _id: undefined,
      date: new Date(),
      nextOccurrence: getNextDate(new Date(), txn.recurrence),
    });
    await newTxn.save();

    txn.nextOccurrence = getNextDate(new Date(), txn.recurrence);
    await txn.save();
  }

  console.log(`Processed ${dueTxns.length} recurring transactions.`);
});
