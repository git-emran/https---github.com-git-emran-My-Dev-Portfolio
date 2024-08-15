"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StringToBoolean } from "class-variance-authority/types";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  status: String; // You can extend this for other statuses
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
      className="flex items-start space-x-4 p-4 border-l-4 border-transparent hover:border-l-4 hover:border-blue-500 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <span
          className={`block h-4 w-4 rounded-full ${
            status === "update" ? "bg-red-500" : "bg-purple-500"
          }`}
        ></span>
        <div className="h-full w-1 bg-gray-200"></div>
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <Image
          src={imageUrl}
          alt={title}
          width={900}
          height={700}
          className="mt-4 rounded-lg shadow-lg object-cover w-64 h-40"
        />
      </div>
    </motion.div>
  );
};
export default TimelineItem;
