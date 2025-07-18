import { useEffect, useState } from "react";
import API from "../api";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const fetchData = async () => {
    const res = await API.get("/transactions", {
      headers: { Authorization: localStorage.getItem("token") },
    });
    setTransactions(res.data);
  };

  const addTransaction = async () => {
    await API.post("/transactions", { amount, type }, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    setAmount("");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="flex gap-4 mb-6">
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Amount"
          className="px-3 py-2 border rounded w-40" />
        <select value={type} onChange={(e) => setType(e.target.value)} className="border px-3 py-2 rounded">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button onClick={addTransaction} className="bg-green-600 text-white px-4 py-2 rounded">Add</button>
      </div>

      <div className="space-y-2">
        {transactions.map((t) => (
          <div key={t._id} className={`p-4 rounded shadow ${t.type === "income" ? "bg-green-100" : "bg-red-100"}`}>
            ₹{t.amount} - {t.type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
