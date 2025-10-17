import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { I18nProvider } from "@/contexts/I18nContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "José Matías Zurita — Fullstack Developer",
  description:
    "Portfolio de José Matías Zurita. React, React Native, Node.js, TypeScript, MongoDB. Proyectos, experiencia y contacto.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "José Matías Zurita — Fullstack Developer",
    description:
      "Portfolio de José Matías Zurita. React, React Native, Node.js, TypeScript, MongoDB.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "José Matías Zurita — Fullstack Developer",
    description:
      "Portfolio de José Matías Zurita. React, React Native, Node.js, TypeScript, MongoDB.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <I18nProvider>
          <Navbar />
          <div className="pt-14">
            {children}
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
