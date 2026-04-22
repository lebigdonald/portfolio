import {useState} from "react";
import {cn} from "@/lib/utils";

export default function OptimizedImage({
  src,
  alt,
  className,
  aspectRatio = "16/9",
  grayscale = false
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{aspectRatio}}
    >
      {/* LQIP placeholder */}
      <div
        className={cn(
          "absolute inset-0 bg-secondary animate-pulse transition-opacity duration-700",
          loaded ? "opacity-0" : "opacity-100"
        )}
      />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-all duration-700",
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
          grayscale && "grayscale hover:grayscale-0 transition-all duration-500"
        )}
      />
    </div>
  );
}
