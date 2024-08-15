"use client";

import { Button, buttonVariants } from "./ui/button";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { toast } from "sonner";
import Link from "next/link";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import React from "react";
import { LinkPreview } from "./ui/link-preview";

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
    <section id="home" className="scroll-mt-30 mt-20 mb-28 scroll-smooth px-12">
      <div className="flex flex-wrap items-center scroll-mt-20 justify-center mb-6 w-full">
        <AnimatedTooltip items={people} />
      </div>
      <div>
        <h4 className="flex flex-wrap sm:px-40 md:px-4 text-3xl sm:text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black">
          I am Emran, a designer and developer with over 8 years of experience,
          specializing in creating compelling and customer-centric solutions,
          especially for B2B & SaaS startups.
        </h4>
        <div className="flex items justify-center">
          <p
            className="justify-center text-center font-normal
    max-w-full md:max-w-[44rem] 
    leading-6 sm:leading-8 
    scroll-smooth mt-6 text-base sm:text-lg sm:px-8 md:text-lg lg:text-xl xl:text-2xl"
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
        <div className=" flex flex-row items-center gap-4 justify-center mt-6">
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
          <Button
            variant="outline"
            className="bg-gray-800"
            onClick={() =>
              toast("Use Laptop or a Tablet", {
                description:
                  "For the optimal experience please use either a Laptop or a Tablet ",
              })
            }
          >
            👋
          </Button>
          <a
            className="bg-gray-800 p-4 text-gray-300 hover:text-gray-50 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
            href="https://www.linkedin.com/in/emran-hossain-80ab17190/"
            target=""
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-gray-800 p-4 text-gray-300 hover:text-gray-50 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
            href="https://github.com/git-emran"
            target=""
          >
            <FaSquareGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
