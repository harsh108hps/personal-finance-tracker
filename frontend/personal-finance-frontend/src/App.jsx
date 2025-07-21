// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import TrackIncome from "./pages/TrackIncome";
import TrackExpense from "./pages/TrackExpense";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Transaction from "./pages/Transaction";
import FinancialInsights from "./pages/FinancialInsights";
import SavingsGoals from "./pages/SavingsGoals";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
        <Route path="/track-income" element={<TrackIncome />} />
        <Route path="/track-expense" element={<TrackExpense />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/insights" element={<FinancialInsights />} />
        
<Route path="/goals" element={<SavingsGoals />} />


      </Routes>
    </div>
  );
}

export default App;
