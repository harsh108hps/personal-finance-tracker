import React, { useState } from "react";
import API from "../api"; // make sure API is default exported in api.js

const TrackExpense = () => {
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await API.post("/expense/add", formData);
      if (res.status === 201 || res.status === 200) {
        setMessage("✅ Expense added successfully!");
        setFormData({ amount: "", category: "", date: "", description: "" });
      } else {
        setMessage("❌ Failed to add expense.");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ An error occurred.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-center mb-6 text-purple-600">
        Track Expense
      </h2>
      {message && <p className="text-center text-sm mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category (e.g. Rent, Food)"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short Description"
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default TrackExpense;
