"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BentoGridThirdDemo } from "@/components/bentogridthird";

export default function Insidemaps() {
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
            Insidemaps Capture
          </h1>
        </div>
      </header>
      {/* ----------------------------- */}

      {/* Image */}

      <section className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 pt-10">
            Problem we were facing
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Revenue hits a roadblock when there is a genuine dissatisfaction
            from customers when using certain services in our application. And
            that is what happened to us. Our customers were not happy using our
            feature.
          </p>

          <h3 className="text-lg font-bold leading-relaxed mb-4 mt-10">Team</h3>
          <ul className="flex flex-wrap mt-4 mb-7 gap-2">
            {[
              "Jr Designers: 5",
              "Product owners: 2",
              "Software Engineers: 3",

              "Lead Product Designer (me)",
            ].map((tag, index) => (
              <li key={index} className="bg-gray-200 px-3 py-1 rounded-full">
                {tag}
              </li>
            ))}
          </ul>

          {/* Description */}
          <h2 className="text-3xl font-bold mb-4 pt-8">Overview</h2>
          <p>
            Building an AI product requires designers to balance technical
            complexity with user-friendly design, understanding their needs
            while leveraging AI capabilities effectively. It is a delicate
            dance, navigating between innovation and usability, refining
            iteratively to create products that resonate with users.
          </p>

          {/* Quant Research */}
          <h2 className="text-3xl font-bold mb-4 pt-8">
            Quantitative Research - Phase 1
          </h2>
          <p>
            Initial phase was divided into two parts. Part 1 was mostly
            quantitative analysis where I interviewed a group of 20 people.
            Questions were carefully crafted to generate relevant data. One
            example is given below :
          </p>
          {/* Quant Image */}
          <Image
            src="/im2.png"
            alt=""
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="mt-10"
          />
          {/* Qual Research */}
          <h2 className="text-3xl font-bold mb-4 pt-8">
            Qualitative Research - Phase 1
          </h2>
          {/* Qual Image */}
          <Image
            src="/im3.png"
            alt=""
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="mt-10 mb-10"
          />
          {/* Final Improvements*/}
          <h2 className="text-3xl font-bold mb-4 pt-8">
            Final Improvements I made
          </h2>
          <p>
            These are the imporvements I made after taking all the research into
            account.
          </p>
          <Image
            src="/im4.png"
            alt=""
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="mt-10"
          />
          <Image
            src="/im5.png"
            alt=""
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="mt-10"
          />
          <h3 className="text-lg font-bold mb-4 pt-8 uppercase">
            Updated & Improved 3D map
          </h3>
          <p className="text-sm">
            Previous improvements created a snowball effect leading to an almost
            pixel perfect 3D map with each scan.
          </p>
          <Image
            src="/im6.gif"
            alt=""
            width={800}
            height={200}
            quality={100}
            unoptimized
            className="mt-5 flex items-center justify-center rounded-md"
          />
          <h3 className="text-lg font-bold mb-4 pt-12 uppercase">
            Updated Components
          </h3>
          <p className="text-sm">
            Redesigning the components library to fit the improved design and
            interaction
          </p>
          <Image
            src="/im7.png"
            alt=""
            width={900}
            height={200}
            quality={100}
            unoptimized
            className="mt-5 flex items-center justify-center"
          />
          <h3 className="text-lg font-bold mb-4 pt-12 uppercase">
            Why it works?
          </h3>
          <Image
            src="/im8.png"
            alt=""
            width={900}
            height={200}
            quality={100}
            unoptimized
            className="mt-5 flex items-center justify-center"
          />
          <h2 className="text-2xl font-bold mb-4 pt-12">
            Next Steps
          </h2>
          <Image
            src="/im9.png"
            alt=""
            width={900}
            height={200}
            quality={100}
            unoptimized
            className="mt-5"
          />

          {/* Put design above this comment */}
        </div>
      </section>
    </div>
  );
}