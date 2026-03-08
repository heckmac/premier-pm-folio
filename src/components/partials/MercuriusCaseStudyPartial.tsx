import { getCaseStudy } from "@/lib/caseStudies";
import CaseStudyPartialTemplate from "./CaseStudyPartialTemplate";

const MercuriusCaseStudyPartial = () => {
  const study = getCaseStudy("mercurius");
  if (!study) return null;
  return <CaseStudyPartialTemplate study={study} />;
};

export default MercuriusCaseStudyPartial;
