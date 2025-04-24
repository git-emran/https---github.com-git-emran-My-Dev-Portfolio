"use client";
import SubpageHeader from "@/components/subpage-header";
import BackToTopButton from "@/components/buttontop";
import SideDescription from "@/components/sideDescription";


export default function MoreAbout() {
  return (
    <main>
      {/* header section */}
      <BackToTopButton />
      <SubpageHeader
        title="About me"
        subtitle="Learn more about me, what I like to do and my work"
      />

      {/* Background */}
      <section className="p-20 bg-gray-100">
        <div className="items-center justify-center mx-auto">
          <SideDescription
            title="How it all Started"
            paragraphs={[
              <>
                The success of my app earned me my first internship as a{" "}
                <span className="bg-yellow-100 font-semibold px-1 rounded">
                  mobile developer at a tech startup
                </span>
                . While coding features, I still went out of my way to conduct
                user research and design better workflows.
              </>,
              <>
                This solidified my passion for UX Design, and by the end of my
                internship, I was offered a full-time position as a developer.{" "}
                <span className="bg-yellow-100 font-semibold px-1 rounded">
                  With a leap of faith, I countered the offer requesting a
                  full-time role as a UX Designer
                </span>
                . To my surprise, they agreed.{" "}
                <span className="text-xl">😯</span>
              </>,
            ]}
            imageSrc="/fuji-final.png"
            imageAlt=""
          />
        </div>
    
      </section>
    </main>
  );
}
