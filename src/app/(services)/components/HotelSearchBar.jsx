import { useState } from "react";
import { Calendar1, ChevronDown, MapPin, User } from "lucide-react";

const HotelSearchBar = () => {
  const [location, setLocation] = useState("BarcelonaBeach");
  const [checkIn, setCheckIn] = useState("22 May 2025");
  const [checkOut, setCheckOut] = useState("22 May 2025");
  const [guest, setGuest] = useState("1 adults, 0 children, 0 youth");

  return (
    <div className="py-2 px-5 border-[1px] rounded-lg mt-2">
      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 items-center">
        {/* Location */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2 px-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <div className="relative flex items-center pr-4">
            <MapPin size={17} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <ChevronDown />
          </div>
        </div>

        {/* Check In */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2 px-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Check In
          </label>
          <div className="relative flex items-center pr-4">
            <Calendar1 size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0 "
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <ChevronDown />
          </div>
        </div>

        {/* Check Out */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2 px-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Check Out
          </label>
          <div className="relative flex items-center pr-4">
            <Calendar1 size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0 "
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
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
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
            />
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchBar;
