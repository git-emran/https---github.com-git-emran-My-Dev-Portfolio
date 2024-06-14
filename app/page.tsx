import Image from "next/image";
import Header from "@/components/header";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Timeline from "@/components/timeline";

export default function Page() {
  return (
    <main className="flex flex-col relative items-center px-4">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
