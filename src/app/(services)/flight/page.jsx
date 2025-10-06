import ServiceBanner from "../components/ServiceBanner";
import LeftSidebarFilters from "./components/LeftSideBar";
import RightFlightResults from "./components/RightFlightSearchResults";

// app/flight-search/page.tsx (if using App Router)

export const metadata = {
  title: "Fast Go Travel | Search Flights",
  description:
    "Find and compare flights with Fast Go Travel. Use filters to refine by price, duration, airlines, and more. Book cheap flights with instant confirmation.",
  keywords: [
    "flight search",
    "book flights",
    "cheap flights",
    "airline tickets",
    "Fast Go Travel",
    "travel booking",
  ],
  metadataBase: new URL("https://fast-go-travel.vercel.app/"),
  category: "travel",

  robots: {
    index: true,
    follow: true,
  },
};

const FlightSearch = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ServiceBanner />
      <div className="p-4 lg:grid lg:grid-cols-12 gap-6">
        {/* Left Side (Filters) */}
        <div className="hidden lg:block col-span-3">
          <LeftSidebarFilters />
        </div>

        {/* For mobile: Filters as collapsible */}
        <div className="lg:hidden mb-4">
          <details className="border rounded-lg p-3">
            <summary className="cursor-pointer font-semibold">Filters</summary>
            <LeftSidebarFilters />
          </details>
        </div>

        {/* Right Side (Results) */}
        <div className="col-span-9">
          <RightFlightResults />
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;
