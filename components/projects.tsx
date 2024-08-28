"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import DescriptionSection from "./DescriptionSection";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 scroll-smooth px-12"
    >
      <div className="text-center items-center">
        <DescriptionSection title="Featured Projects" />
      </div>

      <div className="mt-12">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        <div className="items-center justify-center flex ">
          <button className=" bg-white cursor-pointer border font-medium border-gray-200 hover:bg-slate-200 text-sm px-10 py-4 rounded-md mt-14">
            <Link href="/otherprojects"> View Other Projects </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
