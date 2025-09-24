"use client";

import { Card, CardContent } from "@/components/ui/card";

const InclusionsExclusions = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Inclusions */}
      <Card className="relative border-none shadow-md overflow-hidden bg-green-50">
        {/* Left Accent */}
        <div className="absolute left-0 top-5 h-10 w-1 bg-green-600" />
        <CardContent className="px-6">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Inclusions</h3>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700">
            <li>
              02 nights accommodation in Sheraton Skyline / Mercure LHR /
              Holiday Inn or similar Hotel in London
            </li>
            <li>
              03 nights accommodation in B&amp;B / Millennium CDG / Hilton CDG
              or similar hotel in Paris
            </li>
            <li>
              01 night accommodation in Novotel / NH / Fletcher or similar hotel
              in Netherlands
            </li>
            <li>
              01 night accommodation in Mercure / Rilano / NH or similar hotel
              in Germany
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Exclusions */}
      <Card className="relative border-none shadow-md overflow-hidden bg-red-50">
        {/* Left Accent */}
        <div className="absolute left-0 top-5 h-10 w-1 bg-red-600" />
        <CardContent className=" px-6">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Exclusions</h3>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700">
            <li>
              The cost of the Airfare, Passport, POE charges, Visa charges,
              Overseas Travel Insurance, etc.
            </li>
            <li>
              Any expenses of personal nature such as Porterage, Laundry, and
              Alcohol, Food or Drink not in the regular menus provided by us,
              mini bar and telephone calls
            </li>
            <li>
              Any extra meals not included in the itinerary. Meals are pre-set
              and a choice of menu is not available
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default InclusionsExclusions;
