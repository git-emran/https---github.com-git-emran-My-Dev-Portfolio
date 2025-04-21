"use client";

import { FeaturesSectionDemo } from "./FeaturedAbout";
import DescriptionSection from "./DescriptionSection";
import { useSectionInView } from "@/lib/hooks";
import { Button } from "@radix-ui/themes";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

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
          description="I am Emran Hossain & these are the things I learned to value along the way"
          badge="Short Summary"
        />

        <div className="flex flex-col items-center justify-center w-full">
          <FeaturesSectionDemo />
        </div>
        <div className="flex p-4 items-center justify-center mt-12">
          <Button className="hover:bg-blue-800 cursor-pointer">
            <MdOutlineArrowOutward />
            <Link href="/moreaboutme"> Learn More About Me </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
