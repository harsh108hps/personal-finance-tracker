import React, { useState } from "react";
import { getFinancialInsights } from "../utils/getInsights";

const FinancialInsights = () => {
  const [insights, setInsights] = useState("");
  const [loading, setLoading] = useState(false);

  // Sample mock data
  const sampleTransactions = [
    { category: "Food", amount: 1200, date: "2025-07-01" },
    { category: "Transport", amount: 500, date: "2025-07-02" },
    { category: "Entertainment", amount: 2000, date: "2025-07-03" },
    { category: "Food", amount: 1000, date: "2025-07-04" },
    { category: "Utilities", amount: 3000, date: "2025-07-05" },
  ];

  const handleGenerate = async () => {
    setLoading(true);
    const response = await getFinancialInsights(sampleTransactions);
    setInsights(response);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">💡 AI-Based Financial Insights</h2>

      <button
        onClick={handleGenerate}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        Generate Insights
      </button>

      {loading ? (
        <p className="text-gray-600 animate-pulse">Analyzing your expenses...</p>
      ) : (
        <pre className="whitespace-pre-wrap text-gray-800">{insights}</pre>
      )}
    </div>
  );
};

export default FinancialInsights;
