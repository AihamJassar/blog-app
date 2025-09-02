import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import "../styles/globals.css";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "MyBlog",
    template: "%s | MyBlog",
  },
  description:
    "MyBlog is a modern blog built with Next.js, TailwindCSS, and TypeScript. Discover articles and share insights.",
  keywords: ["Next.js", "Blog", "TailwindCSS", "TypeScript", "Articles"],
  authors: [{ name: "Aiham" }],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myblog.com",
    siteName: "MyBlog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MyBlog OpenGraph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyBlog",
    description:
      "A modern blog built with Next.js, TailwindCSS, and TypeScript.",
    images: ["/og-image.png"],
    creator: "@your_twitter",
  },
};

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
