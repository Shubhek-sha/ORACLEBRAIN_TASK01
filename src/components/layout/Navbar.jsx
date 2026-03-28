import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-sky-600">
          DoctorOnCall
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-slate-700">
          <NavLink to="/doctors" className="hover:text-sky-600">
            Find Doctors
          </NavLink>
          <NavLink to="/appointments/booking" className="hover:text-sky-600">
            Book Appointment
          </NavLink>
          <NavLink to="/appointments/track" className="hover:text-sky-600">
            Track Appointment
          </NavLink>
          <NavLink to="/dashboard/patient" className="hover:text-sky-600">
            Dashboard
          </NavLink>
        </nav>

        {/* Auth CTA */}
        <NavLink
          to="/login"
          className="bg-sky-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-sky-700 transition"
        >
          Login
        </NavLink>
      </div>
    </header>
  );
}
