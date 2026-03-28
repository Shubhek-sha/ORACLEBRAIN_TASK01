import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import doctor1 from "../../assets/doctor1.jpg";

export default function DoctorSearch() {
  const doctors = [
    {
      name: "Dr. Mukta Dhakal",
      specialty: "HEART HEALTH CLINIC",
      rating: 4.8,
      img: doctor1,
    },
    {
      name: "Dr.Mukta Dhakal",
      specialty: "MIND FULL PATHWAY CLINIC",
      rating: 4.9,
      img: doctor1,
    },
    {
      name: "Dr.Sandip Malla",
      specialty: "BONE & JOINT ASSOCIATES",
      rating: 4.7,
      img: doctor1,
    },
  ];

  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Sidebar */}
      <Sidebar />
      <div className="min-h-screen bg-white p-4 md:p-8">
        <header className="flex justify-between items-center mb-8">
          <div className="text-blue-600 font-bold text-xl">DoctorOnCall</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
            My Profile
          </button>
        </header>

        <section className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Find your specialist</h1>
          <p className="text-gray-500 mb-6">
            Vibe-check your next doctor based on care style, language nuance,
            and clinical excellence.
          </p>

          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Search by name, clinic, or health condition..."
              className="flex-1 border rounded-md p-2"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
              Search
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map((doc, i) => (
              <div
                key={i}
                className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{doc.name}</h3>
                      <p className="text-xs text-blue-600 font-semibold uppercase">
                        {doc.specialty}
                      </p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">
                      ★ {doc.rating}
                    </span>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md text-sm font-medium">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
