import { Calendar1, ChevronDown, MapPin, Search, User } from "lucide-react";

const CruiseSearchBar = () => {
  return (
    <div className="py-2 px-5 border-[1px] rounded-lg mt-2">
      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 items-center">
        {/* From Input */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2 px-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Destination
          </label>
          <div className="relative flex items-center pr-4">
            <MapPin size={17} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0"
              value="Dubai"
              readOnly
            />
            <ChevronDown />
          </div>
        </div>

        {/* Check in */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2 px-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Departing
          </label>
          <div className="relative flex items-center pr-4">
            <Calendar1 size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0 "
              value="22 May 2025"
              readOnly
            />
            <ChevronDown />
          </div>
        </div>

        {/* Check Out */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2 px-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cruise Line
          </label>
          <div className="relative flex items-center pr-4">
            <Calendar1 size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0 "
              value="Cruise Line(any)"
              readOnly
            />
            <ChevronDown />
          </div>
        </div>

        {/* Guest Selector */}
        <div className="md:col-span-2 px-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Guest
          </label>
          <div className="relative flex items-center pr-4">
            <User size={16} />
            <input
              type="text"
              className="w-full p-2 focus:outline-0 text-sm"
              value="1 adults, 0 children, 0 youth"
              readOnly
            />
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CruiseSearchBar;
