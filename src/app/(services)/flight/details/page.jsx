import ReviewBooking from "../components/ReviewBooking";
import TravelerDetails from "../components/TravelerDetails";

export const metadata = {
  title: "Fast Go Travel | Flight Details & Booking Review",
  description:
    "Review your flight booking details and provide traveler information with Fast Go Travel. Confirm your flight, check pricing, and prepare for a seamless travel experience.",
  keywords: [
    "flight details",
    "flight booking review",
    "traveler information",
    "confirm flight",
    "Fast Go Travel flights",
  ],

  robots: {
    index: false, // Optional: If you don't want this transactional page indexed
    follow: true,
  },
  category: "travel",
};

const FlightDetails = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ReviewBooking />
      <TravelerDetails />
    </div>
  );
};

export default FlightDetails;
