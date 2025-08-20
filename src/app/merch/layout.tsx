import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/common/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const enfont = Nunito({
  subsets: ["latin"],
  weight: ["700", "500", "600", "700", "900"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "زينها",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
        <body className={enfont.className}>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}
