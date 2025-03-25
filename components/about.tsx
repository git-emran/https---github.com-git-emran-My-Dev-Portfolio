"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FeaturesSectionDemo } from "./FeaturedAbout";
import DescriptionSection from "./DescriptionSection";
import { useSectionInView } from "@/lib/hooks";


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
        "Emran was an awesome SaaS Product Designer at Tiblo, always coming up with fresh, user-friendly ideas. He had a knack for making our platform look great and work even better. Emran could take tricky concepts and turn them into designs that just clicked. He was super easy to work with and always ready to tackle problems. His mix of creativity and know-how really made a difference. We were lucky to have Emran on the team!",
      name: "Anders Tidemand",
      title: "CEO, Co-Founder, Tiblo Digital, Copenhagen, Denmark",
      imageUrl: "/tidemand.png",
    },
    {
      quote:
        "He's an expert in blending killer design with serious coding chops. He didn’t just make our platform look good—he built functionality that ran like a dream. Emran could dive into the code, fix bugs, and optimize systems like a pro. He was awesome to work with, always ready to troubleshoot or tweak things on the fly. His technical know-how and creative edge made our product faster and smarter. Tiblo was better off with Emran on the crew!",
      name: "Anders Blomqvist",
      title: "CTO, Co-Founder, Tiblo Digital, Copenhagen, Denmark",
      imageUrl: "/blomqivst.png",
    },
    {
      quote:
        "Working with Emran at was truly a pleasure. Emran displayed the ability to ask questions that not many others could. Solving customers pain points and making the best experience for them is truly Emrans passion and you can see that in his work output and in discussions with customers. I would NOT hesitate to work with Emran again as he is truly an exceptional UI/UX Designer and a Developer.",
      name: "Richard Wohnsiedler",
      title: "Sr Product Owner, ISN, Texas, USA",
      imageUrl: "/richard.webp",
    },
 
  ];
  return (
    <section
      id="about"
      ref={ref}
      className="
    flex flex-col flex-wrap py-20 md:py-32 sm:py-10 lg:py-20 items-center scroll-smooth justify-center"
    >
      {/* Peer Praise Section */}
      <div className="flex flex-col items-center mb-20 justify-center">
        <div className=" flex flex-wrap text-wrap mt-20 scroll-mt-20 items-center text-center justify-center pt-12">
          <DescriptionSection title="Peer Praise" description="Testimonials" />
        </div>
        <InfiniteMovingCards
          className="max-w-[55rem]"
          items={cardData}
          speed="normal"
        />
      </div>
      {/* About me */}
      <div className="flex flex-col items-center text-center justify-center">
        <DescriptionSection
          title="About me"
          description="& the Things I learned to value along the way"
        />

        <div className="items-center gap-4 flex-col justify-center flex">
          <FeaturesSectionDemo />
        </div>
      </div>
    </section>
  );
}
