import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface DreamMachineProps {
  imageSrc: string;
  altText: string;
  title: string;
  subtitle: string;
}

const DreamMachine: FC<DreamMachineProps> = ({
  imageSrc,
  altText,
  title,
  subtitle,
}) => {
  return (
    <motion.div
      className="relative overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={imageSrc}
        alt={altText}
        width={500}
        height={300}
        className="w-full h-auto"
      />
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <h2 className="text-white text-3xl font-bold mb-2">{title}</h2>
        <p className="text-white text-xl">{subtitle}</p>
      </motion.div>
    </motion.div>
  );
};

export default DreamMachine;
