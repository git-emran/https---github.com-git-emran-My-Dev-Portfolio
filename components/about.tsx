import React from "react";
import SectionHeading from "./section-heading";

export default function about() {
  return (
    <section className="text-center max-w-[49rem]">
      <SectionHeading> About </SectionHeading>
      <p className="items-center mb-10 mt-4 px-4 text-2xl leading-[1.5] sm:text-4xl">
        A wizard who loves <span className="font-bold">design and code.</span> I
        tell stories through my designs. I spend most of my free time solving
        <span className="font-bold"> design problems</span> around me, creating
        illustrations, design interactions and product design memes.
      </p>
    </section>
  );
}
