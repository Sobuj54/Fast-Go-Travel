export default function CruiseTermsConditions() {
  return (
    <div className="w-full  rounded-xl shadow-md p-4 mt-5 md:mt-14">
      {/* Header */}
      <h2 className="text-base md:text-2xl font-semibold text-[#1E2A3A] mb-3">
        Terms & Conditions
      </h2>

      {/* Notice Box */}
      <div className="bg-[#E8F0FA] p-4 rounded-lg text-sm text-[#1E2A3A] mb-4">
        <p className="font-semibold mb-2">
          By proceeding with this booking, you agree to the following:
        </p>
        <ul className="space-y-1 text-gray-600 ml-2">
          <li>
            Cancellations made 30+ days before departure receive a 90% refund
          </li>
          <li>
            Cancellations 15–29 days before departure receive a 50% refund
          </li>
          <li>
            No refunds for cancellations made less than 15 days before departure
          </li>
          <li>Valid passport with at least 6 months validity is required</li>
        </ul>
      </div>

      {/* Checkbox Agreement */}
      <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
        />
        <span>
          I agree to the{" "}
          <a href="#" className="text-blue-600 hover:underline">
            terms and conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            cancellation policy
          </a>
        </span>
      </label>
    </div>
  );
}
