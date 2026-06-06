import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { V2Layout } from "../../components/v2/V2Layout";
import { MapPin, Mail, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/v2/contact")({
  component: V2ContactPage,
  head: () => ({
    meta: [
      { title: "Contact ArieFirm — Start Your Commercial Project" },
      {
        name: "description",
        content:
          "Get in touch with ArieFirm for a confidential discussion about your commercial development or consulting project.",
      },
    ],
  }),
});

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(20, "Please provide at least 20 characters"),
});

type FormValues = z.infer<typeof schema>;

const serviceOptions = [
  "Commercial Project Development",
  "Shopping Mall Operations & Management",
  "Food Court Development & Operations",
  "Retail & Lifestyle Brand Placement",
  "Entertainment & Recreation Venues",
  "Franchise Development & Management",
  "Business Development & Growth",
  "Investment Structuring & Feasibility",
  "Real Estate Development & Commercialization",
  "Commercial Leasing & Tenant Management",
  "Marketing & Brand Positioning",
  "Facility Management & Operations",
  "Project Management & Execution",
  "Corporate Advisory & Compliance",
  "Government Liaison & Coordination",
  "Hospitality & Lifestyle Operations",
  "General Inquiry",
];

const contactItems = [
  {
    icon: MapPin,
    label: "Office",
    value: "23 Hunza Block, Allama Iqbal Town, Lahore",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 300-6885680",
    href: "tel:+923006885680",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ariefirm.com",
    href: "mailto:info@ariefirm.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri, 9:00 AM – 6:00 PM PKT",
  },
];

const inputClass =
  "w-full rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 transition-all outline-none focus:ring-2 focus:ring-blue-500/40";
const inputStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
};

function V2ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormValues) {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form submission:", data);
    toast.success("Message sent", {
      description: "We'll respond within one business day.",
    });
    reset();
  }

  return (
    <V2Layout>
      {/* Hero */}
      <section
        className="relative pt-36 pb-12 overflow-hidden"
        style={{ background: "#06080F" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 80% 40%, rgba(21,73,240,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: "#1549F0" }} />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Contact
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Start a conversation
          </h1>
          <p className="text-lg text-slate-400 max-w-xl">
            All enquiries are treated with strict confidentiality. Our team typically responds
            within one business day.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-20" style={{ background: "#06080F" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info sidebar */}
            <div className="space-y-6">
              {contactItems.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(21,73,240,0.15)",
                      border: "1px solid rgba(21,73,240,0.2)",
                    }}
                  >
                    <c.icon size={16} style={{ color: "#4F7FFF" }} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">{c.label}</div>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-sm font-medium text-white hover:text-blue-300 transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-white">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Confidentiality notice */}
              <div
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(201,163,42,0.06)",
                  border: "1px solid rgba(201,163,42,0.15)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={15} style={{ color: "#C9A32A" }} />
                  <span className="text-sm font-semibold text-white">Confidential</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  All communications are treated with strict confidentiality and will not be
                  disclosed to any third party except where required by law.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-2xl p-8 lg:p-10"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <h2 className="text-xl font-bold text-white mb-7">Send us a message</h2>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Your full name"
                      className={inputClass}
                      style={inputStyle}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">
                      Company / Organisation
                    </label>
                    <input
                      {...register("company")}
                      placeholder="Optional"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className={inputClass}
                      style={inputStyle}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+92 300-6885680"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-xs font-medium text-slate-400 mb-2">
                    Service of Interest <span className="text-red-400">*</span>
                  </label>
                  <select
                    {...register("service")}
                    className={inputClass}
                    style={{ ...inputStyle, color: "rgba(241,245,249,0.8)" }}
                  >
                    <option value="" style={{ background: "#0D1021" }}>
                      Select a service…
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} style={{ background: "#0D1021" }}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-400 mt-1.5">{errors.service.message}</p>
                  )}
                </div>

                <div className="mb-7">
                  <label className="block text-xs font-medium text-slate-400 mb-2">
                    Project Details <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Describe your project, requirements, or questions..."
                    className={inputClass + " resize-none"}
                    style={inputStyle}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1.5">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-semibold text-white transition-all hover:brightness-110 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg, #1549F0, #0A32C8)" }}
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                  {!isSubmitting && <ArrowRight size={16} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </V2Layout>
  );
}
