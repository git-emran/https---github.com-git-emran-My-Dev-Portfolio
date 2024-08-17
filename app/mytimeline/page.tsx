"use client";
import React from "react";
import TimelineItem from "@/components/Timeline";
import SubpageHeader from "@/components/subpage-header";
import { timelineitem } from "@/lib/data";


export default function MyTimeline() {


  return (
    <section className="min-h-screen sm:top-20 flex flex-col">
      <div className="text-center">
        <SubpageHeader
          title="Timeline"
          subtitle="The linear view of some milestones and notable moments that happened so far. And you can always find more information on Twitter and LinkedIn."
        />
      </div>

      <section className="flex flex-col items-center justify-center">
        <div className="">
          {timelineitem.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              status={item.status}
              linkUrl={item.linkUrl}
            />
          ))}
        </div>
        <div className="mb-40 text-3xl font-semibold"></div>
        <p className="text-center flex items-center">More Info Coming Soon</p>
      </section>
    </section>
  );
}
