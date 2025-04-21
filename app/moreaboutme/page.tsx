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
      <DescriptionSection
        title="About me"
        description="A little bit of this, a little bit of that"
      />

      {/* Background */}
      <section className="p-8 bg-gray-100"></section>
    </main>
  );
}
