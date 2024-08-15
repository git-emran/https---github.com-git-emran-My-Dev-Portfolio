"use client";
import React from "react";
import TimelineItem from "@/components/Timeline";
import SubpageHeader from "@/components/subpage-header";
import DescriptionSection from "@/components/DescriptionSection";
import Header from "@/components/header";

export default function MyTimeline() {
  const items = [
    {
      date: "Aug 15, 2024",
      title: "Designing JoContractor Functionalities",
      description: "",
      imageUrl: "/travel1.jpg",
      status: "update",
    },
    {
      date: "July 15, 2024",
      title: "Thailand, Singapore, Malaysia Trip",
      description: "Enjoying couple of weeks with my family",
      imageUrl: "/travel2.jpg",
      status: "released",
    },
    {
      date: "July 15, 2024",
      title: "Thailand, Singapore, Malaysia Trip",
      description: "Enjoying couple of weeks with my family",
      imageUrl: "/travel2.jpg",
      status: "released",
    },
  ];

  return (
    <section className="min-h-screen sm:top-20 flex flex-col">
      <Header />
      <section className="">
        <div className="mt-20 text-center items-center justify-center ">
          <DescriptionSection
            title="Timeline"
            description="The linear view of some milestones and notable moments that happened so far (119 key moments). And you can always find more information on Twitter and LinkedIn."
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <div className="mt-20 ">
          {items.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              status={item.status}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
