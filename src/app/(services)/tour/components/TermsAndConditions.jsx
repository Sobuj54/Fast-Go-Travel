"use client";

import { Card, CardContent } from "@/components/ui/card";

const termsData = [
  {
    title: "Travel Validity",
    items: ["The deal is valid for travel till 31st October 2025."],
  },
  {
    title: "High Season",
    items: ["Prices can fluctuate during peak season dates."],
  },
  {
    title: "Guaranteed Dates",
    items: [
      "Your selected travel dates are guaranteed. In the unlikely event of seats sold out, we guarantee +/- 1/2 days from your preferred dates.",
    ],
  },
  {
    title: "Visa Easy",
    items: ["Visa assistance will be provided by our visa specialists."],
  },
  {
    title: "Remarks",
    items: [
      "The exchange rate of Euro is subject to fluctuation and hence final cost will be calculated at the rate prevailing on the date of final payment.",
    ],
  },
  {
    title: "Booking Policy",
    items: [
      "Initial Booking Amount - INR 40,000 per person or cancellation charges whichever is higher (non-refundable and non-transferable).",
      "60 days prior to the departure date - 50% of the remaining tour cost.",
      "45 days prior to the departure date - 75% of the tour cost required.",
      "30 days prior to the departure date - 100% of the tour cost required.",
      "Please Note: For Issuance of the Flight Tickets, we require Full Payment of Airfare.",
      "Please Note: Non-Refundable Services in the tour package has to be paid in advance along with above Payment Policy.",
      "Please Note: Payment Policy is non-negotiable and has to be paid accordingly.",
    ],
  },
  {
    title: "Remarks",
    items: [
      "Cancellation Policy:",
      "46 days or more prior to departure date, Initial Booking Amount and additional amount of visa fee will be forfeited (in case visa has been applied).",
      "Between 45 – 31 days : 60% of total tour cost will be charged as penalty.",
      "Between 30 – 21 days : 80% of total tour cost will be charged as penalty.",
      "Less than 20 days : 100% of total tour cost will be charged as penalty.",
      "*The exchange rate of Euro is subject to fluctuation and hence final cost will be calculated at the rate prevailing on the date of final payment.",
    ],
  },
  {
    title: "Highlights",
    items: ["Disneyland® Paris", "Keukenhof Gardens", "Tour Manager"],
  },
];

const TermsAndConditions = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <Card className="border rounded-xl shadow-md overflow-hidden">
        <CardContent className="p-0">
          <div className="flex mb-6">
            <div className="w-1 h-8 border-2 border-[#055BC9]" />
            <h2 className="text-xl md:text-2xl font-bold px-6">
              Term & Condition
            </h2>
          </div>

          {termsData.map((section, idx) => (
            <div key={idx} className="shadow-sm mx-4 mb-5 border rounded-md">
              {/* Section Header */}
              <div className="bg-blue-100 px-6 py-3 font-semibold text-gray-800 border-b-[1px] border-b-gray-400">
                {section.title}
              </div>

              {/* Section Content */}
              <div className="px-6 py-4">
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsAndConditions;
