// src/components/Insights.jsx
import React from "react";

const Insights = ({ insights }) => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mt-6 shadow">
      <h3 className="text-lg font-semibold mb-2">💡 Financial Insights</h3>
      <ul className="list-disc list-inside space-y-1">
        {insights.map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default Insights;
