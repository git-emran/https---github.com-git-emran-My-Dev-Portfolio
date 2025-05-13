"use client";
import SideDescription from "../sideDescription";

export default function AboutTab1() {
  return (
    <main>
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
      <section className="p-20 bg-gray-100">
        <div className="items-center justify-center mx-auto">
          <SideDescription
            imagePosition="left"
            title="My Dive Into the Technical Side"
            paragraphs={[
              <>
                For a while, I thought my love affair with design would be all
                about colors, grids, and convincing clients that white space
                isnt actually wasted space. But somewhere between shipping my
                fifth design system and dodging endless handoff meetings,
                <span className="bg-yellow-100 font-semibold px-1 rounded">
                  I realized something crucial: real magic happens when you
                  understand both how things look and how they work under the
                  hood.
                </span>
              </>,
              <>
                No more just passing pretty Figma files to developers and hoping
                for the best—I started learning how the pixels I dreamed up
                turned into living, breathing products.
                <span className="bg-yellow-100 font-semibold px-1 rounded">
                  {" "}
                  <></>I picked up front-end languages like TypeScript and
                  React, built components, wrangled Tailwind classes like a
                  cowboy, and even explored SwiftUI to create animations that
                  didn’t just look good—they felt good.
                </span>
              </>,
            ]}
            imageAlt="Starting my coding journey"
            imageSrc="/first_widget.gif"
          />
        </div>
      </section>
      <section className="p-20 bg-gray-100">
        <div className="items-center justify-center mx-auto">
          <SideDescription
            imagePosition="right"
            title="Design by Day, Code by Night"
            paragraphs={[
              <>
                In my free time, you will still find me sketching new concepts,
                experimenting with open-source projects, or just giving random
                side projects the kind of pixel-perfect attention that would
                make myself proud. It reminds me why I started this journey in
                the first place: to create things that are both beautiful and
                meaningful.
              </>,
              <>
                <span className="bg-yellow-100 font-semibold px-1 rounded">
                  Staying hands-on with code not only keeps my logical
                  muscles sharp but also helps me create good looking and easy to use products.
                </span>
                {""}
              </>,
            ]}
            imageAlt="Coding at night"
            imageSrc="/personal-details-3.png"
          />
        </div>
      </section>
    </main>
  );
}
