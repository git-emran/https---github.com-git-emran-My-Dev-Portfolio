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
    <main className="flex flex-col overflow-x-hidden pt-20 w-full relative items-center sm:pt-24">
      <Header />
      <Intro />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Faq />
    </main>
  );
}
