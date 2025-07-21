// src/pages/TrackIncome.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TrackIncome = () => {
  const [incomeData, setIncomeData] = useState({
    amount: "",
    source: "",
    date: "",
  });
  const [incomes, setIncomes] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setIncomeData({
      ...incomeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddIncome = (e) => {
    e.preventDefault();
    if (!incomeData.amount || !incomeData.source || !incomeData.date) return;
    setIncomes([...incomes, { ...incomeData, id: Date.now() }]);
    setIncomeData({ amount: "", source: "", date: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">💰 Track Your Income</h2>

      <form
        onSubmit={handleAddIncome}
        className="bg-white max-w-md mx-auto p-6 rounded-lg shadow-md mb-8"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Amount (₹)</label>
          <input
            type="number"
            name="amount"
            value={incomeData.amount}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded mt-1"
            placeholder="Enter amount"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Source</label>
          <input
            type="text"
            name="source"
            value={incomeData.source}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded mt-1"
            placeholder="e.g., Salary, Freelance, etc."
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={incomeData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded mt-1"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Add Income
        </button>
      </form>

      {/* Display List of Income */}
      <div className="bg-white max-w-3xl mx-auto p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">💼 Income Records</h3>
        {incomes.length === 0 ? (
          <p className="text-gray-500">No income added yet.</p>
        ) : (
          <table className="w-full text-left border">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Source</th>
                <th className="py-2 px-4">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {incomes.map((income) => (
                <tr key={income.id} className="border-b">
                  <td className="py-2 px-4">{income.date}</td>
                  <td className="py-2 px-4">{income.source}</td>
                  <td className="py-2 px-4 text-green-600 font-medium">₹{income.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          ⬅ Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default TrackIncome;
