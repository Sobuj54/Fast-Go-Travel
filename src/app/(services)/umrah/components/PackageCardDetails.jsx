"use client";

import { useState } from "react";
import ItineraryPage from "./ItineraryPage";
import UmrahCarousel from "./UmrahCarousel";

export default function PackageCardDetails({
  data,
  open = true,
  onClose = () => {},
}) {
  const [activeDay, setActiveDay] = useState(0);

  if (!open || !data) return null;

  return (
    <div>
      <UmrahCarousel />
      {/* ✅ Pass data into ItineraryPage */}
      <ItineraryPage data={data} />
    </div>
  );
}
