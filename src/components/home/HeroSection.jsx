import { Calendar, AlertCircle } from "lucide-react";
import doctor3 from "../../assets/doctor3.jpg";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-b from-sky-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <span className="inline-block mb-4 text-sm bg-sky-100 text-sky-700 px-4 py-1 rounded-full">
            New · Video consultations available
          </span>

          <h1 className="text-4xl font-bold text-slate-900 leading-tight">
            Your Health,
            <br />
            <span className="text-sky-600">On Demand</span>
          </h1>

          <p className="mt-5 text-slate-600 max-w-md">
            Connect with top-rated doctors in minutes. Schedule appointments,
            get prescriptions, and receive quality care from the comfort of your
            home.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition">
              <Calendar size={18} />
              Book Appointment
            </button>

            <button className="flex items-center justify-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-xl hover:bg-red-100 transition">
              <AlertCircle size={18} />
              Emergency Appointment
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Trusted by <strong>2,000+</strong> patients
          </p>
        </div>

        {/* Illustration */}
        <div className="hidden md:flex justify-center">
          <div className="w-72 h-72 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-semibold">
            <img
              src={doctor3}
              alt="Doctor Illustration"
              className="w-70 h-70 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
