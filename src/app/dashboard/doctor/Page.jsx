import React from "react";
import Sidebar from "../../../components/layout/Sidebar";

export default function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Overview</h2>
            <p className="text-sm font-medium text-slate-500 mt-2">
              Good morning, Dr. Shrestha • Thursday, Oct 24
            </p>
          </div>
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-sm transition">
            + New Appointment
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Today's Patients", value: "12", color: "text-sky-600" },
            { label: "Pending Requests", value: "5", color: "text-amber-500" },
            { label: "Completed MTD", value: "148", color: "text-emerald-500" },
            { label: "Total Patients", value: "842", color: "text-slate-800" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                {stat.label}
              </p>
              <h3 className={`text-4xl font-extrabold ${stat.color}`}>
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Schedule List */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-10">
          <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="text-lg font-bold text-slate-800">
              Today's Schedule
            </h3>
            <span className="text-sm font-bold text-sky-600 cursor-pointer hover:underline">
              View Calendar
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {/* Appt 1 */}
            <div className="px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50 transition group">
              <div className="flex items-start md:items-center gap-6 md:gap-12">
                <div className="text-sm font-extrabold text-slate-700 w-24">
                  09:00 AM
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    Spandan Shrestha
                  </h4>
                  <p className="text-sm font-medium text-slate-500 mt-1">
                    45y • Chest Pain • Video Call
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-100 md:border-none pt-4 md:pt-0">
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-red-100 text-red-700 uppercase tracking-wide">
                  Emergency
                </span>
                <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2 rounded-xl text-sm transition shadow-sm">
                  Join Call
                </button>
              </div>
            </div>

            {/* Appt 2 */}
            <div className="px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50 transition group">
              <div className="flex items-start md:items-center gap-6 md:gap-12">
                <div className="text-sm font-extrabold text-slate-700 w-24">
                  10:15 AM
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    Sunil Thapa
                  </h4>
                  <p className="text-sm font-medium text-slate-500 mt-1">
                    28y • Follow-up • Clinic Visit
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-100 md:border-none pt-4 md:pt-0">
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 uppercase tracking-wide">
                  Regular
                </span>
                <button className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-6 py-2 rounded-xl text-sm transition">
                  Consult
                </button>
              </div>
            </div>

            {/* Appt 3 */}
            <div className="px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50 transition group">
              <div className="flex items-start md:items-center gap-6 md:gap-12">
                <div className="text-sm font-extrabold text-slate-700 w-24">
                  11:30 AM
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    Bhumika Wagle
                  </h4>
                  <p className="text-sm font-medium text-slate-500 mt-1">
                    52y • Routine Checkup • Clinic Visit
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-100 md:border-none pt-4 md:pt-0">
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 uppercase tracking-wide">
                  Regular
                </span>
                <button className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-6 py-2 rounded-xl text-sm transition">
                  Consult
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
