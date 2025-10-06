"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Clock, Globe, Video } from "lucide-react";

export default function MeetingBooking() {
  const [date, setDate] = useState(new Date().toLocaleDateString());

  return (
    <section className="max-w-6xl mx-auto my-20 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold text-center">
          Book a Consultation
        </h1>
        <p className="text-lg md:text-xl text-center mt-5 mb-10 text-[#666666]">
          Talk to us about your goals, challenges, and needs—discover how our
          services can help, with no commitment required.
        </p>
      </div>
      <div className="w-full border shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-gray-200">
          <p className="text-lg md:text-2xl text-gray-600 mb-1">Brent Welch</p>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6">
            30 Minute Meeting
          </h2>

          <div className="flex items-center gap-2 text-gray-700 mb-3">
            <Clock size={20} />
            <span className="text-lg ">30 min</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Video size={25} />
            <span className="text-lg">
              Web conferencing details provided upon <br /> confirmation.
            </span>
          </div>
        </div>

        {/* Right Panel */}
        <div className="relative flex-1 flex flex-col p-6">
          <h3 className="text-base md:text-2xl font-semibold text-gray-900 mb-4">
            Select a Date & Time
          </h3>

          {/* Calendar stretched full width */}
          <div className="flex-1">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              defaultMonth={date}
              className="w-full h-full [&_.rdp-table]:w-full [&_.rdp-table]:table-fixed"
            />
          </div>

          {/* Timezone */}
          <div className="flex items-center gap-2 text-gray-700 text-sm mt-6">
            <Globe className="w-4 h-4" />
            <span>UTC Time (07:13)</span>
            <button className="ml-auto text-gray-500 hover:text-gray-700">
              ▼
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
