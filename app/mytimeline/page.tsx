"use client";

import { experiencesData } from "@/lib/data";
import DescriptionSection from "@/components/DescriptionSection";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import BackToTopButton from "@/components/buttontop";
import BackToHome from "@/components/back-to-home";

export default function MyTimeline() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <main ref={ref} className="scroll-mt-28 mt-6 my-auto mx-auto pb-10 sm:mb-30 w-full">
      <section id="timeline">
        <div>
          <BackToHome />
          <BackToTopButton />
        </div>
        <div className="text-center">
          <DescriptionSection
            title="Full Job Experience"
            description="With over 8 years of experience, I have managed teams and tackled many bottlenecks."
          />
        </div>
        <div>
          <VerticalTimeline lineColor="#ededed">
            {" "}
            {/* Added a default line color */}
            {experiencesData.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                visible={true}
                contentStyle={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{}}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "rgb(32, 99, 233)",
                  color: "#fff",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-bold text-black capitalize">
                  {item.title}
                </h3>
                <p className="font-normal pb-3 !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700">
                  {item.description}
                </p>
                
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </main>
  );
}
