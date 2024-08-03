"use client";

import BackToHome from "@/components/back-to-home";
import SubpageHeader from "@/components/subpage-header";
import { ExpandableCardDemo } from "@/components/ui/expandableCard";
import HoverCard from "@/components/ui/hoverCard";
import React from "react";

function OtherProjects() {
  return (
    <div className="min-h-screen sm:top-20 flex flex-col">
      <BackToHome />
      {/* Start of the Body   */}
      <section className="items-center justify-center flex-col">
        <h3 className="font-bold text-4xl flex items-center justify-center scroll-mt-20 mt-20">
          Other Fun Projects
        </h3>
        <p className="text-center mt-4 w-90 px-20 text-sm">
          Due to NDA some of the project details cannot be shared. Feel free to
          look around and ask me anything if you have any questions.
        </p>
      </section>
      <section className="mt-20 flex">
        <ExpandableCardDemo />
      </section>
    </div>
  );
}

export default OtherProjects;
