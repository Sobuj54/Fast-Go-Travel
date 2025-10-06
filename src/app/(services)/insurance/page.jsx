"use client";

import { useState } from "react";
import AvailablePlans from "./components/AvailablePlans";
import Countries from "./components/Countries";
import InsuranceCard from "./components/InsuranceCard";

const Insurance = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className=" flex flex-col md:grid md:grid-cols-12 gap-9 px-4 my-20">
        <div className="md:col-span-5">
          <section className="max-w-2xl mx-auto px-4">
            {/* Title */}
            <h2 className="text-[44.351px] md:text-3xl lg:text-[44.351px] font-semibold leading-tight text-[#161616]">
              International Travel + <br /> Medical Insurance & <br />{" "}
              Assistance
            </h2>

            {/* Subtext */}
            <p className="text-[18.262px] text-[#161616] py-4">
              99% Claim settlement ratio
            </p>

            {/* Features */}
            <div className="mt-6 ">
              {/* Card 1 */}
              <div className="flex flex-col lg:flex-row items-center space-x-6 mb-6">
                <div className="flex items-center justify-center w-20 h-16 mt-4 rounded-lg bg-[#E9F4FF]">
                  <img
                    src="/icons/shield-tick.png"
                    className="w-14 h-14 md:w-10 md:h-10"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl lg:text-[28px] font-semibold text-[#161616]">
                    Comprehensive travel + medical <br /> insurance by FastGo
                  </h3>
                  <p className="text-md lg:text-[18px] text-gray-500">
                    Insurance policies covering country-specific visa
                    requirements and Schengen Visa Compliant plans.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col lg:flex-row items-center space-x-6">
                <div className="flex items-center justify-center w-26 h-18 mt-4 rounded-lg bg-[#E9F4FF]">
                  <img
                    src="/icons/headphone-tick.png"
                    className="w-12 h-12 md:w-8 md:h-8"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl lg:text-[28px] font-semibold text-[#161616]">
                    Global ON-TRIP Assistance for Travel & Medical Needs
                  </h3>
                  <p className="text-md lg:text-[18px] text-gray-500 mt-1">
                    24/7 call and on-ground support for ambulance, medical
                    consultation, baggage loss/delay, lost baggage recovery and
                    more
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="md:col-span-7 rounded-[17.135px] bg-white shadow-[0_3.213px_32.128px_0_rgba(0,0,0,0.16)]">
          <div className="p-6">
            <Countries onSelectionChange={setSelectedCountries} />
            <InsuranceCard selectedCountries={selectedCountries} />
          </div>
        </div>
      </div>

      <div>
        <AvailablePlans />
      </div>
    </div>
  );
};

export default Insurance;
