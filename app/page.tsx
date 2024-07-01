"use client"
import Header from "@/components/header";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Faq from "@/components/faq";

export default function Page() {
  return (
    <main className="flex flex-col overflow-x-hidden w-full relative items-center pt-28 sm:pt-26">
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
