"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    // Add a width property here if you have the actual width of each item (optional)
    width?: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const getDirection = () => {
      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--animation-direction",
          direction === "left" ? "forwards" : "reverse"
        );
      }
    };

    const getSpeed = () => {
      if (containerRef.current) {
        const speedMap = {
          fast: "20s",
          normal: "40s",
          slow: "80s",
        };
        containerRef.current.style.setProperty(
          "--animation-duration",
          speedMap[speed] || "40s" // Default to normal if speed is invalid
        );
      }
    };
    if (containerRef.current && scrollerRef.current) {
      // Calculate total width of all items (if width property exists)
      const totalWidth = items.reduce(
        (acc, item) => (item.width ? acc + item.width : acc),
        0
      );

      // Set the scroller width to the total width (if calculated)
      if (totalWidth) {
        scrollerRef.current.style.width = `${totalWidth}px`;
      }

      getDirection();
      getSpeed();
      setAnimationStarted(true);
    }
  }, [items, containerRef, scrollerRef, direction, speed]); // Re-calculate width on item changes

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <motion.ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          animationStarted && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        animate={{ x: direction === "left" ? "100%" : "-100%" }} // Set initial animation position
        transition={{ repeat: Infinity, repeatType: "loop" }} // Loop animation
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
