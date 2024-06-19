"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BentoGridThirdDemo } from "@/components/bentogridthird";

export default function GetGenie() {
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
            GetGenie
          </h1>
        </div>
      </header>

      {/* Image */}

      <section className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
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
          <ul className="flex flex-wrap mt-4 mb-7 gap-2">
            {[
              "React",
              "JavaScript",
              "AntDesign",
              "A.I",
              "Content Generator",
            ].map((tag, index) => (
              <li key={index} className="bg-gray-200 px-3 py-1 rounded-full">
                {tag}
              </li>
            ))}
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

          {/* What I did */}

          <h2 className="text-3xl font-bold mb-4 pt-11">Competitor Analysis</h2>
          <p>
            I jumped straight into competitor analysis due to the constraint of
            not being able to spend much time on research. I just wanted to find
            out how the competitors are doing it. It gave me a direction. What
            the competitors did not have - 1. They were not offering dynamic
            experience to generate content; their experience was too linear. 2.
            Built in SEO optimization. 3. Greater control on the outcome. We
            found our Hooks. Time to design, test , design and repeat.
          </p>
          <Image
            src="/genie2.gif"
            alt="Project I worked on"
            width={900}
            height={700}
            quality={100}
            unoptimized
            className="block shadow-2xl object-cover rounded-md mt-6 mb-16"
          />
          <h2 className="text-3xl font-bold mb-4 pt-11">
            Here are the Improvements that I made
          </h2>
          <p className="mb-8">
            Due to certain constraints, I had to directly jump into solution
            trusting
          </p>
          <BentoGridThirdDemo />
        </div>
      </section>
    </div>
  );
}
