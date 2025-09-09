import BookingBox from "../../hotel/components/BookingBox";
import PackagesHero from "../components/PackagesHero";
import PackagesTabs from "../components/PackagesTabs";

const PackagePage = () => {
  return (
    <>
      <PackagesHero />
      <section className="grid grid-cols-1 lg:grid-cols-12 max-w-[1440px] mx-auto my-10 md:my-20 gap-7">
        <div className="col-span-1 lg:col-span-9">
          <PackagesTabs />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <BookingBox />
        </div>
      </section>
    </>
  );
};

export default PackagePage;
