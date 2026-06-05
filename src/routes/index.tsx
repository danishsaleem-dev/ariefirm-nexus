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
      { title: "ArieFirm — Commercial Development, Malls & Lifestyle Projects" },
      {
        name: "description",
        content:
          "ArieFirm designs, builds and operates commercial destinations across Pakistan — shopping malls, food courts, retail, lifestyle and entertainment projects.",
      },
      { property: "og:title", content: "ArieFirm — Commercial Development, Malls & Lifestyle Projects" },
      {
        property: "og:description",
        content:
          "Diversified development, consulting and operations firm creating and managing commercial destinations across Pakistan.",
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
