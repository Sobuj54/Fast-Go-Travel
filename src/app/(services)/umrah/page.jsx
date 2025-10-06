import PackageCard from "./components/PackageCard";
import PackageLeftSidebar from "./components/PackageLeftSidebar";
import packageData from "./data/packages.json";
import { FaKaaba } from "react-icons/fa6";

export const metadata = {
  title: "Fast Go Travel | Umrah Packages - Affordable Umrah Travel Deals",
  description:
    "Discover the best Umrah packages for 2025 with Fast Go Travel. Affordable, reliable, and convenient Umrah travel deals including flights, hotels, and guided services.",
  keywords: [
    "Umrah packages",
    "cheap Umrah packages",
    "Umrah deals 2025",
    "Umrah travel",
    "Umrah flights and hotels",
    "Hajj and Umrah services",
    "Umrah booking online",
  ],
  robots: {
    index: true, // this page should definitely be indexed
    follow: true,
  },
  category: "travel",
};

const Umrah = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="lg:grid lg:grid-cols-4 gap-4 p-4 mt-10 flex flex-col">
        <div className="lg:col-span-1 pt-6">
          <div className="hidden lg:block">
            <PackageLeftSidebar />
          </div>
          {/* For mobile: Filters as collapsible */}
          <div className="lg:hidden mb-4">
            <details className="border rounded-lg p-3">
              <summary className="cursor-pointer font-semibold">
                Filters
              </summary>
              <PackageLeftSidebar />
            </details>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div>
            <p className="text-md text-gray-600">1 Packages found</p>
          </div>
          <div className="flex gap-2 pl-6 my-5">
            <FaKaaba size={20} className="mt-1 opacity-40" />
            <h1 className="text-md font-light mb-4 ">Umrah Packages</h1>
          </div>

          <div>
            {packageData.map((pkg) => (
              <PackageCard key={pkg.id} data={pkg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Umrah;
