import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { GallerySlide } from "@/lib/caseStudyGallery";

interface Props {
  slides: GallerySlide[];
}

const CaseStudyGallery = ({ slides }: Props) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + slides.length) % slides.length);
    },
    [slides.length],
  );

  const slide = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="space-y-4">
      {/* Image area */}
      <div className="relative rounded-xl overflow-hidden bg-secondary/30 border divider">
        <div className="relative aspect-[16/10] overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={current}
              src={slide.src}
              alt={slide.caption}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-contain bg-secondary/20"
            />
          </AnimatePresence>
        </div>

        {/* Nav arrows */}
        <button
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border divider flex items-center justify-center text-foreground hover:bg-background transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border divider flex items-center justify-center text-foreground hover:bg-background transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Caption */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">{slide.caption}</h3>
          <span className="text-xs text-subtle tabular-nums">
            {current + 1} / {slides.length}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{slide.description}</p>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current
                ? "bg-primary w-5"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudyGallery;
