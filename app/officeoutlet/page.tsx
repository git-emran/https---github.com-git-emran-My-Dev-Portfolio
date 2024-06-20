"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BentoGridThirdDemo } from "@/components/bentogridthird";

export default function OfficeOutlet() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative w-full h-96">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-4 left-4 z-10 bg-blue-900 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Home
        </button>
        {/* Header bg div styling */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl text-white font-bold">
            The Office Outlet
          </h1>
        </div>
      </header>
      {/* ----------------------------- */}

      {/* Image */}

      <section className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 pt-10">
            Why we started This project
          </h2>
          <p>
            The current office space planning and interior design process in the
            UAE demographic is time-consuming, lacking visualization
            capabilities, and often leads to costly mistakes and waste. Users
            struggle to visualize and experiment with different design options,
            resulting in dissatisfaction after physical implementation. We saw
            the gap.
          </p>

          {/* Put design above this comment */}
        </div>
      </section>
    </div>
  );
}
