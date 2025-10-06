"use client"

import { useState } from "react"

const page = () => {
    const [expandedSections, setExpandedSections] = useState({
        general: true,
        contact: true,
        passport: true,
        visa: true,
        frequentFlyer: true,
      })
    
      const [formData, setFormData] = useState({
        // General Details
        passengerType: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        address: "",
        city: "",
        state: "",
        pinCode: "",
        // Contact Details
        emailId: "example22@gmail.com",
        mobileNo: "",
        // Passport Details
        passportNumber: "",
        passportExpiryDate: "",
        passportFile: null,
        // Visa Details
        visaNumber: "",
        visaExpiryDate: "",
        visaFile: null,
        // Frequent Flyer
        airlineName: "40 Mile Air",
        frequentFlyerNo: "",
      })
    
      const toggleSection = (section) => {
        setExpandedSections({
          ...expandedSections,
          [section]: !expandedSections[section],
        })
      }
    
      const handleSubmit = (section) => (e) => {
        e.preventDefault()
        console.log(`${section} form submitted:`, formData)
      }
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
      }
    
      const handleFileChange = (fieldName) => (e) => {
        setFormData({
          ...formData,
          [fieldName]: e.target.files[0],
        })
      }
    return (
        <div className="min-h-screen  p-8">
      <div className="w-full max-w-6xl mx-auto ">
        {/* General Details Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">General Details</h2>
            <button
              onClick={() => toggleSection("general")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle section"
            >
              <svg
                className={`w-5 h-5 transition-transform ${expandedSections.general ? "" : "rotate-180"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>

          {expandedSections.general && (
            <form onSubmit={handleSubmit("General Details")}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="passengerType" className="block text-sm text-gray-600 mb-2">
                    Passenger Type<span className="text-blue-600">*</span>
                  </label>
                  <select
                    id="passengerType"
                    name="passengerType"
                    value={formData.passengerType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="adult">Adult</option>
                    <option value="child">Child</option>
                    <option value="infant">Infant</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="firstName" className="block text-sm text-gray-600 mb-2">
                    First Name<span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm text-gray-600 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="dateOfBirth" className="block text-sm text-gray-600 mb-2">
                  Date of Birth<span className="text-blue-600">*</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="w-full md:w-1/3 px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="address" className="block text-sm text-gray-600 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm text-gray-600 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm text-gray-600 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="pinCode" className="block text-sm text-gray-600 mb-2">
                  Pin Code
                </label>
                <input
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="Pincode"
                  className="w-full md:w-1/3 px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                Update
              </button>
            </form>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Contact Details</h2>
            <button
              onClick={() => toggleSection("contact")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle section"
            >
              <svg
                className={`w-5 h-5 transition-transform ${expandedSections.contact ? "" : "rotate-180"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>

          {expandedSections.contact && (
            <div>
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">Email Id</label>
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      name="emailId"
                      value={formData.emailId}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    />
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-700 whitespace-nowrap">+ Add</button>
                  <div className="flex-1">
                    <input
                      type="tel"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleChange}
                      placeholder="Mobile No"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-700 whitespace-nowrap">+ Add</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Passport Details</h2>
            <button
              onClick={() => toggleSection("passport")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle section"
            >
              <svg
                className={`w-5 h-5 transition-transform ${expandedSections.passport ? "" : "rotate-180"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>

          {expandedSections.passport && (
            <form onSubmit={handleSubmit("Passport Details")}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label htmlFor="passportNumber" className="block text-sm text-gray-600 mb-2">
                    Passport Number<span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="passportNumber"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="passportExpiryDate" className="block text-sm text-gray-600 mb-2">
                    Passport Expiry Date<span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="date"
                    id="passportExpiryDate"
                    name="passportExpiryDate"
                    value={formData.passportExpiryDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Upload Passport Copy</label>
                  <label className="flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-blue-600 text-blue-600 rounded-md cursor-pointer hover:bg-blue-50 transition-colors">
                    <span className="font-medium">Choose File</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <input
                      type="file"
                      onChange={handleFileChange("passportFile")}
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="px-8 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                Update
              </button>
            </form>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Visa Details</h2>
            <button
              onClick={() => toggleSection("visa")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle section"
            >
              <svg
                className={`w-5 h-5 transition-transform ${expandedSections.visa ? "" : "rotate-180"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>

          {expandedSections.visa && (
            <form onSubmit={handleSubmit("Visa Details")}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label htmlFor="visaNumber" className="block text-sm text-gray-600 mb-2">
                    Visa Number<span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="visaNumber"
                    name="visaNumber"
                    value={formData.visaNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="visaExpiryDate" className="block text-sm text-gray-600 mb-2">
                    Visa Expiry Date<span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="date"
                    id="visaExpiryDate"
                    name="visaExpiryDate"
                    value={formData.visaExpiryDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Upload Visa Copy</label>
                  <label className="flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-blue-600 text-blue-600 rounded-md cursor-pointer hover:bg-blue-50 transition-colors">
                    <span className="font-medium">Choose File</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <input
                      type="file"
                      onChange={handleFileChange("visaFile")}
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="px-8 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                Update
              </button>
            </form>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Frequent Flyer Detail</h2>
            <button
              onClick={() => toggleSection("frequentFlyer")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle section"
            >
              <svg
                className={`w-5 h-5 transition-transform ${expandedSections.frequentFlyer ? "" : "rotate-180"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>

          {expandedSections.frequentFlyer && (
            <form onSubmit={handleSubmit("Frequent Flyer Detail")}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="airlineName" className="block text-sm text-gray-600 mb-2">
                    Airline Name
                  </label>
                  <input
                    type="text"
                    id="airlineName"
                    name="airlineName"
                    value={formData.airlineName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="frequentFlyerNo" className="block text-sm text-gray-600 mb-2">
                    Frequent Flyer No
                  </label>
                  <input
                    type="text"
                    id="frequentFlyerNo"
                    name="frequentFlyerNo"
                    value={formData.frequentFlyerNo}
                    onChange={handleChange}
                    placeholder="Frequent Flyer No"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>      
              </div>

              <button
                type="submit"
                className="px-8 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                Update
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
    );
};

export default page;