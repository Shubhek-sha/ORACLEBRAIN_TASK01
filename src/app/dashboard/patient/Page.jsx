import React from "react";
import Sidebar from "../../../components/layout/Sidebar";
import pat1 from "../../../assets/pat1.jpg";

export default function PatientDashboard() {
  const appointments = [
    {
      id: 1,
      name: "Dr. Sarah Jenkins",
      specialty: "Cardiology Specialist",
      date: "Oct 24, 2024",
      time: "10:00 AM",
      type: "Video Call",
      img: pat1,
    },
    {
      id: 2,
      name: "Dr. Marcus Chen",
      specialty: "Dermatology Specialist",
      date: "Oct 28, 2024",
      time: "02:30 PM",
      type: "In-Clinic",
      img: pat1,
    },
  ];

  const prescriptions = [
    {
      id: 1,
      title: "Cardiology Meds",
      doctor: "Dr. Sarah Jenkins",
      date: "Oct 20",
      meds: "Atorvastatin, Clopidogrel",
    },
    {
      id: 2,
      title: "Blood Pressure",
      doctor: "Dr. Robert Wilson",
      date: "Oct 15",
      meds: "Lisinopril, Amlodipine",
    },
  ];

  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-green-800">
              Welcome back,
              <span className="text-blue-600"> Shubheksha Shrestha</span>
            </h1>
            <p className="text-sm text-green-600">
              Here's a summary of your health activities
            </p>
          </div>

          <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            S
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <StatCard label="Upcoming Appointments" value="2" />
          <StatCard label="Completed Appointments" value="14" />
          <StatCard label="Active Prescriptions" value="3" />
        </div>

        {/* Upcoming Appointments */}
        <SectionHeader title="Upcoming Appointments" action="See All" />
        <div className="space-y-4 mb-10">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <img
                  src={appt.img}
                  alt={appt.name}
                  className="h-12 w-12 rounded-full"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{appt.name}</h3>
                  <p className="text-sm text-gray-500">{appt.specialty}</p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium w-fit ${
                    appt.type === "Video Call"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {appt.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-4">
                <span>{appt.date}</span>
                <span>{appt.time}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                  View Details
                </button>
                <button className="flex-1 border border-red-300 text-red-500 py-2 rounded-lg text-sm font-medium hover:bg-red-50">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Prescriptions */}
        <SectionHeader title="Recent Prescriptions" action="View All" />
        <div className="space-y-3">
          {prescriptions.map((rx) => (
            <div
              key={rx.id}
              className="bg-white rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div>
                <h4 className="font-semibold text-gray-800">{rx.title}</h4>
                <p className="text-sm text-gray-500">
                  {rx.doctor} • {rx.date}
                </p>
                <p className="text-xs text-gray-400 mt-1">{rx.meds}</p>
              </div>

              <button className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200">
                ⬇
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

/* Reusable Components */

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
    </div>
  );
}

function SectionHeader({ title, action }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <button className="text-sm text-blue-600 hover:underline">
        {action}
      </button>
    </div>
  );
}
