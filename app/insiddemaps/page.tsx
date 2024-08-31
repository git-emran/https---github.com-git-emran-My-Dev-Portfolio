"use client";

import React from "react";
import Image from "next/image";
import SubpageHeader from "@/components/subpage-header";
import BackToTopButton from "@/components/buttontop";
import DescriptionSection from "@/components/DescriptionSection";

export default function Insidemaps() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <BackToTopButton />
      <SubpageHeader
        title="InsideMaps Capture"
        subtitle="Redesigning the Asset Capture Feature"
      />

      {/* ----------------------------- */}

      {/* Image */}

      <section className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-row items-start justify-center">
            <div className="pr-12">
              {" "}
              <DescriptionSection
                title="Problem we were facing"
                description="Revenue hits a roadblock when there is a genuine dissatisfaction
            from customers when using certain services in our application. And
            that is what happened to us. Our customers were not happy using our
            feature."
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-bold leading-relaxed mt-10">Team</h3>
              <ul className="flex flex-wrap mt-4 mb-7 gap-2">
                {[
                  "Jr Designers: 5",
                  "Product owners: 2",
                  "Software Engineers: 3",

                  "Lead Product Designer (me)",
                ].map((tag, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Description */}
          <div>
            {" "}
            <DescriptionSection
              title="Overview"
              description={`Building an AI product requires designers to balance technical
            complexity with user-friendly design, understanding their needs
            while leveraging AI capabilities effectively. It is a delicate
            dance, navigating between innovation and usability, refining
            iteratively to create products that resonate with users.`}
            />
          </div>

          {/* Quant Research */}
          <div>
            <DescriptionSection
              title="Quantitative Research - Phase 1"
              description={`Initial phase was divided into two parts. Part 1 was mostly
            quantitative analysis where I interviewed a group of 20 people.
            Questions were carefully crafted to generate relevant data. One
            example is given below :`}
              images={[
                {
                  src: "/im2.png",
                  alt: "Quantitative Research Image",
                  width: 900,
                  height: 700,
                },
              ]}
            />
          </div>

          {/* Qual Research */}
          <div>
            <DescriptionSection
              title="Qualitative Research - Phase 2"
              images={[{ src: "/im3.png", alt: "", width: 900, height: 700 }]}
            />
          </div>

          {/* Final Improvements*/}
          <div>
            <DescriptionSection
              title="Final Improvements I made"
              description=" These are the imporvements I made after taking all the research into
            account."
              images={[
                {
                  src: "/im4.png",
                  alt: "improvement 1 ",
                  height: 700,
                  width: 900,
                },
                {
                  src: "/im5.png",
                  alt: "improvement 2",
                  height: 700,
                  width: 900,
                },
                {
                  src: "/im6.gif",
                  alt: "improvement 3",
                  height: 700,
                  width: 900,
                },
              ]}
            />
          </div>
          <div>
            <DescriptionSection
              title="Updated Components :"
              description="Redesigning the components library to fit the improved design and
            interaction"
              images={[
                {
                  src: "/im7.png",
                  alt: "updated component",
                  width: 900,
                  height: 500,
                },
              ]}
            />
          </div>
          <h3 className="text-lg font-bold mb-4 pt-12 uppercase">
            Why it works? :
          </h3>
          <Image
            src="/im8.png"
            alt=""
            width={900}
            height={200}
            quality={100}
            unoptimized
            className="mt-5 flex items-center justify-center mb-5"
          />
          <div>
            <DescriptionSection
              title="Results & Next Step"
              images={[
                {
                  src: "/im9.png",
                  alt: "updated component",
                  width: 900,
                  height: 500,
                },
              ]}
            />
          </div>

          {/* Put design above this comment */}
        </div>
      </section>
    </div>
  );
}
