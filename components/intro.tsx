"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsInstagram } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/app/context/active-section-context";

import { LinkPreview } from "./ui/link-preview";



export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[100rem] text-center scroll-smooth scroll-mt-29"
    >
      <div className="flex items-center overflow-x-hidden w-full justify-center">
        <div className="flex">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            
          </motion.div>
        </div>
      </div>
      {/* <motion.p
        className="items-center mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-normal">
          Hello I am{" "}
          <span className="text-gray-800 font-bold ">Emran Hossain</span>{" "}
        </span>{" "}
        I am a{" "}
        <span className="font-bold">Designer and Developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My favorite
        programming languages are{" "}
        <LinkPreview
          url=""
          isStatic={true}
          imageSrc="/next.png"
          className="italic underline font-semibold"
        >
          JavaScript
        </LinkPreview>
        {""}, Swift and Python
      </motion.p> */}

  
    </section>
  );
}
