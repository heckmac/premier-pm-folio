import { useState, ComponentType, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ExpandablePartialProps {
  Component: ComponentType;
  previewHeight?: number;
  label?: string;
}

/**
 * Wraps any partial in a collapsed preview with a "Show more" CTA.
 * Shows the first `previewHeight` px with a gradient fade, then expands to full.
 */
const ExpandablePartial = ({ Component, previewHeight = 400, label = "Show full content" }: ExpandablePartialProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
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
            {/* Gradient fade overlay */}
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
