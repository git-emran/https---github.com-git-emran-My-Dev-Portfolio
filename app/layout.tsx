import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/app/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import BackToTopButton from "@/components/buttontop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emran Hossain Portfolio",
  description:
    "Emran is a full-stack developer and a Designer with 8 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 bg-cover bg-center w-full overflow-x-hidden text-gray-950 relative dark:text-opacity-90`}
      >
        {/* Responsive Background Blob 1 */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[2rem] h-[20rem] w-[20rem] rounded-full blur-[6rem] sm:w-[40rem] sm:h-[40rem] sm:right-[11rem] md:w-[50rem] md:h-[50rem] lg:w-[60rem] lg:h-[60rem] xl:w-[70rem] xl:h-[70rem]]"></div>

        {/* Responsive Background Blob 2 */}
        <div className="bg-[#dbd7fb] absolute top-[1rem] -z-10 left-[-10rem] h-[20rem] w-[30rem] rounded-full blur-[6rem] sm:w-[40rem] sm:h-[40rem] sm:left-[-20rem] md:w-[50rem] md:h-[50rem] md:left-[-33rem] lg:w-[60rem] lg:h-[60rem] lg:left-[-28rem] xl:w-[70rem] xl:h-[70rem] xl:left-[-15rem] 2xl:w-[80rem] 2xl:h-[80rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
          {children}
          <SpeedInsights />
          <Analytics />

          <BackToTopButton />
          <Footer />

          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
