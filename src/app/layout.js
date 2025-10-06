import { Geist, Geist_Mono, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap", // optional but recommended
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fast Go Travel",
  description:
    "Fast Go Travel makes travel easy. Book cheap flights, hotels, and holiday packages with instant confirmation. Plan your next trip with us today!",
  keywords: [
    "travel booking",
    "cheap flights",
    "hotels",
    "vacation deals",
    "holiday packages",
    "Fast Go Travel",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${manrope.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
