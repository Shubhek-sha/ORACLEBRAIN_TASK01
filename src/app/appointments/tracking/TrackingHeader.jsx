export default function TrackingHeader() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-xl font-semibold">Track Your Appointment</h1>

      <div className="flex gap-3 mt-4">
        <input
          placeholder="DOC-88291"
          className="border rounded-lg px-4 py-2 flex-1"
        />

        <button className="bg-blue-600 text-white px-5 rounded-lg">
          Track
        </button>
      </div>
    </div>
  );
}
