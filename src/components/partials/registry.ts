import { ComponentType, lazy } from "react";
import { createDesignProjectPartial } from "./DesignProjectPartial";

const BioPartial = lazy(() => import("./BioPartial"));
const CareerPartial = lazy(() => import("./CareerPartial"));
const SkillsPartial = lazy(() => import("./SkillsPartial"));
const SphereCaseStudy1Partial = lazy(() => import("./SphereCaseStudy1Partial"));
const SphereCaseStudy2Partial = lazy(() => import("./SphereCaseStudy2Partial"));
const StoryfolioCaseStudyPartial = lazy(() => import("./StoryfolioCaseStudyPartial"));
const CVDownloadPartial = lazy(() => import("./CVDownloadPartial"));

export const PARTIALS_REGISTRY: Record<string, ComponentType> = {
  "bio": BioPartial,
  "career": CareerPartial,
  "skills": SkillsPartial,
  "sphere-case-study-1": SphereCaseStudy1Partial,
  "sphere-case-study-2": SphereCaseStudy2Partial,
  "storyfolio-case-study": StoryfolioCaseStudyPartial,
  "sharaf-dg": createDesignProjectPartial("sharaf-dg-omnichannel"),
  "smartwatch-gestures": createDesignProjectPartial("smartwatch-gestures"),
  "insurance-data-collection": createDesignProjectPartial("insurance-data-collection"),
  "fusion-telepresence": createDesignProjectPartial("fusion-telepresence"),
  "cv-download": CVDownloadPartial,
};
