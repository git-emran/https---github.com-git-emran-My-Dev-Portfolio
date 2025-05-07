"use client";

import BackToHome from "@/components/back-to-home";
import { ExpandableCardDemo } from "@/components/ui/expandableCard";
import React from "react";
import BackToTopButton from "@/components/buttontop";
import DescriptionSection from "@/components/DescriptionSection";

function OtherProjects() {
  return (
    <main className="min-h-screen sm:top-20 flex flex-col">
      <BackToTopButton />
      <BackToHome />
      {/* Start of the Body   */}
      <section className="items-center justify-center flex-col">
        <div className="mt-20 text-center items-center justify-center scroll-mt-20">
          <DescriptionSection
            title="Other Fun Projects"
            description=" Due to NDA all of the project details are not available. Let's chat if you have any questions"
          />
        </div>
      </section>
      <section className="mt-20 flex">
        <ExpandableCardDemo />
      </section>
    </main>
  );
}

export default OtherProjects;
