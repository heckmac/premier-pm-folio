import { ComponentType, lazy } from "react";
import { createDesignProjectPartial } from "./DesignProjectPartial";
import { createFilteredProjectCards } from "./ProjectCardsPartial";

const BioPartial = lazy(() => import("./BioPartial"));
const CareerPartial = lazy(() => import("./CareerPartial"));
const SkillsPartial = lazy(() => import("./SkillsPartial"));
const SphereCaseStudy1Partial = lazy(() => import("./SphereCaseStudy1Partial"));
const SphereCaseStudy2Partial = lazy(() => import("./SphereCaseStudy2Partial"));
const StoryfolioCaseStudyPartial = lazy(() => import("./StoryfolioCaseStudyPartial"));
const CVDownloadPartial = lazy(() => import("./CVDownloadPartial"));

export interface PartialEntry {
  component: ComponentType;
  /** If true, render in collapsed/expandable mode with a "Show more" CTA */
  expandable?: boolean;
  /** Custom preview height in px for expandable mode (default 400) */
  previewHeight?: number;
  /** Custom expand button label */
  expandLabel?: string;
}

// Full partials (always shown in full)
const full = (component: ComponentType): PartialEntry => ({ component });

// Expandable partials (collapsed with preview + CTA)
const expandable = (component: ComponentType, previewHeight = 400, expandLabel?: string): PartialEntry => ({
  component,
  expandable: true,
  previewHeight,
  expandLabel,
});

export const PARTIALS_REGISTRY: Record<string, PartialEntry> = {
  "bio": full(BioPartial),
  "career": expandable(CareerPartial, 500, "Show full career"),
  "skills": full(SkillsPartial),
  "sphere-case-study-1": expandable(SphereCaseStudy1Partial, 500, "Read full case study"),
  "sphere-case-study-2": expandable(SphereCaseStudy2Partial, 500, "Read full case study"),
  "storyfolio-case-study": expandable(StoryfolioCaseStudyPartial, 500, "Read full case study"),
  "sharaf-dg": expandable(createDesignProjectPartial("sharaf-dg-omnichannel"), 500, "See full project"),
  "smartwatch-gestures": expandable(createDesignProjectPartial("smartwatch-gestures"), 500, "See full project"),
  "insurance-data-collection": expandable(createDesignProjectPartial("insurance-data-collection"), 500, "See full project"),
  "fusion-telepresence": expandable(createDesignProjectPartial("fusion-telepresence"), 500, "See full project"),
  "cv-download": full(CVDownloadPartial),
  "project-cards-all": full(createFilteredProjectCards("all")),
  "project-cards-pm": full(createFilteredProjectCards("pm")),
  "project-cards-design": full(createFilteredProjectCards("design")),
};
