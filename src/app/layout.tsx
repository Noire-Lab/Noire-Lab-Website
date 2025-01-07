import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "./components";
import { Navigation } from "./components.client";
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
  description: "Noire Lab",
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
