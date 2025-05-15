"use client";

import { FC, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { X } from "lucide-react";

type SideDescriptionProps = {
  title: string;
  paragraphs: (string | JSX.Element)[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
};

const SideDescription: FC<SideDescriptionProps> = ({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}) => {
  const isImageLeft = imagePosition === "left";
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-6 md:p-12 ${
        isImageLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Block */}
      <div className={`${isImageLeft ? "order-1" : "order-2"}`}>
        <Card
          className="rounded-2xl shadow-md overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <CardContent className="p-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={700}
              height={500}
              unoptimized
              className="object-cover w-full h-auto"
            />
          </CardContent>
        </Card>
      </div>

      {/* Text Block */}
      <div className={`${isImageLeft ? "order-2" : "order-1"} space-y-6`}>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 z-10 text-white hover:text-gray-300"
            >
              <X size={30} />
            </button>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={800}
              unoptimized
              className="rounded-lg max-w-full max-h-screen"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default SideDescription;
