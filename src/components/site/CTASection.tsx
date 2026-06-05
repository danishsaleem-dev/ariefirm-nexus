import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-gradient-hero py-20 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
          Ready to develop your commercial destination?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Talk to our team about developing, operating or commercializing your
          commercial, retail, food or entertainment project.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
