import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Calendar, Search, MapPin, User } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-slate-200 hidden md:block">
      <div className="p-6 font-semibold text-sky-600 text-lg">DoctorOnCall</div>

      <nav className="px-4 space-y-2 text-sm">
        <Link
          to="/dashboard/patient"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sky-50 text-slate-700"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          to="/doctors"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sky-50 text-slate-700"
        >
          <Search size={18} />
          Find Doctors
        </Link>

        <Link
          to="/appointments/booking"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sky-50 text-slate-700"
        >
          <Calendar size={18} />
          Book Appointment
        </Link>

        <Link
          to="/appointments/track"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sky-50 text-slate-700"
        >
          <MapPin size={18} />
          Track Appointment
        </Link>
        
        <Link
          to="/profile"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sky-50 text-slate-700"
        >
          <User size={18} />
          Profile
        </Link>
      </nav>
    </aside>
  );
}
