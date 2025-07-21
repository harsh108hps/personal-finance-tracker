import React, { useState } from "react";

const AddIncome = ({ onAdd }) => {
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !source || !date) return;

    const newIncome = {
      id: Date.now(),
      amount: parseFloat(amount),
      source,
      date,
    };
    onAdd(newIncome);
    setAmount("");
    setSource("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Income</h2>
      <div className="mb-3">
        <label className="block mb-1">Amount (₹)</label>
        <input
          type="number"
          className="w-full border px-3 py-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1">Source</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1">Date</label>
        <input
          type="date"
          className="w-full border px-3 py-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Add Income
      </button>
    </form>
  );
};

export default AddIncome;
