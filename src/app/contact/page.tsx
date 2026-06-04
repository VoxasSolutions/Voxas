"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Magnetic } from "@/components/shared/magnetic";

const serviceOptions = [
  "Website Design",
  "Website Development",
  "Landing Pages",
  "SEO Optimization",
  "Google Business Profile",
  "Brand Identity",
  "WhatsApp Integration",
  "AI Chatbots",
  "Maintenance & Support",
  "Other",
];

interface FormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  details: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.service) newErrors.service = "Please select a service";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch("https://formspree.io/f/xeewoqqb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setSubmitError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setSubmitError("Failed to connect to the server. Please check your internet connection.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  if (submitted) {
    return (
      <section className="flex min-h-[60vh] items-center py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-lg text-center">
              <div className="mb-6 flex justify-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    background: "rgba(76,215,246,0.1)",
                    border: "1px solid rgba(76,215,246,0.2)",
                  }}
                >
                  <CheckCircle size={32} className="text-secondary" />
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-on-surface">
                Thank you!
              </h1>
              <p className="mt-4 text-lg text-on-surface-variant">
                We&apos;ve received your message and will get back to you within
                24 hours. In the meantime, feel free to reach out on WhatsApp
                for a quicker response.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-all hover:brightness-110"
                  style={{ background: "#25D366" }}
                >
                  <WhatsAppIcon size={16} />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      business: "",
                      email: "",
                      phone: "",
                      service: "",
                      details: "",
                    });
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm text-on-surface transition-all hover:bg-white/5"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Form */}
          <AnimatedSection className="lg:col-span-3">
            <div>
              <span
                className="mb-4 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                Contact Us
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-wide text-on-surface md:text-4xl">
                Let&apos;s build something great
              </h1>
              <p className="mt-4 max-w-lg text-base text-on-surface-variant">
                Tell us about your project and we&apos;ll get back to you within
                24 hours with a free consultation.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-on-surface"
                    >
                      Name <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-lg border px-4 py-2.5 sm:py-3 text-sm text-on-surface placeholder-on-surface-variant/70 transition-all focus:outline-none"
                      style={{
                        background: "#09090b",
                        borderColor: errors.name
                          ? "rgba(255,180,171,0.5)"
                          : "rgba(255,255,255,0.08)",
                      }}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-error">{errors.name}</p>
                    )}
                  </div>

                  {/* Business Name */}
                  <div>
                    <label
                      htmlFor="business"
                      className="mb-2 block text-sm font-medium text-on-surface"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your Business"
                      className="w-full rounded-lg border px-4 py-2.5 sm:py-3 text-sm text-on-surface placeholder-on-surface-variant/70 transition-all focus:outline-none"
                      style={{
                        background: "#09090b",
                        borderColor: "rgba(255,255,255,0.08)",
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-on-surface"
                    >
                      Email <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full rounded-lg border px-4 py-2.5 sm:py-3 text-sm text-on-surface placeholder-on-surface-variant/70 transition-all focus:outline-none"
                      style={{
                        background: "#09090b",
                        borderColor: errors.email
                          ? "rgba(255,180,171,0.5)"
                          : "rgba(255,255,255,0.08)",
                      }}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-error">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-on-surface"
                    >
                      Phone <span className="text-error">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-lg border px-4 py-2.5 sm:py-3 text-sm text-on-surface placeholder-on-surface-variant/70 transition-all focus:outline-none"
                      style={{
                        background: "#09090b",
                        borderColor: errors.phone
                          ? "rgba(255,180,171,0.5)"
                          : "rgba(255,255,255,0.08)",
                      }}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-error">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-on-surface"
                  >
                    Service Required <span className="text-error">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-lg border px-4 py-2.5 sm:py-3 text-sm text-on-surface transition-all focus:outline-none"
                    style={{
                      background: "#09090b",
                      borderColor: errors.service
                        ? "rgba(255,180,171,0.5)"
                        : "rgba(255,255,255,0.08)",
                    }}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-error">{errors.service}</p>
                  )}
                </div>

                {/* Details */}
                <div>
                  <label
                    htmlFor="details"
                    className="mb-2 block text-sm font-medium text-on-surface"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full resize-none rounded-lg border px-4 py-2.5 sm:py-3 text-sm text-on-surface placeholder-on-surface-variant/70 transition-all focus:outline-none"
                    style={{
                      background: "#09090b",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  />
                </div>

                {submitError && (
                  <div className="rounded-lg bg-error/10 border border-error/20 p-4 text-sm text-error">
                    {submitError}
                  </div>
                )}

                <Magnetic>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-container px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                  >
                    {submitting ? "Sending..." : "Send Message"}
                    <Send size={14} className={submitting ? "animate-pulse" : ""} />
                  </button>
                </Magnetic>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="flex flex-col gap-8 lg:mt-36">
              <div
                className="rounded-xl p-8"
                style={{
                  background: "rgba(17,24,39,0.4)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-on-surface">
                  Get In Touch
                </h3>
                <div className="flex flex-col gap-6">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-4 text-sm text-on-surface-variant transition-colors hover:text-on-surface"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        background: "rgba(124,58,237,0.1)",
                        border: "1px solid rgba(124,58,237,0.15)",
                      }}
                    >
                      <Mail size={16} className="text-primary" />
                    </div>
                    {SITE_CONFIG.email}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 text-sm text-on-surface-variant transition-colors hover:text-on-surface"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        background: "rgba(76,215,246,0.1)",
                        border: "1px solid rgba(76,215,246,0.15)",
                      }}
                    >
                      <Phone size={16} className="text-secondary" />
                    </div>
                    {SITE_CONFIG.phone}
                  </a>
                  <div className="flex items-center gap-4 text-sm text-on-surface-variant">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        background: "rgba(255,183,132,0.1)",
                        border: "1px solid rgba(255,183,132,0.15)",
                      }}
                    >
                      <MapPin size={16} className="text-tertiary" />
                    </div>
                    {SITE_CONFIG.location}
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl p-8 transition-all duration-300 hover:border-green-500/20"
                style={{
                  background: "rgba(37,211,102,0.05)",
                  border: "1px solid rgba(37,211,102,0.1)",
                }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#25D366" }}
                >
                  <WhatsAppIcon
                    size={20}
                    className="text-white"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-on-surface">
                    Chat on WhatsApp
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    Get a quicker response — usually within 1 hour
                  </div>
                </div>
              </a>

              {/* Response Time */}
              <div
                className="rounded-xl p-8"
                style={{
                  background: "rgba(17,24,39,0.4)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-on-surface">
                  Response Time
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-on-surface-variant">Email</span>
                    <span className="text-on-surface">Within 24 hours</span>
                  </div>
                  <div
                    className="h-px"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-on-surface-variant">WhatsApp</span>
                    <span className="text-on-surface">Within 1 hour</span>
                  </div>
                  <div
                    className="h-px"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-on-surface-variant">
                      Consultation Call
                    </span>
                    <span className="text-on-surface">Same day booking</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
