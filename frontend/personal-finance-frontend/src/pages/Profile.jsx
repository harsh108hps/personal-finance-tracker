// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ added
  const navigate = useNavigate();

  const fetchProfile = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return navigate("/login");
    }

    try {
      const res = await axios.get("/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user);
    } catch (error) {
      console.error("Profile fetch failed", error.response?.data || error.message);
      localStorage.removeItem("token"); // ✅ remove invalid token
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Loading profile...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={`https://ui-avatars.com/api/?name=${user.name}&background=4f46e5&color=fff&size=128`}
            alt="Avatar"
            className="rounded-full shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800">Welcome, {user.name}</h2>
          <p className="text-gray-500">Your Personal Finance Dashboard</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-600">Full Name</label>
            <div className="text-lg font-medium text-gray-900 bg-gray-100 rounded-md p-2">
              {user.name}
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <div className="text-lg font-medium text-gray-900 bg-gray-100 rounded-md p-2">
              {user.email}
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600">Joined</label>
            <div className="text-lg font-medium text-gray-900 bg-gray-100 rounded-md p-2">
              {new Date(user.createdAt).toLocaleDateString()}
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600">User ID</label>
            <div className="text-sm text-gray-700 bg-gray-100 rounded-md p-2 break-all">
              {user._id}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => alert("Edit feature coming soon!")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            ✏️ Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
