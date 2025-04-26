// components/SideDescription.tsx
import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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

  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-6 md:p-12 ${
        isImageLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Block */}
      <div className={`${isImageLeft ? "order-1" : "order-2"}`}>
        <Card className="rounded-2xl shadow-md overflow-hidden">
          <CardContent className="p-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={700}
              height={500}
              className="object-cover w-full h-auto"
            />
          </CardContent>
        </Card>
      </div>

      {/* Text Block */}
      <div className={`${isImageLeft ? "order-2" : "order-1"} space-y-6`}>
        <h2 className="text-3xl font-bold text-gray-900">
          {title}
        </h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideDescription;
