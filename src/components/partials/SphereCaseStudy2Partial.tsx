import { getCaseStudy } from "@/lib/caseStudies";
import CaseStudyPartialTemplate from "./CaseStudyPartialTemplate";

const SphereCaseStudy2Partial = () => {
  const study = getCaseStudy("sphere-investment-infrastructure");
  if (!study) return null;
  return <CaseStudyPartialTemplate study={study} />;
};

export default SphereCaseStudy2Partial;
