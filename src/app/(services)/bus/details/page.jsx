import BusTravelerDetails from "../components/BusTravelerDetails";
import ReviewBusBooking from "../components/ReviewBusBooking";
import SelectBusSeat from "../components/SelectBusSeats";

export const metadata = {
  title: "Fast Go Travel | Bus Booking Details",
  description:
    "Review your bus booking, select seats, and provide traveler details with Fast Go Travel. Ensure a smooth and hassle-free bus travel experience.",
  keywords: [
    "bus booking",
    "bus traveler details",
    "select bus seats",
    "review bus booking",
    "Fast Go Travel bus",
  ],

  robots: {
    index: false, // Prevent indexing of transactional/user-specific pages
    follow: true,
  },

  category: "travel",
};

const BusBookingDetails = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ReviewBusBooking />
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className=" col-span-1 lg:col-span-8">
          <BusTravelerDetails />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <SelectBusSeat />
        </div>
      </div>
    </div>
  );
};

export default BusBookingDetails;
