import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/common/Footer";

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "fallback",
  variable: "--font-noto-kufi",
});

export const metadata: Metadata = {
  title: "زينها",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={notoKufi.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
