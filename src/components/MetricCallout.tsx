import FadeIn from "./FadeIn";

interface MetricCalloutProps {
  value: string;
  label: string;
  delay?: number;
}

const MetricCallout = ({ value, label, delay = 0 }: MetricCalloutProps) => (
  <FadeIn delay={delay}>
    <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
        {value}
      </p>
      <p className="text-sm md:text-base text-muted-foreground mt-2">{label}</p>
    </div>
  </FadeIn>
);

export default MetricCallout;
