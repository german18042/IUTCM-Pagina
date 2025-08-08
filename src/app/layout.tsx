import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import ClientProviders from "../components/providers/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IUTCM - Instituto Universitario de Tecnología DR. Cristobal Mendoza",
  description: "Página oficial del Instituto Universitario de Tecnología DR. Cristobal Mendoza (IUTCM)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ClientProviders>
          {children}
          <WhatsAppButton />
        </ClientProviders>
      </body>
    </html>
  );
}
