import { useState } from "react";
import { Calendar1, ChevronDown, MapPin, User } from "lucide-react";

const VisaSearchBar = () => {
  const [country, setCountry] = useState("BarcelonaBeach");
  const [flyingDate, setFlyingDate] = useState("02 jun,2025");
  const [nationality, setNationality] = useState("Bangladesh");
  const [travelers, setTravelers] = useState("1 Travelers");
  const [residence, setResidence] = useState("Bangladesh");

  return (
    <div className="py-2 px-5 border-[1px] rounded-lg mt-2">
      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 items-center">
        {/* Country */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <div className="relative flex items-center pr-4">
            <MapPin size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <ChevronDown />
          </div>
        </div>

        {/* Intended Flying Date */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Intended Flying Date
          </label>
          <div className="relative flex items-center pr-4">
            <Calendar1 size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0"
              value={flyingDate}
              onChange={(e) => setFlyingDate(e.target.value)}
            />
            <ChevronDown />
          </div>
        </div>

        {/* Nationality */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nationality
          </label>
          <div className="relative flex items-center pr-4">
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0 "
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
            <ChevronDown />
          </div>
        </div>

        {/* Travelers */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Travelers
          </label>
          <div className="relative flex items-center pr-4">
            <User size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
            />
            <ChevronDown />
          </div>
        </div>

        {/* Country of Residence */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country of Residence
          </label>
          <div className="relative flex items-center pr-4">
            <MapPin size={16} />
            <input
              type="text"
              className="w-full p-2 focus:outline-0 text-sm"
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
            />
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaSearchBar;
