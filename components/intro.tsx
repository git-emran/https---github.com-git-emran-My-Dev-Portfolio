"use client";

import { Button } from "./ui/button";
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
import { Text, Em, Heading, Kbd } from "@radix-ui/themes";

const people = [
  {
    id: 1,
    name: "Emran Hossain",
    designation: "Designer & Front-end Engineer",
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
      <div className="flex max-w-3xl text-center items-center flex-col">
        {/* <h4 className="text-wrap text-gray-800 sm:px-40 md:px-4 text-3xl sm:text-3xl lg:text-6xl lg:leading-tight max-w-3xl text-center items-center justify-center tracking-tight font-normal">
          I am Emran, a{" "}
          <span className="italic text-gray-800 font-extralight">
            designer & UI engineer
          </span>{" "}
          with over 8 years of experience in{" "}
          <span className=" text-gray-800 italic font-extralight">
            B2B, SaaS & AI.
          </span>
        </h4> */}
        <Heading weight="medium" color="gray" highContrast size="8">
          I am <Em>Emran</Em>, a <Em>Designer</Em> & <Em>Front-end </Em>{" "}
          engineer.
        </Heading>
        <div className="flex items justify-center mt-4">
          <Text size="2" wrap="wrap">
            I enjoy creating{" "}
            <LinkPreview
              url="https://github.com/git-emran"
              isStatic={true}
              imageSrc="/github.png"
            >
              {" "}
              <Kbd>open-source</Kbd>
            </LinkPreview>{" "}
            projects,
            <LinkPreview
              url="https://dribbble.com/chrollo"
              isStatic={true}
              imageSrc="/dribbble.png"
            >
              {" "}
              <Kbd>illustrations</Kbd>
            </LinkPreview>
            , design interactions &{" "}
            <LinkPreview
              url="https://www.instagram.com/designwithemran/"
              isStatic={true}
              imageSrc="/instagram.png"
            >
              <Kbd> satire design</Kbd>
            </LinkPreview>
            {""} ideas in my free time.
          </Text>
        </div>

        {/* Buttons */}
        <div className=" flex flex-row items-center gap-4 sm:px-20 md:px-10 justify-center mt-10">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Button>
                  <Link href="">Download CV</Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Directly download PDF</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button asChild>
                  <Link href="mailto:emrn.hossn@gmail.com">EMAIL 📨</Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>My Email</TooltipContent>
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
              <TooltipContent>LinkedIn Profile</TooltipContent>
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
              <TooltipContent>Github Profile</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}

export default Intro;
