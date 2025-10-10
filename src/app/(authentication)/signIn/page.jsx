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
            <h2 className="text-4xl font-semibold text-[#141522] mb-2">Sign In</h2>
            <p className="text-[#141522]">
              New user?
              <a href="/signup" className="text-[#066CCB] hover:text-blue-700 font-medium pl-2">
                Create an account
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

            {/* Forgot Password */}
            <div className="">
              <a href="/forget-pass/step-01" className="cursor-pointer text- font-semibold text-gray-600 hover:text-[#141522] underline">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className=" cursor-pointer w-full bg-[#066CCB] hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button
                type="button"
                className="cursor-pointer w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-3 bg-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-[#1E293B] font-medium">Sign In With Google</span>
              </button>

              <button
                type="button"
                className="cursor-pointer w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-3 bg-white transition-colors"
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-[#1E293B] font-medium">Sign In With Facebook</span>
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

export default page;