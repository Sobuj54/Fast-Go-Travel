"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const PackageLeftSidebar = () => {
  const [durationRange, setDurationRange] = useState([10]); // Default 11–14 days
  const [withFlight, setWithFlight] = useState(false);
  const [withoutFlight, setWithoutFlight] = useState(true);
  const [fulfilling, setFulfilling] = useState(false);

  return (
    <div className="space-y-6 md:mb-10">
      {/* Package Duration */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg mb-4">Package Duration</h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>

        <Slider
          value={durationRange}
          max={20}
          step={1}
          onValueChange={setDurationRange}
        />

        <div className="flex justify-between text-sm text-gray-600 mt-4">
          <span>5–7<br />Days</span>
          <span>8–10<br />Days</span>
          <span>11–14<br />Days</span>
          <span>14+<br />Days</span>
        </div>
      </div>

      {/* Flight Options */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg mb-4">Flight</h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>

        <div className="space-y-2">
          <Button
            variant={withFlight ? "default" : "outline"}
            onClick={() => setWithFlight(!withFlight)}
            className="w-full justify-between"
          >
            With Flight
            <span className="text-sm text-gray-400 ml-2">(0)</span>
          </Button>
          <Button
            variant={withoutFlight ? "default" : "outline"}
            onClick={() => setWithoutFlight(!withoutFlight)}
            className="w-full justify-between"
          >
            Without Flight
            <span className="text-sm text-gray-400 ml-2">(1)</span>
          </Button>
        </div>
      </div>

      {/* Tags */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg mb-4">Tags</h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>

        {/* Search tags input (non-functional here, for design) */}
        <input
          type="text"
          placeholder="Search Tags"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        {/* Fulfilling Tag */}
        <label className="text-base flex items-center">
          <Checkbox
            className="mr-3"
            checked={fulfilling}
            onCheckedChange={() => setFulfilling(!fulfilling)}
          />
          Fulfilling (1)
        </label>
      </div>
    </div>
  );
};

export default PackageLeftSidebar;
