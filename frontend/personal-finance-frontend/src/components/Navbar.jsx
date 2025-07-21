import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const navLinkClasses = "hover:text-gray-200 transition duration-150";

  return (
    <nav className="bg-indigo-600 dark:bg-gray-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          {t("FinTrack")}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/dashboard" className={navLinkClasses}>
            {t("Dashboard")}
          </Link>
          <Link to="/transactions" className={navLinkClasses}>
            {t("Transactions")}
          </Link>
          <Link to="/profile" className={navLinkClasses}>
            {t("Profile")}
          </Link>

          <button
            onClick={handleLogout}
            className="bg-white text-indigo-600 dark:text-gray-800 px-4 py-2 rounded-md hover:bg-indigo-100 dark:hover:bg-gray-200 transition"
          >
            {t("Logout")}
          </button>

          {/* Language Selector */}
          <select
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-white text-indigo-600 px-2 py-1 rounded"
          >
            <option value="en">EN</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-4 px-2">
          <Link to="/dashboard" onClick={() => setIsOpen(false)} className={navLinkClasses}>
            {t("Dashboard")}
          </Link>
         <Link
  to="/transaction"
  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
>
  Transactions
</Link>
<Link to="/goals">
  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-all duration-300">
    Savings Goals
  </button>
</Link>

<Link
  to="/insights"
  className="text-white hover:bg-blue-700 px-4 py-2 rounded-md"
>
  Insights
</Link>

<Link to="/goals" className="text-green-600 hover:underline">Savings Goals</Link>

          <Link to="/profile" onClick={() => setIsOpen(false)} className={navLinkClasses}>
            {t("Profile")}
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              handleLogout();
            }}
            className="bg-white text-indigo-600 dark:text-gray-800 px-4 py-2 rounded-md hover:bg-indigo-100 dark:hover:bg-gray-200 transition w-fit"
          >
            {t("Logout")}
          </button>
          <select
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-white text-indigo-600 px-2 py-1 rounded"
          >
            <option value="en">EN</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
