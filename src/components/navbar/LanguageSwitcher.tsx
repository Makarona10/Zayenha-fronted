"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { useTranslations } from "next-intl";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const locale = pathname.split("/")[1] || "en";
  const t = useTranslations("language");

  const handleLocaleChange = (locale: "ar" | "en") => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        title={t("select")}
        onClick={() => setOpen(!open)}
        className="flex items-center text-white p-2 rounded-lg hover:bg-gray-100 transition"
      >
        <FaGlobe className="w-6 h-6 text-black" />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className={`absolute ${locale === "ar" ? "left-0" : "right-0"} top-12 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-20`}
        >
          <ul className="text-gray-700 text-sm">
            <li
              className="px-2 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={() => handleLocaleChange("ar")}
            >
              🇪🇬 <span>{t("arabic")}</span>
            </li>
            <li
              className="px-2 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={() => handleLocaleChange("en")}
            >
              🇺🇸 <span>{t("english")}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
