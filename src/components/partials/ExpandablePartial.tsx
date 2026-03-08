import { useState, ComponentType, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ExpandablePartialProps {
  Component: ComponentType;
  previewHeight?: number;
  label?: string;
  heroImage?: string;
  heroTitle?: string;
}

const ExpandablePartial = ({
  Component,
  previewHeight = 400,
  label = "Show full content",
  heroImage,
  heroTitle,
}: ExpandablePartialProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Hero image */}
      {heroImage && (
        <div className="relative aspect-[21/9] overflow-hidden bg-secondary">
          <img
            src={heroImage}
            alt={heroTitle || ""}
            className="w-full h-full object-cover"
          />
          {heroTitle && (
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent flex items-end">
              <div className="container mx-auto px-6 lg:px-8 max-w-5xl pb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tighter drop-shadow-lg">
                  {heroTitle}
                </h2>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Collapsible content */}
      <motion.div
        animate={{ height: expanded ? "auto" : previewHeight }}
        initial={{ height: previewHeight }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <Suspense fallback={
          <div className="py-20 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-primary/30 border-t-primary animate-spin" />
          </div>
        }>
          <Component />
        </Suspense>
      </motion.div>

      <AnimatePresence>
        {!expanded && (
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
