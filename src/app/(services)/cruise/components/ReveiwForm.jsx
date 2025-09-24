"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import showToast from "@/utils/showToast";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [recommend, setRecommend] = useState("no");

  return (
    <section className="max-w-[1440px] mx-auto mt-10">
      <div className="w-full max-w-3xl p-4 md:p-6">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-1">
              First Name
            </label>
            <Input
              placeholder="Type first name"
              className="rounded-md bg-[#E8F0FE] border-0 text-gray-700 placeholder:text-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Last Name
            </label>
            <Input
              placeholder="Type Last name"
              className="rounded-md bg-[#E8F0FE] border-0 text-gray-700 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Rating*</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={22}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className={`cursor-pointer transition-colors ${
                  star <= (hover || rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Write Message */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">
            Write Message
          </label>
          <Textarea
            placeholder="Type your message..."
            className="rounded-md bg-[#E8F0FE] border-0 text-gray-700 placeholder:text-gray-500 h-28"
          />
        </div>

        {/* Recommendation */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">
            Do you recommend this product?
          </label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="recommend"
                value="yes"
                checked={recommend === "yes"}
                onChange={(e) => setRecommend(e.target.value)}
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="recommend"
                value="no"
                checked={recommend === "no"}
                onChange={(e) => setRecommend(e.target.value)}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          className="w-full rounded-full text-white font-medium py-6 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition"
          onClick={showToast}
        >
          Submit Review
        </Button>
      </div>
    </section>
  );
}
