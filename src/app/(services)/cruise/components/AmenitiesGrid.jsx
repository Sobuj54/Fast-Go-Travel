"use client";

import {
  Utensils,
  Waves,
  Flower,
  Dice6,
  Baby,
  Theater,
  Map,
  Wifi,
} from "lucide-react";

const features = [
  {
    icon: <Utensils className="w-8 h-8 text-blue-500" />,
    title: "5 Restaurants",
    description: "Fine dining to casual options",
  },
  {
    icon: <Waves className="w-8 h-8 text-blue-500" />,
    title: "3 Pools",
    description: "Including adults-only infinity pool",
  },
  {
    icon: <Flower className="w-8 h-8 text-blue-500" />,
    title: "Spa & Wellness",
    description: "Full-service spa treatments",
  },
  {
    icon: <Dice6 className="w-8 h-8 text-blue-500" />,
    title: "Casino",
    description: "Table games and slot machines",
  },
  {
    icon: <Baby className="w-8 h-8 text-blue-500" />,
    title: "Kids Club",
    description: "Age-specific activities",
  },
  {
    icon: <Theater className="w-8 h-8 text-blue-500" />,
    title: "Live Shows",
    description: "Broadway-style entertainment",
  },
  {
    icon: <Map className="w-8 h-8 text-blue-500" />,
    title: "Shore Excursions",
    description: "Guided tours at each port",
  },
  {
    icon: <Wifi className="w-8 h-8 text-blue-500" />,
    title: "Wi-Fi",
    description: "Available throughout the ship",
  },
];

export default function AmenitiesGrid() {
  return (
    <section className="max-w-[1440px] mx-auto my-20">
      <h1 className="text-3xl md:text-4xl font-bold">
        Onboard Amenities & Experiences
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-16">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 mb-4">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm text-center mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
