"use client";

import { useState } from "react";
import { Calendar, User, ChevronDown } from "lucide-react";

export default function BookingForm() {
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    dob: "",
    nationality: "",
    passportNumber: "",
    passportExpiry: "",
    mobile: "",
    email: "",
  });

  const userProfile = {
    fullName: "John Doe",
    gender: "Male",
    dob: "1995-08-15",
    nationality: "American",
    passportNumber: "A1234567",
    passportExpiry: "2030-12-31",
    mobile: "+1 234 567 890",
    email: "john.doe@example.com",
  };

  const handleAutoFill = () => {
    setForm(userProfile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mb-2">
          Complete Your Booking
        </h1>
        <p className="text-gray-600">
          Please fill in the details to confirm your cruise reservation
        </p>
      </div>

      {/* Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-6 space-y-6"
      >
        {/* Title + Auto-fill */}
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="font-semibold text-lg text-gray-800">Guest Details</h2>
          <button
            type="button"
            className="flex items-center space-x-2 text-blue-600 hover:underline text-sm font-medium"
            onClick={handleAutoFill}
          >
            <User className="w-4 h-4" />
            <span>Auto-fill from profile</span>
          </button>
        </div>

        {/* Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold mb-2">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Date of Birth
            </label>
            <div className="relative">
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500
        [appearance:none] [&::-webkit-calendar-picker-indicator]:hidden"
              />
              <Calendar className="w-5 h-5 text-gray-500 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>

          {/* Nationality */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Nationality
            </label>
            <select
              name="nationality"
              value={form.nationality}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select nationality</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>

          {/* Passport Number */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Passport Number
            </label>
            <input
              type="text"
              name="passportNumber"
              value={form.passportNumber}
              onChange={handleChange}
              placeholder="Enter passport number"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Passport Expiry Date */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Passport Expiry Date
            </label>
            <div className="relative">
              <input
                type="date"
                name="passportExpiry"
                value={form.passportExpiry}
                onChange={handleChange}
                placeholder="mm/dd/yyyy"
                className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500  [appearance:none] [&::-webkit-calendar-picker-indicator]:hidden"
              />
              <Calendar className="w-5 h-5 text-gray-500 absolute right-3 top-3" />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
