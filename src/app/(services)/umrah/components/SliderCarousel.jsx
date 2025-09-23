"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const images = [
  {
    src: "/images/umrah1.jpg",
    title: "Umrah Package 5 Nights 6 Days",
    subtitle: "5 Nights 6 Days",
  },
  { src: "/images/umrah2.jpg" },
  { src: "/images/umrah3.jpg" },
  { src: "/images/umrah4.jpg" },
  { src: "/images/umrah5.jpg" },
];

export default function SliderCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-cover mx-auto h-[400px] flex overflow-hidden relative rounded-lg shadow-lg">
      {images.map((img, i) => {
        const isActive = i === activeIndex;

        return (
          <motion.div
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`relative cursor-pointer`}
            animate={{
              flex: isActive ? 6 : 1, // 60% vs 10%
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src={img.src}
              alt={img.title || "Umrah Image"}
              fill
              className="object-cover"
            />

            {/* Overlay only on active slide */}
            {isActive && (
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
                {img.title && (
                  <h2 className="text-xl font-bold drop-shadow-md">
                    {img.title}
                  </h2>
                )}
                {img.subtitle && (
                  <p className="text-sm drop-shadow-md">{img.subtitle}</p>
                )}
              </div>
            )}
          </motion.div>
        );
      })}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 lg:left-40 top-1/2 -translate-y-1/2 bg-[#055BC9] text-white px-2 py-4 rounded-2xl shadow-md hover:bg-[#B004FE]"
      >
        <SlArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 lg:right-40 top-1/2 -translate-y-1/2 bg-[#055BC9] text-white px-2 py-4 rounded-2xl shadow-md hover:bg-[#B004FE]"
      >
        <SlArrowRight />
      </button>
    </div>
  );
}
