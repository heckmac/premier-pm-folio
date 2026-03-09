import { useState, useRef, useEffect, ComponentType, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PartialCTAs from "./PartialCTAs";

interface ExpandablePartialProps {
  Component: ComponentType;
  previewRatio?: number;
  label?: string;
  heroImage?: string;
}

const ExpandablePartial = ({
  Component,
  previewRatio = 0.35,
  label = "Show full content",
  heroImage,
}: ExpandablePartialProps) => {
  const [expanded, setExpanded] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState<number | null>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expanded || !innerRef.current) return;
    const measure = () => {
      const full = innerRef.current!.scrollHeight;
      setCollapsedHeight(Math.round(full * previewRatio));
    };
    // measure after images load
    const observer = new ResizeObserver(measure);
    observer.observe(innerRef.current);
    measure();
    return () => observer.disconnect();
  }, [expanded, previewRatio]);

  const showButton = !expanded && collapsedHeight !== null;

  return (
    <div className="relative">
      {heroImage && (
        <div className="aspect-[21/9] overflow-hidden bg-secondary -mb-1">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      <motion.div
        animate={{ height: expanded ? "auto" : (collapsedHeight ?? "auto") }}
        initial={false}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div ref={innerRef}>
          <Suspense fallback={
            <div className="py-20 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-primary/30 border-t-primary animate-spin" />
            </div>
          }>
            <Component />
            
            {/* Always show CTAs at the end */}
            <PartialCTAs />
          </Suspense>
        </div>
      </motion.div>

      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0"
          >
            <div className="h-32 bg-gradient-to-t from-background to-transparent" />
            <div className="bg-background pb-4 pt-2 flex justify-center">
              <button
                onClick={() => setExpanded(true)}
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide px-5 py-2.5 border-2 border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary text-foreground transition-colors"
              >
                {label}
                <ChevronDown size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandablePartial;
