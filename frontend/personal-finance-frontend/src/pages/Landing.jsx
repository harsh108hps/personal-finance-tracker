import { Link } from "react-router-dom";
import React from "react";



const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="text-center text-white space-y-8 max-w-xl animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Personal Finance Tracker
        </h1>
        <p className="text-lg md:text-xl font-light">
          Take control of your money. Track income, expenses, and goals — all in one place.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/register"
            className="bg-white text-indigo-600 hover:bg-indigo-100 px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="border border-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-full font-medium transition duration-300 shadow-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
