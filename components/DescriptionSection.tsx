import Image from "next/image";
import React from "react";


interface Images {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface DescriptionSection {
  title: string;
  description?: string;
  images?: Images[];
}

const DescriptionSection: React.FC<DescriptionSection> = ({
  title,
  description,
  images
}) => {
  return (
    <section className="pt-8">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p>{description}</p>
      <div className="mt-10 space-y-4"></div>
      {images?.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          quality={85}
          alt={image.alt || ""}
          width={image.width || 900}
          height={image.height || 700}
          className="w-full h-auto mt-2 mb-12"
        />
      ))}
    </section>
  );
};
export default DescriptionSection;
