"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import DescriptionSection from "./DescriptionSection";
import { Button } from "@radix-ui/themes";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mt-12 scroll-smooth mb- bg-slate-100 w-full pb-12 items-center justify-center flex flex-col"
    >
      <div className="text-center justify-center p-4 items-center">
        <DescriptionSection
          title="Featured Projects"
          description="Case-studies"
          badge="5 min read"
        />
      </div>
      <div className="p-4 grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex p-4 items-center justify-center mt-12">
        <Button className="hover:bg-blue-800 cursor-pointer">
          <MdOutlineArrowOutward />
          <Link href="/otherprojects"> View Other Projects </Link>
        </Button>
      </div>
    </section>
  );
}
