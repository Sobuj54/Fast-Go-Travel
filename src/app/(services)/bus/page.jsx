import ServiceBanner from "../components/ServiceBanner";
import BusLeftSideBar from "./components/BusLeftSideBar";
import RightBusSearchResults from "./components/RightBusSearchResults";

// app/bus-search/page.tsx (if using App Router)

export const metadata = {
  title: "Fast Go Travel | Search Buses",
  description:
    "Find and book bus tickets with Fast Go Travel. Compare bus operators, routes, and prices. Enjoy affordable and reliable bus travel with instant booking.",
  keywords: [
    "bus search",
    "book bus tickets",
    "cheap bus tickets",
    "long distance buses",
    "intercity bus travel",
    "Fast Go Travel",
    "bus booking",
  ],
  metadataBase: new URL("https://fast-go-travel.vercel.app/"),

  robots: {
    index: true,
    follow: true,
  },

  category: "travel",
};

const Bus = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ServiceBanner />
      <div className="p-4 lg:grid lg:grid-cols-12 gap-4">
        {/* Left Side (Filters) */}
        <div className="hidden lg:block col-span-3">
          <BusLeftSideBar />
        </div>

        {/* For mobile: Filters as collapsible */}
        <div className="lg:hidden mb-4">
          <details className="border rounded-lg p-3">
            <summary className="cursor-pointer font-semibold">Filters</summary>
            <BusLeftSideBar />
          </details>
        </div>

        {/* Right Side (Results) */}
        <div className="col-span-9">
          <RightBusSearchResults />
        </div>
      </div>
    </div>
  );
};

export default Bus;
