import PackageCardDetails from "../../components/PackageCardDetails";
import umrahPackages from "../../data/packages.json";

// ✅ Metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = params;
  const pkg = umrahPackages.find((p) => p.id === Number(id));

  if (!pkg) {
    return {
      title: "Package Not Found | Umrah Packages",
      description:
        "Sorry, the Umrah package you are looking for does not exist.",
      robots: "noindex",
    };
  }

  return {
    title: `${pkg.title} | Umrah Package Details`,
    description:
      pkg.description?.slice(0, 160) ||
      "View details of this Umrah package, including itinerary, pricing, and facilities.",
  };
}

// Server component; must be async to safely access params
export default async function DetailsPage({ params }) {
  // Access id safely
  const { id } = await params; // ✅ await params.id as required by Next.js

  // Find the package by ID
  const pkg = umrahPackages.find((p) => p.id === Number(id));

  return (
    <div>
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
