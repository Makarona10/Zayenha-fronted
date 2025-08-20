// src/i18n.ts
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["en", "ar"] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "en";

  if (!locales.includes(locale as any)) {
    notFound();
  }

  try {
    const messages = (await import(`./messages/${locale}.json`)).default;

    return {
      locale,
      messages,
    };
  } catch (error) {
    notFound();
  }
});
