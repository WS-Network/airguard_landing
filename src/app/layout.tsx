import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "AirGuard | AI-Driven Network Management for ISPs",
  description: "AirGuard delivers a self-healing networking solution that guarantees unparalleled uptime and performance for ISPs.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${exo2.variable} font-sans antialiased bg-primary-dark text-primary-light`}>
        {children}
      </body>
    </html>
  );
}
