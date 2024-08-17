"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import ContributionGraph from "./contribution-graph";
import { FeaturesSectionDemo } from "./FeaturedAbout";
import DescriptionSection from "./DescriptionSection";
import Link from "next/link";

export default function About() {
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
    <section
      className="
    flex flex-col flex-wrap py-20 md:py-32 sm:py-10 lg:py-20 items-center justify-center"
    >
      <div className="flex flex-col items-center text-center justify-center">
        <DescriptionSection
          title="Fun & Work"
          description="And the things along the way"
        />
        <div className="items-center gap-4 flex-col justify-center flex">
          <FeaturesSectionDemo />
          <ContributionGraph />
        </div>
      </div>
      <div className="flex flex-col items-center mb-20 justify-center">
        {/* Peer Praise Section */}
        <div className="mt-20 items-center text-center justify-center">
          <DescriptionSection
            title="Peer Praise"
            description="People loves to work with me, their words! not mine"
          />
        </div>
        <InfiniteMovingCards
          className="max-w-[55rem]"
          items={cardData}
          speed="normal"
        />
        <button className=" bg-white cursor-pointer border font-medium border-gray-200 hover:bg-slate-200 text-sm px-10 py-4 rounded-md mt-8">
          <Link href="/mytimeline">View Timeline</Link>
        </button>
      </div>
    </section>
  );
}
