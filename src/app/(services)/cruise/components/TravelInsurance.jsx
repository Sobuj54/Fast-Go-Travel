"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";

export default function TravelInsurance() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="w-full rounded-xl shadow-md p-4 mt-5 md:mt-14">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-base md:text-2xl font-semibold text-[#1E2A3A]">
            Travel Insurance
          </h2>
          <p className="text-sm text-gray-500">
            Protect your trip with comprehensive coverage
          </p>
        </div>
        <Switch checked={enabled} onCheckedChange={setEnabled} />
      </div>

      {/* Insurance Details */}
      {enabled && (
        <div className="bg-[#E8F0FA] p-4 rounded-lg flex justify-between items-start">
          <div>
            <h3 className="text-sm font-semibold text-[#1E2A3A] mb-2">
              Standard Travel Protection
            </h3>
            <ul className="space-y-1 text-sm text-[#1E2A3A]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-500" />
                Trip cancellation & interruption
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-500" />
                Emergency medical expenses
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-500" />
                Baggage protection
              </li>
            </ul>
          </div>
          <div className="text-right">
            <p className="text-base font-semibold text-[#1E2A3A]">৳800</p>
            <p className="text-xs text-gray-500">per person</p>
          </div>
        </div>
      )}
    </div>
  );
}
