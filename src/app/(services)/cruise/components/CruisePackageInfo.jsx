"use client";

import { Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

export default function CruisePackageInfo() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center md:items-center justify-between p-4 md:p-6 gap-4 my-16 ">
      {/* Left Info Section */}
      <div className="flex flex-col sm:flex-row gap-5 md:gap-20 flex-1 w-1/2 mx-auto">
        {/* Departure Date */}
        <div>
          <p className="text-sm text-gray-500">Departure Date</p>
          <div className="flex items-center gap-2 mt-2">
            <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <p className="text-sm font-medium text-gray-900">22 May 2025</p>
          </div>
        </div>

        {/* Duration */}
        <div>
          <p className="text-sm text-gray-500">Duration</p>
          <div className="flex items-center gap-2 mt-2">
            <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <p className="text-sm font-medium text-gray-900">
              7 Days / 6 Nights
            </p>
          </div>
        </div>

        {/* Starting Price */}
        <div>
          <p className="text-sm text-gray-500">Starting Price</p>
          <div className="flex items-center gap-2 mt-2">
            <Tag className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <p className="text-sm font-medium text-gray-900">
              ৳45,000{" "}
              <span className="font-normal text-gray-700">per person</span>
            </p>
          </div>
        </div>

        {/* Availability */}
        <div>
          <p className="text-sm text-gray-500">Availability</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0"></span>
            <p className="text-sm font-medium text-green-600">
              Few Cabins Left
            </p>
          </div>
        </div>
      </div>

      {/* Right Button */}
      <Link href="/cruise/booking">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium px-6 py-2 rounded-full shadow-md transition cursor-pointer">
          Book Now
        </button>
      </Link>
    </div>
  );
}
