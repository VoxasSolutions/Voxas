import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_CONFIG.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 4, 2026";

  return (
    <SectionWrapper
      label="Legal"
      heading="Privacy Policy"
      subheading={`Last updated: ${lastUpdated}`}
      centered
      className="pt-16 md:pt-24"
    >
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <div className="prose prose-invert max-w-none flex flex-col gap-8 text-on-surface-variant">
            <p className="text-base leading-relaxed">
              At <strong>{SITE_CONFIG.name}</strong>, we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (
              <a href={SITE_CONFIG.url} className="text-primary hover:underline">
                {SITE_CONFIG.url.replace("https://", "")}
              </a>
              ) or engage with us for web design, development, and lead generation services.
            </p>

            <hr className="border-white/10" />

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                1. Information We Collect
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you fill out contact forms, request consultations, or communicate with us on WhatsApp. This may include:
              </p>
              <ul className="list-disc pl-5 text-sm flex flex-col gap-2">
                <li>
                  <strong>Contact Details:</strong> Your name, email address, phone number, and physical address.
                </li>
                <li>
                  <strong>Business Information:</strong> Business name, industry, existing website URL, and branding assets.
                </li>
                <li>
                  <strong>Project Information:</strong> Goals, budget, technical requirements, timelines, and other details provided in project briefs.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                2. How We Use Your Information
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                We use the information we collect for various business purposes, including:
              </p>
              <ul className="list-disc pl-5 text-sm flex flex-col gap-2">
                <li>Responding to your inquiries and scheduling consultations.</li>
                <li>Providing, operating, and maintaining our web design and development services.</li>
                <li>Improving our website performance, user experience, and visual aesthetics.</li>
                <li>Communicating project updates, administrative information, and invoices.</li>
                <li>Complying with legal obligations and resolving any disputes.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                3. Data Sharing & Third-Party Services
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information. We only share information with third-party service providers who assist us in operating our business and delivering services, including:
              </p>
              <ul className="list-disc pl-5 text-sm flex flex-col gap-2">
                <li>
                  <strong>Formspree:</strong> We use Formspree to securely transmit and process contact form submissions.
                </li>
                <li>
                  <strong>Hosting Providers:</strong> Web platforms where client sites are deployed (such as Vercel, Netlify, or Hostinger).
                </li>
                <li>
                  <strong>Communication Tools:</strong> WhatsApp Business API and email clients for direct messaging.
                </li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed">
                All third-party services are required to maintain strict confidentiality and protect your data in accordance with relevant privacy legislation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                4. Data Security
              </h2>
              <p className="text-sm leading-relaxed">
                We implement robust security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                5. Your Rights & Choices
              </h2>
              <p className="text-sm leading-relaxed">
                Depending on your location, you may have the right to access, correct, update, or request the deletion of your personal information. If you wish to make a request regarding your data, please contact us at{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
                  {SITE_CONFIG.email}
                </a>
                . We will respond to your request within a reasonable timeframe.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                6. Changes to This Privacy Policy
              </h2>
              <p className="text-sm leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                7. Contact Us
              </h2>
              <p className="text-sm leading-relaxed">
                If you have any questions or concerns about this Privacy Policy, please reach out to us at:
              </p>
              <p className="mt-3 text-sm font-semibold text-on-surface">
                {SITE_CONFIG.name} Solutions<br />
                Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">{SITE_CONFIG.email}</a><br />
                Phone: {SITE_CONFIG.phone}<br />
                Location: {SITE_CONFIG.location}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
