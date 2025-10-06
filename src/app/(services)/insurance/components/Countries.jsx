// components/TravelDestination.jsx
"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const countries = [
  { name: "Thailand", image: "/images/thailand.jpeg" },
  { name: "UAE", image: "/images/uae.jpeg" },
  { name: "USA", image: "/images/usa.jpeg" },
  { name: "Indonesia", image: "/images/indonesia.jpeg" },
  { name: "Europe", image: "/images/europe.jpeg" },
];

export default function Countries({ onSelectionChange }) {
  const [travellers, setTravellers] = useState(1);
  const [selected, setSelected] = useState("Regular");
  const [selectedCountries, setSelectedCountries] = useState([]);

  const toggleCountry = (country) => {
    let updated;
    if (selectedCountries.includes(country)) {
      updated = selectedCountries.filter((c) => c !== country);
    } else {
      updated = [...selectedCountries, country];
    }
    setSelectedCountries(updated);
    onSelectionChange && onSelectionChange(updated); // send selected countries to parent
  };

  const buttons = ["Regular", "Student"];

  return (
    <div className="space-y-6 font-manrope">
      {/* Heading */}
      <div>
        <h2 className="text-[23.561px] font-semibold text-gray-900">
          Travel Destination
        </h2>
        <p className="text-[14.993px] text-gray-500">
          You can select multiple destinations
        </p>
      </div>

      {/* Popular Destination */}
      <div>
        <h3 className="text-[#989898] text-[15px] font-normal leading-normal">
          Popular Destination
        </h3>
        <div className="flex gap-4 overflow-x-auto py-2">
          {countries.map((country, idx) => (
            <div
              key={idx}
              className="relative w-[84px] h-[95px] flex-shrink-0 rounded-xl shadow-md overflow-hidden"
            >
              {/* Background image */}
              <Image
                src={country.image}
                alt={country.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />

              {/* Checkbox */}
              <div className="absolute top-2 left-2 z-10">
                <Checkbox.Root
                  checked={selectedCountries.includes(country.name)}
                  onCheckedChange={() => toggleCountry(country.name)}
                  className="w-5 h-5 bg-white rounded-md shadow-md flex items-center justify-center"
                  id={`checkbox-${country.name}`}
                >
                  <Checkbox.Indicator>
                    <CheckIcon className="w-4 h-4 text-blue-600" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </div>

              {/* Country name */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/60 py-1">
                <p className="text-center text-blue-800 font-semibold text-sm">
                  {country.name}
                </p>
              </div>
            </div>
          ))}

          {/* Other Country */}
          <div className="w-[84px] h-[95px] flex-shrink-0 rounded-xl shadow-md bg-white flex flex-col items-center justify-center gap-2">
            <Search className="w-6 h-6 text-blue-600" />
            <p className="text-blue-800 font-semibold text-sm text-center">
              Other <br /> Country
            </p>
          </div>
        </div>
      </div>

      {/* Travel Date & Travellers */}
      <div className="grid grid-cols-2">
        {/* Travel Date */}
        <div className="border p-3">
          <p className="text-[#161616] text-[12.851px] font-bold leading-[17.135px] uppercase flex gap-2">
            TRAVEL DATE{" "}
            <svg
              className="w-[14.993px] h-[14.993px] shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.01278 10.2709L13.6352 4.64844L14.9739 5.98712L8.01278 12.9513L1.05157 5.98712L2.39026 4.64844L8.01278 10.2709Z"
                fill="#055BC9"
              />
            </svg>
          </p>
          <p className="text-[14.993px] font-light text-gray-900 mt-1">
            <span className="text-[17.135px] font-bold">2 Jun</span>’25–to-
            <span className="text-[17.135px] font-bold">3 Jun</span>’25
          </p>
          <div className="flex gap-10">
            <p className="text-[#989898] text-[12.851px] font-normal leading-[17.135px]">
              Monday
            </p>
            <p className="text-[#989898] text-[12.851px] font-normal leading-[17.135px]">
              Tuesday
            </p>
          </div>
        </div>

        {/* Travellers */}
        <div className="border p-3 flex flex-col md:flex-row justify-between">
          <div className="w-[128px] h-[52px]">
            <p className="text-[#161616] text-[12.851px] font-bold leading-[17.135px] uppercase">
              TRAVELLERS
            </p>
            <p className="text-[#989898] text-[12.851px] font-normal leading-[17.135px]">
              Senior citizens above 70yrs are not covered
            </p>
          </div>
          <div className="flex items-center md:justify-end gap-3 mt-2">
            <div className="flex items-center gap-2 border-2 shadow-md py-0.5 px-1 rounded-lg">
              <button
                className="w-9 h-9 rounded-md flex items-center justify-center text-[#055BC9] text-lg"
                onClick={() => setTravellers(Math.max(1, travellers - 1))}
              >
                –
              </button>
              <span className="text-base font-semibold w-6 text-center">
                {travellers.toString().padStart(2, "0")}
              </span>
              <button
                className="w-9 h-9 rounded-md flex items-center justify-center text-[#055BC9] text-lg"
                onClick={() => setTravellers(travellers + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Special Plans */}
      <div>
        <p className="text-[#161616] text-[12.851px] font-bold leading-[17.135px] uppercase mb-2">
          SPECIAL PLANS (OPTIONAL)
        </p>
        <div className="flex gap-3">
          {buttons.map((btn) => {
            const isSelected = selected === btn;
            return (
              <button
                key={btn}
                onClick={() => setSelected(btn)}
                className={`flex h-[35.341px] px-[11.566px] py-[0.857px] justify-center items-center rounded-[6.426px] border-[1.071px] font-[12.851px] font-bold leading-[17.135px] transition-colors duration-200
                ${
                  isSelected
                    ? "bg-[#fff] text-[#055BC9] border-[#055BC9]"
                    : "bg-[#fff] text-[#161616] border-[#E4E6E8] hover:border-[#055BC9]"
                }
              `}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
