import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export default function CruiseCards({ image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-300 ease-in-out">
      <Image
        src={image}
        alt="Cruise"
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Royal Ocean Explorer</h3>
          <div className="flex items-center text-yellow-500 text-sm">
            <Star className="w-4 h-4 fill-yellow-500" />
            <span className="ml-1">4.8 (230 reviews)</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">Oceanic Voyages</p>

        <div className="space-y-2 mt-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-500" /> Dubai to Maldives
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-500" /> 22 May 2025
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-500" /> 7 Days / 6 Nights
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3 text-xs">
          {["All-Inclusive", "Luxury", "Family Friendly"].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <p className="font-semibold text-lg text-gray-800">
            Starting from <br />
            <span className="text-blue-600">৳45,000</span>
            <span className="text-sm text-gray-500"> / per person</span>
          </p>
          <Link href="/cruise/details">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
