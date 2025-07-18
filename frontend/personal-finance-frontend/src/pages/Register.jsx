import { useState } from "react";
import React from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/users/register", { email, password });
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
        <h2 className="text-xl font-bold text-center">Register</h2>
        <input type="email" className="w-full border px-3 py-2" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="w-full border px-3 py-2" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleRegister} className="w-full bg-indigo-600 text-white py-2 rounded">Register</button>
      </div>
    </div>
  );
};

export default Register;
