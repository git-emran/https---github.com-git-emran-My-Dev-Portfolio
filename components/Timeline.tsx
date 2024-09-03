
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  status: string;
  linkUrl?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  imageUrl,
  status,
  linkUrl,
}) => {
  return (
    <motion.div
      className="flex max-w-[40rem] items-start justify-start space-x-4 p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <span
          className={`block h-4 w-4 rounded-full justify-center items-start ${
            status === "update" ? "bg-red-500" : "bg-purple-500"
          }`}
        ></span>
        {/* Timeline bar */}
      </div>
      <div className=" justify-center items-start">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700 max-w-[40rem]">{description}</p>
        {linkUrl && (
          <Link className="font-medium text-blue-600 italic" href={linkUrl}>
            {linkUrl}
          </Link>
        )}

        <Image
          src={imageUrl}
          alt={title}
          height={700}
          width={600}
          unoptimized
          loading="lazy"
          className="mt-4 rounded-lg shadow-lg object-cover mb-20 w-fit h-fit "
        />
      </div>
    </motion.div>
  );
};
export default TimelineItem;
