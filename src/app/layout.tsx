import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Cursor from "@/components/ui/cursor";
import CookieBanner from "@/components/ui/cookie-banner";
import { AuroraBackground } from "@/components/ui/aurora-background";

const SITE_URL = "https://rapinnotech.com";
const SITE_NAME = "RapinnoTech Solutions";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RapinnoTech | Rapid Technology Innovations",
    template: "%s | RapinnoTech",
  },
  description:
    "RapinnoTech Solutions delivers rapid technology innovations — Intelligent Automation, RPA, Full Stack Development, Cloud Services, Big Data Analytics, and Enterprise Software. Headquartered in California with development centers in Hyderabad & Bangalore.",
  keywords: [
    "RapinnoTech",
    "Rapinno Tech Solutions",
    "rapid technology innovations",
    "intelligent automation",
    "robotic process automation",
    "RPA solutions",
    "full stack development",
    "enterprise software",
    "cloud services",
    "big data analytics",
    "AI solutions",
    "digital transformation",
    "software development company India",
    "software development company USA",
    "IT solutions Hyderabad",
    "IT solutions Bangalore",
    "IoT infrastructure",
    "blockchain solutions",
    "cybersecurity services",
    "VAPT testing",
    "managed SOC",
    "low code platform",
    "Rapinno Digital Platform",
  ],
  authors: [{ name: "RapinnoTech Solutions", url: SITE_URL }],
  creator: "RapinnoTech Solutions",
  publisher: "RapinnoTech Solutions",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "RapinnoTech | Rapid Technology Innovations",
    description:
      "Enterprise-grade technology solutions — AI, RPA, Cloud, Full Stack Development, and more. Delivered rapidly by RapinnoTech.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RapinnoTech Solutions — Rapid Technology Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RapinnoTech | Rapid Technology Innovations",
    description:
      "Enterprise-grade technology solutions — AI, RPA, Cloud, Full Stack Development, and more.",
    images: ["/og-image.png"],
    creator: "@rapinnotech",
    site: "@rapinnotech",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
  icons: {
    icon: "/logo_seo.jpg",
    apple: "/logo_seo.jpg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RapinnoTech Solutions",
  alternateName: "Rapinno Tech",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    "RapinnoTech Solutions is a software innovation company delivering rapid technology innovations including Intelligent Automation, RPA, Cloud Services, Full Stack Development, and Enterprise Software.",
  foundingLocation: {
    "@type": "Place",
    name: "California, USA",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-949-516-8420",
      contactType: "customer service",
      areaServed: "US",
      email: "info.usa@rapinnotech.com",
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-40-44720040",
      contactType: "customer service",
      areaServed: "IN",
      email: "info.india@rapinnotech.com",
    },
    {
      "@type": "ContactPoint",
      telephone: "+49-17693133848",
      contactType: "customer service",
      areaServed: "DE",
      email: "info.europe@rapinnotech.com",
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "California",
    },
    {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Hyderabad",
    },
  ],
  sameAs: ["https://www.linkedin.com/company/rapinnotech"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technology Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Intelligent Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Robotic Process Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Stack Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Big Data Analytics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity Services" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased text-foreground bg-transparent overflow-x-hidden">
        <AuroraBackground />
        <Cursor />
        <Header />
        <main className="relative z-10 w-full content-page">{children}</main>
        <Footer />
        <CookieBanner />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
