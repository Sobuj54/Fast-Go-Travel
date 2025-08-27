import { Calendar1, ChevronDown, MapPin } from "lucide-react";

const BusSearchBar = () => {
  return (
    <div className="py-2 px-5 border-[1px] rounded-lg mt-2 w-full">
      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* From Input */}
        <div className="md:col-span-4 border-b-2 md:border-b-0 md:border-r-2 px-3 md:px-10 lg:px-20">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            From
          </label>
          <div className="relative flex items-center pr-4">
            <MapPin size={17} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0 font-semibold"
              value="Gabtuli,Dhaka"
              readOnly
            />
            <ChevronDown />
          </div>
        </div>

        {/* To Input */}
        <div className="md:col-span-4 border-b-2 md:border-b-0 md:border-r-2 px-3 md:px-10 lg:px-20">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To
          </label>
          <div className="relative flex items-center pr-4">
            <MapPin size={17} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0 font-semibold"
              value="Cox's bazar"
              readOnly
            />
            <ChevronDown />
          </div>
        </div>

        {/* Departure Date */}
        <div className="md:col-span-4 px-3 md:px-10 lg:px-20">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Journey Date
          </label>
          <div className="relative flex items-center pr-4">
            <Calendar1 size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0 font-semibold "
              value="Mon, 9 JunDhaka"
              readOnly
            />
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSearchBar;
