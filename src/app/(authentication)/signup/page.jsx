"use client"

import { useState } from "react"




const page = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("nedusoff@gmail.com")
  const [password, setPassword] = useState("")
  return (
    <div className="max-w-[1300px] flex mx-auto  flex-col md:flex-row">
      {/* Left Side - Travel Background */}
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
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus, omnis voluptas assumenda est.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 md:px-0 lg:px-8 py-12 bg-white">
        <div className="w-full max-w-md space-y-4">
          {/* Header */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-semibold text-[#141522] mb-2">Create An Account</h2>
            <p className="text-[#141522]">
              Already have an account?
              <a href="/signIn" className="text-[#066CCB] hover:text-blue-700 font-medium pl-2">
                Back to Login
              </a>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block  font-medium text-[#141522] mt-1 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Your Email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block  font-medium text-[#141522] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Input your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
            {/* reType */}
            <div>
              <label htmlFor="password" className="block  font-medium text-[#141522] mb-2">
                Retype Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Input your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="">
              <a href="/forget-pass/step-01" className="text- font-semibold text-gray-600 hover:text-[#141522] underline">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="cursor-pointer w-full bg-[#F5F5F7] hover:bg-[#066CCB] hover:text-white text-[#9C9CA4] py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Create
            </button>



            {/* Footer */}
            <div className="text-center text-sm text-gray-500 mt-8">
              By clicking Create account, I agree that I have read and accepted the
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

export default page;