import ServiceBanner from "../components/ServiceBanner";
import LeftSidebarFilters from "./components/LeftSideBar";
import RightFlightResults from "./components/RightFlightSearchResults";

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
