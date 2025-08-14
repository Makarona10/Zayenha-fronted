import type { Metadata } from "next";
import { Noto_Kufi_Arabic, Nunito, Raleway } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/common/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "fallback",
  variable: "--font-noto-kufi",
});

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
        <body
          className={locale === "ar" ? notoKufi.className : enfont.className}
          style={{ fontSize: locale === "en" ? "17px" : "" }}
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
