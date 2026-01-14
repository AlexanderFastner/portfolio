import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false, // Only preload primary font
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-3fef6.web.app'),
  title: {
    default: "Alexander Fastner | Portfolio",
    template: "%s | Alexander Fastner"
  },
  description: "Portfolio of Alexander Fastner - Bioinformatics researcher and software developer. Explore projects in bioinformatics, web development, and data science.",
  keywords: ["Alexander Fastner", "portfolio", "bioinformatics", "software developer", "data science", "web development"],
  authors: [{ name: "Alexander Fastner" }],
  creator: "Alexander Fastner",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-3fef6.web.app",
    siteName: "Alexander Fastner Portfolio",
    title: "Alexander Fastner | Portfolio",
    description: "Portfolio of Alexander Fastner - Bioinformatics researcher and software developer.",
    images: [
      {
        url: "/images/profile_picture.png",
        width: 1200,
        height: 630,
        alt: "Alexander Fastner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Fastner | Portfolio",
    description: "Portfolio of Alexander Fastner - Bioinformatics researcher and software developer.",
    images: ["/images/profile_picture.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
