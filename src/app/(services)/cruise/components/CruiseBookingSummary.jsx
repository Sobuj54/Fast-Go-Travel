"use client";

import {
  Calendar,
  BedDouble,
  Users,
  Ship,
  Info,
  SquarePen,
} from "lucide-react";
import Link from "next/link";

export default function CruiseBookingSummary() {
  return (
    <section>
      {/* Card */}
      <div className="bg-white rounded-xl shadow-md p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Booking Summary
        </h2>

        {/* Cruise Info */}
        <div className="mb-4 flex items-center">
          <Ship className="w-7 h-7 text-blue-600 mr-2 text-lg" />
          <div>
            <span className="text-lg font-medium">
              Caribbean Paradise Cruise
            </span>
            <span className="text-sm block">Royal Caribbean Cruise</span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-gray-500 mr-2" />
            22–29 May 2025
          </div>
          <div className="flex items-center">
            <BedDouble className="w-4 h-4 text-gray-500 mr-2" />
            Balcony Suite
          </div>
          <div className="flex items-center">
            <Info className="w-4 h-4 text-gray-500 mr-2" />7 Nights
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 text-gray-500 mr-2" />2 Adults
          </div>
        </div>

        <hr className="my-4" />

        {/* Pricing */}
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Base Price (2 Adults)</span>
            <span>৳86,000</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes & Port Fees</span>
            <span>৳12,400</span>
          </div>
          <div className="flex justify-between">
            <span>Travel Insurance</span>
            <span>৳0</span>
          </div>
        </div>

        <hr className="my-4" />

        {/* Total */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold text-lg">Total</span>
          <span className="font-bold text-xl text-gray-900">৳98,400</span>
        </div>

        {/* Edit Booking Button */}
        <button className="w-full border border-gray-300 rounded-md py-2 text-gray-700 font-medium flex items-center justify-center mb-3 hover:bg-gray-50 transition">
          <SquarePen className="w-4 h-4 mr-2 text-gray-500" />
          Edit Booking
        </button>

        {/* Continue Button */}
        <Link href={"/payment"}>
          <button className="w-full py-3 rounded-md text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition">
            Continue to Payment →
          </button>
        </Link>
      </div>

      {/* Secure Booking Guarantee */}
      <div className="mt-4 bg-blue-50 border border-blue-100 rounded-md p-4 flex items-start space-x-3">
        <Info className="w-5 h-5 text-blue-600 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-gray-800">
            Secure Booking Guarantee
          </p>
          <p className="text-xs text-gray-600">
            Your payment information is encrypted and secure. We never store
            your credit card details.
          </p>
        </div>
      </div>
    </section>
  );
}
