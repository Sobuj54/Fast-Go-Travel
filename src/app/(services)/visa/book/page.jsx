import FareSummary from "../components/FareSummary";
import VisaForm from "../components/VisaForm";

const VisaBooking = () => {
  return (
    <section className="max-w-[1440px] mx-auto my-14 md:my-20">
      {/* Left Form */}
      <h2 className="text-2xl md:text-4xl font-bold text-[#055BC9] mb-3 md:mb-5 px-5 md:px-0">
        Enter Traveler Details:
      </h2>
      <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VisaForm />
        </div>

        {/* Right Summary */}
        <div>
          <FareSummary />
        </div>
      </div>
    </section>
  );
};

export default VisaBooking;
