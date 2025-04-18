"use client";
import SubpageHeader from "@/components/subpage-header";
import DescriptionSection from "@/components/DescriptionSection";
import BackToTopButton from "@/components/buttontop";

export default function MoreAbout() {
  return (
    <main>
      {/* header section */}
      <BackToTopButton />
      <SubpageHeader
        title="About me"
        subtitle="Learn more about me, what I like to do and my work"
      />
      {/* Case study starts here */}
      <DescriptionSection title="" />

      {/* Background */}
  
    </main>
  );
}
