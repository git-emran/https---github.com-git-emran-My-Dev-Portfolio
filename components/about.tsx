"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSectionInView("About");
  const cardData = [
    {
      quote:
        "MarketTime is a fast-paced company with ever changing priorities, and Emran did an excellent job of juggling priorities that were provided to him by multiple Agile teams. He's a great leader and I loved working with him.",
      name: "Todd",
      title: "President MarketTime B2B, Texas, USA",
    },
    {
      quote:
        "Working with Emran at was truly a pleasure. Emran displayed the ability to ask questions that not many others could. Solving customers pain points and making the best experience for them is truly Emrans passion and you can see that in his work output and in discussions with customers. I wouldn not hesitate to work with Emran again as he is truly an exceptional UI/UX Designer.",
      name: "Richard Wohnsiedler",
      title: "Sr Product Owner, ISN, Texas, USA",
    },
    {
      quote:
        "Emran's really good at figuring out tricky questions from customers. He's always there to help fix any problems and make sure everyone has a great experience. You can really tell how much he cares about making customers happy, just by talking to him or seeing his work.",
      name: "Shafkat Ismam",
      title: "Head of Brand Marketing, Ultra Clean, Malaysia",
    },
  ];
  return (
    <motion.section
      ref={ref}
      id="about"
      className="items-center mb-28 max-w-[65rem] flex-wrap text-center leading-8 sm:mb-40 scroll-mt-28 scroll-smooth"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading> About </SectionHeading>
      <p className="text-center mt-4 mb-6 text-base sm:text-lg sm:px-4 md:text-xl lg:text-2xl xl:text-3xl">
        A wizard who loves <span className="font-bold">design and code. </span>{" "}
        I tell stories through my designs. I spend most of my free time solving
        <span className="font-bold"> design problems</span> around me, creating
        illustrations, design interactions, and product design memes.
      </p>
      <InfiniteMovingCards className="" items={cardData} speed="normal" />
    </motion.section>
  );
}
