"use client";

import * as Tabs from "@radix-ui/react-tabs";
import {
  Plane,
  Landmark,
  Map,
  Building,
  Users,
  CalendarDays,
  Clock,
  Info,
} from "lucide-react";
import { useState } from "react";

const itinerary = [
  {
    day: "Day 1",
    title: "Departure from Dhaka and Arrival in Jeddah",
    type: ["Flights", "Transfer"],
    description:
      "1. Discover the Historical Landmarks of Makkah: >Cave of Hira (Jabal-e-Noor): Visit the revered location where the Prophet Muhammad received",
    image: "/images/day1.png",
  },
  {
    day: "Day 2",
    title: "Makkah Sightseeing (Ziyarah)",
    type: ["Explore"],
    description:
      "Begin your spiritual journey with Makkah sightseeing (Ziyarat). Cover Jabal Al Noor, Jabal Al Thur, and other significant Islamic heritage sites.",
    image: "/images/day2.png",
  },
  {
    day: "Day 3",
    title: "Makkah",
    type: ["Activities"],
    description:
      "Devote your day in Makkah to engaging in your customary prayers and acts of worship (ibadah).",
    image: "/images/day3.png",
  },
  {
    day: "Day 4",
    title: "Journey from Makkah to Madinah",
    type: ["Transfer"],
    description:
      "Upon concluding your spiritual journey in Makkah, proceed to check out of your hotel and make your way to the sacred city of Madinah. Upon your",
    image: "/images/day4.png",
  },
  {
    day: "Day 5",
    title: "Explore the Historical Sites of Madinah",
    type: ["Explore"],
    description:
      "Discover the Historical Landmarks of Madinah Masjid-e-Quba: Experience the significance of the first mosque established by Muslims, an important",
    image: "/images/day5.png",
  },
  {
    day: "Day 6",
    title: "Departure from Madinah to Dhaka",
    type: ["Flights"],
    description:
      "Check out of your Madinah hotel and transfer to Madinah or Jeddah airport for your flight back to Dhaka.",
    image: "/images/day6.png",
  },
];

export default function ItineraryPage() {
  const [filter, setFilter] = useState("All");

  const filterItinerary = (items) => {
    if (filter === "All") return items;
    return items.filter((i) => i.type.includes(filter));
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Day 1-6  */}
      <div className="col-span-9 border-2 border-gray-200 rounded-2xl mt-4 mx-10">
        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* Top Summary Section */}
          <div className="bg-blue-50 rounded-2xl p-6 grid md:grid-cols-2 gap-4 text-sm mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-600" />
              <span>Suitable for: Family</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-gray-600" />
              <span>Availability: 10 Jun’25 - 05 Jul’25</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-600" />
              <span>5 Nights 6 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-gray-600" />
              <span>
                The package is non-refundable and non-changeable.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-600" />
              <span>4 - 28</span>
            </div>
          </div>

          {/* Section Title */}
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
            Fulfilling
          </span>
          <h1 className="text-xl font-bold mb-4">Itinerary Details</h1>

          {/* Tabs for Days */}
          <Tabs.Root defaultValue="All">
            <Tabs.List className="flex space-x-2 overflow-x-auto border-b pb-2">
              <Tabs.Trigger
                value="All"
                className="px-4 py-2 text-sm font-medium rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-blue-100 transition"
              >
                All
              </Tabs.Trigger>
              {itinerary.map((item) => (
                <Tabs.Trigger
                  key={item.day}
                  value={item.day}
                  className="px-4 py-2 text-sm font-medium rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-blue-100 transition"
                >
                  {item.day}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {/* Filter Buttons */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {["All", "Flights", "Transfer", "Explore", "Activities"].map(
                (f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border ${
                      filter === f
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-gray-700 hover:bg-blue-100"
                    }`}
                  >
                    {f}
                  </button>
                )
              )}
            </div>

            {/* All Tab */}
            <Tabs.Content value="All" className="mt-6 space-y-6">
              {filterItinerary(itinerary).map((item) => (
                <div
                  key={item.day}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  {/* Header strip */}
                  <div className="flex justify-between items-center bg-blue-50 px-4 py-2 text-sm text-gray-600">
                    <span className="font-semibold text-blue-600">
                      {item.day}
                    </span>
                    <div className="flex gap-2">
                      {item.type.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-gray-100 px-2 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Card content */}
                  <div className="flex flex-col md:flex-row">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg m-0 md:w-[250px] md:h-[132px] md:m-4"
                    />
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <h2 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h2>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                      <button className="mt-3 text-blue-600 text-sm font-medium hover:underline self-start">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Tabs.Content>

            {/* Day-wise Tabs */}
            {itinerary.map((item) => (
              <Tabs.Content key={item.day} value={item.day} className="mt-6">
                {filterItinerary([item]).map((filteredItem) => (
                  <div
                    key={filteredItem.day}
                    className="bg-white shadow-md rounded-2xl overflow-hidden"
                  >
                    <div className="flex justify-between items-center bg-blue-50 px-4 py-2 text-sm text-gray-600">
                      <span className="font-semibold text-blue-600">
                        {filteredItem.day}
                      </span>
                      <div className="flex gap-2">
                        {filteredItem.type.map((t) => (
                          <span
                            key={t}
                            className="text-xs bg-gray-100 px-2 py-0.5 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <img
                        src={filteredItem.image}
                        alt={filteredItem.title}
                        className="w-full h-48 object-cover rounded-lg m-0 md:w-[250px] md:h-[132px] md:m-4"
                      />
                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <h2 className="text-lg font-semibold mb-2">
                            {filteredItem.title}
                          </h2>
                          <p className="text-gray-600 text-sm">
                            {filteredItem.description}
                          </p>
                        </div>
                        <button className="mt-3 text-blue-600 text-sm font-medium hover:underline self-start">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      </div>

      {/* Get started */}
      <div className="col-span-3 text-center mt-4 mr-10">
        <div className="border-2 border-gray-200 rounded-2xl p-6">
          <p className="text-gray-500 text-sm">Starts from</p>
          <p className="text-2xl font-bold my-2">
            <span className="text-sm font-semibold mr-1">BDT</span> 40,150
          </p>
          <p className="text-gray-500 text-sm mb-4">per person</p>

          <button className="w-full py-2.5 rounded-lg text-white font-medium bg-gradient-to-r from-[#0A60F9] to-[#B004FE] hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
