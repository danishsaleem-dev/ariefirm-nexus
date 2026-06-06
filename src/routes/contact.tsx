import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import { services } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ariefirm" },
      {
        name: "description",
        content:
          "Get in touch with Ariefirm for legal consultancy, development, investment and trading services. Book your free consultation today.",
      },
      { property: "og:title", content: "Contact — Ariefirm" },
      { property: "og:description", content: "Book a free consultation with Ariefirm." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — we'll be in touch within one business day.");
    }, 600);
  };

  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-16 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Contact</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold sm:text-5xl">
            Let's talk about your project
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Tell us what you're working on and the right specialist will reach out.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-muted-foreground">info@ariefirm.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-muted-foreground">+1 (000) 000-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Office</p>
                <p className="text-muted-foreground">One Global Plaza, Suite 1200</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-card p-7 shadow-soft md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@company.com" />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="service">Service of interest</Label>
              <select
                id="service"
                name="service"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">How can we help?</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your project…" />
            </div>
            <Button type="submit" variant="gold" size="lg" className="mt-6 w-full" disabled={submitting}>
              {submitting ? "Sending…" : "Send message"}
            </Button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
