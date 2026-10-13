import { SiteHeader } from "@/components/site-header";
import {
  HeroSection,
  BenefitsStrip,
  ApproachSection,
  ExperienceSection,
  ContinuingLearningSection,
  ResourcesSection,
  ContactSection,
} from "@/components/landing-sections";
import { ProgramsSection } from "@/components/programs-section";
import { RolesSection } from "@/components/roles-section";
import { FaqSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "أكاديمية TX للتعاونيات",
  description:
    "تدريب تطبيقي على الحلول الرقمية والذكاء الاصطناعي للجمعيات التعاونية",
  inLanguage: "ar",
  about: {
    "@type": "EducationalOrganization",
    name: "أكاديمية TX للتعاونيات",
    parentOrganization: { "@type": "Organization", name: "Transformix" },
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip" href="#main">
        انتقل إلى المحتوى
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <BenefitsStrip />
        <ApproachSection />
        <ProgramsSection />
        <RolesSection />
        <ExperienceSection />
        <ContinuingLearningSection />
        <ResourcesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
