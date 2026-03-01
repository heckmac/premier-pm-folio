import img01 from "@/assets/mercurius/01_company_website.webp";
import img02 from "@/assets/mercurius/02_company_website.webp";
import img03 from "@/assets/mercurius/03_article_page.webp";
import img04 from "@/assets/mercurius/04_trader_landing_page.webp";
import img05 from "@/assets/mercurius/05_trader_pages.webp";
import img06 from "@/assets/mercurius/06_signup.webp";
import img07 from "@/assets/mercurius/07_trader_onboarding.webp";
import img08 from "@/assets/mercurius/08_trader_dashboard.webp";

export interface GallerySlide {
  src: string;
  caption: string;
  description: string;
}

export const caseStudyGalleries: Record<string, GallerySlide[]> = {
  mercurius: [
    {
      src: img01,
      caption: "Company Website — Home & Whitepaper",
      description:
        "The Mercurius corporate site positioned sports betting as an alternative asset class, featuring a downloadable whitepaper and the core technology narrative.",
    },
    {
      src: img02,
      caption: "Company Website — Methodology & Blog",
      description:
        "Trading methodology page and content hub with SEO-driven articles on value betting, financial mathematics, and AI — driving 30% of qualified organic traffic.",
    },
    {
      src: img03,
      caption: "Article Page — Responsive & Adaptive",
      description:
        "Fully responsive article layout with sticky title on scroll, contextual sidebar modules, and color-matched cover images — designed for long-form educational content.",
    },
    {
      src: img04,
      caption: "Tradr App — Landing Page",
      description:
        "Tradr's landing page communicated the automated trading value proposition with live performance metrics, feature highlights, and a clear conversion funnel.",
    },
    {
      src: img05,
      caption: "Tradr App — Strategies & Performance",
      description:
        "Strategy selection and live performance tracking pages, showing real-time ROC, yield, and max drawdown metrics with full historical track records.",
    },
    {
      src: img06,
      caption: "Tradr App — Progressive Sign-up",
      description:
        "Country-aware progressive sign-up flow: qualifying leads first, then completing registration where Betfair was available, or routing to Advisor as an alternative.",
    },
    {
      src: img07,
      caption: "Tradr App — Onboarding Flow",
      description:
        "Three-step onboarding: portfolio creation with strategy selection, fee structure transparency, and checkout — with step indicators and quick support access.",
    },
    {
      src: img08,
      caption: "Tradr App — Portfolio Dashboard",
      description:
        "The core portfolio dashboard showing live financial metrics, trading overview charts, active trades, and completed trade history with full P&L detail.",
    },
  ],
};
