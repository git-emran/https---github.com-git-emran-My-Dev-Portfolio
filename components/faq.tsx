"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { LinkPreview } from "./ui/link-preview";
import DescriptionSection from "./DescriptionSection";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";


export default function Faq() {
  return (
    <section
      id="faq"
      className="flex flex-wrap text-left flex-col p-10 w-full mb-28 max-w-[60rem] scroll-mt-20 scroll-mb-28 sm:mb-40 sm:px-30"
    >
      <div className="text-center items-center">
        <DescriptionSection title="Frequently asked Questions & Answers" />
      </div>

      <Accordion type="single" collapsible className="w-full mt-12">
        <AccordionItem value="item-1">
          <AccordionTrigger>Your Strength ?</AccordionTrigger>
          <AccordionContent>
            My core strengths as a Product designer includes my ability to find
            clarity through ambiguity, navigate and scale any idea even if its
            just a single sentence. Also I can code, which makes me a strong
            team player who understand both the complexity and feasability of
            the designs that I create.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            Have you ever built a product from scratch?
          </AccordionTrigger>
          <AccordionContent>
            Yes I have, Infact I have built exactly 5 products from scratch and
            each with over millions user-base. One of my personal favorite one
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
            Yes I hard coded this site by myself. Using react, tailwind css,
            nextjs, framer-motion and typescript, Hosting through Vercel. I also
            personally love building apps using swift & swiftUI.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
  
    </section>
  );
}
