import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { ServicesSection } from "@/components/site/ServicesSection";
import { Sectors } from "@/components/site/Sectors";
import { PopularTopics } from "@/components/site/PopularTopics";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ariefirm — Legal Consultancy, Development & Investment" },
      {
        name: "description",
        content:
          "Ariefirm unites legal consultancy, building developments, government projects, investment, trading and disputes management under one trusted firm.",
      },
      { property: "og:title", content: "Ariefirm — Legal Consultancy, Development & Investment" },
      {
        property: "og:description",
        content:
          "One trusted firm for legal advisory, developments, government projects, investment and trading.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <ServicesSection limit={6} />
      <PopularTopics />
      <WhyChoose />
      <Testimonials />
      <CTASection />
    </SiteLayout>
  );
}
