import ServiceBanner from "../components/ServiceBanner";
import VisaPage from "./components/VisaPage";

// app/visa/page.tsx (App Router)

export const metadata = {
  title: "Fast Go Travel | Visa Services",
  description:
    "Apply for travel visas easily with Fast Go Travel. Get assistance with visa applications, documentation, and approval for your international trips.",
  keywords: [
    "visa services",
    "travel visa",
    "apply visa online",
    "tourist visa",
    "business visa",
    "Fast Go Travel",
    "visa application",
  ],
  metadataBase: new URL("https://fast-go-travel.vercel.app/"),

  robots: {
    index: true,
    follow: true,
  },

  category: "travel",
};

const Visa = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ServiceBanner />
      <VisaPage />
    </div>
  );
};

export default Visa;
