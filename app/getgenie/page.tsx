"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BentoGridThirdDemo } from "@/components/bentogridthird";
import BackToTopButton from "@/components/buttontop";
import SubpageHeader from "@/components/subpage-header";
import DescriptionSection from "@/components/DescriptionSection";

export default function GetGenie() {
  const router = useRouter();

  return (
    <div className="min-h-screen sm:top-20 flex flex-col">
      {/* Page Header */}
      <BackToTopButton />
      <SubpageHeader
        title="GetGenie AI"
        subtitle="Your personal AI content writer"
      />
      {/* Case study starting */}
      <section className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <DescriptionSection
            title="About the Project"
            description="Designed & Developed the front-end in JavaScript with the help of
            AntDesign framework. My primary focus was to ensure reusability and
            scalability of the components."
          />

          {/* Tech stack */}

          <ul className="flex flex-wrap mt-4 mb-7 gap-2">
            {["JavaScript", "AntDesign", "A.I", "Content Generator"].map(
              (tag, index) => (
                <li key={index} className="bg-gray-200 px-3 py-1 rounded-full">
                  {tag}
                </li>
              )
            )}
          </ul>
          {/* Teams */}
          <h3 className="text-lg font-medium leading-relaxed mb-4 mt-10">
            Team
          </h3>
          <ul className="flex flex-wrap mt-4 mb-7 gap-2">
            {["Engineering Lead", "CTO", "CEO", "Sr Designer (me)"].map(
              (tag, index) => (
                <li key={index} className="bg-gray-200 px-3 py-1 rounded-full">
                  {tag}
                </li>
              )
            )}
          </ul>

          <div>
            <DescriptionSection
              title="Final Design"
              description=" After many trials and errors this is the final design that works. I
            have tried to explain the reasonings below why I made these design
            decisions."
              images={[
                {
                  src: "/getgenie.gif",
                  alt: "GetGenie Final design",
                  width: 900,
                  height: 200,
                },
              ]}
            />
          </div>

          {/* Description */}
          <div>
            {" "}
            <DescriptionSection
              title="Overview"
              description="Building an AI product requires designers to balance technical
            complexity with user-friendly design, understanding their needs
            while leveraging AI capabilities effectively. It is a delicate
            dance, navigating between innovation and usability, refining
            iteratively to create products that resonate with users."
            />
          </div>

          {/* Competitor Analysis */}
          <div>
            <DescriptionSection
              title="What I learned from the competition"
              description="  I jumped straight into competitor analysis due to the constraint of
            not being able to spend much time on research. I just wanted to find
            out how the competitors are doing it. It gave me a direction. What
            the competitors did not have - 1.They were not offering dynamic experience to generate content, their experience was too linear. 2.Built in SEO optimization. 3.
            Greater control on the outcome. We found our Hooks. Time to design,
            test , evaluate and repeat. "
              images={[
                {
                  src: "/genie2.gif",
                  alt: "competitor analysis",
                  width: 900,
                  height: 200,
                },
              ]}
            />
          </div>
          {/* Stages it went through */}

          <div>
            <DescriptionSection
              title=""
              description=""
              images={[
                {
                  src: "/genie15.avif",
                  alt: "product UI stages",
                  width: 900,
                  height: 200,
                },
                {
                  src: "/genie16.webp",
                  alt: "product UI stages",
                  width: 900,
                  height: 200,
                },
              ]}
            />
          </div>

          {/* Improvements I made */}
        </div>
      </section>
    </div>
  );
}
