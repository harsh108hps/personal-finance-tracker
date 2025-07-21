// components/Footer.jsx
import React from "react";
import ShareButtons from "./ShareButtons";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-6 px-4 mt-12">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm">© 2025 FinTrack. All rights reserved.</p>
        <p className="mt-2 font-semibold">Share your success 👇</p>
        <ShareButtons message="I'm using FinTrack to achieve my savings goals! Try it too. 🚀" />
      </div>
    </footer>
  );
};

export default Footer;
