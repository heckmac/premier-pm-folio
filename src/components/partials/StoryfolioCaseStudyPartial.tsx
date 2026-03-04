import { getCaseStudy } from "@/lib/caseStudies";
import CaseStudyPartialTemplate from "./CaseStudyPartialTemplate";

const StoryfolioCaseStudyPartial = () => {
  const study = getCaseStudy("storyfolio");
  if (!study) return null;
  return <CaseStudyPartialTemplate study={study} />;
};

export default StoryfolioCaseStudyPartial;
