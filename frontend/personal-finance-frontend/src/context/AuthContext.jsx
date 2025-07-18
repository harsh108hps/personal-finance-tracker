
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", { email, password });
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (err) {
      throw err.response.data.message || "Login failed";
    }
  };

  const signup = async (userData) => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", userData);
      return res.data;
    } catch (err) {
      throw err.response.data.message || "Signup failed";
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
