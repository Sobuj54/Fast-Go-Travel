"use client";

import { useState } from "react";
import SliderCarousel from "./SliderCarousel";
import ItineraryPage from "./ItineraryPage";

export default function PackageCardDetails({ data, open = true, onClose = () => {} }) {
  const [activeDay, setActiveDay] = useState(0);

  if (!open || !data) return null;

  return (
    <div>
      <SliderCarousel />
      {/* ✅ Pass data into ItineraryPage */}
      <ItineraryPage data={data} />
    </div>
  );
}
