import Amenities from "../components/Amenities";
import Attractions from "../components/Attractions";
import BookingBox from "../components/BookingBox";
import HotelHero from "../components/HotelHero";
import HotelInfo from "../components/HotelInfo";
import MapSection from "../components/MapSection";
import Reviews from "../components/Reviews";
import RoomCard from "../components/RoomCard";

export const metadata = {
  title: "Fast Go Travel | Hotel Details & Booking",
  description:
    "Explore detailed hotel information, available rooms, amenities, and reviews with Fast Go Travel. Book your ideal stay with ease and confidence.",
  keywords: [
    "hotel details",
    "hotel booking",
    "available rooms",
    "hotel amenities",
    "hotel reviews",
    "Fast Go Travel hotels",
  ],

  robots: {
    index: false, // transactional pages with booking info usually shouldn’t be indexed
    follow: true,
  },

  category: "travel",
};

const HotelDetails = () => {
  return (
    <>
      <HotelHero />
      {/* Hotel Info & Booking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1440px] mx-auto py-8 mb-20 mt-16">
        <div className="lg:col-span-2">
          <HotelInfo />

          {/* Rooms */}
          <div className="space-y-6 mt-16">
            <h1 className="text-2xl ml-5 md:ml-0 md:text-3xl font-bold">
              Available Rooms
            </h1>
            <RoomCard
              title="Deluxe Twin Room"
              size="28m²"
              beds="2 Single Beds"
              price="৳5,000"
              img="/images/hotel2.png"
            />
            <RoomCard
              title="Deluxe Twin Room"
              size="28m²"
              beds="2 Single Beds"
              price="৳5,000"
              img="/images/hotel.png"
            />
          </div>

          {/* Amenities */}
          <Amenities />

          {/* Reviews */}
          <Reviews />

          {/* Map Section */}
          <MapSection />

          {/* attractions */}
          <Attractions />
        </div>

        {/* Booking Box */}
        <div className="col-span-1">
          <BookingBox />
        </div>
      </div>
    </>
  );
};

export default HotelDetails;
