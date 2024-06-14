import React, { useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  imageUrl: string; // Renamed to imageUrl for clarity
  title: string;
  description: string;
  smallText?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  smallText,
}) => {
  const [hovered, setHovered] = useState(false);

  const imageVariant = {
    initial: { backgroundPositionX: "0%" }, // Adjust positioning based on image
    hover: { backgroundPositionX: "20%" }, // Adjust hover displacement
  };

  const cardStyles = `rounded-lg overflow-hidden relative shadow-md bg-white bg-cover bg-no-repeat`; // Combine background styles

  return (
    <motion.div
      className={cardStyles}
      style={{ backgroundImage: `url(${imageUrl})` }} // Set background image dynamically
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex h-full">
        <motion.div
          className="w-1/3 h-full bg-gray-100"
          variants={imageVariant}
          animate={hovered ? "hover" : "initial"}
          transition={{ duration: 0.2 }}
        />
        <div className="flex-grow px-6 py-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-500">{smallText}</p>
          <p className="text-base">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
