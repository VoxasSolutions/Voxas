import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const azonix = localFont({
  src: "../../public/fonts/Azonix.otf",
  variable: "--font-azonix",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "Web Design Agency",
    "Website Development",
    "Lead Generation Websites",
    "Business Website Development",
    "Next.js Development",
    "SEO Services",
    "Local Business Websites",
    "Real Estate Website Design",
    "Google Business Profile Optimization",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    creator: "@voxasapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${azonix.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: SITE_CONFIG.name,
              description: SITE_CONFIG.description,
              url: SITE_CONFIG.url,
              email: SITE_CONFIG.email,
              telephone: SITE_CONFIG.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              priceRange: "₹₹",
              serviceType: [
                "Web Design",
                "Web Development",
                "SEO",
                "Lead Generation",
              ],
              areaServed: {
                "@type": "Country",
                name: "India",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="mesh-bg" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
