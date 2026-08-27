import "./globals.css";
import { Philosopher } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "CRESPO — Premium Phones",
  description:
    "Flagship smartphones, curated. Black and gold, only the essentials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={philosopher.variable}>
      <body className="font-body bg-white text-neutral-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}