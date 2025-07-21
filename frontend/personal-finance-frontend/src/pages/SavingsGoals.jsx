import React, { useState } from "react";
import SavingsGoalCard from "../components/SavingsGoalCard";

const SavingsGoals = () => {
  const [goals, setGoals] = useState([]);
  const [form, setForm] = useState({ title: "", target: "", dueDate: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const addGoal = () => {
    const newGoal = {
      ...form,
      saved: 0,
      target: parseFloat(form.target),
    };
    setGoals([...goals, newGoal]);
    setForm({ title: "", target: "", dueDate: "" });
  };

  const addContribution = (index, amount) => {
    const updated = [...goals];
    updated[index].saved += parseFloat(amount);
    setGoals(updated);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-green-700">🎯 Savings Goals</h2>

      <div className="mb-6">
        <input
          name="title"
          placeholder="Goal Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <input
          name="target"
          placeholder="Target Amount"
          value={form.target}
          onChange={handleChange}
          type="number"
          className="border p-2 mr-2"
        />
        <input
          name="dueDate"
          placeholder="Due Date"
          value={form.dueDate}
          onChange={handleChange}
          type="date"
          className="border p-2 mr-2"
        />
        <button
          onClick={addGoal}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Goal
        </button>
      </div>

      {goals.map((goal, i) => (
        <div key={i}>
          <SavingsGoalCard goal={goal} />
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="number"
              placeholder="Add Contribution"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addContribution(i, e.target.value);
                  e.target.value = "";
                }
              }}
              className="border p-1"
            />
            <span className="text-sm text-gray-500">Press Enter to add</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavingsGoals;
