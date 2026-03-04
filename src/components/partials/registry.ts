import { ComponentType, lazy } from "react";

const BioPartial = lazy(() => import("./BioPartial"));
const CareerPartial = lazy(() => import("./CareerPartial"));
const SkillsPartial = lazy(() => import("./SkillsPartial"));
const SphereCaseStudy1Partial = lazy(() => import("./SphereCaseStudy1Partial"));
const SphereCaseStudy2Partial = lazy(() => import("./SphereCaseStudy2Partial"));
const StoryfolioCaseStudyPartial = lazy(() => import("./StoryfolioCaseStudyPartial"));
const SharafDGPartial = lazy(() => import("./SharafDGPartial"));
const SmartwatchGesturesPartial = lazy(() => import("./SmartwatchGesturesPartial"));
const InsuranceDataCollectionPartial = lazy(() => import("./InsuranceDataCollectionPartial"));
const FusionTelepresencePartial = lazy(() => import("./FusionTelepresencePartial"));
const CVDownloadPartial = lazy(() => import("./CVDownloadPartial"));

export const PARTIALS_REGISTRY: Record<string, ComponentType> = {
  "bio": BioPartial,
  "career": CareerPartial,
  "skills": SkillsPartial,
  "sphere-case-study-1": SphereCaseStudy1Partial,
  "sphere-case-study-2": SphereCaseStudy2Partial,
  "storyfolio-case-study": StoryfolioCaseStudyPartial,
  "sharaf-dg": SharafDGPartial,
  "smartwatch-gestures": SmartwatchGesturesPartial,
  "insurance-data-collection": InsuranceDataCollectionPartial,
  "fusion-telepresence": FusionTelepresencePartial,
  "cv-download": CVDownloadPartial,
};
