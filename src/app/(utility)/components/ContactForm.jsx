"use client";

import { Send } from "lucide-react";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterestSquare,
  FaTelegramPlane,
} from "react-icons/fa";

export default function ContactForm() {
  return (
    <section className="py-16 px-6 bg-white">
      {/* Title */}
      <div className="text-center mb-10 md:mb-28">
        <p className="text-blue-600 font-semibold text-xl md:text-3xl">
          Contact Us
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mt-4 leading-tight">
          Contact Us for Support, Questions, <br className="hidden md:block" />
          or More Information
        </h2>
        <button className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow hover:opacity-90 transition cursor-pointer">
          <Send className="w-4 h-4 mr-2 hidden md:block" />
          We’d Love to Hear from You – Get in Touch
        </button>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Left Info Card */}
        <div className="bg-white rounded-xl shadow-md p-8 md:p-16 ">
          <div className="w-[266px] h-[107px] relative mb-4">
            <Image
              src="/images/nav_logo.png"
              alt="logo"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-600 mb-4 text-2xl">
            Lorem ipsum dolor sit amet consectetur. Lacus viverra massa.
          </p>
          <p className="text-blue-600 font-semibold text-lg md:text-2xl mb-6">
            info@fastgo.be
          </p>

          {/* Social Icons */}
          <div className="flex gap-5">
            <FaFacebookSquare color="#2563EB" size={35} />
            <FaInstagram color="#2563EB" size={35} />
            <FaPinterestSquare color="#2563EB" size={35} />
            <FaTelegramPlane color="#2563EB" size={35} />
          </div>
        </div>

        {/* Right Form */}
        <div>
          <p className="text-sm text-blue-600 font-semibold">Get in touch</p>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Send Message
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Please fill out the form below with your details and message, and
            our team will get back to you as soon as possible.
          </p>

          <form className="space-y-4">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 text-sm"
              />
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 text-sm text-blue-600"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Write your message..."
              className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none text-sm resize-none"
              rows="3"
            ></textarea>

            {/* Submit */}
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow hover:opacity-90 transition cursor-pointer w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
