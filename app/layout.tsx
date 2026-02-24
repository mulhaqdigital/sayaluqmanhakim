import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Nova — Simple SaaS landing",
    template: "%s · Nova",
  },
  description:
    "A clean, modern SaaS landing page built with Next.js, TypeScript, Tailwind, and shadcn/ui.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Nova — Simple SaaS landing",
    description:
      "A clean, modern SaaS landing page built with Next.js, TypeScript, Tailwind, and shadcn/ui.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

