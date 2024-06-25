"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BentoGridThirdDemo } from "@/components/bentogridthird";
import BackToTopButton from "@/components/buttontop";
import BackToHome from "@/components/back-to-home";
import { PinContainer } from "@/components/ui/3d-pin";
import { ProjectNavigation } from "@/components/nextproject";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

export default function GetGenie() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative w-full h-96">
        {/* Back Button */}
        <BackToHome />
        {/* Header bg div styling */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 mt-6 flex items-center justify-center">
          <PinContainer
            title="View Live Product"
            href="https://getgenie.ai/"
            className=""
          >
            <div className="flex basis-full flex-col p-1 items-center tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-3xl text-slate-100">
                Get Genie AI
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Personal AI content Writer 🔗
                </span>
              </div>
            </div>
          </PinContainer>
        </div>
      </header>

      <section className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          {/* Case study starting */}
          <h2 className="text-3xl font-bold mb-4 pt-10">Final Design</h2>
          <p className="text-lg leading-relaxed mb-4">
            After many trials and errors this is the final design that works. I
            have tried to explain the reasonings below why I made these design
            decisions.
          </p>
          <Image
            src="/getgenie.gif"
            alt="Project I worked on"
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="block shadow-2xl rounded-md object-cover mt-2"
          />

          <h2 className="text-3xl font-bold mb-4 pt-10">About the Project</h2>
          <p className="text-lg leading-relaxed mb-4">
            Designed & Developed the front-end in JavaScript with the help of
            AntDesign framework.
          </p>

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

          {/* Description */}
          <h2 className="text-3xl font-bold mb-4 pt-11">Overview</h2>
          <p>
            Building an AI product requires designers to balance technical
            complexity with user-friendly design, understanding their needs
            while leveraging AI capabilities effectively. It is a delicate
            dance, navigating between innovation and usability, refining
            iteratively to create products that resonate with users.
          </p>

          {/* Competitor Analysis */}

          <h2 className="text-3xl font-bold mb-4 pt-20">Competitor Analysis</h2>
          <p>
            I jumped straight into competitor analysis due to the constraint of
            not being able to spend much time on research. I just wanted to find
            out how the competitors are doing it. It gave me a direction. What
            the competitors did not have - 1.{" "}
            <span className="italic font-bold">
              They were not offering dynamic experience to generate content;
            </span>{" "}
            their experience was too linear. 2.Built in SEO optimization. 3.
            Greater control on the outcome. We found our Hooks. Time to design,
            test , design and repeat.
          </p>
          <Image
            src="/genie2.gif"
            alt="competitor analysis"
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="block shadow-2xl object-cover rounded-md mt-6 mb-16"
          />
          {/* Stages it went through */}

          <h2 className="text-3xl font-bold mb-4 pt-8">
            A glimpse of the Stages the UI went through
          </h2>
          <Image
            src="/genie15.avif"
            alt="product UI stages"
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="block shadow-2xl object-cover rounded-md mt-6 mb-16"
          />
          <Image
            src="/genie16.webp"
            alt="product UI stages"
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="block shadow-2xl object-cover rounded-md mt-6 mb-16"
          />

          {/* Improvements I made */}

          <h2 className="text-3xl font-bold mb-4 pt-8">
            Here are the Improvements that I made
          </h2>
          <p className="mb-8">
            Due to certain constraints, I had to directly jump into solution
            trusting
          </p>
          <BentoGridThirdDemo />
        </div>
        <BackToTopButton />
      </section>
    </div>
  );
}
