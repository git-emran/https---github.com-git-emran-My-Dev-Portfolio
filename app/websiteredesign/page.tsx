"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SubpageHeader from "@/components/subpage-header";
import BackToTopButton from "@/components/buttontop";

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
          <h2 className="text-3xl font-bold mb-4 pt-10">Final Design</h2>
          <p>
            This is the layout that achieves what I was aiming for. Here is how
            I got here -
          </p>
          <Image
            src="/redesign1.webp"
            alt="Final Outcome"
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="block shadow-2xl rounded-md object-cover mt-8"
          />
          {/* Teams */}
          <h3 className="text-lg font-bold leading-relaxed mb-4 mt-10">Team</h3>
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
          {/* Overview/Starting -------> */}

          <h2 className="text-3xl font-bold mb-4 pt-40 text-center">
            How I got here ?
          </h2>
          <p className="text-center">
            Sometimes the simplest way is the best way.
          </p>

          {/* Design process -------> */}
          <h2 className="text-3xl font-bold mb-4 pt-20">Design Process</h2>
          <p>
            Here is the design process that I have followed. This is a project
            where a linear design process was followed. Everything by the book.
          </p>
          <Image
            src="/redesign2.webp"
            alt="Final Outcome"
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="block shadow-2xl rounded-md object-cover mt-8"
          />
          {/* Running Usability tests -------> */}
          <h2 className="text-3xl font-bold mb-4 pt-20">
            Internal Usability Tests
          </h2>
          <p>
            Usability testing and only{" "}
            <span className="font-bold text-lg">
              internal team validation process
            </span>{" "}
            was used here. I did not ask any user any questions. I repeat I did
            not ask any users any questions.
          </p>
          <Image
            src="/redesign3.avif"
            alt="Final Outcome"
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="block shadow-2xl rounded-md object-cover mt-8"
          />
          {/* First things First -------> */}
          <h2 className="text-3xl font-bold mb-4 pt-20">
            First Things First - The Sitemap
          </h2>
          <p>
            <span className="font-bold text-lg">Sitemap!! </span>Optimizing the
            sitemap for an easier navigation throughout the website. While
            focusing on conversion, I also doubled down on the lean UX
            principles to remove unnecessary design artifacts.
          </p>
          <Image
            src="/redesign4.webp"
            alt="first things first"
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="block shadow-2xl rounded-md object-cover mt-8"
          />
          {/* Interface & Content Layout -------> */}
          <h2 className="text-3xl font-bold mb-4 pt-20">
            Interface & Content Layout - Spoiler alert! First attempt did not
            work
          </h2>
          <p>
            First layout testing did not go as planned. Some {""}
            <span className="font-bold text-lg">mistakes</span> were made.
          </p>
          <Image
            src="/redesign5.webp"
            alt="Content Layout"
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="block shadow-2xl rounded-md object-cover mt-8"
          />
          {/* Take 2 -------> */}
          <h2 className="text-3xl font-bold mb-4 pt-20">Take 2</h2>
          <p>
            Second attempt to find the perfect layout which is tested on the
            root level.
          </p>
          <Image
            src="/redesign6.png"
            alt="Take 2"
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="block shadow-2xl rounded-md object-cover mt-8"
          />
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
