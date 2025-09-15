"use client"
import { RiArrowGoBackFill, RiArrowGoForwardLine } from "react-icons/ri";
import { useState } from "react"

export default function PasswordResetPage() {
  const [code, setCode] = useState(["", "", "", ""])

  const handleCodeChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").slice(0, 4)
    const newCode = pastedData.split("").slice(0, 4)

    while (newCode.length < 4) {
      newCode.push("")
    }

    setCode(newCode)

    const nextEmptyIndex = newCode.findIndex((digit) => !digit)
    const focusIndex = nextEmptyIndex === -1 ? 3 : nextEmptyIndex
    document.getElementById(`code-${focusIndex}`)?.focus()
  }

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
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus, omnis voluptas assumenda est.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Password Reset Form */}
      <div className="flex-1 bg-white flex flex-col py-16 justify-center px-2 lg:px-12">
        <div className="max-w-md mx-auto  w-full">
          {/* Icon */}
          <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-8 ">
            <p className="text-2xl text-white ">|**</p>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-[#141522] text-start mb-2">Update Your Password</h1>

          {/* Subtitle */}
          <p className="text-[#141522] text-start font-semibold mb-8">Enter the code we sent to the email address ending in -30</p>

          {/* Code Input */}
          <div className="flex justify-start gap-4 mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-16 h-16 text-center text-2xl font-semibold border-1 border-[#F5F5F7] rounded-lg focus:border-[#066CCB] focus:outline-none transition-colors"
                maxLength={1}
              />
            ))}
          </div>

          {/* Didn't receive code link */}
          <div className="text-start mb-4 cursor-pointer">
            <button className="text-[#525255] hover:text-gray-800 transition-colors">Didn't receive your code</button>
          </div>

          {/* Back button */}
          <div className="flex gap-26">
          <a href="/authentication/verify">
          <button className="flex items-center justify-center gap-2 text-[#6E6E71] hover:text-gray-800 transition-colors">
          <RiArrowGoBackFill />
            Back
          </button>
          </a>
          <a href="/authentication/newpass">
          <button className="flex items-center justify-center gap-2 text-[#6E6E71] hover:text-gray-800 transition-colors">
          <RiArrowGoForwardLine />
            Go
          </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}
