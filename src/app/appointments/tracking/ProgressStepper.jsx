export default function ProgressStepper() {
  const steps = ["Confirmed", "Doctor En Route", "In Progress", "Completed"];

  return (
    <div className="bg-white p-6 rounded-xl shadow flex justify-between">
      {steps.map((step, i) => (
        <div key={i} className="text-center flex-1">
          <div className="w-9 h-9 bg-blue-600 text-white rounded-full mx-auto flex items-center justify-center">
            ✓
          </div>
          <p className="text-sm mt-2">{step}</p>
        </div>
      ))}
    </div>
  );
}
