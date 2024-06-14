import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { Button } from "./ui/moving-border";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-8 text-center max-w-[49rem]">
      <SectionHeading> My Projects </SectionHeading>
      <p className="items-center justify-center mb-10 mt-4 px-4 text-2xl leading-[1.5] sm:text-2xl">
        The <span className="font-bold">Projects</span>{" "}
        that I have built over the past years.
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
