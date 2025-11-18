import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accelio Lab | AI Infrastructure Consulting",
  description:
    "Accelio Lab designs resilient AI infrastructure for medium to large enterprises, from data pipelines to MLOps automation.",
  metadataBase: new URL("https://agentic-d5bf142d.vercel.app"),
  openGraph: {
    title: "Accelio Lab | AI Infrastructure Consulting",
    description:
      "Partner with Accelio Lab to architect scalable AI platforms, data foundations, and MLOps workflows.",
    url: "https://agentic-d5bf142d.vercel.app",
    siteName: "Accelio Lab",
    images: [
      {
        url: "/og-accelio-lab.svg",
        width: 1200,
        height: 630,
        alt: "Accelio Lab - AI Infrastructure Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accelio Lab | AI Infrastructure Consulting",
    description:
      "Enterprise-grade AI infrastructure consulting. Strategy, data platforms, and MLOps automation.",
    images: ["/og-accelio-lab.svg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
