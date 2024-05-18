import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use the correct import path
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emran's Engineering Portfolio",
  description:
    "A Portfolio website filled with awesome web, mobile and AI based projects. Emran is a self taught developer. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use React.Node for type safety
  return (
    <html lang="en">
      <body
        className={`${inter.className}bg-gray-50 text-gray-950 pt-28 sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#cfe9ff] absolute top-[-1rem] left-[35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>

        <Header />

        {children}
      </body>
    </html>
  );
}
