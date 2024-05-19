import Image from "next/image";
import Header from "@/components/header";
import Intro from "@/components/intro";

export default function Page() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
    </main>
  );
}
