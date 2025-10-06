// components/TravellerForm.jsx
"use client";
import { useState } from "react";
import TravellerDetails from "./TravellerDetails";
import PrimaryDetails from "./PrimaryDetails";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from "@headlessui/react";
import Link from "next/link";

export default function TravellerForm({ plan, selectedCountries }) {
  const [travellers, setTravellers] = useState([
    { fullName: "", dob: "", gender: "" },
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 font-manrope gap-6">
      {/* LEFT SIDE SUMMARY */}
      <div className="p-6">
        <h2 className="text-[40.198px] font-semibold mb-4">Add Travellers</h2>
        <div className="flex flex-col mb-4 items-start self-stretch gap-[9.458px] px-[29.321px] pt-[28.612px] pb-[29.321px] rounded-[12px]  border-[1.5px] border-[#E4E6E8] bg-white">
          <p className="text-[#161616] text-[26.011px] font-bold leading-normal not-italic">
            {selectedCountries && selectedCountries.length > 0
              ? selectedCountries.join(", ")
              : "Select Destination"}
          </p>
          <p className="text-[16.552px] text-[#161616]">
            <span className=" font-bold">2 Jun’</span>25 –To–{" "}
            <span className="font-bold">4 Jun’</span>25 | 1 Traveller
          </p>
        </div>
        {/* Insurance Summary */}
        <div className="flex flex-col items-start self-stretch gap-[4.729px] p-[29.321px] rounded-[12px] border-[1.5px] border-[#E4E6E8] bg-white">
          <div className="flex items-center justify-between w-full">
            <p className="text-[#055BC9] text-[16.552px] font-bold not-italic leading-[23.646px]">
            INSURANCE
          </p>
          <img src="/icons/edit-icon.svg" alt="" />
          </div>
          <h3 className="text-[#161616] text-[16.552px] font-bold not-italic leading-[23.646px]">
            {plan.title}
          </h3>
          <p className="text-[#161616] text-[16.552px] font-bold not-italic leading-[23.646px]">
            {plan.subtitle}
          </p>
          <p className="text-[#161616] pb-3 text-[16.552px] font-bold not-italic leading-[23.646px]">
            Sum insured: ৳{plan.discountedPrice}
          </p>
          <div className="flex items-center justify-between w-full ">
            <p className="text-[#161616] text-[16.552px] font-bold not-italic leading-[23.646px]">
            Amount to pay: ৳ {plan.originalPrice} ৳ {plan.discountedPrice}
          </p>
          <p className="text-base not-italic font-bold leading-6 text-[#71B0FF]">T&Cs</p>
          </div>
        </div>

        <div className="flex items-start gap-2 mt-6">
          <img className="w-8 h-10 flex-shrink-0" src="/icons/like-icon.svg" alt="" />
          <p className="mt-1 text-xl not-italic font-bold text-[#055BC9]">Great Choice!</p>
        </div>
        <p className="text-[18.917px] not-italic font-normal text-[#989898]">Over 15k Travellers insured in the last 3 months.</p>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="p-6 border rounded-lg shadow-sm">
        <h2 className="text-[#161616] text-[24px] font-bold not-italic leading-[130%]">
          Traveller Details
        </h2>
        <p className="text-[#989898] text-[16px] font-semibold not-italic leading-[160%] pb-6">
          Covers Bangladeshi citizens between age of 6 months and 70 years
        </p>

        {/* Traveller Details Component */}
        <TravellerDetails />

        {/* Personal Contact */}
        <PrimaryDetails />

        {/* Continue Button */}
        <div className="grid grid-cols-6 gap-4 mt-6">
          <div className="col-span-2">
            <Button className="w-full flex justify-around items-center mt-6 rounded-[100px] bg-[#fff] hover:bg-[linear-gradient(100deg,#0A60F9_-0.05%,#B004FE_93.06%)] border-2 border-[#989898] text-[18px] hover:text-[#fff] text-[#989898]  font-semibold px-4 py-3">
          <Link href="/insurance" className="flex items-center gap-2">
          <FaArrowLeftLong className="w-5 h-5"/>Back
          </Link>
        </Button>
          </div>
          <div className="col-span-4">
            <button className="w-full mt-6 rounded-[100px] bg-[linear-gradient(100deg,#0A60F9_-0.05%,#B004FE_93.06%)] shadow-[0_0.976px_6.829px_0_rgba(0,0,0,0.21)] text-[18px] text-[#FFF] font-semibold px-4 py-3">
          Continue
        </button>
          </div>
        </div>
      </div>
  </div>
  );
}
