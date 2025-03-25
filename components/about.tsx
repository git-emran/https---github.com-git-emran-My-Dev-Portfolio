"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FeaturesSectionDemo } from "./FeaturedAbout";
import DescriptionSection from "./DescriptionSection";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About");

  
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
          description="& the Things I learned to value along the way"
          badge="Summary"
        />

        <div className="items-center gap-4 flex-col justify-center flex">
          <FeaturesSectionDemo />
        </div>
      </div>
    </section>
  );
}
