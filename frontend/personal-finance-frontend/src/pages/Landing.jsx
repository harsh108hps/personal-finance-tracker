import React from "react";
import { Link } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaChartPie,
  FaPiggyBank,
  FaFileInvoiceDollar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMoneyBillWave className="text-4xl text-green-500" />,
    title: "Track Income & Expenses",
    description: "Easily monitor your income and spending patterns.",
  },
  {
    icon: <FaChartPie className="text-4xl text-blue-500" />,
    title: "Smart Analytics",
    description: "Visualize trends with insightful charts & reports.",
  },
  {
    icon: <FaPiggyBank className="text-4xl text-purple-500" />,
    title: "Savings Goals",
    description: "Set, track and achieve your financial goals faster.",
  },
  {
    icon: <FaFileInvoiceDollar className="text-4xl text-yellow-500" />,
    title: "Budget Reports",
    description: "Export or view summaries of your budget any time.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Master Your Finances with Ease
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Track expenses, set goals, analyze spending, and reach financial
          freedom – all in one app.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/login"
            className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            🔐 Login
          </Link>
          <Link
            to="/register"
            className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-indigo-700 transition"
          >
            📝 Register
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-purple-100 via-white to-indigo-100 text-center px-6">
        <h2 className="text-3xl font-bold text-indigo-800 mb-10">
          Trusted by Thousands
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Ravi, Student",
              text: "This app helped me track my spending and save for my laptop faster!",
            },
            {
              name: "Neha, Freelancer",
              text: "I love the analytics – it’s like having my own finance coach.",
            },
            {
              name: "Amit, Teacher",
              text: "Simple, clean, and powerful. Best budget tracker I’ve used.",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
            >
              <p className="text-gray-700 italic">"{t.text}"</p>
              <p className="text-sm mt-4 text-indigo-600 font-medium">
                - {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {[
            {
              title: "1. Register for Free",
              desc: "Create your account and personalize your preferences.",
            },
            {
              title: "2. Add Transactions",
              desc: "Input your income and expenses daily or weekly.",
            },
            {
              title: "3. Analyze & Improve",
              desc: "Use smart analytics to improve your spending habits.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-5xl text-indigo-500 mb-4 font-bold">
                {step.title.split(".")[0]}.
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title.split(".")[1]}
              </h4>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-700 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Take Control of Your Money?
        </h2>
        <p className="text-lg mb-8">
          Join thousands already building better financial futures.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/register"
            className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            📝 Get Started Free
          </Link>
          <Link
            to="/login"
            className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-indigo-700 transition"
          >
            🔐 Login
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <div className="mb-4">
          <p className="text-lg font-semibold mb-2">Follow Us</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-indigo-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Personal Finance Tracker. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
