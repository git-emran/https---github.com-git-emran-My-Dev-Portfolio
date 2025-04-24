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
                Every legend has an origin story—and mine?{" "}
                <span className="bg-yellow-100 font-semibold px-1 rounded">
                  It started somewhere between caffeine-fueled all-nighters and
                  obsessively perfecting pixel alignment.
                </span>
                I jumped into the world of design and front-end development at a
                time when “responsive design” was still more buzzword than
                standard.
              </>,
              <>
                Armed with curiosity,{" "}
                <span className="bg-yellow-100 font-semibold px-1 rounded">
                  Photoshop & Figma
                </span>{" "}
                , and more tabs open than any browser should reasonably handle,
                I grew into roles that let me blur the lines between design,
                code, and strategy.{" "}
                <span className="bg-yellow-100 font-semibold px-1 rounded">
                  I wasn’t just pushing pixels I was learning to build products
                  that people love to use and teams love to build.
                </span>
                . Today, I lead design and front-end teams across the globe.{" "}
                <span className="text-xl">😯</span>
              </>,
            ]}
            imageSrc="/first_started_1.png"
            imageAlt="how it all started"
          />
        </div>
      </section>
    </main>
  );
}
