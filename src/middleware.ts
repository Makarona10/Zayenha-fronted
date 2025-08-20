// src/middleware.ts
import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/merch")) {
    return;
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!_next|_vercel|favicon.ico|.*\\..*).*)"],
};
