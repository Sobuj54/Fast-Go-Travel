"use client";

import { useState } from "react";

export default function PasswordResetPage() {
  const [selectedMethod, setSelectedMethod] = useState("email");

  return (
    <div className="max-w-[1300px] xl:min-h-[750px] mx-auto  flex">
      {/* Left Side - Travel Branding */}
      <div className="hidden lg:flex  w-full lg:w-1/2 relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url('/images/Bitmap.png')`,
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          {/* Logo */}
          <div className=" mt-48">
            <img src="/images/signinLogo.png" alt="" />
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h2 className="text-5xl font-semibold ">
              Travel The World With
              <br />
              FastGo
            </h2>
            <p className="  max-w-xl">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Password Reset Form */}
      <div className="flex-1 bg-white flex items-center justify-center px-8 lg:px-12">
        <div className="w-full max-w-md">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-20  py-3 px-3 bg-[#066CCB] rounded-xl flex items-center justify-center ">
             <img className="text-white" src="/icons/user.png" alt="" />
            </div>
          </div>

          {/* Title */}
          <div className=" mb-8">
            <h3 className="text-4xl font-bold text-[#141522] mb-2">
              Verify Your Identity
            </h3>
            <p className="text-[#141522] font-semibold max-w-xl">
              Select a way to receive the verification code
            </p>
          </div>

          {/* Verification Options */}
          <div className="space-y-4 mb-8">
            {/* Email Option */}
            <div
              className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                selectedMethod === "email"
                  ? "border-blue-600 bg-blue-50"
                  : ""
              }`}
              onClick={() => setSelectedMethod("email")}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === "email"
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                >
                  {selectedMethod === "email" && (
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium text-[#141522]">
                      Email code to
                    </span>
                  </div>
                  <p className="text-[#141522] mt-1">nedusoft@gmail.com</p>
                </div>
              </div>
            </div>

            {/* SMS Option */}
            <div
              className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                selectedMethod === "sms"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedMethod("sms")}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === "sms"
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                >
                  {selectedMethod === "sms" && (
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium text-[#141522]">
                      Text code to number in -30
                    </span>
                  </div>
                  <p className="text-[#141522] mt-1 text-sm">
                    Our text are free, but some service providers may apply
                    usage charges in certain cases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Button */}
         <a href="/authentication/code">
         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-6">
            Continue
          </button>
         </a>

          {/* Sign In Link */}
          <div className="text-center">
            <a
              href="/authentication/signup"
              className="text-[#066CCB] hover:text-blue-700 font-medium"
            >
              Sign In to a different account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
