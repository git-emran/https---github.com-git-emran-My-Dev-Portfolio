"use client"
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./section-heading";
import { LinkPreview } from "./ui/link-preview";

export default function Faq() {
  return (
    <div id="faq" className="w-full mb-28 max-w-[60rem] scroll-mt-20 scroll-mb-28 text-center sm:mb-40 sm:p-30">
      <SectionHeading>Frequently Asked Questions & Answers</SectionHeading>
      <Accordion type="single" collapsible className="w-full mt-12">
        <AccordionItem value="item-1">
          <AccordionTrigger>What are your strengths ?</AccordionTrigger>
          <AccordionContent>
            My core strengths as a Product designer includes my ability to find
            clarity through ambiguity, navigate and scale any idea even if its
            just a single sentence.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Have you ever built a product from scratch?
          </AccordionTrigger>
          <AccordionContent>
            Yes I have, Infact I have built exactly 5 products from scratch. One
            of my personal favorite one is{" "}
            <LinkPreview
              url="https://getgenie.ai/"
              className="font-bold underline"
            >
              GetGenie AI
            </LinkPreview>{" "}
            {""}
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Are you an UI person or an UX person ?
          </AccordionTrigger>
          <AccordionContent>
            Working with both startups and enterprise companies made me realize
            that I am a Jack of all trades. Then I remembered the saying and
            made my self a master of one. Since I studied Design in my
            university I tend to focus more on the intreaction and UX of the
            navigation. That final chink in the armor is slowly fading away.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Did you build this site by yourself ?
          </AccordionTrigger>
          <AccordionContent>
      Yes I hard coded this site by myself. Using react, tailwind css, nextjs, framer-motion and typescript. I also know swift & swiftUI.  
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
