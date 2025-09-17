"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== retypePassword) {
      alert("Passwords do not match");
      return;
    }
    if (!agreed) {
      alert("Please agree to the terms and privacy policy");
      return;
    }

    // ✅ Handle password update logic here
    console.log("Password updated successfully");

    // Redirect to sign in page after success
    router.push("/authentication/signIn");
  };

  return (
    <div className="max-w-[1300px] xl:min-h-[750px] mx-auto flex">
      {/* Left Side */}
      <div className="hidden lg:flex w-full lg:w-1/2 relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url('/images/Bitmap.png')`,
          }}
        />
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="mt-48">
            <img src="/images/signinLogo.png" alt="" />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl font-semibold ">
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

      {/* Right Side */}
      <div className="flex-1 bg-white flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-left">
            Create New Password
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* New Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="newPassword"
                className="text-base font-semibold text-gray-900"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="123........."
                className="p-4 border-2 border-gray-200 rounded-lg text-base transition-colors focus:outline-none focus:border-blue-500 placeholder-gray-400"
                required
              />
            </div>

            {/* Retype Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="retypePassword"
                className="text-base font-semibold text-gray-900"
              >
                Retype Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="retypePassword"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                  placeholder="Input your password"
                  className="w-full p-4 pr-12 border-2 border-gray-200 rounded-lg text-base transition-colors focus:outline-none focus:border-blue-500 placeholder-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {showPassword ? (
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    ) : (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-500 text-white p-4 rounded-lg text-base font-semibold mt-4 transition-colors hover:bg-blue-600"
            >
              Update
            </button>

            {/* Terms Checkbox */}
            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer text-sm leading-relaxed">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 border-2 border-blue-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    agreed ? "bg-blue-500" : ""
                  }`}
                >
                  {agreed && (
                    <span className="text-white text-xs font-bold">✓</span>
                  )}
                </span>
                <span className="text-gray-500">
                  By clicking Create account, I agree that I have read and
                  accepted the{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
