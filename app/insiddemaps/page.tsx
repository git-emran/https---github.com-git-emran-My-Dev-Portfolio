import Image from "next/image";

export default function Insidemaps() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative w-full h-96">
        <Image
          src="/public/insidemaps.gif"
          alt="GetGenie"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl text-white font-bold">
            Insidemaps Capture
          </h1>
        </div>
      </header>
      <section className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About the Project</h2>
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
        </div>
      </section>
    </div>
  );
}
