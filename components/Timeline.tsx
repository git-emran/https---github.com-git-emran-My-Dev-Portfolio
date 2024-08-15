import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  status: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  imageUrl,
  status,
}) => {
  return (
    <motion.div
      className="flex items-start space-x-4 p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex">
        <span
          className={`block h-4 w-4 rounded-full ${
            status === "update" ? "bg-red-500" : "bg-purple-500"
          }`}
        ></span>
        {/* Timeline bar */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-400 h-[20rem] opacity-40 items-center justify-center"></div>
      </div>
      <div className="">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <Image
          src={imageUrl}
          alt={title}
          height={700}
          width={900}
          className="mt-4 rounded-lg shadow-lg object-cover w-64 h-40"
        />
      </div>
    </motion.div>
  );
};
export default TimelineItem;
