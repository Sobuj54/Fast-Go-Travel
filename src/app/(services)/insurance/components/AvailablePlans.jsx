// components/AvailablePlans.jsx

export default function AvailablePlans() {
  return (
    <section className="bg-white text-gray-800 font-manrope">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className='flex flex-col lg:flex-row space-x-20'>
          <div className='flex-1 text-left '>
            <h1 className="text-[46px] font-bold tracking-tight mb-4">
              Cover All Your Travel Insurance Needs with{' '}
              <span className="text-blue-600">FastGo</span>
            </h1>

            <p className="text-[16px] text-[#161616] font-normal max-w-3xl mb-8">
              Fastgo brings you comprehensive travel + medical insurance plans powered by Tata AIG, including trip
              cancellations, flight delays, lost luggage and medical expenses. Each plan is designed to protect your dream
              trips against unexpected challenges and to give you absolute peace of mind on your journey along with:
            </p>
          </div>

          <div className='flex-1 justify-center items-center content-center '>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2   gap-4 mb-12">
              {/* Feature Cards */}
              <div className="flex items-center rounded-xl  space-x-3 p-4 border border-[#E4E6E8] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.2)]">
                <img src="/icons/plan1.svg" alt="" />
                <div>
                  <p className="text-[14px] font-medium">Instant policy <span className='text-[14px] font-light'>generation</span></p>
                </div>
              </div>

              <div className="flex items-center rounded-xl  space-x-3 p-4 border border-[#E4E6E8] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.2)]">
                <img src="/icons/plan2.png" alt="" />
                <div>
                  <p className="text-[14px] font-medium"><span className='text-[14px] font-light'>Comprehensive</span> Health Insurance <span className='text-[14px] font-light'>included</span></p>
                </div>
              </div>

              <div className="flex items-center rounded-xl  space-x-3 p-4 border border-[#E4E6E8] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.2)]">
                <img src="/icons/plan3.png" alt="" />
                <div>
                  <p className="text-[14px] font-medium"><span className='text-[14px] font-light'>Worldwide</span> cashless hospitalisation</p>
                </div>
              </div>

              <div className="flex items-center rounded-xl  space-x-3 p-4 border border-[#E4E6E8] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.2)]">
                <img src="/icons/plan4.png" className='rounded-full bg-blue-100 p-1.5' alt="" />
                <div>
                  <p className="text-[14px] font-medium">Value for <span className='text-[14px] font-light'>money</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl font-semibold my-8">
          What Kind of Plans Are Available?
        </h2>

        {/* Available Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Travel Insurance Card */}
          <div className="bg-blue-50 rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-200">
            <div className='flex flex-col lg:flex-row justify-between items-center'>
              <div className='flex-1'>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Travel <br /> Insurance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-1 h-4 rounded-2xl bg-black mt-1 mr-2" />
                    Quick & easy claim process in simple 4 steps.
                  </li>
                  <li className="flex items-start">
                    <div className="w-1 h-4 rounded-2xl bg-black mt-1 mr-2" />
                    100% Digital Claim & Settlement
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex-1 flex justify-end">
                <div className="w-20 h-30 rounded-[10.436px] bg-[linear-gradient(307deg,_#008CFF_32.43%,_#59D7FF_94.44%)]  flex items-center justify-center">
                  <img src="/icons/shield-tick.svg" className='' alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Travel Assistance Card */}
          <div className="bg-blue-50  rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-200">
            <div className='flex flex-col lg:flex-row justify-between items-center'>
              <div className='flex-1'>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Travel Assistance via Call</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-1 h-4 rounded-2xl bg-black mt-1 mr-2" />
                    24X7 Availability on phone
                  </li>
                  <li className="flex items-start">
                    <div className="w-1 h-4 rounded-2xl bg-black mt-1 mr-2" />
                    Zero Hassle, 100% Convenience
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex-1 flex justify-end">
                <div className="w-20 h-30 rounded-[10.436px] bg-[linear-gradient(307deg,_#008CFF_32.43%,_#59D7FF_94.44%)]  flex items-center justify-center">
                  <img src="/icons/headphone-tick.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <h2 className="text-[34px] font-semibold text-gray-800 mb-1">
            What are the Benefits of Travel Insurance by Fastgo Travel?
          </h2>
          <p className="text-[#161616] mb-10">We cover almost everything to make your travel easy and secure</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-blue-100 p-4 rounded-full lg:w-[121px] lg:h-[121px] flex items-center justify-center">
                <img src="/icons/on-trip.svg" alt="On-trip Support" />
              </div>
              <h3 className="font-semibold text-[24px]">On-trip Support</h3>
              <p className="lg:text-[16px] text-[12px] text-gray-600 max-w-xs">
                Provides global on-call and on-ground assistance for ambulance, medical tele-consultation,
                hospitalisation, passport replacement and luggage recovery coordination.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="bg-blue-100 p-4 rounded-full lg:w-[121px] lg:h-[121px] flex items-center justify-center">
                <img src="/icons/medical.svg" alt="Medical Coverage" />
              </div>
              <h3 className="font-semibold text-[24px]">Medical Coverage</h3>
              <p className="lg:text-[16px] text-[12px] text-gray-600 max-w-xs">
                Offers complete medical insurance plan and assistance, including consultation cost, cashless
                hospitalisation and transportation/evacuation cost in case of medical emergencies.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="bg-blue-100 p-4 rounded-full lg:w-[121px] lg:h-[121px] flex items-center justify-center">
                <img src="/icons/airplane.svg" alt="Travel Coverage" />
              </div>
              <h3 className="font-semibold text-[24px]">Travel Coverage</h3>
              <p className="lg:text-[16px] text-[12px] text-gray-600 max-w-xs">
                Secures your trips against unforeseen challenges, including loss of check-in luggage or passport,
                non-refundable ticket cost in case of cancellation, flight delays and more.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Step Claim Section */}
        <div className="mt-24">
  <h2 className="text-3xl font-semibold text-gray-800 mb-4">
    Claim Your Insurance in <br />{" "}
    <span className="text-blue-600">Quick 4 Steps.</span>
  </h2>

  <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
    {[
      {
        title: "01",
        description:
          "Read the terms and conditions shared with you on email along with your policy details.",
      },
      {
        title: "02",
        description:
          "To initiate the claim process, reach out to support team on call or email.",
      },
      {
        title: "03",
        description: "Complete documentation process initiated by FastGo.",
      },
      {
        title: "04",
        description:
          "Once approved by insurer, the claimed amount will be reimbursed directly to you.",
      },
    ].map((step, index, arr) => (
      <div key={index} className="flex flex-col md:flex-row items-center">
        {/* Card */}
        <div className="flex flex-col items-center lg:items-start lg:w-[226px] lg:h-[220px] px-[20px] py-[30px] gap-[16px] border border-gray-100 rounded-[18.91px] bg-white shadow-[0_3px_30px_0_rgba(87,87,87,0.10)]">
          <div className="text-3xl font-bold text-[#71B0FF]">{step.title}</div>
          <p className="text-sm text-center lg:text-start text-gray-700">{step.description}</p>
        </div>

        {/* Arrow between cards (not after the last one) */}
        <div>
          {index < arr.length - 1 && (
          <img
            src="/icons/twisted-arrow.svg"
            alt="arrow"
          className="w-[57px] h-[55.1px] rotate-60 mt-4 md:rotate-0 md:mt-0 mx-4"
          />
        )}
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
}
