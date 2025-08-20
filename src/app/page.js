import Categories from "./components/Categories";
import CtaSection from "./components/CtaSection";
import FAQSection from "./components/FaqSection";
import Hero from "./components/Hero";
import PopularDestination from "./components/PopularDestination";
import WhoAreWe from "./components/WhoAreWe";
import WhyTravel from "./components/WhyTravel";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularDestination />
      <Categories />
      <WhoAreWe />
      <FAQSection />
      <WhyTravel />
      <CtaSection />
    </>
  );
}
