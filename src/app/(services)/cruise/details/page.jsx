import AmenitiesGrid from "../components/AmenitiesGrid";
import CabinCards from "../components/CabinCards";
import CruiseCarousel from "../components/CruiseCarousel";
import CruiseOverview from "../components/CruiseOverview";
import CruisePackageInfo from "../components/CruisePackageInfo";
import ReviewForm from "../components/ReveiwForm";
import ReviewsCard from "../components/ReviewsCard";
import { TermsAndCancelation } from "../components/TermsAndCancelation";

const CruiseDetails = () => {
  return (
    <>
      <CruiseCarousel />
      <CruisePackageInfo />
      <CruiseOverview />
      <CabinCards />
      <AmenitiesGrid />
      <ReviewsCard />
      <ReviewForm />
      <TermsAndCancelation />
    </>
  );
};

export default CruiseDetails;
