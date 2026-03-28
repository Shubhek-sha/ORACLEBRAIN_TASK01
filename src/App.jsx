import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/home/HeroSection";
import HowItWorks from "./components/home/HowItWorks";
import WhyChooseUs from "./components/home/WhyChooseUs";

import PatientDashboard from "./app/dashboard/patient/Page";
import DoctorDashboard from "./app/dashboard/doctor/Page";
import DoctorSearch from "./app/finddoctors/DoctorSearch";
import Login from "./app/login/Login";
import Register from "./app/register/Register";
import Profile from "./app/profile/Profile";

import Booking from "./app/appointments/booking/Booking";
import TrackAppointment from "./app/appointments/track/TrackAppointment";
import Tracking from "./app/appointments/tracking/Tracking";

export default function App() {
  return (
    <Routes>
      {/* Landing Layout */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <HeroSection />
            <HowItWorks />
            <WhyChooseUs />
            <Footer />
          </>
        }
      />

      {/* Patient Dashboard (NO navbar/footer) */}
      <Route path="/dashboard/patient" element={<PatientDashboard />} />
      {/*Doctor Dashboard*/}

      <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
      <Route path="/doctors" element={<DoctorSearch />} />
      <Route path="/profile" element={<Profile />} />
      {/* Login */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/appointments/booking" element={<Booking />} />
      <Route path="/appointments/track" element={<TrackAppointment />} />
      <Route path="/tracking/:id" element={<Tracking />} />
    </Routes>
  );
}
