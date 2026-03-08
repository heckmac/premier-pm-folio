import { useState } from "react";
import { Expand } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ImageLightbox from "./ImageLightbox";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const DesignImage = ({ src, alt, caption, className = "" }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn>
      <figure>
        <div
          className={`relative group cursor-pointer ${className}`}
          onClick={() => setOpen(true)}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-auto"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <Expand size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        {caption && (
          <figcaption className="text-sm text-muted-foreground mt-2 italic">{caption}</figcaption>
        )}
      </figure>
      <ImageLightbox
        images={[{ src, alt, caption }]}
        currentIndex={0}
        open={open}
        onClose={() => setOpen(false)}
        onNavigate={() => {}}
      />
    </FadeIn>
  );
};

export default DesignImage;
