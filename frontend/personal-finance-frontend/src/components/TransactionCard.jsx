// components/TransactionCard.jsx
import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const TransactionCard = ({ transaction }) => {
  const { amount, type, category, description, date } = transaction;

  const isIncome = type === "income";

  return (
    <div
      className={`flex justify-between items-center p-4 shadow-md rounded-lg mb-4 transition-all duration-300 ${
        isIncome ? "bg-green-50" : "bg-red-50"
      }`}
    >
      <div>
        <h3 className="text-lg font-semibold capitalize">{category}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-400">{new Date(date).toLocaleDateString()}</p>
      </div>

      <div className="text-right">
        <p
          className={`text-xl font-bold ${
            isIncome ? "text-green-600" : "text-red-600"
          }`}
        >
          <FaRupeeSign className="inline mr-1" />
          {amount}
        </p>
        <span
          className={`text-sm font-medium ${
            isIncome ? "text-green-700" : "text-red-700"
          }`}
        >
          {isIncome ? "Income" : "Expense"}
        </span>
      </div>
    </div>
  );
};

export default TransactionCard;
