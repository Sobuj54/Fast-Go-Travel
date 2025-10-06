"use client";
import Link from "next/link";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useState } from "react";
import insuranceData from "../data/insurance.json";

export default function InsuranceCard({ selectedCountries = [] }) {
  const [value, setValue] = useState("all");
  const [showPlans, setShowPlans] = useState(false); // toggle state

  return (
    <div className="grid font-manrope gap-6">
      <div className="flex flex-col items-center justify-center">
        {/* View Plans Button */}
        <div className="my-8 w-full max-w-md">
          <button
            onClick={() => setShowPlans(!showPlans)}
            className="bg-[linear-gradient(100deg,#0A60F9_-0.05%,#B004FE_93.06%)] 
              w-full flex items-center justify-center gap-2 rounded-[17.135px] 
              shadow-[0_3.213px_32.128px_rgba(0,0,0,0.16)] px-6 py-3 font-semibold 
              text-white text-[16px]"
          >
            {showPlans ? "HIDE PLANS" : "VIEW PLANS"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 transform transition-transform ${
                showPlans ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Title + Toggle Group + Cards */}
        {showPlans && (
          <div className="flex flex-col">
            {/* Title */}
            <h2 className="text-[21.461px] font-normal text-[#161616]">
              Choose plan for your Trip
            </h2>
            <p className="text-sm text-[#989898]">Sum Insured per Person</p>

            {/* Toggle Group */}
            <ToggleGroup.Root
              type="single"
              value={value}
              onValueChange={(val) => val && setValue(val)}
              className="mt-3 flex font-semibold gap-2"
            >
              <ToggleGroup.Item
                value="all"
                className={`px-4 py-2 text-sm rounded-lg border ${
                  value === "all"
                    ? "bg-blue-50 text-blue-600 border-blue-600 font-medium"
                    : "text-gray-600 border-gray-300"
                }`}
              >
                All
              </ToggleGroup.Item>

              <ToggleGroup.Item
                value="50000"
                className={`px-4 py-2 text-[13.657px] rounded-lg border ${
                  value === "50000"
                    ? "bg-blue-50 text-blue-600 border-blue-600 font-medium"
                    : "text-gray-600 border-gray-300"
                }`}
              >
                ৳50000
              </ToggleGroup.Item>

              <ToggleGroup.Item
                value="100000"
                className={`px-4 py-2 text-[13.657px] rounded-lg border ${
                  value === "100000"
                    ? "bg-blue-50 text-blue-600 border-blue-600 font-medium"
                    : "text-gray-600 border-gray-300"
                }`}
              >
                ৳100000
              </ToggleGroup.Item>

              <ToggleGroup.Item
                value="250000"
                className={`px-4 py-2 text-[13.657px] rounded-lg border ${
                  value === "250000"
                    ? "bg-blue-50 text-blue-600 border-blue-600 font-medium"
                    : "text-gray-600 border-gray-300"
                }`}
              >
                ৳250000
              </ToggleGroup.Item>
            </ToggleGroup.Root>

            {/* Insurance Cards */}
            <div className="mt-6 grid gap-6">
              {insuranceData.map((data) => (
                <div
                  key={data.id}
                  className="max-w-lg w-full rounded-2xl shadow-md border font-manrope bg-white"
                >
                  {/* Top Row */}
                  <div className="flex items-center rounded-2xl justify-between py-4 bg-[#E9F4FF]">
                    <div className="flex items-center gap-2">
                      <span className="bg-[linear-gradient(307deg,#008CFF_32.43%,#59D7FF_94.44%)] text-white text-[13.657px] font-semibold rounded-tr-[15.608px] rounded-br-[15.608px] pt-[6.438px] pr-[7.804px] pb-[4.292px] pl-[7.804px]">
                        {data.tag}
                      </span>
                      <span className="text-[#055BC9] text-[13.657px] font-bold">
                        {data.type}
                      </span>
                    </div>

                    {/* Compare Checkbox */}
                    <div className="flex items-center gap-1 px-4">
                      <span className="text-gray-500 text-sm">Compare</span>
                      <Checkbox.Root className="w-5 h-5 border border-gray-400 rounded-md flex items-center justify-center">
                        <Checkbox.Indicator>
                          <CheckIcon className="w-4 h-4 text-blue-600" />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                    </div>
                  </div>

                  {/* Title & Price */}
                  <div className="mt-3">
                    <div className="grid grid-cols-3 grid-rows-2 lg:flex items-center justify-between mt-2 px-2 gap-2">
                      <div className="col-span-2">
                        <h2 className="text-[17.559px] font-semibold">
                          {data.title}
                        </h2>
                        <p className="text-[#989898] text-[13.657px]">
                          {data.subtitle}
                        </p>
                      </div>
                      <div className="text-right col-span-1 flex flex-col gap-1">
                        <div>
                          <span className="text-[#055BC9] text-[11.706px] font-bold">
                            You Pay
                          </span>
                        </div>
                        <div>
                          <span className="text-[11.706px] text-[#989898] line-through">
                            ৳{data.originalPrice}
                          </span>
                          <span className="text-[#161616] text-[13.657px] font-semibold ml-2">
                            ৳{data.discountedPrice}
                          </span>
                        </div>
                        <div>
                          <p className="text-[#989898] text-[11.706px]">
                            per person
                          </p>
                        </div>
                      </div>
                      <div className="col-span-3 row-span-1 flex justify-center">
                        {/* ✅ Updated: pass selectedCountries in query */}
                        <Link
                          href={{
                            pathname: `/insurance/details/${data.id}`,
                            query: {
                              countries: selectedCountries.join(","),
                            },
                          }}
                          className="rounded-[100px] bg-[linear-gradient(100deg,#0A60F9_-0.05%,#B004FE_93.06%)] shadow-[0_0.976px_6.829px_0_rgba(0,0,0,0.21)] text-[14px] text-[#FFF] font-semibold lg:px-4 lg:py-2 px-30 py-4"
                        >
                          {data.btnText}
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-4 flex items-center gap-2 bg-blue-50 mx-4 p-2 rounded-lg">
                    <Image
                      src={data.logo}
                      alt="Insurance Logo"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                    <p className="text-[#989898] text-[13.657px] font-semibold flex-1">
                      {data.description}
                    </p>
                    <a
                      href={data.tcLink}
                      className="text-[#055BC9] text-[11.706px] font-bold"
                    >
                      T&Cs
                    </a>
                  </div>

                  {/* Benefits */}
                  <div className="my-3 mx-4 grid grid-cols-4 gap-2 text-center rounded-b-[7.804px] text-[11.706px] bg-[linear-gradient(102deg,rgba(239,255,254,0.5)_0.83%,rgba(230,237,255,0.37)_26.25%,rgba(234,246,255,0.5)_97.19%)]">
                    <div className="col-span-1">
                      <p className="font-bold text-[#161616]">
                        {data.benefits[0].label}
                      </p>
                      <p className="text-[#161616] font-bold">
                        {data.benefits[0].value}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-normal text-[#161616]">
                        {data.benefits[1].label1}
                      </p>
                      <p className="text-[#161616] font-normal">
                        {data.benefits[1].value1}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-normal text-[#161616]">
                        {data.benefits[2].label2}
                      </p>
                      <p className="text-[#161616] font-normal">
                        {data.benefits[2].value2}
                      </p>
                    </div>
                    <div className="flex items-center justify-center col-span-1">
                      <a
                        href={data.tcLink}
                        className="text-[#055BC9] text-[11.706px] lg:px-4 font-semibold"
                      >
                        {data.moreBenefits}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
