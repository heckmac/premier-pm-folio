import { ComponentType, lazy } from "react";
import { createDesignProjectPartial } from "./DesignProjectPartial";
import { createFilteredProjectCards } from "./ProjectCardsPartial";
import { caseStudyImages } from "@/lib/caseStudyImages";

const BioPartial = lazy(() => import("./BioPartial"));
const CareerPartial = lazy(() => import("./CareerPartial"));
const SkillsPartial = lazy(() => import("./SkillsPartial"));
const SphereCaseStudy1Partial = lazy(() => import("./SphereCaseStudy1Partial"));
const SphereCaseStudy2Partial = lazy(() => import("./SphereCaseStudy2Partial"));
const StoryfolioCaseStudyPartial = lazy(() => import("./StoryfolioCaseStudyPartial"));
const CVDownloadPartial = lazy(() => import("./CVDownloadPartial"));

export interface PartialEntry {
  component: ComponentType;
  expandable?: boolean;
  previewHeight?: number;
  expandLabel?: string;
  /** Hero image shown at the top of expandable partials */
  heroImage?: string;
  /** Title overlay on the hero image */
  heroTitle?: string;
}

const full = (component: ComponentType): PartialEntry => ({ component });

const expandable = (
  component: ComponentType,
  opts: { previewHeight?: number; expandLabel?: string; heroImage?: string; heroTitle?: string } = {}
): PartialEntry => ({
  component,
  expandable: true,
  previewHeight: opts.previewHeight ?? 400,
  expandLabel: opts.expandLabel,
  heroImage: opts.heroImage,
  heroTitle: opts.heroTitle,
});

export const PARTIALS_REGISTRY: Record<string, PartialEntry> = {
  "bio": full(BioPartial),
  "career": expandable(CareerPartial, { previewHeight: 500, expandLabel: "Show full career" }),
  "skills": full(SkillsPartial),
  "sphere-case-study-1": expandable(SphereCaseStudy1Partial, {
    previewHeight: 500, expandLabel: "Read full case study",
    heroImage: caseStudyImages["sphere-architectural-reset"], heroTitle: "Sphere — Architectural Reset",
  }),
  "sphere-case-study-2": expandable(SphereCaseStudy2Partial, {
    previewHeight: 500, expandLabel: "Read full case study",
    heroImage: caseStudyImages["sphere-investment-infrastructure"], heroTitle: "Sphere — Infrastructure Scaling",
  }),
  "storyfolio-case-study": expandable(StoryfolioCaseStudyPartial, {
    previewHeight: 500, expandLabel: "Read full case study",
    heroImage: caseStudyImages["storyfolio"], heroTitle: "Storyfolio",
  }),
  "sharaf-dg": expandable(createDesignProjectPartial("sharaf-dg-omnichannel"), {
    previewHeight: 500, expandLabel: "See full project",
    heroImage: caseStudyImages["sharaf-dg-omnichannel"], heroTitle: "Sharaf DG — Omnichannel",
  }),
  "smartwatch-gestures": expandable(createDesignProjectPartial("smartwatch-gestures"), {
    previewHeight: 500, expandLabel: "See full project",
    heroImage: caseStudyImages["smartwatch-gestures"], heroTitle: "Smartwatch Gestures",
  }),
  "insurance-data-collection": expandable(createDesignProjectPartial("insurance-data-collection"), {
    previewHeight: 500, expandLabel: "See full project",
    heroImage: caseStudyImages["insurance-data-collection"], heroTitle: "Insurance Data Collection",
  }),
  "fusion-telepresence": expandable(createDesignProjectPartial("fusion-telepresence"), {
    previewHeight: 500, expandLabel: "See full project",
    heroImage: caseStudyImages["fusion-telepresence"], heroTitle: "Fusion Telepresence",
  }),
  "cv-download": full(CVDownloadPartial),
  "project-cards-all": full(createFilteredProjectCards("all")),
  "project-cards-pm": full(createFilteredProjectCards("pm")),
  "project-cards-design": full(createFilteredProjectCards("design")),
};
