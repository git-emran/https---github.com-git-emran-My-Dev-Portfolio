import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import insidemapsImg from "@/public/insidemaps.gif";
import getgenieImg from "@/public/getgenie.gif";
import officeImg from "@/public/office.gif";
import webstieImg from "@/public/website.gif";
import { FaComputer } from "react-icons/fa6";
import { FaCompassDrafting } from "react-icons/fa6";
import { FaCubes } from "react-icons/fa6";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: " Lead Product Designer @The Total Office",
    location: "Barsha Heights, Dubai",
    description:
      "Leading the Design team, Building the future of WorkStation building tool",
    icon: React.createElement(FaComputer),
    date: "2024",
  },
  {
    title: "Lead UX/UI Designer @MarketTime",
    location: "Houston, Texas, USA",
    description:
      "Helped small, medium and Enterprise businesses of Gift & Decor Industries serve more customers through our B2B application ecosystem",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Lead Product Designer @XpeedStudio",
    location: "Dhaka, Bangladesh",
    description:
      "Led a Team 7 Designers. Specially Hired to design and develop AI based WordPress Gutenberg Plugin GetGenie AI, also web and Mobile based applications",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Lead Product Designer @Insidemaps",
    location: "Silicon Valley, California, USA",
    description:
      "I collaborated closely with Designers, Sr Product Manager, Developers and Marketing Team to strategize product vision and growth",
    icon: React.createElement(FaCompassDrafting),
    date: "2020",
  },
  {
    title: "Sr UI/UX Designer @Genex Infosys",
    location: "Dhaka, Bangladesh",
    description:
      "I collaborated closely with Designers, Sr Product Manager, Developers and Marketing Team to strategize product vision and growth",
    icon: React.createElement(FaCubes),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "GetGenie",
    description:
      "Designed & Developed the front-end in JavaScript with the help of AntDesign framework ",
    tags: ["React", "JavaScript", "AntDesign", "A.I", "Content Generator"],
    imageUrl: getgenieImg,
    href: "/getgenie",
  },

  {
    title: "InsideMaps Capture",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: insidemapsImg,
    href: "/insiddemaps",
  },
  {
    title: "The Office Outlet",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: officeImg,
    href: "/officeoutlet",
  },
  {
    title: "Website Redesign",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: webstieImg,
    href: "/websiteredesign",
  },
];

export const skillsData = [
  "Human Centered Design",
  "Design Accessibility ",
  "User Experience Design",
  "Product Lifecycle",
  "Design Efficiency",
  "User Interviews",
  "Remote/Offline Usability Testing",
  "Design Leadership & Mentorship",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Swift",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
