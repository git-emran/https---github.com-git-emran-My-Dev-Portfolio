"use client";

import { Button, buttonVariants } from "./ui/button";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { toast } from "sonner";
import Link from "next/link";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import React from "react";
import { LinkPreview } from "./ui/link-preview";
import { BiSolidMessageError } from "react-icons/bi";

const people = [
  {
    id: 1,
    name: "Emran Hossain",
    designation: "Software Designer & Developer",
    image: "/Headshot 1.png",
  },
];

function Intro() {
  return (
    <section id="home" className="flex flex-col scroll-mt-[30] mt-20 scroll-smooth px-20">
      <div className="flex flex-wrap items-center justify-center mb-6 w-full">
        <AnimatedTooltip items={people} />
      </div>
      <div className="flex flex-col">
        <h4 className="flex text-wrap sm:px-40 md:px-4 text-3xl sm:text-3xl lg:text-5xl lg:leading-tight max-w-5xl text-center tracking-tight font-medium text-black">
          I am Emran, a designer and developer with over 8 years of experience,
          specializing in creating compelling and customer-centric solutions,
          especially for B2B & SaaS startups.
        </h4>
        <div className="flex items justify-center">
          <p
            className="justify-center text-center font-normal
    max-w-full md:max-w-[44rem] 
    leading-6 sm:leading-8 
    mt-6 text-base sm:text-lg sm:px-40 md:px-10 lg:px-10 md:text-lg lg:text-xl xl:text-2xl"
          >
            I love{" "}
            <LinkPreview
              url="https://github.com/git-emran"
              isStatic={true}
              imageSrc="/github.png"
              className="font-semibold underline text-blue-800"
            >
              Design & Code
            </LinkPreview>{" "}
            I tell stories through my designs. I spend most of my free time
            solving design problems around me,{" "}
            <LinkPreview
              url="https://dribbble.com/chrollo"
              isStatic={true}
              imageSrc="/dribbble.png"
              className="font-semibold underline text-blue-800"
            >
              creating illustrations
            </LinkPreview>
            , open-source projects, design interactions and product{" "}
            <LinkPreview
              url="https://www.instagram.com/designwithemran/"
              isStatic={true}
              imageSrc="/instagram.png"
              className="font-semibold underline text-blue-800"
            >
              design memes.
            </LinkPreview>
            {""}
          </p>
        </div>

        {/* Buttons */}
        <div className=" flex flex-row items-center gap-4 sm:px-20 md:px-10 justify-center mt-6">
          <Button asChild>
            <Link
              className={buttonVariants({ variant: "destructive" })}
              href="/EmranCV.pdf"
            >
              DOWNLOAD CV ⇣
            </Link>
          </Button>
          <Button asChild>
            <Link
              className={buttonVariants({ variant: "destructive" })}
              href="mailto:emrn.hossn@gmail.com"
            >
              EMAIL 📨
            </Link>
          </Button>
          <a
            className="bg-gray-800 p-4 text-gray-300 hover:text-gray-800 hover:bg-gray-100 flex items-center gap-2 rounded-full focus:scale-[2.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
            href="https://www.linkedin.com/in/emran-hossain-80ab17190/"
            target=""
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-gray-800 p-4 text-gray-300 hover:text-gray-800 hover:bg-gray-100 flex items-center gap-2 rounded-full focus:scale-[2.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
            href="https://github.com/git-emran"
            target=""
          >
            <FaSquareGithub />
          </a>
        </div>
        <div className="mb-28"></div>
      </div>
    </section>
  );
}

export default Intro;
