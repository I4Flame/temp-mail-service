import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TempMail Pro - Güvenli Geçici E-posta Servisi",
  description: "Güvenli, hızlı ve kullanımı kolay geçici e-posta hizmeti. Gerçek e-postanızı paylaşmadan spam ve istenmeyen postalardan korunun.",
  keywords: "geçici email, geçici mail, temp mail, temp email, tempmail, fake mail, disposable email",
  authors: [{ name: "TempMail Pro Team" }],
  creator: "TempMail Pro",
  publisher: "TempMail Pro",
  metadataBase: new URL("https://tempmail.pro"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tempmail.pro",
    title: "TempMail Pro - Güvenli Geçici E-posta Servisi",
    description: "Güvenli, hızlı ve kullanımı kolay geçici e-posta hizmeti. Gerçek e-postanızı paylaşmadan spam ve istenmeyen postalardan korunun.",
    siteName: "TempMail Pro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TempMail Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TempMail Pro - Güvenli Geçici E-posta Servisi",
    description: "Güvenli, hızlı ve kullanımı kolay geçici e-posta hizmeti.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <ClientBody>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </ClientBody>
    </html>
  );
}
