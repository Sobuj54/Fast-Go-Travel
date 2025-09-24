import Link from "next/link";
import AddCotraveler from "../components/AddCotraveler";
import BookingForm from "../components/BookingForm";
import CruiseBookingSummary from "../components/CruiseBookingSummary";
import CruiseTermsConditions from "../components/CruiseTermsConditions";
import SpecialRequests from "../components/SpecialRequests";
import TravelInsurance from "../components/TravelInsurance";
import { ArrowLeft } from "lucide-react";

const Booking = () => {
  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">
      <div className="col-span-1 lg:col-span-7 my-7 md:my-14">
        <BookingForm />
        <AddCotraveler />
        <SpecialRequests />
        <TravelInsurance />
        <CruiseTermsConditions />
        <Link href={"/cruise/details"}>
          <button className="w-full flex items-center justify-center border-2 py-3 mt-10 rounded-full cursor-pointer hover:bg-slate-900 transition-colors duration-300 ease-in-out gap-2 hover:text-white">
            <ArrowLeft size={20} />
            <span className="text-lg font-semibold"> Back</span>
          </button>
        </Link>
      </div>
      <div className="col-span-1 lg:col-span-3 my-7 lg:mt-[150px]">
        <CruiseBookingSummary />
      </div>
    </div>
  );
};

export default Booking;
