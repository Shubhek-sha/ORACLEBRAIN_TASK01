import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [userType, setUserType] = useState("patient");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate registration
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Create Account
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Join us to manage your medical journey
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => setUserType("patient")}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
              userType === "patient"
                ? "bg-white text-blue-600 shadow-md"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Patient
          </button>
          <button
            type="button"
            onClick={() => setUserType("doctor")}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
              userType === "doctor"
                ? "bg-white text-blue-600 shadow-md"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Doctor
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder={userType === "doctor" ? "Dr. John Doe" : "John Doe"}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-2"
          >
            Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}
          </button>
        </form>

        <p className="mt-6 text-center text-slate-500 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-bold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
