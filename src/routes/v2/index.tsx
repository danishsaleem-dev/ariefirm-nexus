import { createFileRoute } from "@tanstack/react-router";
import { V2Layout } from "../../components/v2/V2Layout";
import { V2Hero } from "../../components/v2/homepage/V2Hero";
import { V2Intro } from "../../components/v2/homepage/V2Intro";
import { V2ServicesGrid } from "../../components/v2/homepage/V2ServicesGrid";
import { V2ByNumbers } from "../../components/v2/homepage/V2ByNumbers";
import { V2SectorExpertise } from "../../components/v2/homepage/V2SectorExpertise";
import { V2Process } from "../../components/v2/homepage/V2Process";
import { V2Testimonials } from "../../components/v2/homepage/V2Testimonials";
import { V2HomeCTA } from "../../components/v2/homepage/V2HomeCTA";

export const Route = createFileRoute("/v2/")({
  component: V2HomePage,
  head: () => ({
    meta: [
      {
        title: "ArieFirm — Commercial Development & Operations | Pakistan",
      },
      {
        name: "description",
        content:
          "Pakistan's premier diversified commercial development, consulting and operations firm. 16 integrated service lines. End-to-end project execution.",
      },
    ],
  }),
});

function V2HomePage() {
  return (
    <V2Layout>
      <V2Hero />
      <V2Intro />
      <V2ServicesGrid />
      <V2ByNumbers />
      <V2SectorExpertise />
      <V2Process />
      <V2Testimonials />
      <V2HomeCTA />
    </V2Layout>
  );
}
