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
import genieImg from "@/public/genie-head.png";
import imapslogoImg from "@/public/insidemapslogo.png"
import mtrackImg from "@/public/logomtrack.png"
import fujiImg from "@/public/fuji-logo.png"

export const cardData = [
  {
    quote:
      "MarketTime is a fast-paced company with ever-changing priorities, and Emran did an excellent job of juggling the demands provided to him by multiple Agile teams. His ability to adapt quickly while maintaining a high standard of work is truly impressive. Emran's leadership skills shine through in the way he inspires his team, always ready to step in and support wherever needed. Working with him was not only productive but also a pleasure, as he brings both professionalism and a positive attitude to the table.",
    name: "Todd Litzman",
    title: "Founder of Brandwise, Tech Entrepreneur, Texas, USA",
    imageUrl: "/todd.jpeg.webp",
  },

  {
    quote:
      "Emran was an awesome SaaS Product Designer at Tiblo, always coming up with fresh, user-friendly ideas. He had a knack for making our platform look great and work even better. Emran could take tricky concepts and turn them into designs that just clicked. He was super easy to work with and always ready to tackle problems. His mix of creativity and know-how really made a difference. We were lucky to have Emran on the team!",
    name: "Anders Tidemand",
    title: "CEO, Co-Founder, Tiblo Digital, Copenhagen, Denmark",
    imageUrl: "/tidemand.png",
  },
  {
    quote:
      "He's an expert in blending killer design with serious coding chops. He didn’t just make our platform look good—he built functionality that ran like a dream. Emran could dive into the code, fix bugs, and optimize systems like a pro. He was awesome to work with, always ready to troubleshoot or tweak things on the fly. His technical know-how and creative edge made our product faster and smarter. Tiblo was better off with Emran on the crew!",
    name: "Anders Blomqvist",
    title: "CTO, Co-Founder, Tiblo Digital, Copenhagen, Denmark",
    imageUrl: "/blomqivst.png",
  },
  {
    quote:
      "Working with Emran at was truly a pleasure. Emran displayed the ability to ask questions that not many others could. Solving customers pain points and making the best experience for them is truly Emrans passion and you can see that in his work output and in discussions with customers. I would NOT hesitate to work with Emran again as he is truly an exceptional UI/UX Designer and a Developer.",
    name: "Richard Wohnsiedler",
    title: "Sr Product Owner, ISN, Texas, USA",
    imageUrl: "/richard.webp",
  },
] as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
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
    title: "FujiFilm",
    description:
      "Designing a Comprehensive dashboard visualizing a data-heavy complex system for a Biotech laboratory called FujiFilm Diosynth.  ",
    imageUrl: fujiImg,
    href: "/fujifilm",
  },
  {
    title: "MatchTrack",
    description:
      "Successfully launched a Sports management software for Tennis Coaches and Clubs. Managing teams has never been easier. ",
    tags: ["Gutenberg", "JavaScript", "AntDesign", "A.I", "Content Generator"],
    imageUrl: mtrackImg,
    href: "/matchtrack",
  },
  {
    title: "GetGenie AI",
    description:
      "Designed & Developed the front-end in JavaScript leveraging the Ant Design framework. A complete design journey of the product",
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
  "Website Accessibility",
  "Design Systems",
  "Design Thinking",
  "User Interface Design",
  "User Flows",
  "Wireframing",
  "Prototyping",
  "User Research",
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
