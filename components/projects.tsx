"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 scroll-smooth px-12"
    >
      <SectionHeading>Featured projects</SectionHeading>
      <div className="mt-12">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        <div className="items-center justify-center flex ">
          <Button variant="outline" asChild>
            <Link href="/otherprojects">Other Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
