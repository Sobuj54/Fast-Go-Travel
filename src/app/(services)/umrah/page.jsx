import PackageCard from "./components/PackageCard";
import PackageLeftSidebar from "./components/PackageLeftSidebar";
import packageData from "./data/packages.json";
import { FaKaaba } from "react-icons/fa6";

const Umrah = () => {
    return (
        <>
         <div className="grid grid-cols-4 gap-4 p-4 mt-10">
          <div className="col-span-1 pt-6">
            <PackageLeftSidebar/>
          </div>
          <div className="col-span-3">
            <div>
              <p className="text-md text-gray-600">1 Packages found</p>
            </div>
            <div className="flex gap-2 pl-6 my-5">
              <FaKaaba size={20} className="mt-1 opacity-40"/><h1 className="text-md font-light mb-4 ">Umrah Packages</h1>
            </div>
            {packageData.map((pkg) => (
                <PackageCard key={pkg.id} data={pkg} />
                ))}
          </div>
                
                
        </div>
    </>
   
);
};
export default Umrah;