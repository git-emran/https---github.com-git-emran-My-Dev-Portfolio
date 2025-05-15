"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Badge } from "@radix-ui/themes";
import { X } from "lucide-react";

interface Images {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface DescriptionSection {
  title: string;
  description?: string;
  badge?: string;
  images?: Images[];
}

const DescriptionSection: React.FC<DescriptionSection> = ({
  title,
  description,
  badge,
  images,
}) => {
  const [selectedImage, setSelectedImage] = useState<Images | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="pt-8 pb-8">
      <h2 className="text-3xl font-bold mb-1">{title}</h2>
      {description && <p className="mb-2">{description}</p>}
      {badge && <Badge color="orange">{badge}</Badge>}

      <div className="mt-6 space-y-4">
        {images?.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              quality={100}
              alt={image.alt || ""}
              width={image.width || 900}
              height={image.height || 700}
              unoptimized
              className="w-full h-auto mb-6 rounded-md shadow-md transition duration-300 hover:opacity-80"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-10 text-white hover:text-gray-300"
            >
              <X size={30} />
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt || "Expanded image"}
              width={selectedImage.width || 1200}
              height={selectedImage.height || 800}
              unoptimized
              className="rounded-lg max-w-full max-h-screen"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DescriptionSection;
