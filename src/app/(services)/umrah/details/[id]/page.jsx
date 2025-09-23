import PackageCardDetails from "../../components/PackageCardDetails";
import umrahPackages from "../../data/packages.json";

// Server component; must be async to safely access params
export default async function DetailsPage({ params }) {
  // Access id safely
  const {id} = await params; // ✅ await params.id as required by Next.js

  // Find the package by ID
  const pkg = umrahPackages.find((p) => p.id === Number(id));

  return (
    <div className=" mx-auto max-w-7xl">
      {pkg ? (
        <PackageCardDetails data={pkg} open={true} />
      ) : (
        <p className="text-red-500 text-center mt-10 text-lg">
          Package not found
        </p>
      )}
    </div>
  );
}
