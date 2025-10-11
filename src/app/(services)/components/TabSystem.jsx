"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import InnerTab from "./InnerTab";
import FlightSearchBar from "./FlightSearchBar";
import BusSearchBar from "./BusSearchBar";
import HotelSearchBar from "./HotelSearchBar";
import VisaType from "../visa/components/VisaType";
import CruiseSearchBar from "./CruiseSearchBar";

const tabs = [
  { name: "Flights", href: "/flight", icon: "/icons/tabs/light_flight.svg" },
  { name: "Hotel", href: "/hotel", icon: "/icons/tabs/light_bed.svg" },
  { name: "Bus", href: "/bus", icon: "/icons/tabs/bus.svg" },
  { name: "Visa", href: "/visa", icon: "/icons/tabs/light_ticket.svg" },
  { name: "Packages", href: "/tour", icon: "/icons/tabs/light_package.svg" },
  { name: "Cruises", href: "/cruise", icon: "/icons/tabs/light_cruise.svg" },
  { name: "E-Sim", href: "/esim", icon: "/icons/tabs/esim.svg" },
  { name: "Insurance", href: "/insurance", icon: "/icons/tabs/insurance.svg" },
  { name: "Shop", href: "/shop", icon: "/icons/tabs/shop.svg" },
];

const pathToIndex = tabs.reduce(
  (acc, tab, index) => ({ ...acc, [tab.href]: index }),
  {}
);
const indexToPath = tabs.reduce(
  (acc, tab, index) => ({ ...acc, [index]: tab.href }),
  {}
);

export default function TabSystem() {
  const pathname = usePathname();
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState(pathToIndex[pathname] ?? 0);

  const innerTabs = [
    { id: 0, name: "One Way" },
    { id: 1, name: "Round Trip" },
    { id: 2, name: "Multi-City" },
  ];
  const tourInnerTabs = [
    { id: 0, name: "Hotel + Flight" },
    { id: 1, name: "Hotel + Flight + Car" },
    { id: 2, name: "Flight + Car" },
    { id: 3, name: "Hotel + Car" },
  ];

  useEffect(() => {
    const newIndex = pathToIndex[pathname];
    if (newIndex !== undefined && newIndex !== selectedIndex) {
      setSelectedIndex(newIndex);
    }
  }, [pathname, selectedIndex]);

  const handleTabChange = (index) => {
    setSelectedIndex(index);
    const newPath = indexToPath[index];
    if (newPath) {
      router.push(newPath);
    }
  };

  return (
    <div className="flex justify-center rounded-lg border-2 bg-white px-3 py-6 shadow-gray-300 lg:px-7">
      <div className="w-full">
        <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
          <TabList className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {tabs.map((item) => (
              <Tab
                key={item.name}
                className={({ selected }) =>
                  `flex w-24 cursor-pointer flex-col items-center gap-2 rounded-md px-2 py-3 text-base font-medium transition-colors duration-200 focus:outline-none 
                  ${selected
                    ? "border-b-4 border-blue-600 text-blue-600"
                    : "border-b-4 border-transparent text-gray-500 hover:text-blue-600"
                  }`
                }
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                  className={item.name === 'E-Sim' ? 'p-1' : ''}
                />
                <span className="whitespace-nowrap">{item.name}</span>
              </Tab>
            ))}
          </TabList>

          <TabPanels className="mt-10">
            <TabPanel>
              <FlightSearchBar />
            </TabPanel>
            <TabPanel>
              <InnerTab tabs={innerTabs}>
                <HotelSearchBar />
              </InnerTab>
            </TabPanel>
            <TabPanel>
              <InnerTab tabs={innerTabs}>
                <BusSearchBar />
              </InnerTab>
            </TabPanel>
            <TabPanel>
              <VisaType />
            </TabPanel>
            <TabPanel>
              <InnerTab tabs={tourInnerTabs}>
                <HotelSearchBar />
              </InnerTab>
            </TabPanel>
            <TabPanel>
              <InnerTab tabs={innerTabs}>
                <CruiseSearchBar />
              </InnerTab>
            </TabPanel>
            <TabPanel>E-Sim Content Here</TabPanel>
            <TabPanel>Insurance Content Here</TabPanel>
            <TabPanel>Shop Content Here</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}