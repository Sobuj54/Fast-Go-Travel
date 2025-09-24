"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Bed,
  Snowflake,
  Tv,
  Wifi,
  Utensils,
  GlassWater,
} from "lucide-react";

const cabins = [
  {
    id: 1,
    name: "Interior Cabin",
    image: "/images/cabin1.svg",
    guests: "2 Guests",
    size: "185 sq ft",
    description:
      "Comfortable and economical interior stateroom with all essential amenities.",
    price: "৳45,000",
    features: [Bed, Snowflake, Tv, Wifi],
    popular: false,
  },
  {
    id: 2,
    name: "Balcony Cabin",
    image: "/images/cabin2.jpg",
    guests: "2 Guests",
    size: "185 sq ft",
    description:
      "Spacious cabin with a private balcony offering stunning ocean views.",
    price: "৳65,000",
    features: [Bed, Snowflake, Tv, Wifi, Utensils],
    popular: true,
  },
  {
    id: 3,
    name: "Deluxe Suite",
    image: "/images/cabin3.svg",
    guests: "2 Guests",
    size: "185 sq ft",
    description:
      "Luxurious suite with separate living area, premium amenities and butler service.",
    price: "৳95,000",
    features: [Bed, Snowflake, Tv, Wifi, Utensils, GlassWater],
    popular: false,
  },
];

export default function CabinCards() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-10 mt-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-10">
        Cabin & Room Types
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cabins.map((cabin) => (
          <Card
            key={cabin.id}
            className="rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl transition"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={cabin.image}
                alt={cabin.name}
                fill
                className="object-cover"
              />
              {cabin.popular && (
                <Badge className="absolute top-3 left-7 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </Badge>
              )}
            </div>

            <CardContent className="px-5 pb-5 space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  {cabin.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                  <span className="flex items-center gap-1 bg-[#E5E7EB] px-3 py-1 rounded-xl">
                    <Users size={14} /> {cabin.guests}
                  </span>
                  <span className="flex items-center gap-1 bg-[#E5E7EB] px-3 py-1 rounded-xl">
                    <Bed size={14} /> {cabin.size}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600">{cabin.description}</p>

              <div className="flex flex-wrap gap-3">
                {cabin.features.map((Icon, index) => (
                  <Icon
                    key={index}
                    size={27}
                    className="text-gray-600 bg-gray-100 p-1 rounded-full"
                  />
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p className="text-sm text-gray-500">From</p>
                  <p className="text-xl font-semibold">{cabin.price}</p>
                  <p className="text-xs text-gray-500">per person</p>
                </div>
                <button
                  className="rounded-full border-2 py-1 px-6 
             border-purple-500 text-purple-600 font-medium 
             bg-white 
             hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 
             hover:border-transparent hover:text-white 
             transition duration-300 cursor-pointer"
                >
                  Select
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
