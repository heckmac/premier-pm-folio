import { getCaseStudy } from "@/lib/caseStudies";
import CaseStudyPartialTemplate from "./CaseStudyPartialTemplate";

const SphereCaseStudy1Partial = () => {
  const study = getCaseStudy("sphere-architectural-reset");
  if (!study) return null;
  return <CaseStudyPartialTemplate study={study} />;
};

export default SphereCaseStudy1Partial;
