import Header from "@/components/header";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Faq from "@/components/faq";
import Intro from "@/components/intro";
import React from "react";

export default function Page() {
  return (
    <main className="flex flex-col overflow-x-hidden w-full relative mt-20 items-center sm:pt-26">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Faq />
    </main>
  );
}
