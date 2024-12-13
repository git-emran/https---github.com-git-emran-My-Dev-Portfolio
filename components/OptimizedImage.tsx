import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 900,
  height = 200,
}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    quality={80}
    className="rounded-md"
    loading="lazy" // Enable lazy loading for better performance.
  />
);

export default OptimizedImage;
