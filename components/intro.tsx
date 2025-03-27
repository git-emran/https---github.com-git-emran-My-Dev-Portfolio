"use client";

import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import React from "react";
import { LinkPreview } from "./ui/link-preview";
import { MdOutlineFileDownload } from "react-icons/md";
import { Text, Em, Heading, Kbd, Strong, Button } from "@radix-ui/themes";
import { HiOutlineMail } from "react-icons/hi";
import DescriptionSection from "./DescriptionSection";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cardData } from "@/lib/data";

const people = [
  {
    id: 1,
    name: "Emran Hossain",
    designation: "Designer & Frontend Engineer",
    image: "/headshot2.png",
  },
];

function Intro() {
  const { ref } = useSectionInView("Home");
  return (
    <section
      id="home"
      ref={ref}
      className="flex flex-col snap-start scroll-mt-[40rem] mt-20 scroll-smooth px-20"
    >
      <div className="flex flex-wrap items-center justify-center mb-6 w-full">
        <AnimatedTooltip items={people} />
      </div>
      <div className="flex max-w-3xl items-center flex-col">
        <Heading
          weight="medium"
          color="gray"
          highContrast
          size={{ initial: "4",  sm: "9", md: "9", lg: "9" }}
          className="text-center"
        >
          I am <Em>Emran</Em>, a <Em>Designer</Em> & <Em>Front-end </Em>{" "}
          engineer.
        </Heading>
        <div className="flex items justify-center mt-4">
          <Text size={{ initial: "1", sm: "3", md: "3"}} wrap="wrap" as= "div" className="max-w-[40rem]" align="center">
            I enjoy creating{" "}
            <LinkPreview
              url="https://github.com/git-emran"

              isStatic={true}
              imageSrc="/github.png"
            >
              {" "}
              <Kbd>open-source</Kbd>
            </LinkPreview>{" "}
            projects,
            <LinkPreview
              url="https://dribbble.com/chrollo"
              isStatic={true}
              imageSrc="/dribbble.png"
            >
              {" "}
              <Kbd>illustrations</Kbd>
            </LinkPreview>
            , design interactions &{" "}
            <LinkPreview
              url="https://www.instagram.com/designwithemran/"
              isStatic={true}
              imageSrc="/instagram.png"
            >
              <Kbd> satire design</Kbd>
            </LinkPreview>
            {""} ideas in my free time. I have over <Strong> 9 years </Strong>{" "}
            of experience designing for <Strong>B2B, SaaS & AI.</Strong>
          </Text>
        </div>

        {/* Buttons */}
        <div className=" flex flex-row items-center gap-2 sm:px-20 md:px-10 justify-center mt-10">
          <Button radius="full" variant="solid">
            <MdOutlineFileDownload />
            <Link href="/EmranCV.pdf"> Download CV</Link>
          </Button>

          <Button radius="full" variant="solid">
            <HiOutlineMail />
            <Link href="mailto:emrn.hossn@gmail.com">Email</Link>
          </Button>

          <Button variant="soft">
            <Link href="https://www.linkedin.com/in/emran-hossain-80ab17190/">
              <BsLinkedin />
            </Link>
          </Button>

          <Button variant="soft">
            <Link href="https://github.com/git-emran">
              <FaSquareGithub />
            </Link>
          </Button>
        </div>
        {/* Peer Praise Section */}
        <div className="flex flex-col items-center mb-20 mt-20 justify-center">
          <div className=" flex flex-wrap text-wrap mt-20 scroll-mt-20 items-center text-center justify-center pt-12">
            <DescriptionSection
              title="Peer Praise"
              description="First I understand then I deliver and they love me for it."
              badge="Testimonials"
            />
          </div>
          <InfiniteMovingCards
            className="max-w-[55rem]"
            items={[...cardData]}
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
