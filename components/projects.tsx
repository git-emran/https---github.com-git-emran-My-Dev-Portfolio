import React from "react";
import SectionHeading from "./section-heading";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section className="text-center max-w-[49rem]">
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

type ProjectProps = (typeof projectsData)[0];
function Project({ title, description, tags, imageUrl }) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </section>
  );
}
