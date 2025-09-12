"use client";
import { SlArrowRight } from "react-icons/sl";
import { FaUsers } from "react-icons/fa";
import { GiStopwatch } from "react-icons/gi";
import { GiSecretBook } from "react-icons/gi";
import { IoCalendarNumber } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { MapPin, } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const PackageCard = ({ data }) => {
  return (
    <div className="grid grid-cols-6 grid-rows-4 gap-4 bg-white border rounded-xl shadow-sm pt-4 pb-4 pl-4 mb-6">
      
      {/* Image Section */}
      <div className="row-span-4 col-span-2">
        <div className="relative  min-h-[100px] rounded-lg overflow-hidden md:w-[263px] md:h-[260px]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="row-span-3 col-span-3 space-y-1">
        <h3 className="text-xl font-semibold">{data.title}</h3>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <MapPin size={14} /> {data.location}
        </p>

        <ul className="text-sm font-bold text-gray-700 mt-2 space-y-1">
          <li><IoIosPeople size={20} className="inline mr-1"/> Suitable for: {data.suitability}</li>
          <li><IoCalendarNumber size={20} className="inline mr-1"/>  {data.nights} Night(s) {data.days} Day(s)</li>
          <li>
            <FaUsers size={20} className="inline mr-1" />
            Maximum number of people: {data.groupSize}
          </li>
          <li>
            <GiStopwatch size={20} className="inline mr-1" />
            Availability: {data.availability}
          </li>
          {data.nonRefundable && (
            <li>
              <GiSecretBook size={20} className="inline mr-1" />
              The package is non-refundable and non-changeable.
            </li>
          )}
        </ul>
      </div>

      {/* Price Section */}
      <div className="row-span-3 col-span-1 content-end text-right pr-6">
        <p className="text-sm text-gray-400">Starts from</p>
        <p className="text-2xl font-semibold"><span className="text-sm">BDT </span><span className="text-4xl">৳</span>{data.price.toLocaleString()}</p>
        <p className="text-sm text-gray-500">per person</p>
      </div>

      {/* Bottom: Tag, Price (again), and Button */}
      <div className="row-span-1 col-span-3 flex items-center justify-between">
        <span className="text-sm font-medium bg-[#055BC9] text-white rounded-full px-4 py-1">
          {data.tag}
        </span>
      </div>

      {/* View Details Button */}
      <div className="row-span-1 col-span-1 flex justify-end items-center pr-4">
        <Button className="bg-gradient-to-r text-md from-[#0A60F9] to-[#B004FE] text-white px-5 py-5 rounded-full">
          View Details <SlArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
