import insuranceData from "../../data/insurance.json";
import TravellerForm from "../../components/TravellerForm";

export default async function InsuranceDetails({ params, searchParams }) {
  const { id } = await params;
  const awaitedSearchParams = await searchParams;

  // ✅ Get countries from query string, fallback to empty array
  const countries = awaitedSearchParams?.countries?.split(",") || [];

  // ✅ Find the correct plan
  const plan = insuranceData.find((item) => String(item.id) === String(id));

  if (!plan) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        Plan not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 font-manrope my-10">
      {/* Pass selectedCountries to TravellerForm */}
      <TravellerForm plan={plan} selectedCountries={countries} />
    </div>
  );
}
