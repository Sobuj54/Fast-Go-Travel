"use client";

import { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { ChevronDown, ChevronUp, X } from "lucide-react";

export default function TravellerDetails() {
  const [travellers, setTravellers] = useState([
    { fullName: "", dob: "", gender: "", open: true },
  ]);

  // Add new traveller
  const addTraveller = () => {
    setTravellers([
      ...travellers,
      { fullName: "", dob: "", gender: "", open: true },
    ]);
  };

  // Remove traveller
  const removeTraveller = (index) => {
    setTravellers(travellers.filter((_, i) => i !== index));
  };

  // Toggle collapse
  const toggleTraveller = (index) => {
    setTravellers(
      travellers.map((t, i) =>
        i === index ? { ...t, open: !t.open } : t
      )
    );
  };

  return (
    <div className="space-y-6 font-manrope">
      {travellers.map((traveller, index) => (
        <div
          key={index}
          className="bg-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox.Root className="w-5 h-5 border rounded flex items-center justify-center">
                <Checkbox.Indicator className="text-white w-5 h-5 rounded bg-[#71B0FF]">
                  ✓
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span className="font-bold text-gray-900">
                Traveller {index + 1}
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>
                {index + 1}/{travellers.length} Added
              </span>

              {/* Collapse toggle */}
              <button
                onClick={() => toggleTraveller(index)}
                className="text-[#71B0FF] hover:text-gray-900"
              >
                {traveller.open ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {/* Remove button (hide for first traveller) */}
              {index > 0 && (
                <button
                  onClick={() => removeTraveller(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Details */}
          {traveller.open && (
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={traveller.fullName}
                    onChange={(e) =>
                      setTravellers(
                        travellers.map((t, i) =>
                          i === index
                            ? { ...t, fullName: e.target.value }
                            : t
                        )
                      )
                    }
                    className="w-full border rounded-md px-3 py-2 mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={traveller.dob}
                    onChange={(e) =>
                      setTravellers(
                        travellers.map((t, i) =>
                          i === index ? { ...t, dob: e.target.value } : t
                        )
                      )
                    }
                    className="w-full border rounded-md px-3 py-2 mt-1"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Gender
                </label>
                <RadioGroup.Root
                  value={traveller.gender}
                  onValueChange={(value) =>
                    setTravellers(
                      travellers.map((t, i) =>
                        i === index ? { ...t, gender: value } : t
                      )
                    )
                  }
                  className="flex gap-4"
                >
                  <RadioGroup.Item
                    value="male"
                    className="flex items-center gap-1 border rounded-md px-3 py-1 cursor-pointer"
                  ><Checkbox.Root className="w-4 h-4 border-2 border-[#71B0FF] rounded-full flex items-center justify-center">
                <Checkbox.Indicator className="text-white w-5 h-5 rounded-full bg-[#71B0FF]">
                  ✓
                </Checkbox.Indicator>
              </Checkbox.Root>
                    <span className="text-[13.613px] text-[#989898] not-italic font-bold leading-[19.448px]">Male</span>
                  </RadioGroup.Item>
                  <RadioGroup.Item
                    value="female"
                    className="flex items-center gap-1 border rounded-md px-3 py-1 cursor-pointer"
                  ><Checkbox.Root className="w-4 h-4 border-2 border-[#71B0FF] rounded-full flex items-center justify-center">
                <Checkbox.Indicator className="text-white w-5 h-5 rounded-full bg-[#71B0FF]">
                  ✓
                </Checkbox.Indicator>
              </Checkbox.Root>
                    <span className="text-[13.613px] text-[#989898] not-italic font-bold leading-[19.448px]">Female</span>
                  </RadioGroup.Item>
                  <RadioGroup.Item
                    value="others"
                    className="flex items-center gap-1 border rounded-md px-3 py-1 cursor-pointer"
                  ><Checkbox.Root className="w-4 h-4 border-2 border-[#71B0FF] rounded-full flex items-center justify-center">
                <Checkbox.Indicator className="text-white w-5 h-5 rounded-full bg-[#71B0FF]">
                  ✓
                </Checkbox.Indicator>
              </Checkbox.Root>
                    <span className="text-[13.613px] text-[#989898] not-italic font-bold leading-[19.448px]">Others</span>
                  </RadioGroup.Item>
                </RadioGroup.Root>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Add another traveller */}
      <button
        onClick={addTraveller}
        className="flex items-center gap-2 text-[14px] font-bold not-italic leading-[20px] text-black/30 hover:text-black"
      > 
        <span className="text-[14px] font-bold ">+</span> ADD ANOTHER TRAVELLER
      </button>
    </div>
  );
}
