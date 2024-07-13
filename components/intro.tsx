"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsInstagram } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/app/context/active-section-context";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { LinkPreview } from "./ui/link-preview";

const people = [
  {
    id: 1,
    name: "Emran Hossain",
    designation: "Software Designer & Developer",
    image: "/Headshot 1.png",
  },
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center scroll-smooth scroll-mt-29"
    >
      <div className="flex items-center overflow-x-hidden w-full justify-center">
        <div className="flex relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <div className="flex flex-row items-center justify-center pt-24 mb-10 w-full">
              <AnimatedTooltip items={people} />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.p
        className="items-center mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-normal">
          Hello I am{" "}
          <span className="text-gray-800 font-bold ">Emran Hossain</span>{" "}
        </span>{" "}
        I am a{" "}
        <span className="font-bold">Designer and Software Developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My favorite
        programming languages are{" "}
        <LinkPreview
          url=""
          isStatic={true}
          imageSrc="/next.png"
          className="italic underline font-semibold"
        >
          TypeScript
        </LinkPreview>
        {""}, Swift and Python
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="mailto:emrn.hossn@gmail.com"
          className="group bg-gray-900 text-white px-6 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition mr-2"
          onClick={() => {
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 mr-2"
          href="/EmranCV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/emran-hossain-80ab17190/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/git-emran"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.instagram.com/designwithemran/"
          target="_blank"
        >
          <BsInstagram />
        </a>
      </motion.div>
    </section>
  );
}
