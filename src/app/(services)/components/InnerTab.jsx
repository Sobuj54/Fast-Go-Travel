//unused component

import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import showToast from "@/utils/showToast";
import { Search } from "lucide-react";

const InnerTab = ({ children, tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="mx-auto mt-5 flex justify-center">
      <div className="w-full">
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          {/* Tab Headers */}
          <TabList className="flex items-center justify-center gap-4 lg:justify-start">
            {tabs.map((tab, idx) => (
              <Tab
                key={tab.id}
                className={({ selected }) =>
                  `relative flex items-center gap-2 px-3 py-1 transition-all text-sm md:text-base cursor-pointer ${selected ? "text-blue-600" : "text-black"
                  }`
                }
              >
                <span
                  className={`w-4 h-4 border-2 rounded-full text-sm ${selectedIndex === idx
                    ? "border-blue-500 border-4 scale-110"
                    : ""
                    }`}
                />
                {tab.name}
              </Tab>
            ))}
          </TabList>

          {/* Tab Content */}
          <TabPanels className="mt-3">
            {tabs.map((tab) => (
              <TabPanel
                key={tab.id}
                className="relative flex flex-col gap-3 lg:flex-row lg:items-center"
              >
                {children}
                {/* Button should also respect responsive layout */}
                <div className="w-full lg:w-auto mt-3 lg:mt-2">
                  <button
                    onClick={showToast}
                    className="w-full lg:w-auto flex justify-center items-center gap-2 px-5 py-4 lg:py-6 text-base font-bold text-white bg-gradient-to-r from-[#0A60F9] to-[#B004FE] rounded-lg cursor-pointer lg:px-10 lg:text-lg hover:from-purple-600 hover:to-purple-700 transition-colors duration-300"
                  >
                    <Search />
                    Search
                  </button>
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default InnerTab;
