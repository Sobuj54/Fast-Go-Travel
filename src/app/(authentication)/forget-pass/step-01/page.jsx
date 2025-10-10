"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();

  // Email validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // ✅ Move to next component/page
      router.push("/forget-pass/verify"); // make sure you have this route
    }
  };

  return (
    <div className="max-w-[1300px] xl:min-h-[750px] flex mx-auto flex-col md:flex-row">
      {/* Left Side - Travel Background */}
      <div className="hidden lg:flex w-full lg:w-1/2 relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url('/images/Bitmap.png')`,
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center py-6 px-6 xl:px-12 text-white">
          <div className="mt-48">
            <img src="/images/signinLogo.png" alt="Sign In Logo" />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl xl:text-5xl font-semibold">
              Travel The World With
              <br />
              FastGo
            </h2>
            <p className="max-w-xl">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Forget Password Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 md:px-0 lg:px-8 py-12 bg-white">
        <div className="w-full max-w-md space-y-4">
          {/* Header */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-semibold text-[#141522] mb-2">
              Forget Password
            </h2>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-[#141522] mt-1 mb-2"
              >
                Enter your Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Your Email"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={!isValid}
                className={`cursor-pointer w-full py-3 px-4 rounded-lg font-medium transition-colors ${isValid
                  ? "bg-[#066CCB] text-white hover:bg-[#055AA8]"
                  : "bg-[#F5F5F7] text-[#9C9CA4] cursor-not-allowed"
                  }`}
              >
                Next
              </button>
            </div>

            {/* Footer */}
            <div className="text-center text-sm text-gray-500 mt-8">
              Protected by reCAPTCHA and subject to the Google{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Terms of Service
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
