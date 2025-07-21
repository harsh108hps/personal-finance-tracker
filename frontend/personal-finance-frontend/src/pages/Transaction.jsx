// src/pages/Transaction.jsx
import React, { useEffect, useState } from "react";
import axios from "../api";
import { useNavigate } from "react-router-dom";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchTransactions = async () => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    try {
      const res = await axios.get("/transaction", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTransactions(res.data.transactions || []);
    } catch (error) {
      console.error("Failed to load transactions:", error);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Loading transactions...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-yellow-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">💳 Your Transactions</h2>

        {transactions.length === 0 ? (
          <p className="text-center text-gray-600">No transactions found.</p>
        ) : (
          <ul className="space-y-4">
            {transactions.map((txn) => (
              <li key={txn._id} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold text-gray-700">{txn.title}</p>
                    <p className="text-sm text-gray-500">{new Date(txn.date).toLocaleDateString()}</p>
                  </div>
                  <div
                    className={`text-lg font-bold ${
                      txn.amount < 0 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    ₹{txn.amount}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">{txn.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Transaction;
