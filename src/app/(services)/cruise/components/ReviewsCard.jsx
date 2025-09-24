"use client";

import { Star } from "lucide-react";

const reviews = [
  { stars: 5, percent: 90 },
  { stars: 4, percent: 10 },
  { stars: 3, percent: 0 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 0 },
];

export default function ReviewsCard() {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-10">
          Reviews
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-12">
          {/* Left: Score */}
          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
            <span className="text-5xl font-bold text-gray-900">4.9</span>
            <p className="text-gray-600 mt-1 text-sm">Based On 3 Reviews</p>
          </div>

          {/* Right: Breakdown */}
          <div className="flex-1 space-y-3 w-full">
            {reviews.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 text-gray-700 text-sm"
              >
                {/* Stars */}
                <div className="flex space-x-1 w-28">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < item.stars
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Progress bar */}
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>

                {/* Percentage */}
                <span className="w-10 text-right text-gray-600">
                  {item.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
