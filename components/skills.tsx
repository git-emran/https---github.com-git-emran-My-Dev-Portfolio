"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";



const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className=" flex-col mb-28 mt-20 max-w-[55rem] scroll-mb-28 scroll-mt-16 items-center justify-center text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

   

      <ul className="flex flex-wrap justify-center gap-2 mt-12 text-lg text-blue-950-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-gray-100 border border-gray-200-100 rounded-lg px-7 py-3"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
