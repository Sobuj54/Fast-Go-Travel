"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  FaCalendarAlt,
  FaUsers,
  FaTicketAlt,
  FaCog,
  FaSignOutAlt,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

const Layout = ({ children }) => {
  const pathname = usePathname();

  const links = [
    {
      href: "/dashboard/account",
      icon: <RiProfileLine className="text-xl" />,
      title: "Account Information",
      desc: "Manage your profile, bookings and more",
    },
    {
      href: "/dashboard/bookings",
      icon: <FaCalendarAlt className="text-xl" />,
      title: "Your Bookings",
      desc: "Check your latest/cancelled/pending booking",
    },
    {
      href: "/dashboard/travelers",
      icon: <FaUsers className="text-xl" />,
      title: "Co-Travelers",
      desc: "Add or delete the respective traveler details",
    },
    {
      href: "/dashboard/promocodes",
      icon: <FaTicketAlt className="text-xl" />,
      title: "Promo Codes/ Coupons",
      desc: "Check savings on your booking",
    },
    {
      href: "/dashboard/settings",
      icon: <FaCog className="text-xl" />,
      title: "Settings",
      desc: "Manage Notification, Fare Alert and more",
    },
  ];

  return (
    <div className="relative">
      {/* Background Header Image */}
      <img
        className="h-40 lg:h-52 w-full absolute"
        src="/images/dashtop.png"
        alt=""
      />

      {/* Breadcrumb */}
      <div className="flex gap-6 items-center justify-start px-1 xl:px-20 pt-12">
        <h1 className="z-10 text-xl md:text-2xl font-bold text-white">
          My Bookings
        </h1>
        <MdKeyboardArrowRight className="z-10 text-xl md:text-2xl font-bold text-white" />
        <h1 className="z-10 text-xl md:text-2xl font-bold text-white">
          Profile
        </h1>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen gap-4 px-1 xl:px-20">
        {/* Sidebar */}
        <aside className="w-auto lg:w-72 xl:w-96 bg-white shadow-md mt-1 lg:mt-10 p-2 z-10 rounded">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-semibold text-[#161616] mb-1">
              Mr. Lorem Ipsum
            </h1>
            <p className="text-[#161616]">Joined Since 2025</p>
          </div>

          <div className="p-2 space-y-2">
            {links.map(({ href, icon, title, desc }) => {
              const isActive =
                pathname === href || pathname.startsWith(href + "/");

              return (
                <Link key={href} href={href}>
                  <div
                    className={`flex items-start p-4 rounded-lg cursor-pointer transition-colors ${
                      isActive
                        ? "bg-blue-50 border-l-4 border-blue-500"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3 ${
                        isActive ? "text-blue-600" : "text-gray-600"
                      }`}
                    >
                      {icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-xl font-medium ${
                          isActive ? "text-blue-700" : "text-gray-900"
                        }`}
                      >
                        {title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Log Out */}
            <div className="flex items-start p-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
                <FaSignOutAlt className="text-gray-600 text-xl" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-medium text-gray-900">Log Out</h3>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Side */}
        <div className="flex flex-col flex-1">
          {/* Swiper Slider */}
          <div className="z-10 mt-6 lg:mt-10 relative px-0 xl:px-12">
            <div className="relative w-full lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mx-auto">
              <Swiper
                navigation={{
                  nextEl: ".nextBtn",
                  prevEl: ".prevBtn",
                }}
                breakpoints={{
                  319: { slidesPerView: 1 },
                  480: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 3 },
                  1440: { slidesPerView: 4 },
                }}
                mousewheel={true}
                keyboard={true}
                spaceBetween={10}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image src="/images/item.png" width={300} height={300} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/images/item1.png" width={300} height={300} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/images/item2.png" width={300} height={300} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/images/item.png" width={300} height={300} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/images/item1.png" width={300} height={300} alt="" />
                </SwiperSlide>
              </Swiper>

              {/* Arrows */}
              <button className="prevBtn absolute top-1/2 -left-0 lg:-left-6 transform -translate-y-1/2 z-30 border border-[#232F3F] p-2 rounded-full text-[#232F3F] hover:bg-[#232F3F] group bg-white">
                <FaArrowLeft className="group-hover:text-white" />
              </button>
              <button className="nextBtn absolute top-1/2 -right-0 lg:-right-6 transform -translate-y-1/2 z-30 border border-[#232F3F] p-2 rounded-full text-[#232F3F] hover:bg-[#232F3F] group bg-white">
                <FaArrowRight className="group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1 mt-10 0">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
