import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sauravpant.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saurav Pant | Software Developer & Full-Stack Engineer",
    template: "%s | Saurav Pant",
  },
  description:
    "Portfolio of Saurav Pant — Software Developer specialized in full-stack systems, backend engineering, distributed architectures, and AI/ML applications. Experienced in React, Next.js, Node.js, Spring Boot, FastAPI, PostgreSQL, and Python.",
  keywords: [
    "Saurav Pant",
    "Software Developer",
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Engineer",
    "Distributed Systems",
    "AI ML Engineer",
    "React Developer",
    "Next.js Portfolio",
    "Node.js",
    "FastAPI",
    "Spring Boot",
    "PostgreSQL",
    "MongoDB",
    "Python Developer",
    "TypeScript",
    "Nepal Software Developer",
    "System Design",
  ],
  authors: [{ name: "Saurav Pant", url: "https://github.com/Sauravpant" }],
  creator: "Saurav Pant",
  publisher: "Saurav Pant",
  applicationName: "Saurav Pant Portfolio",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Saurav Pant | Software Developer & Full-Stack Engineer",
    description:
      "Software Developer specialized in full-stack systems, backend engineering, distributed architectures, and AI/ML applications.",
    url: "/",
    siteName: "Saurav Pant - Software Developer",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Saurav Pant - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav Pant | Software Developer & Full-Stack Engineer",
    description:
      "Software Developer specialized in full-stack systems, backend engineering, distributed architectures, and AI/ML applications.",
    images: ["/profile.png"],
    creator: "@sauravpant",
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
  icons: {
    icon: "/profile.png",
    shortcut: "/profile.png",
    apple: "/profile.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Saurav Pant",
      givenName: "Saurav",
      familyName: "Pant",
      jobTitle: "Software Developer",
      description:
        "Software Developer specialized in full-stack systems, backend engineering, distributed architectures, and AI/ML applications.",
      url: siteUrl,
      image: `${siteUrl}/profile.png`,
      email: "mailto:sauravpant777@gmail.com",
      sameAs: [
        "https://github.com/Sauravpant",
        "https://www.linkedin.com/in/sauravpant7",
      ],
      knowsAbout: [
        "Software Development",
        "Full-Stack Web Development",
        "Backend Architecture",
        "Distributed Systems",
        "Artificial Intelligence",
        "Machine Learning",
        "React",
        "Next.js",
        "Node.js",
        "Spring Boot",
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Python",
        "TypeScript",
        "Algorithm & Data Structures",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Saurav Pant Portfolio",
      description:
        "Portfolio and engineering projects by Saurav Pant, Software Developer.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Saurav Pant | Software Developer & Full-Stack Engineer",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4338ca" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}



