"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import showToast from "@/utils/showToast";

export default function Footer() {
  const utilityPages = [
    { title: "Contact us", to: "/contact-us" },
    { title: "404 not found", to: "/NotFound" },
    { title: "Password protected", to: "/" },
    { title: "Travel Insurance", to: "/" },
    { title: "Change log", to: "/" },
  ];

  return (
    <footer className="bg-[#0B183A] text-white pt-10 md:pt-12 lg:pt-16 pb-8 rounded-t-xl">
      <div className="container grid grid-cols-1 px-5 mx-auto md:px-8 lg:px-16 md:grid-cols-3 gap-7 md:gap-12 lg:gap-20">
        {/* Left Section: Logo + Description + Newsletter */}
        <div className="col-span-1">
          <div className="relative w-40 h-16 sm:w-56 md:w-64 lg:w-72 sm:h-20 md:h-24 lg:h-28">
            <Image
              src="/images/footer_logo.png"
              alt="FastGo Travel"
              fill
              className="object-contain"
            />
          </div>

          <p className="mb-6 text-sm text-gray-300 md:text-base">
            Discover how you can offset your adventure&apos;s carbon emissions
            and support the sustainable initiatives practiced by our operato
            Discover sustainable initiatives practiced by worldwide.
          </p>
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-2 py-2 text-sm text-black bg-white outline-none sm:px-3 sm:py-2 rounded-l-md sm:text-base"
            />
            <button
              className="px-2 py-1 text-sm font-semibold cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 sm:px-4 sm:py-2 rounded-r-md sm:text-base hover:from-purple-600 hover:to-purple-700 transition-colors duration-300"
              onClick={showToast}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle Section: Utility Pages */}
        <div className="justify-center col-span-1 md:flex">
          <div>
            <h3 className="mb-3 text-lg font-semibold md:mb-6 md:text-2xl">
              Utility pages
            </h3>
            <ul className="space-y-2 text-gray-300">
              {utilityPages.map((page) => (
                <li
                  key={page.title}
                  className="text-base cursor-pointer hover:text-white md:text-lg"
                >
                  <Link href={page.to}>{page.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Payment Icons */}
        <div className="justify-center col-span-1 md:flex">
          <div>
            <h3 className="mb-3 text-xl font-semibold md:mb-6 md:text-2xl">
              We Accept
            </h3>
            <div className="-ml-4">
              <Image
                src="/images/group_payment_methods.png"
                alt="payment methods"
                width={320}
                height={193}
                onClick={showToast}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col items-center justify-between px-5 pt-4 mt-10 text-base text-gray-400 border-t border-gray-700 md:flex-row max-w-[1440px] mx-auto">
        <p>Copyright © FastGo | Designed by</p>
        <p className="mt-2 md:mt-0">FastGo — Powered by FastGo</p>
        <div className="flex gap-3 mt-2 md:mt-0">
          <button
            className="border-[1px] w-7 h-7 p-1 rounded-full flex items-center justify-center hover:bg-white cursor-pointer"
            onClick={showToast}
          >
            <Facebook />
          </button>
          <button
            onClick={showToast}
            className="border-[1px] w-7 h-7 p-1 rounded-full flex items-center justify-center hover:bg-white cursor-pointer"
          >
            <Twitter />
          </button>
          <button
            onClick={showToast}
            className="border-[1px] w-7 h-7 p-1 rounded-full flex items-center justify-center hover:bg-white cursor-pointer"
          >
            <Instagram />
          </button>
          <button
            onClick={showToast}
            className="border-[1px] w-7 h-7 p-1 rounded-full flex items-center justify-center hover:bg-white cursor-pointer"
          >
            <FaPinterest />
          </button>
        </div>
      </div>
    </footer>
  );
}
