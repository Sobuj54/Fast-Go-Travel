"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function CruiseFilterSidebar() {
  const [price, setPrice] = useState([50000]);
  const [date, setDate] = useState(new Date());
  const [guests, setGuests] = useState({ adults: 2, children: 0, youth: 0 });

  return (
    <div className="w-full bg-white p-4 rounded-2xl shadow-md space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center text-lg font-medium">
        <span>Filters</span>
        <button className="text-blue-600 text-xs">Clear All</button>
      </div>

      {/* Date Picker (shadcn) */}
      <div>
        <label className="text-sm font-medium">Departure Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="input"
              className={cn(
                "w-full justify-start text-left font-normal mt-2",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Destination */}
      <div>
        <label className="text-sm font-medium">Destination</label>
        <Select>
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder="All Destinations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Destinations</SelectItem>
            <SelectItem value="dubai">Dubai</SelectItem>
            <SelectItem value="maldives">Maldives</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Cruise Line */}
      <div>
        <label className="text-sm font-medium">Cruise Line</label>
        <Select>
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder="All Cruise Lines" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cruise Lines</SelectItem>
            <SelectItem value="royal">Royal Caribbean</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Duration */}
      <div>
        <label className="text-sm font-medium">Duration</label>
        <div className="space-y-2 mt-2">
          {["1-3 Days", "4-7 Days", "8+ Days"].map((d, i) => (
            <div key={i} className="flex items-center space-x-2">
              <Checkbox id={d} />
              <label htmlFor={d} className="text-sm cursor-pointer">
                {d}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="text-sm font-medium">Price Range (BDT)</label>
        <Slider
          defaultValue={[50000]} // starting point
          min={10000}
          max={100000}
          step={1000}
          onValueChange={setPrice}
          className="mt-4"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>৳10,000</span>
          <span>৳{price}</span>
        </div>
      </div>

      {/* Guests */}
      <div>
        <label className="text-sm font-medium">Guests</label>
        <div className="grid grid-cols-3 gap-2 mt-2 text-sm">
          {["Adults", "Children", "Youth"].map((label, idx) => (
            <div key={idx}>
              <span>{label}</span>
              <Input
                type="number"
                value={guests[label.toLowerCase()]}
                onChange={(e) =>
                  setGuests({
                    ...guests,
                    [label.toLowerCase()]: Number(e.target.value),
                  })
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Apply Filters */}
      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        Apply Filters
      </Button>
    </div>
  );
}
