"use client";
import { FaLocationArrow, } from "react-icons/fa";
import { BsPersonVcardFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { IoCalendarNumber } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { GiStopwatch } from "react-icons/gi";
import umrahPackages from "../../data/packages.json";
import { useState } from "react";
import {
  Phone,
} from "lucide-react";

export default function BookingPage({ params }) {
  const id = Number(params.id);
  const pkg = umrahPackages.find((p) => p.id === id);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travellers: 1,
    customize: false,
    accept: false,
  });

  if (!pkg) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg">Package not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Progress Steps */}
      <div className="w-full border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto md:px-6 py-3 flex items-center justify-between relative">
          {/* decorative dashed line */}
          <div className="absolute top-[32px] left-0 right-0 h-[2px] border-t border-dashed border-gray-300 -z-10"></div>

          {[
            { step: 1, label: "Umrah Selection" },
            { step: 2, label: "Umrah Booking" },
            { step: 3, label: "Confirmation" },
          ].map((s) => (
            <div key={s.step} className="flex flex-col items-center flex-1">
              <div
                className={`w-6 h-10 flex items-center justify-center rounded-full text-sm font-bold
              ${
                s.step <= 2
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-400 text-gray-400"
              }`}
              >
                {s.step}
              </div>
              <p
                className={`text-sm font-medium ${
                  s.step <= 2 ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>


      <div className="lg:grid lg:grid-cols-12 lg:gap-4 max-w-8xl mx-auto md:px-6">
        <div className="lg:col-span-9 mx-auto ">
           {/* Content */}
            <div className="max-w-5xl mx-auto mt-10 px-10">
              
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <p className="font-bold pb-2">Umrah Package 5 Nights 6 Days</p>
          {/* Package + Price Row */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Package Info */}
            <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg grid grid-cols-2 gap-y-3 text-sm text-gray-700 font-light">
              <div className="flex items-center gap-2 ">
                <FaLocationArrow size={16} className="text-[#989898]" />
                {pkg.location}
              </div>
              <div className="flex items-center gap-2">
                <IoCalendarNumber size={18} className="text-gray-500" />
                {pkg.nights} Nights {pkg.days} Days
              </div>
              <div className="flex items-center gap-2">
                <BsPersonVcardFill size={16} className="text-gray-500"/>
                {pkg.suitability}
              </div>
              <div className="flex items-center gap-2">  
                <IoIosPeople size={22} className="text-gray-500" />
                The package is non-refundable and non-changeable
              </div>
              <div className="flex items-center gap-2">
                <MdPeopleAlt size={16} className="text-gray-500" />
                {pkg.groupSize}
              </div>
              <div className="flex items-center gap-2">
                <GiStopwatch size={16} className="text-gray-500" />
                {pkg.availability}
              </div>
            </div>

            {/* Price */}
            <div className="bg-blue-50 rounded-lg p-4 flex flex-col justify-center items-center text-center">
              <p className="text-[#989898] text-[22px] font-semibold">Starts from</p>
              <p className="text-[34px] font-bold">
                <span className="text-sm font-geist ">BDT</span> {pkg.price.toLocaleString()}
              </p>
              <p className="text-[#989898] text-[22px] font-semibold">per person</p>
            </div>
          </div>

          

          {/* Booking Form */}
          <div className="mt-8">
            <h3 className="text-md font-bold mb-4">
              Help us to reach you
            </h3>
            <form className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm pb-2">Full Name *</p>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-md p-2 w-full text-sm"
                />
                </div>

                <div>
                  <p className="font-semibold text-sm pb-2">Email *</p>
                  <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-md p-2 w-full text-sm"
                />
                </div>
                
                
              </div>

              {/* Phone, Date, Travellers */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold text-sm pb-2">Mobile *</p>
                  <input
                  type="tel"
                  placeholder="+880 XXXXXXXX"
                  className="border rounded-md p-2 w-full text-sm"
                />
                </div>
                <div>
                  <p className="font-semibold text-sm pb-2">When do you plan to leave? *</p>
                   <input
                  type="date"
                  className="border rounded-md p-2 w-full text-sm"
                />
                </div>
                <div>
                  <p className="font-semibold text-sm pb-2">Number of travellers *</p>
                  <select className="border rounded-md p-2 w-full text-sm font-bold">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n}>
                      {n} {n === 1 ? "Adult" : "Adults"}
                    </option>
                  ))}
                </select>
                </div>
  
              </div>

              {/* Checkboxes */}
              <div className="flex items-center space-x-2">
                <input id="customize" type="checkbox"/>
                <label htmlFor="customize" className="text-sm font-semibold">
                  I want to customize this package
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input id="terms" type="checkbox" required />
                <label htmlFor="terms" className="text-sm font-semibold">
                  By submitting a request, I accept Firsttrip’s{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms & Conditions
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-600 underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 underline">
                    Refund Policy
                  </a>
                  .
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 justify-end pt-4">
                <button
                  type="button"
                  className="px-10 font-semibold py-2 border rounded-lg text-[#055BC9] bg-[#E9F4FF]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-2 font-bold bg-[#E4E6E8] hover:bg-blue-700 hover:text-white text-[#989898] rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
            </div>
        </div>


        <div className="lg:col-span-3 mx-auto items-center text-center mt-10">
          {/* Hotline Box */}
          <div className="border bg-white rounded-xl shadow-sm p-6 space-y-4">


             <div className="flex flex-col items-center">
            <p className="text-[#161616] font-medium mb-1">
              Not sure yet? Need suggestions?
            </p>
            <p className="text-[#161616] mb-3 font-medium">
              Contact our experts to make your plan just right!
            </p>
            </div>


            <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold bg-[#E9F4FF] p-3 rounded-lg mx-auto w-full">
              <div className="flex items-center text-left gap-2">
                <div>
                  <img src="/images/mic.png" alt="" />
                </div>
                <div>
                  <p>Hotline:</p>
                  <p>1-846-452-6275</p>
                </div>
              </div>
            </div>


          </div>
         
          
        </div>
      </div>


     
    </div>
  );
}
