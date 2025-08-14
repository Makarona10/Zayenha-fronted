"use client";

import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

interface LinkType {
  name: string;
  ref: string;
}

const NavBar = () => {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const links: LinkType[] = [
    { name: t("home"), ref: "/" + locale },
    { name: t("recent"), ref: `/${locale}/products/recents` },
    { name: t("offers"), ref: `/${locale}/products/offered` },
    { name: t("contact"), ref: `/${locale}/contact-us` },
  ];

  const handleLocaleChange = (locale: "ar" | "en") => {
    // Replace first path segment with new locale
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 font-medium bg-white shadow-sm flex items-center gap-16">
      {/* Mobile */}
      <div className="relative flex w-full md:hidden items-center sm:gap-16 gap-6">
        <Link
          href="/"
          className="flex flex-1 flex-nowrap items-center gap-2 text-2xl font-bold text-gray-800 "
        >
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
          <div className="text-2xl tracking-wide text-primary-600">زينها</div>
        </Link>

        {/* Mobile Search Toggle */}
        <button
          className="rounded-full bg-gray-100 p-2"
          onClick={() => {
            const bar = document.getElementById("sbar");
            if (bar) bar.style.transform = "translateY(0px)";
          }}
        >
          <Image alt="search" src={"/search.png"} width={20} height={20} />
        </button>
        <div
          id="sbar"
          className="flex items-center bg-white shadow-md p-3 rounded-lg gap-3 z-30 transform duration-300 absolute top-16 -translate-y-52 w-full"
        >
          <SearchBar />
          <button
            onClick={() => {
              const bar = document.getElementById("sbar");
              if (bar) bar.style.transform = "translateY(-10rem)";
            }}
            className="py-2 px-4 text-sm bg-red-500 rounded-full text-white"
          >
            x
          </button>
        </div>
        <Menu />
      </div>

      {/* Desktop */}
      <div className="w-full hidden md:flex items-center gap-8 h-full justify-between">
        {/* left side */}
        <div className="w-1/2 flex items-center gap-14">
          <Link
            href="/"
            className="flex flex-nowrap items-center gap-2 text-2xl font-bold text-gray-800"
          >
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <div className="text-2xl tracking-wide text-primary-600">زينها</div>
          </Link>
          <div className="flex items-center gap-4 ">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.ref}
                className="text-nowrap font-medium text-gray-800 hover:text-primary-500 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* right side */}
        <div className="w-1/2 text-nowrap flex items-center gap-8">
          <SearchBar />
          <NavIcons />

          {/* Language Selector */}
          <select
            className="text-base bg-primary-100 text-white rounded-lg px-2 cursor-pointer outline-none"
            onChange={(e) => handleLocaleChange(e.target.value as "ar" | "en")}
            defaultValue={pathname.split("/")[1] || "ar"}
          >
            <option value="ar">🇪🇬</option>
            <option value="en">🇺🇸</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
