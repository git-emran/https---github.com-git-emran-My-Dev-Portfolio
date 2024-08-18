"use client";

import { Button, buttonVariants } from "./ui/button";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import React from "react";
import { LinkPreview } from "./ui/link-preview";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const people = [
  {
    id: 1,
    name: "Emran Hossain",
    designation: "Software Designer & Developer",
    image: "/Headshot 1.png",
  },
];

function Intro() {
  const { ref } = useSectionInView("Home");
  return (
    <section
      id="home"
      ref={ref}
      className="flex flex-col snap-start scroll-mt-[40rem] mt-20 scroll-smooth px-20"
    >
      <div className="flex flex-wrap items-center justify-center mb-6 w-full">
        <AnimatedTooltip items={people} />
      </div>
      <div className="flex flex-col">
        <h4 className="text-wrap text-gray-800 sm:px-40 md:px-4 text-3xl sm:text-3xl lg:text-5xl lg:leading-tight max-w-5xl text-center items-center justify-center tracking-tight font-normal">
          I am Emran, a{" "}
          <span className="italic text-gray-800 font-extralight">
            designer & developer
          </span>{" "}
          with over 8 years of experience, specializing in creating compelling
          and customer-centric solutions, especially for{" "}
          <span className=" text-gray-800 italic font-extralight">
            B2B & SaaS startups.
          </span>
        </h4>
        <div className="flex items justify-center">
          <p
            className="justify-center text-center font-normal
    max-w-full md:max-w-[44rem] 
    leading-6 sm:leading-8 
    mt-6 text-base sm:text-sm sm:px-40 md:px-10 lg:px-10 md:text-lg lg:text-xl xl:text-2xl"
          >
            I love{" "}
            <LinkPreview
              url="https://github.com/git-emran"
              isStatic={true}
              imageSrc="/github.png"
              className="font-semibold underline text-blue-800"
            >
              Design & Code.
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Button asChild>
                  <Link
                    className={buttonVariants({ variant: "destructive" })}
                    href="/EmranCV.pdf"
                  >
                    DOWNLOAD CV ⇣
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Directly download PDF</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button asChild>
                  <Link
                    className={buttonVariants({ variant: "destructive" })}
                    href="mailto:emrn.hossn@gmail.com"
                  >
                    EMAIL 📨
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Yup! My email</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <a
                  className="bg-gray-800 p-4 text-gray-300 hover:text-gray-800 hover:bg-gray-100 flex items-center gap-2 rounded-full focus:scale-[2.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
                  href="https://www.linkedin.com/in/emran-hossain-80ab17190/"
                  target=""
                >
                  <BsLinkedin />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>My LinkedIn Profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <a
                  className="bg-gray-800 p-4 text-gray-300 hover:text-gray-800 hover:bg-gray-100 flex items-center gap-2 rounded-full focus:scale-[2.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
                  href="https://github.com/git-emran"
                  target=""
                >
                  <FaSquareGithub />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>My Github Profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}

export default Intro;
