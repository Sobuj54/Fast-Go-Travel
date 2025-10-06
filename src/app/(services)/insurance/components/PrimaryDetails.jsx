// PersonalDetails.jsx
import React, { useState } from "react";

const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+880", country: "Bangladesh" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+971", country: "UAE" },
];

const PersonalDetails = () => {
  const [mobileCode, setMobileCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("example22@gmail.com"); // Pre-filled
  const [emergencyCode, setEmergencyCode] = useState("+91");
  const [emergencyMobileNumber, setEmergencyMobileNumber] = useState("");
  const [declaration1, setDeclaration1] = useState(false);
  const [declaration2, setDeclaration2] = useState(false);

  return (
    <div className="max-w-2xl mx-auto my-8 font-manrope">
      <h1 className="text-[#161616] text-[24px] not-italic font-bold leading-[130%] mb-2">
        Primary Contact Details
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        All communication related to insurance and assistance will be sent to
        this contact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Mobile Number */}
        <div>
          <label
            htmlFor="mobileNo"
            className="text-[#989898] text-[16px] font-semibold not-italic leading-[160%] mb-1 block"
          >
            Mobile No. <span className="text-[#EB2026] ">*</span>
          </label>
          <div className="flex rounded-md shadow-sm">
            <select
              value={mobileCode}
              onChange={(e) => setMobileCode(e.target.value)}
              className="px-2 py-2 border border-r-0 border-gray-300 bg-gray-50 text-black font-bold text-sm rounded-l-md focus:outline-none"
            >
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              id="mobileNo"
              className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              placeholder="Enter Mobile No."
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="emailId"
            className="text-[#989898] text-[16px] font-semibold not-italic leading-[160%] mb-1 block"
          >
            Email ID <span className="text-[#EB2026] ">*</span>
          </label>
          <input
            type="email"
            id="emailId"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Emergency Mobile */}
      <div className="mb-6">
        <label
          htmlFor="emergencyMobileNo"
          className="text-[#989898] text-[16px] font-semibold not-italic leading-[160%] mb-1 block"
        >
          Emergency Mobile No. <span className="text-[#EB2026] ">*</span>
        </label>
        <div className="flex rounded-md shadow-sm">
          <select
            value={emergencyCode}
            onChange={(e) => setEmergencyCode(e.target.value)}
            className="px-2 py-2 border border-r-0 border-gray-300 bg-gray-50 text-black font-bold text-sm rounded-l-md focus:outline-none"
          >
            {countryCodes.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="emergencyMobileNo"
            className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            placeholder="Enter Mobile No."
            value={emergencyMobileNumber}
            onChange={(e) => setEmergencyMobileNumber(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Note */}
      <div className="bg-[#E9F4FF] p-4 rounded-md mb-6">
        <p className="text-[#161616] text-[18px] font-bold not-italic leading-normal">Please note</p>
        <p className="text-[#161616] text-[14px] font-normal not-italic leading-normal">
          Passport number can be added post payment to include it in the policy
          document
        </p>
      </div>

      {/* Declarations */}
      <div className="flex items-start mb-4">
        <input
          id="declaration1"
          name="declaration1"
          type="checkbox"
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded mt-1"
          checked={declaration1}
          onChange={(e) => setDeclaration1(e.target.checked)}
        />
        <label htmlFor="declaration1" className="text-[#989898] text-[14px] font-normal not-italic leading-normal ml-2">
          I declare and submit that I/we are Indian residents between 6 months
          to 70 years of age, journey originates in India & due consent for
          insurance has been obtained from all travellers listed.
        </label>
      </div>

      <div className="flex items-start mb-6">
        <input
          id="declaration2"
          name="declaration2"
          type="checkbox"
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded mt-1"
          checked={declaration2}
          onChange={(e) => setDeclaration2(e.target.checked)}
        />
        <label htmlFor="declaration2" className="text-[#989898] text-[14px] font-normal not-italic leading-normal ml-2">
          I declare all travellers are in good health, fit for travel and aware
          pre-existing medical conditions or it's complications aren't covered.
        </label>
      </div>

      <p className="text-[#989898] text-[14px] font-normal not-italic leading-normal">
        FastGo hereby disclaims warranties of any kind, whether express or
        implied, including the warranty of title, merchantability,
        non-infringement and fitness for a particular purpose with regard to the
        travel insurances available on its platform.
      </p>
    </div>
  );
};

export default PersonalDetails;
