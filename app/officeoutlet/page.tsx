"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackToHome from "@/components/back-to-home";
import { PinContainer } from "@/components/ui/3d-pin";

export default function OfficeOutlet() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative w-full h-96">
        {/* Back Button */}
        <BackToHome />
        {/* Header bg div styling */}
        <div className=" bg-black opacity-30"></div>
        <div className="absolute mt-6 inset-0 flex items-center justify-center">
          <div className="flex basis-full flex-col p-1 items-center tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-3xl text-slate-100">
              Office Outlet
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                The Future of Workstation Planning
              </span>
            </div>
          </div>
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
          {/* Teams */}
          <h3 className="text-lg font-bold leading-relaxed mb-4 mt-10">Team</h3>
          <ul className="flex flex-wrap mt-4 mb-7 gap-2">
            {[
              "Engineering Lead",
              "CEO",
              "Sr Designer/Researcher/Front-end Engineer (me)",
            ].map((tag, index) => (
              <li key={index} className="bg-gray-200 px-3 py-1 rounded-full">
                {tag}
              </li>
            ))}
          </ul>

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
