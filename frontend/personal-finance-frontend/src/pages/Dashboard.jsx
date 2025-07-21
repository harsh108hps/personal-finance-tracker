// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { generateInsights } from "../utils/generateInsights";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const navigate = useNavigate();

  const totalIncome = 45000;
  const totalExpense = 27000;
  const savings = totalIncome - totalExpense;

  const recentTransactions = [
    { id: 1, type: "Income", amount: 15000, category: "Salary", date: "2025-07-01" },
    { id: 2, type: "Expense", amount: 13000, category: "Groceries", date: "2025-07-10" },
    { id: 3, type: "Expense", amount: 14000, category: "Shopping", date: "2025-07-12" },
  ];

  const [insights, setInsights] = useState([]);

  useEffect(() => {
    const generated = generateInsights(recentTransactions);
    setInsights(generated);
  }, []);

  const pieData = {
    labels: ["Income", "Expenses", "Savings"],
    datasets: [
      {
        data: [totalIncome, totalExpense, savings],
        backgroundColor: ["#4ade80", "#f87171", "#60a5fa"],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Expenses",
        data: [8000, 12000, 9000, 14000, 10000, 11000],
        borderColor: "#f87171",
        backgroundColor: "rgba(248,113,113,0.3)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Income",
        data: [15000, 16000, 15500, 17000, 16500, 18000],
        borderColor: "#4ade80",
        backgroundColor: "rgba(74,222,128,0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const handleShare = async () => {
    const shareText = `📈 My Current Finance Update:
- Total Income: ₹${totalIncome}
- Total Expenses: ₹${totalExpense}
- Savings: ₹${savings}

Track your finances too! 💸`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Finance Summary",
          text: shareText,
          url: window.location.href,
        });
        alert("Shared successfully!");
      } catch (error) {
        alert("Sharing failed. Try again.");
      }
    } else {
      alert("Your browser does not support Web Share API.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <main className="p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">📊 Personal Finance Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-400">
            <h3 className="text-gray-500 text-md mb-1">Total Income</h3>
            <p className="text-2xl font-semibold text-green-600">₹{totalIncome}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-400">
            <h3 className="text-gray-500 text-md mb-1">Total Expenses</h3>
            <p className="text-2xl font-semibold text-red-600">₹{totalExpense}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-400">
            <h3 className="text-gray-500 text-md mb-1">Savings</h3>
            <p className="text-2xl font-semibold text-blue-600">₹{savings}</p>
          </div>
        </div>

        {/* Financial Insights */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-5 rounded-md mb-10 shadow-md">
          <h3 className="text-lg font-semibold mb-2">💡 Financial Insights</h3>
          <ul className="list-disc pl-5 space-y-1">
            {insights.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </div>

        {/* Charts */}
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Income vs Expense</h4>
            <Doughnut data={pieData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Monthly Trends</h4>
            <Line data={lineData} />
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
            <h4 className="text-lg font-semibold text-gray-700">Recent Transactions</h4>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => navigate("/transactions")}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow"
              >
                View All
              </button>
              <button
                onClick={() => navigate("/track-income")}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow"
              >
                Track Income
              </button>
              <button
                onClick={() => navigate("/track-expense")}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow"
              >
                Track Expense
              </button>
              <button
                onClick={handleShare}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow"
              >
                Share Progress
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Type</th>
                  <th className="py-2 px-4">Category</th>
                  <th className="py-2 px-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((tx) => (
                  <tr key={tx.id} className="border-b hover:bg-gray-50 transition">
                    <td className="py-2 px-4">{tx.date}</td>
                    <td className="py-2 px-4">{tx.type}</td>
                    <td className="py-2 px-4">{tx.category}</td>
                    <td
                      className={`py-2 px-4 font-medium ${
                        tx.type === "Income" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      ₹{tx.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-600 py-6 px-4 shadow-inner">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto gap-2">
          <p className="text-sm">© 2025 Personal Finance Tracker. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
