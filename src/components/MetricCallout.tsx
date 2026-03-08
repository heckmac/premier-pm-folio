import FadeIn from "./FadeIn";

interface MetricCalloutProps {
  value: string;
  label: string;
  delay?: number;
}

const MetricCallout = ({ value, label, delay = 0 }: MetricCalloutProps) => (
  <FadeIn delay={delay}>
    <div className="border-2 border-primary p-6 md:p-8">
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tighter">
        {value}
      </p>
      <p className="text-xs font-medium text-muted-foreground mt-2 uppercase tracking-[0.1em]">{label}</p>
    </div>
  </FadeIn>
);

export default MetricCallout;
