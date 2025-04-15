"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { LinkPreview } from "./ui/link-preview";
import DescriptionSection from "./DescriptionSection";
import { useSectionInView } from "@/lib/hooks";

export default function Faq() {
  const { ref } = useSectionInView("FAQ", 0.5);
  return (
    <section
      id="faq"
      className="flex flex-wrap text-left flex-col p-10 w-full mt-20 mb-28 max-w-[60rem] scroll-mt-20 scroll-mb-28 sm:mb-40 sm:px-30"
    >
      <div className="text-center items-center">
        <DescriptionSection title="Frequently asked Questions & Answers" description="Recruiters, this is where I tried to answer your common questions" badge="FAQ" />
      </div>

      <Accordion type="single" collapsible className="w-full mt-12">
        <AccordionItem value="item-1">
          <AccordionTrigger>Your Strength ?</AccordionTrigger>
          <AccordionContent className="text-left">
            One of my core strength as a Product designer is my ability to find
            clarity through ambiguity, I can navigate and scale any idea even if its
            just a single sentence. Also I can code, which makes me a strong
            team player who understand both the complexity and feasability of
            the designs that I create.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            Have you ever built a product from scratch?
          </AccordionTrigger>
          <AccordionContent className="text-left">
            Yes I have, I have built exactly 5 products from scratch and
            some with over millions of user-base. My favorite one
            is{" "}
            <LinkPreview
              url="https://getgenie.ai/"
              className="font-bold underline text-blue-600"
            >
              GetGenie AI
            </LinkPreview>{" "}
            {""}I love it because the whole application is really easy to use
            and the extensive ability to control the outcome despite being an AI
            application.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Most Proficiency: UX or UI ?</AccordionTrigger>
          <AccordionContent className="text-left">
            Working with both startups and enterprise companies made me realize
            that I am a Jack of all trades. Then I remembered the saying and
            made my self a master of one. Since I studied Design in my
            university I tend to focus more on the intreaction and UX of the
            navigation. That final chink in the armor is slowly fading away.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            Did you build this site by yourself ?
          </AccordionTrigger>
          <AccordionContent>
            Yes I programmed this site by myself. Using react, typescript,
            tailwind css, nextjs, framer-motion. I also love building apps using
            swift & swiftUI.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            How about no-code website builders ?
          </AccordionTrigger>
          <AccordionContent>
            Yes, I can quickly put together big scale websites using Webflow, Framer, Wix, WordPress.
            Also with the help of JavaScript I can utilize custom code too.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left">
            How much Front-end development experience do you have ?
          </AccordionTrigger>
          <AccordionContent>
            I have 4 years of exclusive front-end development experience. Skilled in React, React Native, Typescript, Swift, SwiftUI. 
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
