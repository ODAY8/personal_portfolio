import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#e6e0d4",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mohamed Abdirahman — Software Engineer · AI Developer · Intern",
  description:
    "Personal portfolio of Mohamed Abdirahman, a Software Engineer, AI Developer, and Intern building intelligent applications, modern software systems, and practical digital products.",
  keywords: [
    "Mohamed Abdirahman",
    "Software Engineer",
    "AI Developer",
    "Product Builder",
    "Full-Stack Developer",
    "Flutter Developer",
    "Cybersecurity",
    "KIIT University",
    "EdgePilot AI",
    "EverKeep",
    "HandOver",
    "PhishGuard",
    "BiasMap",
  ],
  authors: [{ name: "Mohamed Abdirahman" }],
  creator: "Mohamed Abdirahman",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Mohamed Abdirahman — Software Engineer & AI Developer",
    description:
      "Personal portfolio of Mohamed Abdirahman, a software engineer and AI developer building intelligent applications, modern software systems, and practical digital products.",
    siteName: "Mohamed Abdirahman",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Abdirahman — Software Engineer & AI Developer",
    description:
      "Personal portfolio of Mohamed Abdirahman, a software engineer and AI developer building intelligent applications, modern software systems, and practical digital products.",
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
      className={`${dmSans.variable} ${instrumentSerif.variable} ${dmMono.variable}`}
    >
      <body id="top" className="min-h-screen antialiased selection:bg-[#171914] selection:text-[#f3f0e8]">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

