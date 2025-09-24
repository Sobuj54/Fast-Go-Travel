"use client";
import { cn } from "@/lib/utils";
import { BookImage, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/ship1.jpg",
  "/images/ship2.jpg",
  "/images/ship3.jpg",
  "/images/ship4.jpg",
  "/images/ship5.jpg",
];

const CruiseCarousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const goRight = () => {
    setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goLeft = () => {
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="flex w-full h-[400px] md:h-[600px] gap-1 relative overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`relative transition-all duration-500 ease-in-out 
            ${i === currentImg ? "flex-[6]" : "flex-[1]"}`}
        >
          <Image src={img} alt={`ship${i}`} fill className="object-cover" />
          {currentImg === i && (
            <div className="absolute bottom-0 w-full z-10 h-1/3 flex flex-col items-start pl-4 md:pl-26 text-white gap-1 md:gap-5">
              <h1 className="text-lg md:text-4xl font-bold">
                Royal Ocean Explorer – Dubai to Maldives
              </h1>
              <h3 className="text-base md:text-3xl font-semibold">
                5 Nights 6 Days
              </h3>
              <div className="flex gap-1 md:gap-2 text-xs md:text-2xl">
                <h3>
                  ⭐ ⭐ ⭐ ⭐ ⭐ <span>4.7</span>
                </h3>
                |<h3>253 Reviews</h3>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="absolute top-10 right-10 z-10 flex gap-3 items-center">
        {images.map((_, i) => (
          <p
            key={i}
            className={cn(
              i === currentImg
                ? "text-white border-t-2 border-white"
                : "text-black",
              "text-lg font-bold w-10 mx-auto text-center"
            )}
          >
            0{i + 1}
          </p>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 w-full flex justify-between px-10 md:px-20 -translate-y-1/2">
        <ChevronLeft
          color="white"
          className="bg-[#055BC9] w-10 h-10 rounded-full cursor-pointer"
          onClick={goLeft}
        />
        <ChevronRight
          color="white"
          className="bg-[#055BC9] w-10 h-10 rounded-full cursor-pointer"
          onClick={goRight}
        />
      </div>

      <div className="absolute z-10 bg-white px-6 py-3 rounded-md opacity-90 text-[#055BC9] bottom-1/6 right-1/12 flex gap-2 items-center">
        <BookImage color="#055BC9" size={17} /> View Gallery
      </div>
    </section>
  );
};

export default CruiseCarousel;
