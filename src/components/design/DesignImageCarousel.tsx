import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import ImageLightbox from "./ImageLightbox";

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  images: ImageItem[];
}

const DesignImageCarousel = ({ images }: Props) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (images.length === 0) return null;

  // Single image — just show expandable
  if (images.length === 1) {
    return (
      <FadeIn>
        <div
          className="relative group cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-auto"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <Expand size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          {images[0].caption && (
            <p className="text-sm text-muted-foreground mt-2 italic">{images[0].caption}</p>
          )}
        </div>
        <ImageLightbox
          images={images}
          currentIndex={0}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={() => {}}
        />
      </FadeIn>
    );
  }

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + images.length) % images.length);
  };

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <FadeIn>
      <div className="space-y-3">
        {/* Main image */}
        <div className="relative overflow-hidden bg-secondary/20">
          <div className="relative aspect-[16/10] overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={current}
                src={images[current].src}
                alt={images[current].alt}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-contain cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              />
            </AnimatePresence>

            {/* Expand icon */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-3 right-3 w-8 h-8 bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors z-10"
              aria-label="Expand image"
            >
              <Expand size={14} />
            </button>

            {/* Arrows */}
            <button
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Caption + counter */}
        {images[current].caption && (
          <p className="text-sm text-muted-foreground italic">{images[current].caption}</p>
        )}

        {/* Thumbnail strip */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                i === current
                  ? "border-primary opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
              aria-label={`Go to image ${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={images}
        currentIndex={current}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(i) => {
          setCurrent(i);
          setDirection(i > current ? 1 : -1);
        }}
      />
    </FadeIn>
  );
};

export default DesignImageCarousel;
