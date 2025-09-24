"use client";

import { Ship, Users, Calendar, Phone, Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function CruiseOverview() {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-8 px-2 md:px-0 flex flex-col lg:flex-row gap-6">
      {/* LEFT CONTENT */}
      <div className="flex-1  space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10">
          Cruise Overview
        </h1>
        <p>
          Experience the journey of a lifetime aboard the Royal Ocean Explorer
          as you sail from the gleaming cityscape of Dubai to the pristine
          beaches of the Maldives. This 7-day luxury cruise offers the perfect
          blend of relaxation, adventure, and cultural immersion.
        </p>
        <p>
          Enjoy world-class dining, entertainment, and amenities while visiting
          exotic ports of call. From the bustling souks of Dubai to the serene
          waters of the Maldives, every moment of your journey is designed to
          create unforgettable memories.
        </p>
        <p>
          Enjoy world-class dining, entertainment, and amenities while visiting
          exotic ports of call. From the bustling souks of Dubai to the serene
          waters of the Maldives, every moment of your journey is designed to
          create unforgettable memories.
        </p>
        <p>
          Enjoy world-class dining, entertainment, and amenities while visiting
          exotic ports of call. From the bustling souks of Dubai to the serene
          waters of the Maldives, every moment of your journey is designed to
          create unforgettable memories.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="flex items-center gap-2 bg-[#E5E7EB] px-4 py-2 rounded-full text-sm shadow-sm">
            <Ship className="w-4 h-4" color="blue" /> Royal Ocean Explorer
          </span>
          <span className="flex items-center gap-2 bg-[#E5E7EB] px-4 py-2 rounded-full text-sm shadow-sm">
            <Users className="w-4 h-4" color="blue" /> 2,800 Passengers
          </span>
          <span className="flex items-center gap-2 bg-[#E5E7EB] px-4 py-2 rounded-full text-sm shadow-sm">
            <Calendar className="w-4 h-4" color="blue" /> Built in 2021
          </span>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full lg:w-80 flex flex-col gap-4">
        {/* Price Summary */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Price Summary
          </h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Selected Dates</span>
              <span className="font-medium">22 - 28 May, 2025</span>
            </div>
            <div className="flex justify-between">
              <span>Selected Cabin</span>
              <span className="font-medium">Balcony Cabin</span>
            </div>
            <div className="flex justify-between">
              <span>Guests</span>
              <span className="font-medium">2 Adults</span>
            </div>
            <div className="flex justify-between">
              <span>Cabin Price</span>
              <span className="font-medium">৳130,000</span>
            </div>
            <div className="flex justify-between">
              <span>Port Fees & Taxes</span>
              <span className="font-medium">৳12,000</span>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-baseline mt-6">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-xl font-bold text-gray-900">৳142,000</p>
          </div>

          {/* Button */}
          <Link href={"/cruise/booking"}>
            <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 rounded-full shadow-md transition cursor-pointer">
              Proceed to Booking
            </button>
          </Link>

          {/* Secure note */}
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2 mt-4">
            <Lock size={17} />
            <span>Secure payment process</span>
          </p>
        </div>

        {/* Help Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Need Help?
          </h4>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>+880 1234 567890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>support@fastgotravel.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
