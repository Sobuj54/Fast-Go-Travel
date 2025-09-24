"use client";

import { Users, Plus } from "lucide-react";

export default function AddCotraveler() {
  return (
    <div className=" bg-white rounded-xl shadow-md p-6 mt-14">
      {/* Title */}
      <h2 className="text-lg md:text-2xl font-semibold  mb-4">
        Co-Traveler Details
      </h2>

      {/* Empty State */}
      <div className="border border-gray-200 rounded-md py-12 flex flex-col items-center justify-center text-gray-500 mb-4">
        <Users className="w-8 h-8 mb-2" />
        <p className="text-sm">No co-travelers added yet</p>
      </div>

      {/* Add Button */}
      <button className="w-full border border-blue-500 text-blue-600 font-medium py-2 rounded-md flex items-center justify-center hover:bg-blue-50 transition">
        <Plus className="w-4 h-4 mr-2" />
        Add Co-Traveler
      </button>
    </div>
  );
}
