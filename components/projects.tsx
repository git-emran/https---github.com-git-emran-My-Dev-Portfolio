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
      <div className="text-center justify-center p-4 items-center">
        <DescriptionSection title="Featured Projects" badge="Detailed Case-studies" />
      </div>
      <div className="p-4 grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex p-4 items-center justify-center">
        <button className=" bg-white cursor-pointer border font-medium border-gray-200 hover:bg-slate-100 text-sm px-10 py-4 rounded-md">
          <Link href="/otherprojects"> View Other Projects </Link>
        </button>
      </div>
    </section>
  );
}
