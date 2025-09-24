import { Textarea } from "@/components/ui/textarea";

export default function SpecialRequests() {
  return (
    <div className="w-full rounded-xl shadow-sm p-4 mt-5 md:mt-14">
      {/* Label */}
      <label className="block text-lg font-semibold text-[#1E2A3A] mb-4">
        Special Requests
        <span className="text-gray-400 font-normal ml-1">(Optional)</span>
      </label>

      {/* Textarea */}
      <Textarea
        placeholder="Enter any dietary restrictions, mobility needs, or other special requests..."
        className="w-full h-20 resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}
