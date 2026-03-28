export default function AppointmentCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow flex gap-4">
      <div className="w-20 h-20 bg-gray-200 rounded-lg" />

      <div className="flex-1">
        <h2 className="font-semibold">Appointment #DOC-88291</h2>

        <p className="text-sm text-gray-500">Dr. Sarah Smith (Cardiologist)</p>

        <div className="flex gap-3 mt-3">
          <button className="border px-4 py-2 rounded-lg">
            Contact Clinic
          </button>

          <button className="border px-4 py-2 rounded-lg">
            Chat with Doctor
          </button>
        </div>
      </div>
    </div>
  );
}
