"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackToHome from "@/components/back-to-home";

export default function OfficeOutlet() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative w-full h-96">
        {/* Back Button */}
      <BackToHome />
        {/* Header bg div styling */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl text-white font-bold">
            The Office Outlet
          </h1>
        </div>
      </header>
      {/* ----------------------------- */}

      {/* Body */}

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

          {/* Timeline Image */}
          <h2 className="text-3xl font-bold mb-4 pt-20">Project Timeline</h2>
          <Image
            src="/office1.png"
            alt=""
            width={900}
            height={200}
            quality={100}
            unoptimized
            className="mt-5 rounded-md"
          />
          {/* Asking right questions */}
          <h2 className="text-3xl font-bold mb-4 pt-20">
            Asking the right questions
          </h2>
          <p>
            I make sure I do not ask wrong questions as time is much valuable in
            a development lifeycle.
          </p>
          <Image
            src="/office2.avif"
            alt=""
            width={900}
            height={200}
            quality={100}
            unoptimized
            className="mt-5 rounded-md"
          />
          {/* Wireframing designing testing
           */}
          <h2 className="text-3xl font-bold mb-4 pt-20">
            Wireframing, Designing & Testing
          </h2>
          <p>
            Following a linear process was not feasable for us. So I did all of
            those things at the same time. I call it Iteration on the Go!.
          </p>
          <Image
            src="/office3.webp"
            alt=""
            width={900}
            height={200}
            quality={100}
            unoptimized
            className="mt-5 rounded-md"
          />

          <Image
            src="/office4.webp"
            alt=""
            width={900}
            height={200}
            quality={100}
            unoptimized
            className="mt-5 rounded-md"
          />
          <Image
            src="/office5.webp"
            alt=""
            width={900}
            height={200}
            quality={100}
            unoptimized
            className="mt-5 rounded-md"
          />
          {/* Image Bento */}
          <h2 className="text-3xl font-bold mb-4 pt-20">Final Design</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3">
              <Image
                src="/officebento1.webp"
                alt=""
                width={900}
                height={200}
                quality={100}
                unoptimized
                className="mt-5 rounded-md"
              />
            </div>
            <div>
              <Image
                src="/officebento2.webp"
                alt=""
                width={900}
                height={200}
                quality={100}
                unoptimized
                className="mt-5 ounded-md"
              />
            </div>
            <div>
              <Image
                src="/officebento3.webp"
                alt=""
                width={900}
                height={200}
                quality={100}
                unoptimized
                className="mt-5"
              />
            </div>
            <div>
              <Image
                src="/officebento4.webp"
                alt=""
                width={900}
                height={200}
                quality={100}
                unoptimized
                className="mt-5"
              />
            </div>
            <div className="col-span-3">
              <Image
                src="/officegif1.webp"
                alt=""
                width={900}
                height={200}
                quality={100}
                unoptimized
                className="mt-5 rounded-md"
              />
            </div>
          </div>

          {/* Put design above this comment */}
        </div>
      </section>
    </div>
  );
}
