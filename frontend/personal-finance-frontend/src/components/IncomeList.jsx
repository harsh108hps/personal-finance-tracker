import React from "react";

const IncomeList = ({ incomes }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Income History</h2>
      {incomes.length === 0 ? (
        <p>No income records found.</p>
      ) : (
        <table className="w-full table-auto border">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Source</th>
              <th className="py-2 px-4">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {incomes.map((inc) => (
              <tr key={inc.id} className="border-t">
                <td className="py-2 px-4">{inc.date}</td>
                <td className="py-2 px-4">{inc.source}</td>
                <td className="py-2 px-4 text-green-600 font-semibold">₹{inc.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default IncomeList;
