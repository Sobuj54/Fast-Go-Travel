"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import showToast from "@/utils/showToast";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", isAvailable: true },
    { name: "Packages", href: "/packages", isAvailable: false },
    { name: "Flight", href: "/flight", isAvailable: true },
    { name: "Hotel", href: "/hotel", isAvailable: true },
    { name: "Bus", href: "/bus", isAvailable: true },
    { name: "Visa", href: "/visa", isAvailable: true },
    { name: "Tour", href: "/tour", isAvailable: true },
    { name: "Umrah package", href: "/umrah", isAvailable: true },
  ];

  const languages = [
    {
      title: "EN",
      href: "#",
      description: "English language modal",
    },
    {
      title: "ES",
      href: "#",
      description: "Spanish language modal",
    },
    {
      title: "FR",
      href: "#",
      description: "French language modal",
    },
    {
      title: "DE",
      href: "#",
      description: "German language modal",
    },
    {
      title: "JP",
      href: "#",
      description: "Japanese language modal",
    },
  ];

  const currencies = [
    {
      title: "USD",
      href: "/currency/usd",
      description: "United States Dollar",
    },
    { title: "EUR", href: "/currency/eur", description: "Euro" },
    { title: "GBP", href: "/currency/gbp", description: "British Pound" },
    { title: "BDT", href: "/currency/bdt", description: "Bangladeshi Taka" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md ">
      <div className="max-w-[1440px] mx-auto ">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex">
              <Image
                src="/images/nav_logo.png"
                alt="logo"
                width={130}
                height={53}
              />
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex md:items-center md:justify-center md:space-x-5 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.isAvailable ? link.href : "#"}
                  onClick={() => link.isAvailable || showToast()}
                  className={`text-base font-semibold transition-all duration-200 hover:text-opacity-80 ${
                    isActive ? "text-blue-500" : "text-black"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu */}
          <div
            className={`fixed top-0 left-0 h-screen w-screen bg-white z-40 p-10 transform transition-transform duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Close button */}
            <div className="flex">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="inline-flex p-1 ml-auto text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile nav links */}
            <div className="grid grid-cols-4 gap-2 my-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.isAvailable ? link.href : "#"}
                    onClick={() => {
                      link.isAvailable || showToast();
                      setIsOpen(false);
                    }}
                    className={`text-base font-semibold transition-all duration-200 hover:text-opacity-80 p-2 rounded-md shadow-gray-300 shadow-lg flex items-center justify-center ${
                      isActive ? "text-blue-300" : "text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="h-[2px] bg-gray-300 mb-5" />

            {/* Mobile login/support buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="blue"
                asChild
                className="text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/list-your-property">List your Property</Link>
              </Button>

              <Button variant="outline" className="ml-2">
                <Link href="/signIn">Login</Link>
              </Button>
            </div>
          </div>

          {/* Desktop login button */}
          <div className="hidden lg:flex ">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                {/* languages */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Globe size={15} />
                    EN
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-4">
                      <li>
                        {languages.map((item) => (
                          <NavigationMenuLink
                            key={item.title}
                            asChild
                            onClick={showToast}
                          >
                            <Link href="#">
                              <div className="font-medium">{item.title}</div>
                              <div className="text-muted-foreground">
                                {item.description}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* currency */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>USD</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-4">
                      <li>
                        {currencies.map((item) => (
                          <NavigationMenuLink
                            key={item.title}
                            asChild
                            onClick={showToast}
                          >
                            <Link href="#">
                              <div className="font-medium">{item.title}</div>
                              <div className="text-muted-foreground">
                                {item.description}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="blue" asChild className="text-blue-400">
              <Link href="/list-your-property">List your Property</Link>
            </Button>

            <Button variant="outline" className="ml-2">
              <Link href="/authentication/signIn">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
