import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { Button } from "./ui/moving-border";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-8 text-center justify-center items-center max-w-[49rem]"
    >
      <SectionHeading> My Projects </SectionHeading>
      <p className="items-center mb-10 mt-4 px-4 text-2xl leading-[1.5] sm:text-4xl">
        These are the <span className="font-bold">highlighted projects</span>{" "}
        that I have built over the past years. All of the projects are built
        from scratch
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
