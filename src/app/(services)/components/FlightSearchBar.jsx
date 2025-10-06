import { useState } from "react";
import { Calendar1, ChevronDown, MapPin, User } from "lucide-react";

const FlightSearchBar = () => {
  const [from, setFrom] = useState("BarcelonaBeach V");
  const [to, setTo] = useState("BarcelonaBeach ~");
  const [departure, setDeparture] = useState("22May2025");
  const [returnDate, setReturnDate] = useState("22May2025");
  const [guest, setGuest] = useState("1 adults, 0 children, 0 youth");

  return (
    <div className="py-2 px-5 border-[1px] rounded-lg mt-2">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 items-center">
        {/* From Input */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            From
          </label>
          <div className="relative flex items-center pr-4">
            <MapPin size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <ChevronDown />
          </div>
        </div>

        {/* To Input */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To
          </label>
          <div className="relative flex items-center pr-4">
            <MapPin size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <ChevronDown />
          </div>
        </div>

        {/* Departure Date */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Departure
          </label>
          <div className="relative flex items-center pr-4">
            <Calendar1 size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
            <ChevronDown />
          </div>
        </div>

        {/* Return Date */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Return
          </label>
          <div className="relative flex items-center pr-4">
            <Calendar1 size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
            <ChevronDown />
          </div>
        </div>

        {/* Guest Selector */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Guest
          </label>
          <div className="relative flex items-center pr-4">
            <User size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0"
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

export default FlightSearchBar;
