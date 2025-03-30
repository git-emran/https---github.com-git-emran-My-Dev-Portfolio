import Image from "next/image";
import { Badge } from "@radix-ui/themes";

interface Images {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface DescriptionSection {
  title: string;
  description?: string;
  badge?: string; // New badge prop
  images?: Images[];
}

const DescriptionSection: React.FC<DescriptionSection> = ({
  title,
  description,
  badge,
  images,
}) => {
  return (
    <section className="pt-8 pb-8">
      <h2 className="text-3xl font-bold mb-1">{title}</h2>
      {description && <p className="mb-2">{description}</p>}
      {badge && (
        <Badge color="orange">
          {badge}
        </Badge>
      )}
      <div className="mt-6 space-y-4"></div>
      {images?.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          quality={85}
          alt={image.alt || ""}
          width={image.width || 900}
          height={image.height || 700}
          unoptimized
          className="w-full h-auto mb-6"
        />
      ))}
    </section>
  );
};

export default DescriptionSection;
