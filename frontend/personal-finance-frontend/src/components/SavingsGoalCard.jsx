import React from "react";

const SavingsGoalCard = ({ goal }) => {
  const percentage = ((goal.saved / goal.target) * 100).toFixed(1);

  return (
    <div className="bg-white p-4 rounded shadow-md border-l-4 border-green-500 mb-4">
      <h3 className="text-xl font-bold text-green-700">{goal.title}</h3>
      <p className="text-sm text-gray-600">Target: ₹{goal.target}</p>
      <p className="text-sm text-gray-600">Saved: ₹{goal.saved}</p>
      <p className="text-sm text-gray-600">Due: {goal.dueDate}</p>

      <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-sm text-gray-700 mt-1">{percentage}% completed</p>
    </div>
  );
};

export default SavingsGoalCard;
