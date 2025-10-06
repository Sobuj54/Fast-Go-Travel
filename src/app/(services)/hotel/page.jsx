import ServiceBanner from "../components/ServiceBanner";
import HotelLeftSideBar from "./components/HotelLeftSideBar";
import HotelSearchResults from "./components/HotelSearchResults";

// app/hotel-search/page.tsx (App Router)

export const metadata = {
  title: "Fast Go Travel | Search Hotels",
  description:
    "Find and book hotels with Fast Go Travel. Compare prices, amenities, and locations. Get the best deals on hotels worldwide with instant confirmation.",
  keywords: [
    "hotel search",
    "book hotels",
    "cheap hotels",
    "luxury hotels",
    "vacation rentals",
    "Fast Go Travel",
    "travel booking",
  ],
  metadataBase: new URL("https://fast-go-travel.vercel.app/"),

  robots: {
    index: true,
    follow: true,
  },

  category: "travel",
};

const Hotel = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ServiceBanner />
      <div className="p-4 lg:grid lg:grid-cols-12 gap-4">
        {/* Left Side (Filters) */}
        <div className="hidden lg:block col-span-3">
          <HotelLeftSideBar />
        </div>

        {/* For mobile: Filters as collapsible */}
        <div className="lg:hidden mb-4">
          <details className="border rounded-lg p-3">
            <summary className="cursor-pointer font-semibold">Filters</summary>
            <HotelLeftSideBar />
          </details>
        </div>

        {/* Right Side (Results) */}
        <div className="col-span-9">
          <HotelSearchResults />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
