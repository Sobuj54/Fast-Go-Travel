import Pagination from "../components/Pagination";
import ServiceBanner from "../components/ServiceBanner";
import SortBar from "../components/SortBar";
import CruiseCards from "./components/CruiseCards";
import CruiseFilterSidebar from "./components/CruiseFilterSidebar";

const Cruise = () => {
  const cruises = [
    "/images/cruise1.jpg",
    "/images/cruise2.jpg",
    "/images/cruise3.jpg",
    "/images/cruise4.jpg",
    "/images/cruise5.jpg",
    "/images/cruise6.jpg",
  ];
  return (
    <div className="max-w-[1440px] mx-auto">
      <ServiceBanner />
      <div className="p-4 lg:grid lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="hidden lg:block col-span-3">
          <CruiseFilterSidebar />
        </div>

        {/* For mobile: Filters as collapsible */}
        <div className="lg:hidden mb-4">
          <details className="border rounded-lg p-3">
            <summary className="cursor-pointer font-semibold">Filters</summary>
            <CruiseFilterSidebar />
          </details>
        </div>

        {/* Content */}
        <div className="col-span-9 mb-16">
          <SortBar />

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {cruises.map((img, i) => (
              <CruiseCards key={i} image={img} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Cruise;
