"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";
import ContributionGraph from "./contribution-graph";

export default function About() {
  const { ref } = useSectionInView("About");
  const cardData = [
    {
      quote:
        "MarketTime is a fast-paced company with ever changing priorities, and Emran did an excellent job of juggling priorities that were provided to him by multiple Agile teams. He's a great leader and I loved working with him.",
      name: "Todd Litzman",
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
      className="
    flex flex-col items-center 
    mb-16 sm:mb-28 md:mb-40 
    max-w-full md:max-w-[55rem] 
    leading-6 sm:leading-8 
    scroll-mt-28 scroll-smooth
  "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.275 }}
    >
      <SectionHeading> About me </SectionHeading>
      <div className="flex">
        <p className="text-center mt-4 mb-6 text-base sm:text-lg sm:px-8 md:text-lg lg:text-xl xl:text-2xl">
          A wizard who loves{" "}
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
      <InfiniteMovingCards
        className="max-w-[55rem]"
        items={cardData}
        speed="normal"
      />
      <ContributionGraph />
    </motion.section>
  );
}
