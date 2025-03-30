"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import SubpageHeader from "@/components/subpage-header";
import BackToTopButton from "@/components/buttontop";
import DescriptionSection from "@/components/DescriptionSection";

export default function OfficeOutlet() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <BackToTopButton />
      <SubpageHeader
        title="Office Outlet"
        subtitle="Future of Workstation Planning"
      />
      {/* ----------------------------- */}

      {/* Body */}

      <section className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 pt-10">
            Why we started This project
          </h2>
          <p>
            The current enterprise or personal Workstation space planning and interior design process in the
            UAE demographic is time-consuming, lacking visualization
            capabilities, and often leads to costly mistakes and waste. Users
            struggle to visualize and experiment with different design options,
            resulting in dissatisfaction after physical implementation. We saw
            the gap.
          </p>
          {/* Teams */}
          <h3 className="text-lg font-bold leading-relaxed mb-4 mt-10">Team</h3>
          <ul className="flex flex-wrap mt-4 mb-7 gap-2">
            {[
              "Engineering Lead",
              "CEO",
              "Sr Designer/Researcher/Front-end Engineer (me)",
            ].map((tag, index) => (
              <li key={index} className="bg-gray-200 px-3 py-1 rounded-full">
                {tag}
              </li>
            ))}
          </ul>

          {/* Timeline Image */}
          <DescriptionSection
            title="Project Timeline"
            images={[{ src: "/office1.png", alt: "", width: 900, height: 200 }]}
          />
          {/* Asking right questions */}
          <DescriptionSection
            title="Asking the right questions"
            description="  I make sure I do not ask wrong questions as time is much valuable in
            a development lifeycle."
            images={[
              {
                src: "/office2.avif",
                alt: "Asking questions",
                width: 900,
                height: 200,
              },
            ]}
          />
          {/* Wireframing designing testing
           */}
          <DescriptionSection
            title="Wireframing, Designing & Testing"
            description="  Following a linear process was not feasable for us. So I did all of
            those things at the same time. I call it Iteration on the Go!."
            images={[
              {
                src: "/office3.webp",
                alt: "Wireframing",
                width: 900,
                height: 200,
              },
              {
                src: "/office4.webp",
                alt: "Wireframing",
                width: 900,
                height: 200,
              },
              {
                src: "/office5.webp",
                alt: "Wireframing",
                width: 900,
                height: 200,
              },
            ]}
          />
          {/* Image Bento */}
          <h2 className="text-3xl font-bold mb-4 pt-20">Final Design</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: "/officebento1.webp", colSpan: 3, rounded: true },
              { src: "/officebento2.webp", typo: true },
              { src: "/officebento3.webp" },
              { src: "/officebento4.webp" },
              { src: "/officegif1.webp", colSpan: 3, rounded: true },
            ].map((image, index) => (
              <div key={index} className={`${image.colSpan ? `col-span-${image.colSpan}` : ''}`}>
                <Image
                  src={image.src}
                  alt=""
                  width={900}
                  height={200}
                  quality={100}
                  unoptimized
                  className={`mt-5 ${image.rounded ? 'rounded-md' : ''} ${image.typo ? 'ounded-md' : ''}`}
                />
              </div>
            ))}
          </div>

          {/* Put design above this comment */}
        </div>
      </section>
    </main>
  );
}
