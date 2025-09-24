"use client";

import { useEffect, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  BookCopy,
  BusFront,
  CardSim,
  Hotel,
  Plane,
  Ship,
  UserRound,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import InnerTab from "./InnerTab";
import showToast from "@/utils/showToast";
import FlightSearchBar from "./FlightSearchBar";
import BusSearchBar from "./BusSearchBar";
import HotelSearchBar from "./HotelSearchBar";
import VisaType from "../visa/components/VisaType";
import CruiseSearchBar from "./CruiseSearchBar";

// Map paths to tab indices
const pathToIndex = {
  "/flight": 0,
  "/hotel": 1,
  "/bus": 2,
  "/visa": 3,
  "/tour": 4,
  "/cruise": 5,
};

// Map indices back to paths
const indexToPath = {
  0: "/flight",
  1: "/hotel",
  2: "/bus",
  3: "/visa",
  4: "/tour",
  5: "/cruise",
};

export default function TabSystem() {
  const pathname = usePathname();
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState(
    pathToIndex[pathname] ?? 0
  );

  const tabs = [
    {
      tab: "Flight",
      icon: <Plane color={pathToIndex[pathname] == 0 ? "white" : "#989898"} />,
      availabe: true,
    },
    {
      tab: "Hotel",
      icon: <Hotel color={pathToIndex[pathname] == 1 ? "white" : "#989898"} />,
      availabe: true,
    },
    {
      tab: "Bus",
      icon: (
        <BusFront color={pathToIndex[pathname] == 2 ? "white" : "#989898"} />
      ),
      availabe: true,
    },
    {
      tab: "Visa",
      icon: (
        <CardSim color={pathToIndex[pathname] == 3 ? "white" : "#989898"} />
      ),
      availabe: true,
    },
    {
      tab: "Tour Packages",
      icon: (
        <BookCopy color={pathToIndex[pathname] == 4 ? "white" : "#989898"} />
      ),
      availabe: true,
    },
    {
      tab: "Cruises",
      icon: <Ship color={pathToIndex[pathname] == 5 ? "white" : "#989898"} />,
      availabe: true,
    },
  ];

  const innerTabs = [
    { id: 0, name: "One Way" },
    {
      id: 1,
      name: "Round Trip",
    },
    { id: 2, name: "Multi City" },
  ];

  const tourInnerTabs = [
    {
      id: 0,
      name: "Hotel + Flight",
    },
    {
      id: 1,
      name: "Hotel + Flight + Car",
    },
    { id: 2, name: "Flight + Car" },
    { id: 3, name: "Hotel + Car" },
  ];

  const commonTabClass = `relative flex flex-col lg:flex-row items-center gap-1 lg:gap-2 px-3 py-1 font-semibold transition-all duration-300 text-base lg:text-lg
  text-black rounded-lg`;

  // Update tab when pathname changes
  useEffect(() => {
    const newIndex = pathToIndex[pathname];
    if (newIndex !== undefined && newIndex !== selectedIndex) {
      setSelectedIndex(newIndex);
    }
  }, [pathname]);

  // Update URL when tab changes
  const handleTabChange = (index) => {
    setSelectedIndex(index);
    const newPath = indexToPath[index];
    if (newPath) {
      router.push(newPath);
    }
  };

  return (
    <div className=" flex justify-center px-3 lg:px-7 py-12 mx-auto bg-white rounded-lg shadow-lg shadow-gray-300 border-2">
      <div className="w-full">
        <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
          <TabList className="flex flex-wrap items-center gap-7 lg:justify-start">
            {tabs.map((item, i) => (
              <Tab
                key={item.tab}
                onClick={() => item.availabe || showToast()}
                className={({ selected }) =>
                  `cursor-pointer ${commonTabClass} ${
                    selected
                      ? "bg-[#055BC9] text-white"
                      : "bg-white text-[#989898]"
                  }`
                }
              >
                {item.icon}
                <span
                  className={
                    pathToIndex[pathname] == i ? "text-white" : "text-[#989898]"
                  }
                >
                  {item.tab}
                </span>
              </Tab>
            ))}
            <div className="md:ml-auto text-[#989898] text-sm flex items-center gap-1">
              <UserRound size={15} />
              Need some help?
            </div>
          </TabList>

          {/* <div className="w-full h-[1px] border-black/30 border-[1px] mt-1 lg:mt-3"></div> */}

          <TabPanels className="mt-10">
            {/* flight */}
            <TabPanel>
              <InnerTab tabs={innerTabs}>
                <FlightSearchBar />
              </InnerTab>
            </TabPanel>
            {/* hotel */}
            <TabPanel>
              <InnerTab tabs={innerTabs}>
                <HotelSearchBar />
              </InnerTab>
            </TabPanel>
            {/* bus */}
            <TabPanel>
              <InnerTab tabs={innerTabs}>
                <BusSearchBar />
              </InnerTab>
            </TabPanel>
            {/* visa */}
            <TabPanel tabs={innerTabs}>
              <VisaType />
            </TabPanel>
            {/* tour */}
            <TabPanel>
              <InnerTab tabs={tourInnerTabs}>
                <HotelSearchBar />
              </InnerTab>
            </TabPanel>
            {/* cruise */}
            <TabPanel>
              <InnerTab tabs={innerTabs}>
                <CruiseSearchBar />
              </InnerTab>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
