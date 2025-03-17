import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import ttologo from "@/public/ttologo.png"
import { SiWebex } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { FaCompassDrafting } from "react-icons/fa6";
import { FaCubes } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import genieImg from "@/public/genie-head.png"
import imapslogoImg from "@/public/insidemapslogo.png"


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
  {
    name: "FAQ",
    hash: "#faq",
  },
] as const;

export const experiencesData = [
  {
    title: "Product Lead @Tiblo Digital",
    location: "Copenhagen, Denmark",
    description:
      "Primary responsibility was to translate the client's requirements into a Product roadmap, Design deliverables and Trackable metrics. Also to make things look cool",
    icon: React.createElement(SiWebex),
    date: "2024-Present",
  },
  {
    title: " Design director, Founding Designer @ JoContractor",
    location: "Minneapolis, Minnesota, USA",
    description:
      "Enhancing the contracting experiences for the average Jo. They can track projects easily, connect with clients and manage contracts like its a walk in the park.",
    icon: React.createElement(FaFireAlt),
    date: "2024",
  },

  {
    title: " Lead Product Designer/Front-end Dev @The Total Office",
    location: "Barsha Heights, Dubai",
    description:
      "Leading the Product Design team, Building the future of WorkStation building tool",
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
    title: "Lead Product Designer/Front-end Dev @XpeedStudio",
    location: "Dhaka, Bangladesh",
    description:
      "Led a Team 7 Designers. Specially Hired to design and develop AI based WordPress Gutenberg Plugin GetGenie AI, also web and Mobile based applications",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Lead Product Designer, UI Engineer @Insidemaps",
    location: "Silicon Valley, California, USA",
    description:
      "I collaborated closely with Designers, Sr Product Manager, Developers and Marketing Team to strategize product vision and growth",
    icon: React.createElement(FaCompassDrafting),
    date: "2020",
  },
  {
    title: "Sr UI/UX Designer, Jr. Front-end Developer @Genex Infosys",
    location: "Dhaka, Bangladesh",
    description:
      "I collaborated closely with Designers, Sr Product Manager, Developers and Marketing Team to strategize product vision and growth",
    icon: React.createElement(FaCubes),
    date: "2019",
  },
  {
    title: "Front-end Developer @BDTube ltd",
    location: "Hamburg, Germany",
    description:
      "Built an app for farmers collaboratively with advanced search patterns, personalized recommendations, and real-time data boosting bookings by 40%",
    icon: React.createElement(FaCss3Alt),
    date: "2017",
  },
] as const;

export const projectsData = [
  {
    title: "GetGenie AI",
    description:
      "Designed & Developed the front-end in JavaScript leveraging the AntDesign framework. A complete design journey of the product",
    tags: ["Gutenberg", "JavaScript", "AntDesign", "A.I", "Content Generator"],
    imageUrl: genieImg,
    href: "/getgenie",
  },

  {
    title: "Asset Capture",
    description:
      "As a Lead Product Designer I helped them redesign their most favorite feature where users can scan a home without any errors",
    tags: ["iOS", "SwiftUI", "Accessibility", "Interaction Design"],
    imageUrl: imapslogoImg,
    href: "/insiddemaps",
  },
  {
    title: "The Office Outlet",
    description:
      "I designed 'Office Outlet' for the The Total Office where users can virtually organize their WorkStation",
    tags: ["Figma", "React", "TypeScript", "Redux", "SQL"],
    imageUrl: ttologo,
    href: "/officeoutlet",
  },
  {
    title: "Insidemaps.com",
    description:
      "Redesigning the legacy experience with brand new Navigation, Accessibility, Building brand new scalable design system",
    tags: ["React", "Figma", "WCAG 2.0", "Tailwind", "UX Design"],
    imageUrl: imapslogoImg,
    href: "/websiteredesign",
  },
];

export const skillsData = [
  "Human Centered Design",
  "Interaction Design",
  "Design Accessibility",
  "User Experience Design",
  "Product Lifecycle",
  "Design Efficiency",
  "User Interviews",
  "Usability Testing",
  "Illustration",
  "Design Leadership & Mentorship",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Swift",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;
