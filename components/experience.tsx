"use client";
import React from "react";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import DescriptionSection from "./DescriptionSection";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

const experiencesdata = [
  {
    title: "Founding Designer",
    content: (
      <section>
        <h1 className="text-2xl font-bold">JoContractor</h1>
        <p className="text-sm text-gray-500 mb-6">
          Minneapolis, Minnesota, USA
        </p>
        <p>
          Building a platform to connect contractors with clients and vice versa
        </p>
        <div className="pt-4">
          <Image
            src="/jocontractor.png"
            alt="JoContractor"
            width={500}
            height={300}
            className="rounded-md"
          />
        </div>
      </section>
    ),
  },
  {
    title: "Lead Product Designer & Design Engineer",
    content: (
      <section>
        <h1 className="text-2xl font-bold">The Total Office</h1>
        <p className="text-sm text-gray-500 mb-6">Barsha Heights, Dubai</p>
        <p>
          Leading the Design team, Building the future of WorkStation building
          tool
        </p>
        <div className="pt-4">
          <Image
            src="/totalofficeheader.png"
            alt="TheTotalOffice"
            width={500}
            height={300}
            className="rounded-md"
          />
        </div>
      </section>
    ),
  },
  {
    title: "Lead UX/UI Designer",
    content: (
      <section>
        <h1 className="text-2xl font-bold">MarketTime B2B</h1>
        <p className="text-sm text-gray-500 mb-6">Texas, USA</p>
        <p>
          Helped small, medium and Enterprise businesses of Gift & Decor
          Industries serve more customers through our B2B application ecosystem
        </p>
        <div className="pt-4">
          <Image
            src="/markettimeheader.png"
            alt="TheTotalOffice"
            width={500}
            height={300}
            className="rounded-md"
          />
        </div>
      </section>
    ),
  },
];

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mt-6 pb-10 sm:mb-30 scroll-smooth bg-gray-100 w-full"
    >
      <div className="text-center">
        <DescriptionSection
          title="Experience"
          description="My Professional Journey"
        />
      </div>
      <div className="items-center justify-center text-start">
        <Timeline data={experiencesdata} />
      </div>
      <div className="items-center justify-center flex ">
        <button className=" bg-white cursor-pointer border font-medium border-gray-200 hover:bg-slate-200 text-sm px-10 py-4 rounded-md mt-14">
          <Link href="/mytimeline"> View Full Timeline </Link>
        </button>
      </div>
    </section>
  );
}
