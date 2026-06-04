import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service and Conditions for engaging with ${SITE_CONFIG.name} for web design and development services.`,
};

export default function TermsOfServicePage() {
  const lastUpdated = "June 4, 2026";

  return (
    <SectionWrapper
      label="Legal"
      heading="Terms of Service"
      subheading={`Last updated: ${lastUpdated}`}
      centered
      className="pt-16 md:pt-24"
    >
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <div className="prose prose-invert max-w-none flex flex-col gap-8 text-on-surface-variant">
            <p className="text-base leading-relaxed">
              Welcome to <strong>{SITE_CONFIG.name}</strong>. By accessing our website or engaging with us for our web design, web development, SEO, or lead generation services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>

            <hr className="border-white/10" />

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                1. Scope of Services
              </h2>
              <p className="text-sm leading-relaxed">
                {SITE_CONFIG.name} provides professional custom web design, front-end development, search engine optimization (SEO), and lead generation funnel integrations. The specific deliverables, timeline, milestones, and budget for any client project will be governed by a separate signed Project Agreement or Proposal.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                2. Client Obligations
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                To complete projects successfully and within the agreed timeline, clients agree to:
              </p>
              <ul className="list-disc pl-5 text-sm flex flex-col gap-2">
                <li>Provide accurate, complete business information, logo assets, copy, and visual media on schedule.</li>
                <li>Provide timely feedback and approvals on design mocks and development stages.</li>
                <li>Secure necessary licensing for third-party media or fonts supplied by the client.</li>
                <li>Maintain ownership and secure credentials for domains and hosting platforms unless managed under a separate support package.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                3. Payment & Billing
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Payments are structured according to the milestones detailed in your project agreement:
              </p>
              <ul className="list-disc pl-5 text-sm flex flex-col gap-2">
                <li>
                  <strong>Deposit:</strong> A non-refundable deposit (typically 50% of the total estimate) is required prior to project kick-off.
                </li>
                <li>
                  <strong>Milestone Payments:</strong> Remaining payments are due upon approval of milestones (e.g., design sign-off, development completion, or site launch).
                </li>
                <li>
                  <strong>Late Payments:</strong> We reserve the right to pause design and development services or suspend site deployment if invoices remain unpaid past their due date.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                4. Intellectual Property Rights
              </h2>
              <p className="text-sm leading-relaxed">
                Upon receipt of full and final payment, the client receives full ownership of the custom website design, code, and copy delivered by {SITE_CONFIG.name} for their project. {SITE_CONFIG.name} retains the right to display the completed work, screenshots, and results inside our portfolio, marketing campaigns, and case studies for promotional purposes, unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                5. Limitation of Liability
              </h2>
              <p className="text-sm leading-relaxed">
                {SITE_CONFIG.name} will not be held liable for any indirect, incidental, special, or consequential damages (including loss of business, profits, or data) arising from the use, inability to use, or launch of the developed platforms. We are not liable for outages, server errors, or security breaches occurring on third-party hosting servers or domain networks.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                6. Governing Law
              </h2>
              <p className="text-sm leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                7. Amendments
              </h2>
              <p className="text-sm leading-relaxed">
                We reserve the right to revise or amend these Terms of Service at any time. Any changes will be posted on this page with the updated date at the top. Your continued use of our website or services after any modifications indicates your acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-on-surface mb-3 uppercase tracking-wider">
                8. Contact Information
              </h2>
              <p className="text-sm leading-relaxed">
                For questions regarding these Terms of Service, please contact us at:
              </p>
              <p className="mt-3 text-sm font-semibold text-on-surface">
                {SITE_CONFIG.name} Soutions<br />
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
