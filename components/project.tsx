"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  href = "",
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  // Optimized animations with spring effects
  const scaleProgess = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.8, 1]),
    { stiffness: 200, damping: 20 }
  );
  const opacityProgess = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.6, 1]),
    { stiffness: 200, damping: 20 }
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-5 sm:mb-8 last:mb-0 items-center justify-center rounded-lg shadow-lg"
    >
      <Link href={href}>
        <section className="bg-gray-100 max-w-[46rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl text-left font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-left mb-6 leading-relaxed text-gray-700 dark:text-gray-700">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 pt-7 mb-7 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-4 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-black/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            placeholder="blur"
            blurDataURL="/path-to-blur-placeholder.jpg"
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
              transition 
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2
              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2
              group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </Link>
    </motion.div>
  );
}
