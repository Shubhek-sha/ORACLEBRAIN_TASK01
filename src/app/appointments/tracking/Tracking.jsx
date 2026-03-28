import { useParams } from "react-router-dom";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import TrackingHeader from "./TrackingHeader";
import AppointmentCard from "./AppointmentCard";
import ProgressStepper from "./ProgressStepper";
import MapSection from "./MapSection";
import AppointmentDetails from "./AppointmentDetails";

export default function Tracking() {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <TrackingHeader />
        <AppointmentCard />
        <ProgressStepper />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MapSection />
          <AppointmentDetails />
        </div>
      </div>
      <Footer />
    </>
  );
}
