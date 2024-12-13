"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SubpageHeader from "@/components/subpage-header";
import BackToTopButton from "@/components/buttontop";
import DescriptionSection from "@/components/DescriptionSection";

export default function WebSiteRedesign() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <BackToTopButton />
      <SubpageHeader
        title="Corporate Website Redesign "
        subtitle="Redefining the Experience"
      />
      {/* Body starts -------> */}
      <section className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <DescriptionSection
            title="Final Design"
            description="This is the layout that achieves what I was aiming for. Here is how
            I got here -"
            images={[
              {
                src: "/redesign1.webp",
                alt: "Final Outcome",
              },
            ]}
          />
          {/* Teams */}
          <DescriptionSection title="Team" />
          <ul className="flex flex-wrap mt-4 mb-7 gap-2">
            {[
              "Jr Designers: 3",
              "Engineering Lead",
              "CTO",
              "Product Owner: 1",
              "Lead Designer (me)",
            ].map((tag, index) => (
              <li key={index} className="bg-gray-200 px-3 py-1 rounded-full">
                {tag}
              </li>
            ))}
          </ul>
          {/* Overview/Starting -------> */}{" "}
          <DescriptionSection
            title="How I got here?"
            description="Figuring it out as I go, One sprint at a time"
          />
          {/* Design process -------> */}
          <div className="mt-20 p-12 bg-gray-50">
            {" "}
            <DescriptionSection
              title="Design Process"
              description="Here is the design process that I have followed. This is a project
            where a linear design process was followed. Everything by the book.
          </p>"
              images={[
                {
                  src: "/redesign2.webp",
                  alt: "Design process",
                },
              ]}
            />
          </div>
          {/* Running Usability tests -------> */}
          <DescriptionSection
            title="Internal Usability Tests"
            description="Usability testing and only internal team validation process was used here. I did not ask any user any questions. I repeat I did
            not ask any users any questions."
            images={[
              {
                src: "/redesign3.avif",
              },
            ]}
          />
          {/* First things First -------> */}
          <div className="mt-20 p-12 bg-gray-50">
            <DescriptionSection
              title="First Things First - The Sitemap"
              description="Sitemap!! Optimizing the
            sitemap for an easier navigation throughout the website. While
            focusing on conversion, I also doubled down on the lean UX
            principles to remove unnecessary design artifacts."
              images={[
                {
                  src: "/redesign4.webp",
                  alt: "first things first",
                },
              ]}
            />
          </div>
          {/* Interface & Content Layout -------> */}
          <div className="mt-10">
            {" "}
            <DescriptionSection
              title="Interface & Content Layout - Spoiler alert! First attempt did not
            work"
              description="First layout testing did not go as planned. Some mistakes were made"
              images={[{ src: "/redesign5.webp", alt: "Content Layout" }]}
            />
          </div>
          {/* Take 2 -------> */}
          <div className="mt-20 p-12 bg-gray-50">
            <DescriptionSection
              title="Take 2"
              description="Second attempt to find the perfect layout which is tested on the
            root level."
              images={[
                {
                  src: "/redesign6.png",
                  alt: "Take 2",
                },
              ]}
            />
          </div>
          {/* Responsiveness & Accessibility -------> */}
          <h2 className="text-3xl font-bold mb-4 pt-20">
            Responsiveness & Accessibility
          </h2>
          <p>
            Ensuring everyone has the same experience no matter the device being
            used and their physical ability.
          </p>
          <Image
            src="/redesign7.webp"
            alt="Take 2"
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="block shadow-2xl rounded-md object-cover mt-8"
          />
          <Image
            src="/redesign8.webp"
            alt="Take 2"
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="block shadow-2xl rounded-md object-cover mt-8"
          />
          {/* Improvements I made -------> */}
          <h2 className="text-3xl font-bold mb-4 pt-20">
            Highlighted UI changes
          </h2>
          <p>
            Among other design decisions, these are some of the major UI changes
            that happened.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3">
              <Image
                src="/redesign10.webp"
                alt=""
                width={900}
                height={200}
                quality={100}
                unoptimized
                className="mt-5 rounded-md"
              />
            </div>
            <div className="col-span-2">
              <Image
                src="/redesign11.webp"
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
                src="/redesign12.webp"
                alt=""
                width={900}
                height={200}
                quality={100}
                unoptimized
                className="mt-5"
              />
            </div>
          </div>
          <Image
            src="/redesign9.webp"
            alt=""
            width={900}
            height={200}
            quality={100}
            unoptimized
            className="mt-5"
          />
          <Image
            src="/redesign13.webp"
            alt=""
            width={900}
            height={200}
            quality={100}
            unoptimized
            className="mt-5"
          />
          {/* Design goes above this line */}
        </div>
      </section>
    </div>
  );
}
