import React from "react";
import Sidebar from "../../components/layout/Sidebar";

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        <div className="max-w-2xl bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold">
              SS
            </div>
            <div>
              <h2 className="text-xl font-bold">Shubheksha Shrestha</h2>
              <p className="text-gray-500">Patient • Joined Oct 2025</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Contact Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="font-medium">[EMAIL_ADDRESS]</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <p className="font-medium">+977 9800000000</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Personal Details
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Date of Birth</p>
                  <p className="font-medium">Jan 15, 2000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Blood Group</p>
                  <p className="font-medium">A+</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">
                  abc health care center, ktm
                </p>
              </div>
            </div>

            <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
