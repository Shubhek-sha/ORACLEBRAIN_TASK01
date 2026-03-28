import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  // State to track if 'patient' or 'doctor' is selected
  const [userType, setUserType] = useState("patient");

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
          <p className="text-slate-500 text-sm mt-1">
            Log in to manage your medical journey
          </p>
        </div>

        {/* Toggle Switch: Now functional */}
        <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
          <button
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

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@hospital.com"
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="block text-sm font-semibold text-slate-700">
                Password
              </label>
              <button
                type="button"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Forgot?
              </button>
            </div>
            <input
              type="password"
              placeholder=""
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]">
            Sign In as {userType.charAt(0).toUpperCase() + userType.slice(1)}
          </button>
        </form>

        <p className="mt-6 text-center text-slate-500 text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-bold hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
