import React, { useState, useRef, useEffect } from "react";
import { Calendar, MapPin, User, Plus, Minus, Search, X } from "lucide-react";

const FlightSearchBar = () => {
  const [tripType, setTripType] = useState("one-way"); // "round-trip", "multi-city"
  const [segments, setSegments] = useState([
    { from: "", to: "", departure: null, returnDate: null }
  ]);
  const [guest, setGuest] = useState({ adults: 1, children: 0, youth: 0 });
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);
  const travelerDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (travelerDropdownRef.current && !travelerDropdownRef.current.contains(event.target)) {
        setShowTravelerDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const addSegment = () => {
    if (segments.length < 5) {
      setSegments([...segments, { from: "", to: "", departure: null, returnDate: null }]);
    }
  };

  const removeSegment = (idx) => {
    if (tripType === "multi-city" && segments.length <= 2) return;
    setSegments(segments.filter((_, i) => i !== idx));
  };

  const updateSegment = (idx, field, value) => {
    const updated = segments.map((seg, i) =>
      i === idx ? { ...seg, [field]: value } : seg
    );
    setSegments(updated);
  };

  const handleGuestChange = (type, delta) => {
    setGuest((prev) => ({
      ...prev,
      [type]: Math.max(type === 'adults' ? 1 : 0, (prev[type] || 0) + delta)
    }));
  };

  const handleTripTypeChange = (type) => {
    setTripType(type);
    const firstSegment = segments[0] || { from: "", to: "", departure: null, returnDate: null };

    if (type === "multi-city") {
      const secondSegment = segments[1] || { from: "", to: "", departure: null, returnDate: null };
      setSegments([firstSegment, secondSegment]);
    } else {
      if (type === 'one-way') {
        firstSegment.returnDate = null;
      }
      setSegments([firstSegment]);
    }
  };

  const formatDateForInput = (date) => {
    if (!date) return '';
    return new Date(date).toISOString().split('T')[0];
  };

  const TravelerRow = ({ label, type, value }) => (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm font-medium text-gray-700 w-24">{label}</span>
      <div className="flex items-center gap-3">
        <button
          className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 border transition-colors disabled:opacity-50"
          onClick={() => handleGuestChange(type, -1)}
          type="button"
          aria-label={`Decrease ${label}`}
          disabled={(type === 'adults' && value <= 1) || (type !== 'adults' && value <= 0)}
        >
          <Minus size={16} />
        </button>
        <span className="w-8 text-center font-semibold text-gray-800">{value}</span>
        <button
          className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 border transition-colors"
          onClick={() => handleGuestChange(type, 1)}
          type="button"
          aria-label={`Increase ${label}`}
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );

  const totalTravelers = guest.adults + guest.children + guest.youth;
  const inputContainerClass = "bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500";
  const labelClass = "block text-sm font-medium text-gray-600 mb-1.5";

  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-md border border-gray-200 font-sans">
      <div className="flex items-center space-x-2 sm:space-x-4 mb-6">
        <button type="button" className={`px-4 py-2 text-sm sm:text-base rounded-full font-semibold transition-colors ${tripType === "one-way" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100 border"}`} onClick={() => handleTripTypeChange("one-way")}>One Way</button>
        <button type="button" className={`px-4 py-2 text-sm sm:text-base rounded-full font-semibold transition-colors ${tripType === "round-trip" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100 border"}`} onClick={() => handleTripTypeChange("round-trip")}>Round Trip</button>
        <button type="button" className={`px-4 py-2 text-sm sm:text-base rounded-full font-semibold transition-colors ${tripType === "multi-city" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100 border"}`} onClick={() => handleTripTypeChange("multi-city")}>Multi City</button>
      </div>

      <div className="space-y-4">
        {segments.map((segment, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-3 items-end relative pr-8 md:pr-0">
            {/* From Input */}
            <div className={tripType === 'multi-city' ? 'md:col-span-5' : tripType === 'one-way' ? 'md:col-span-3' : 'md:col-span-2'}>
              <label className={labelClass}>From</label>
              <div className={inputContainerClass}>
                <MapPin size={20} className="text-gray-400" />
                <input type="text" className="w-full bg-transparent text-base focus:outline-none" value={segment.from} onChange={(e) => updateSegment(idx, "from", e.target.value)} placeholder="City or Airport" />
              </div>
            </div>

            {/* To Input */}
            <div className={tripType === 'multi-city' ? 'md:col-span-5' : tripType === 'one-way' ? 'md:col-span-3' : 'md:col-span-2'}>
              <label className={labelClass}>To</label>
              <div className={inputContainerClass}>
                <MapPin size={20} className="text-gray-400" />
                <input type="text" className="w-full bg-transparent text-base focus:outline-none" value={segment.to} onChange={(e) => updateSegment(idx, "to", e.target.value)} placeholder="City or Airport" />
              </div>
            </div>

            {/* Date Inputs */}
            <div className={`${tripType === 'round-trip' ? 'md:col-span-4 grid sm:grid-cols-2 gap-4' : 'md:col-span-2'}`}>
              <div>
                <label className={labelClass}>Departure</label>
                <div className={inputContainerClass}>
                  <Calendar size={20} className="text-gray-400" />
                  <input type="date" className="w-full bg-transparent text-base focus:outline-none text-gray-700" value={formatDateForInput(segment.departure)} onChange={(e) => updateSegment(idx, "departure", e.target.value)} min={formatDateForInput(new Date())} />
                </div>
              </div>
              {tripType === "round-trip" && (
                <div>
                  <label className={labelClass}>Return</label>
                  <div className={inputContainerClass}>
                    <Calendar size={20} className="text-gray-400" />
                    <input type="date" className="w-full bg-transparent text-base focus:outline-none text-gray-700 disabled:bg-gray-100" value={formatDateForInput(segment.returnDate)} onChange={(e) => updateSegment(idx, "returnDate", e.target.value)} min={formatDateForInput(segment.departure || new Date())} disabled={!segment.departure} />
                  </div>
                </div>
              )}
            </div>

            {/* Remove Button for Multi-city */}
            {tripType === "multi-city" && segments.length > 2 && (
              <button type="button" onClick={() => removeSegment(idx)} className="absolute -top-3 -right-3 md:top-1/2 md:-right-2 md:transform md:-translate-y-1/2 bg-gray-200 rounded-full p-1.5 hover:bg-red-100 text-gray-500 hover:text-red-500 transition-colors"><X size={16} /></button>
            )}

            {/* Travelers & Search Button (for One-Way and Round-Trip) */}
            {idx === 0 && tripType !== 'multi-city' && (
              <>
                <div className="md:col-span-2 relative" ref={travelerDropdownRef}>
                  <label className={labelClass}>Travelers</label>
                  <button type="button" className={`${inputContainerClass} w-full text-left`} onClick={() => setShowTravelerDropdown(v => !v)}>
                    <User size={20} className="text-gray-400" />
                    <span className="font-semibold text-gray-800">{totalTravelers} Traveler{totalTravelers > 1 ? "s" : ""}</span>
                  </button>
                  {showTravelerDropdown && (
                    <div className="absolute z-20 bg-white rounded-lg p-4 shadow-lg top-full left-0 w-full min-w-[280px] mt-2 border">
                      <TravelerRow label="Adults" type="adults" value={guest.adults} />
                      <TravelerRow label="Children" type="children" value={guest.children} />
                      <TravelerRow label="Youth" type="youth" value={guest.youth} />
                      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors" type="button" onClick={() => setShowTravelerDropdown(false)}>Done</button>
                    </div>
                  )}
                </div>

                <div className="md:col-span-2">
                  <button type="button" className="w-full h-full bg-blue-600 text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                    <Search size={20} />
                    Search
                  </button>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Controls for Multi-city */}
        {tripType === 'multi-city' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4 mt-4 border-t">
            <div className="md:col-span-5">
              {segments.length < 5 && (
                <button type="button" onClick={addSegment} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-1.5 text-sm py-2"><Plus size={16} />Add another flight</button>
              )}
            </div>
            <div className="md:col-span-5 relative" ref={travelerDropdownRef}>
              <label className={labelClass}>Travelers</label>
              <button type="button" className={`${inputContainerClass} w-full text-left`} onClick={() => setShowTravelerDropdown(v => !v)}>
                <User size={20} className="text-gray-400" />
                <span className="font-semibold text-gray-800">{totalTravelers} Traveler{totalTravelers > 1 ? "s" : ""}</span>
              </button>
              {showTravelerDropdown && (
                <div className="absolute z-20 bg-white rounded-lg p-4 shadow-lg top-full w-full max-w-xs mt-2 border">
                  <TravelerRow label="Adults" type="adults" value={guest.adults} />
                  <TravelerRow label="Children" type="children" value={guest.children} />
                  <TravelerRow label="Youth" type="youth" value={guest.youth} />
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors" type="button" onClick={() => setShowTravelerDropdown(false)}>Done</button>
                </div>
              )}
            </div>
            <div className="md:col-span-2">
              <button type="button" className="w-full h-full bg-blue-600 text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightSearchBar;