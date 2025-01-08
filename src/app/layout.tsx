import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "./components";
import { LoadingModal, Navigation } from "./components.client";
import "./globals.css";
import Head from "next/head";

const gotham = localFont({
  src: [
    { path: "./fonts/GothamThin.woff2", weight: "100" },
    { path: "./fonts/GothamXLight.woff2", weight: "200" },
    { path: "./fonts/GothamLight.woff2", weight: "300" },
    { path: "./fonts/GothamBook.woff2", weight: "400" },
    { path: "./fonts/GothamMedium.woff2", weight: "500" },
    { path: "./fonts/GothamBold.woff2", weight: "700" },
    { path: "./fonts/GothamBlack.woff2", weight: "800" },
    { path: "./fonts/GothamUltra.woff2", weight: "900" },
  ],
  variable: "--font-gotham",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Noire Lab",
  description:
    "Casino marketing, promotion, and development services for gambling platforms. Full-cycle agency for casinos including IT support, design, and SEO optimization.",
  keywords: [
    "Casino promotion",
    "Creating a casino from scratch",
    "Marketing services for casinos",
    "Full-cycle agency for gambling",
    "IT services for casinos",
    "Online casino marketing",
    "Gambling platform development",
    "Casino design",
    "Casino creatives",
    "Gambling promotion",
    "Gambling marketing",
    "SEO optimization for casinos",
    "Casino advertising on the Internet",
    "SMM for gambling business",
    "Content marketing for casinos",
    "Targeted advertising for casinos",
    "Lead generation for casinos",
    "CPA networks for gambling",
    "PPC advertising for casinos",
    "Affiliate programs for gambling",
    "Casino website design",
    "Creatives for gambling",
    "Creating banners for casinos",
    "Video advertising for casinos",
    "UX/UI design for gambling platforms",
    "Graphic design for casinos",
    "Casino mobile app design",
    "Animation for gambling",
    "Logos for casinos",
    "Casino branding",
    "Turnkey casino development",
    "Gambling software development",
    "Creating platforms for online casinos",
    "Casino app development",
    "Payment system integration for casinos",
    "IT support for gambling",
    "Casino web development",
    "How to create a successful online casino",
    "Casino promotion through social media",
    "Web development services for gambling business",
    "Where to order creatives for casinos",
    "Casino marketing strategies for 2025",
    "Gambling website optimization for search engines",
    "Best affiliate programs for casinos",
    "Turnkey interface development for casinos",
    "How to promote an online casino on the Internet",
    "Creating unique designs for gambling platforms",
    "SEO for casinos",
  ],
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon-96x96.png",
      },
      { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
      { rel: "shortcut icon", url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Noire Lab",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: gotham.style.fontFamily,
        }}
        className={`antialiased bg-[#0E0C12] text-white`}
      >
        <Navigation />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
