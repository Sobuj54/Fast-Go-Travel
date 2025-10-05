import AmenitiesGrid from "../components/AmenitiesGrid";
import CabinCards from "../components/CabinCards";
import CruiseCarousel from "../components/CruiseCarousel";
import CruiseOverview from "../components/CruiseOverview";
import CruisePackageInfo from "../components/CruisePackageInfo";
import ReviewForm from "../components/ReveiwForm";
import ReviewsCard from "../components/ReviewsCard";
import { TermsAndCancelation } from "../components/TermsAndCancelation";

export const metadata = {
  title: "Fast Go Travel | Cruise Details & Packages",
  description:
    "Explore detailed cruise information, cabin options, amenities, reviews, and booking with Fast Go Travel. Plan your perfect cruise vacation today.",
  keywords: [
    "cruise details",
    "cruise packages",
    "cabin options",
    "cruise amenities",
    "cruise reviews",
    "Fast Go Travel cruises",
    "book cruise online",
  ],

  robots: {
    index: true, // landing/product page should be indexed
    follow: true,
  },
  category: "travel",
};

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
