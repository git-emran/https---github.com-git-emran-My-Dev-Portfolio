import Image from "next/image";
import { Button } from "@/components/ui/moving-border";

export default function GetGenie() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative w-full h-96 pt-0">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl text-white font-bold">
            GetGenie
          </h1>
        </div>
      </header>

      <section className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/getgenie.gif"
            alt="Project I worked on"
            width={900}
            height={700}
            quality={100}
            className="m:block rounded-t-lg shadow-2xl object-cove pt-2"
          />
          <h2 className="text-3xl font-bold mb-4 pt-10">About the Project</h2>
          <p className="text-lg leading-relaxed mb-4">
            Designed & Developed the front-end in JavaScript with the help of
            AntDesign framework.
          </p>
          <ul className="flex flex-wrap mt-4 mb-7 gap-2">
            {[
              "React",
              "JavaScript",
              "AntDesign",
              "A.I",
              "Content Generator",
            ].map((tag, index) => (
              <li key={index} className="bg-gray-200 px-3 py-1 rounded-full">
                {tag}
              </li>
            ))}
          </ul>

          {/* {Description} */}

          <h2 className="text-3xl font-bold mb-4 pt-11">Overview</h2>
          <p>
            Building an AI product requires designers to balance technical
            complexity with user-friendly design, understanding their needs
            while leveraging AI capabilities effectively. It is a delicate
            dance, navigating between innovation and usability, refining
            iteratively to create products that resonate with users.
          </p>
        </div>
      </section>
    </div>
  );
}
