"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Vortex } from "./ui/vortex";

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
      className="mb-28 max-w-[60rem] scroll-mt-28 scroll-mb-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <Vortex baseSpeed={0.0} baseHue={900}>
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
      </Vortex>
    </section>
  );
}
