"use client";
import SubpageHeader from "@/components/subpage-header";
import BackToTopButton from "@/components/buttontop";
import { TabsDemo } from "@/components/about-tabs";

export default function MoreAbout() {
  return (
    <main className="scroll-mt-28 mt-6 my-auto mx-auto pb-10 sm:mb-30 w-full">
      {/* header section */}
      <BackToTopButton />
      <SubpageHeader
        title="About me"
        subtitle="Learn more about me, what I like to do and my work"
      />

      {/* Background */}
      <section className="items-center justify-center mx-auto my-auto bg-gray-100">
        <div className="flex items-center w-full justify-center">
          <TabsDemo />
        </div>
      </section>
    </main>
  );
  
}
