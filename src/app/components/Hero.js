"use client";

import Image from "next/image";
import React from "react";
import TabSystem from "../(services)/components/TabSystem";

const PriceTagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    className="h-6 w-6 flex-shrink-0"
  >
    <path
      d="M8.134 8.995C8.53183 8.995 8.91336 8.83696 9.19466 8.55566C9.47597 8.27435 9.634 7.89282 9.634 7.495C9.634 7.09717 9.47597 6.71564 9.19466 6.43434C8.91336 6.15303 8.53183 5.995 8.134 5.995C7.73618 5.995 7.35465 6.15303 7.07334 6.43434C6.79204 6.71564 6.634 7.09717 6.634 7.495C6.634 7.89282 6.79204 8.27435 7.07334 8.55566C7.35465 8.83696 7.73618 8.995 8.134 8.995Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.51701 2C4.75399 2 4.02221 2.30311 3.48267 2.84265C2.94313 3.3822 2.64001 4.11397 2.64001 4.877V11.852C2.64001 12.615 2.94301 13.347 3.48301 13.886L10.753 21.157C11.0202 21.4243 11.3374 21.6364 11.6866 21.7811C12.0358 21.9258 12.41 22.0003 12.788 22.0003C13.166 22.0003 13.5402 21.9258 13.8894 21.7811C14.2386 21.6364 14.5558 21.4243 14.823 21.157L21.797 14.183C22.0644 13.9158 22.2764 13.5986 22.4211 13.2494C22.5658 12.9002 22.6403 12.526 22.6403 12.148C22.6403 11.77 22.5658 11.3958 22.4211 11.0466C22.2764 10.6974 22.0644 10.3802 21.797 10.113L14.527 2.843C14.2597 2.57559 13.9423 2.36349 13.5929 2.21884C13.2436 2.07419 12.8691 1.99983 12.491 2H5.51701ZM4.64001 4.877C4.64001 4.392 5.03301 3.999 5.51801 3.999H12.493C12.726 3.999 12.949 4.091 13.114 4.256L20.384 11.527C20.728 11.87 20.728 12.427 20.384 12.769L13.41 19.744C13.3285 19.8256 13.2317 19.8903 13.1251 19.9344C13.0186 19.9786 12.9044 20.0013 12.789 20.0013C12.6737 20.0013 12.5595 19.9786 12.4529 19.9344C12.3464 19.8903 12.2495 19.8256 12.168 19.744L4.89801 12.473C4.7331 12.3084 4.6403 12.085 4.64001 11.852V4.877Z"
      fill="white"
    />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative flex min-h-[550px] items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Tropical beach background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center">
        <h1 className="mb-10 text-4xl font-bold text-white md:text-6xl">
          Discover Great Experiences
        </h1>

        <TabSystem />

        <div className="mx-auto mt-8 flex max-w-fit items-center gap-x-3 rounded-xl bg-blue-600/80 px-6 py-3 text-base text-white backdrop-blur-sm">
          <PriceTagIcon />
          <span>
            Save 25% or more: The Member Appreciation Sale, now through Oct 20th.{" "}
            <a href="#" className="font-semibold underline">
              See all criteria.
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}