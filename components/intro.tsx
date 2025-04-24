"use client";

import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { LinkPreview } from "./ui/link-preview";
import { MdOutlineFileDownload } from "react-icons/md";
import { Heading, Kbd, Strong, Button } from "@radix-ui/themes";
import { HiOutlineMail } from "react-icons/hi";
import DescriptionSection from "./DescriptionSection";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cardData } from "@/lib/data";

const people = [
  {
    id: 1,
    name: "Emran Hossain",
    designation: "Designer & Frontend Engineer",
    image: "/Headshot 1.png",
  },
];

function Intro() {
  const { ref } = useSectionInView("Home");
  return (
    <section
      id="home"
      ref={ref}
      className="flex flex-col snap-start scroll-mt-[40rem] mt-20 scroll-smooth"
    >
      <div className="flex flex-wrap items-center justify-center mb-4 w-full">
        <AnimatedTooltip items={people} />
      </div>
      <div className="flex max-w-3xl items-center flex-col">
        <Heading
          weight="light"
          color="gray"
          align="center"
          highContrast
        ></Heading>
        <div className="flex pt-4 font-sans flex-wrap px-40 sm:px-60 md:px-20 lg:px-10 xl:px-6">
          <Heading
            wrap="balance"
            size={{ initial: "2", sm: "4", md: "5", lg: "7" }}
            align="center"
            weight="regular"
          >
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
            design interactions &{" "}
            <LinkPreview
              url="https://www.instagram.com/designwithemran/"
              isStatic={true}
              imageSrc="/instagram.png"
            >
              <Kbd> satire design</Kbd>
            </LinkPreview>
            {""} ideas in my spare time. I have over <Strong> 9 years </Strong>{" "}
            of experience designing for <Strong>B2B, SaaS & AI</Strong>{" "}
            Industries.
          </Heading>
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
              description="First I understand then I deliver, and they love me for it."
              badge="Testimonials"
            />
          </div>
          <InfiniteMovingCards
            className="max-w-[55rem] mb-20"
            items={[...cardData]}
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
