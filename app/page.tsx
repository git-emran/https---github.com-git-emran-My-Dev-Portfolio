import Image from "next/image";
import Header from "@/components/header";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Page() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Projects />
    </main>
  );
}
