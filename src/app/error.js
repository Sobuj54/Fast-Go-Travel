"use client";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const error = () => {
  return (
    <div className="max-w-7xl px-3 mx-auto flex items-center justify-center flex-col-reverse md:flex-row my-8  xl:my-32">
      <div className="space-y-8 text-center md:text-start">
        <h1 className="text-[#000] text-4xl md:text-5xl lg:text-6xl font-bold">
          Oops....{" "}
        </h1>
        <h1 className="text-[#000] text-2xl md:text-3xl lg:text-4xl font-bold">
          Page not found{" "}
        </h1>
        <p className="text-xl font-semibold">
          This Page doesn`t exist or was removed! We suggest you back to home.
        </p>
        <Link
          href="/"
          className="mt-12 mx-auto md:mx-0 max-w-[340px] flex justify-center items-center gap-4 lg:gap-9 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 font-semibold text-white text-lg py-3  hover:from-purple-600 hover:to-purple-700 transition-colors duration-300 text-center"
        >
          <FaArrowLeft />
          Back to home
        </Link>
      </div>
      <div>
        <img src="/images/error.png"></img>
      </div>
    </div>
  );
};

export default error;
