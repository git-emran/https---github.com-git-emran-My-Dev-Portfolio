"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FeaturesSectionDemo } from "./FeaturedAbout";
import DescriptionSection from "./DescriptionSection";
import { useSectionInView } from "@/lib/hooks";
import { Badge } from "@radix-ui/themes";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  const cardData = [
    {
      quote:
        "MarketTime is a fast-paced company with ever-changing priorities, and Emran did an excellent job of juggling the demands provided to him by multiple Agile teams. His ability to adapt quickly while maintaining a high standard of work is truly impressive. Emran's leadership skills shine through in the way he inspires his team, always ready to step in and support wherever needed. Working with him was not only productive but also a pleasure, as he brings both professionalism and a positive attitude to the table.",
      name: "Todd Litzman",
      title: "Founder of Brandwise, Tech Entrepreneur, Texas, USA",
      imageUrl: "/todd.jpeg.webp",
    },
    {
      quote:
        "Working with Emran at was truly a pleasure. Emran displayed the ability to ask questions that not many others could. Solving customers pain points and making the best experience for them is truly Emrans passion and you can see that in his work output and in discussions with customers. I would NOT hesitate to work with Emran again as he is truly an exceptional UI/UX Designer and a Developer.",
      name: "Richard Wohnsiedler",
      title: "Sr Product Owner, ISN, Texas, USA",
      imageUrl: "/richard.webp",
    },
    {
      quote:
        "Emran's really good at figuring out tricky questions from customers. He's always there to help fix any problems and make sure everyone has a great experience. You can really tell how much he cares about making customers happy, just by talking to him or seeing his work. His ability to stay calm under pressure and find solutions quickly is impressive, making him an invaluable asset to any team. It's clear that he puts the needs of customers first, and his commitment to their satisfaction never stops.",
      name: "Shafkat Ismam",
      title: "Head of Brand Marketing, Ultra Clean, Malaysia",
      imageUrl: "/shafkat.webp",
    },
  ];
  return (
    <section
      id="about"
      ref={ref}
      className="
    flex flex-col flex-wrap py-20 md:py-32 sm:py-10 lg:py-20 items-center scroll-smooth justify-center"
    >
      {/* About me */}
      <div className="flex flex-col items-center text-center justify-center">
        <DescriptionSection
          title="About me"
          badge="& the Things I learned to value along the way"
        />

        <div className="items-center gap-4 flex-col justify-center flex">
          <FeaturesSectionDemo />
        </div>
      </div>
      {/* Peer Praise Section */}
      <div className="flex flex-col items-center mb-20 justify-center">
        <div className=" flex flex-wrap text-wrap mt-60 scroll-mt-60 items-center text-center justify-center pt-12">
          <DescriptionSection
            title="Peer Praise"
            badge="Testimonials"
          />
        </div>
        <InfiniteMovingCards
          className="max-w-[55rem]"
          items={cardData}
          speed="normal"
        />
      </div>
    </section>
  );
}
