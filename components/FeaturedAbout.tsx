import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Value of Team Work",
      description:
        "Working around each other's strengths and weaknesses is a major key to unlocking a Team's true potential. ",
      skeleton: <SkeletonOne />,
      className:
        "flex-wrap col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Time with Family matters",
      description:
        "I love travelling around the globe. These are the places and the culture I loved most.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Design SneakPeek Reel",
      description:
        "It's a short collection of some of the design related work over the years.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Remote Work Experience",
      description:
        "From cross-functional teams to cross-continental teams, Remote, Hybrid, Onsite, I have done it all. And yes! those are the offices I have worked at.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center max-w-6xl px-12 mx-40">
      <div className="relative flex">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="flex h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 w-full relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" flex text-wrap mx-2 max-w-5xl px-4 text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm text-wrap flex md:text-base px-4 max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-2 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex flex-wrap py-8 px-2 gap-10 h-full">
      <div className="w-full h-fit p-5 mx-auto rounded-md bg-white dark:bg-neutral-900 shadow-md group">
        <div className="grid grid-row-2 gap-2 w-full h-full space-y-2">
          {/* TODO */}
          <Image
            src="/mt1.png"
            alt="header"
            width={2000}
            height={800}
            className="h-fit w-fit object-cover justify-center rounded-sm"
          />
        </div>
      </div>

      {/* <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" /> */}
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="https://youtu.be/W62B-Zmsm2E"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-wrap w-fit h-fit flex-col space-y-2  relative">
          <IconBrandYoutubeFilled className="h-20 w-20 absolute x-10 z-10 inset-0 text-red-500 m-auto " />
          <div className="flex flex-wrap">
            {" "}
            <Image
              src="/vidthumb.png"
              alt="header"
              width={800}
              height={800}
              className="w-fit h-fit items-center flex justify-center object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "/travel1.jpg",
    "/travel2.jpg",
    "/travel4.jpg",
    "/travel5.jpg",
  ];
  const images2 = [
    "/travel5.jpg",
    "/travel6.jpg",
    "/travel7.jpg",
    "/travel8.jpg",
    "/travel9.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row items-center">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl mt-4 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="Vacation Images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-1"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center">
        {images2.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl mt-4 bg-white border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-gray-100 to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-gray-100 to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center justify-center bg-transparent mt-10">
      <Globe className="absolute -right-5 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [40.761147, -73.985741], size: 0.1 },
        { location: [48.858093, 2.294694], size: 0.1 },
        { location: [-13.16322, -72.544963], size: 0.1 },
        { location: [27.175015, 78.042155], size: 0.1 },
        { location: [29.979235, 31.134006], size: 0.1 },
        { location: [41.889966, 12.492269], size: 0.1 },
        { location: [20.682778, -88.568056], size: 0.1 },
        { location: [30.328917, 35.44447], size: 0.1 },
        { location: [13.412469, 103.866486], size: 0.1 },
        { location: [25.197278, 55.274306], size: 0.1 },
        { location: [-25.695556, -54.436389], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
