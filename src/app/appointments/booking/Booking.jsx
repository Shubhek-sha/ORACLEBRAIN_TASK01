import { useState } from "react";
import Sidebar from "../../../components/layout/Sidebar";
import doctor2 from "../../../assets/doctor2.jpg";
import doctor5 from "../../../assets/doctor5.jpg";

export default function Booking() {
  const [selectedTime, setSelectedTime] = useState("10:30 AM");
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Sarah Mitchell");

  const times = ["09:00 AM", "10:30 AM", "11:15 AM", "01:00 PM", "04:45 PM"];

  const doctors = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Cardiologist • 12 yrs exp",
      rating: 4.9,
      available: "Available Today",
      img: doctor2,
    },
    {
      name: "Dr. James Wilson",
      role: "General Surgeon • 8 yrs exp",
      rating: 4.7,
      available: "Next: Tomorrow",
      img: doctor5,
    },
  ];

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-semibold">Book an Appointment</h1>
        <p className="text-gray-500 mb-6">
          Follow the steps to schedule your visit
        </p>

        {/* Progress */}
        <div className="flex items-center gap-6 mb-8">
          <Step label="Schedule" active />
          <Line />
          <Step label="Doctor" />
          <Line />
          <Step label="Confirm" />
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            {/* Date & Time */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-semibold mb-4">1. Select Date & Time</h2>

              <p className="text-sm text-gray-500 mb-4">October 2023</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`border rounded-lg py-2 text-sm
                    ${
                      selectedTime === time
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:border-blue-400"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Specialists */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-semibold mb-4">2. Choose Specialist</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {doctors.map((doc) => (
                  <div
                    key={doc.name}
                    onClick={() => setSelectedDoctor(doc.name)}
                    className={`border rounded-xl p-4 cursor-pointer transition
                    ${
                      selectedDoctor === doc.name
                        ? "border-blue-500 bg-blue-50"
                        : "hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={doc.img}
                        alt={doc.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <div className="flex-1">
                        <h3 className="font-medium">{doc.name}</h3>
                        <p className="text-sm text-gray-500">{doc.role}</p>
                        <p className="text-xs text-green-600 mt-1">
                          {doc.available}
                        </p>
                      </div>

                      <span className="text-sm font-medium">
                        ⭐ {doc.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
            <h2 className="font-semibold mb-4">Booking Summary</h2>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-500">Date & Time</p>
                <p className="font-medium">Wednesday, 4 Oct 2023</p>
                <p className="text-gray-500">{selectedTime}</p>
              </div>

              <div>
                <p className="text-gray-500">Specialist</p>
                <p className="font-medium">{selectedDoctor}</p>
                <p className="text-gray-500">Cardiology Specialist</p>
              </div>

              <hr />

              <div className="flex justify-between">
                <span>Consultation Fee</span>
                <span>$75</span>
              </div>

              <div className="flex justify-between">
                <span>Booking Fee</span>
                <span>$5</span>
              </div>

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-blue-600">$80</span>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700">
                Confirm & Pay →
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

/* Small Components */

function Step({ label, active }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-full
        ${active ? "bg-blue-600 text-white" : "bg-gray-200"}`}
      >
        ✓
      </div>
      <span className={active ? "font-medium" : "text-gray-400"}>{label}</span>
    </div>
  );
}

function Line() {
  return <div className="flex-1 h-0.5 bg-gray-200" />;
}
