import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

export default function TrackAppointment() {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingId.trim()) {
      navigate(`/tracking/${trackingId}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-140px)] bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Track Appointment
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Enter your appointment ID to check its status
            </p>
          </div>

          <form onSubmit={handleTrack} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Tracking ID
              </label>
              <input
                type="text"
                required
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="e.g. APT-12345"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-sky-200 transition-all active:scale-[0.98]"
            >
              Track Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
