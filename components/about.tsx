"use client";

import { FeaturesSectionDemo } from "./FeaturedAbout";
import DescriptionSection from "./DescriptionSection";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      id="about"
      ref={ref}
      className="flex flex-col py-16 sm:py-20 md:py-24 lg:py-32 items-center scroll-smooth justify-center w-full px-4 sm:px-8"
    >
      {/* About me */}
      <div className="flex flex-col items-center text-center justify-center max-w-4xl w-full">
        <DescriptionSection
          title="About me"
          description="& the Things I learned to value along the way"
          badge="Summary"
        />

        <div className="flex flex-col items-center justify-center w-full">
          <FeaturesSectionDemo />
        </div>
      </div>
    </section>
  );
}
