import React, { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/data";

export default function AboutTab2() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <main className="mx-10">
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid cursor-pointer"
            onClick={() => handleImageClick(src)}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Selected"
              width={1000}
              height={1000}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}
