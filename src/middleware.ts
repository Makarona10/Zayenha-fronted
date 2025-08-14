// src/middleware.ts
import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  matcher: [
    // Skip all internal paths (_next, favicon, etc.)
    "/((?!_next|_vercel|favicon.ico|.*\\..*).*)",
  ],
};
