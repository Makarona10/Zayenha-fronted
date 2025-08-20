"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import CartModal from "./CartModal";
import { useTranslations } from "next-intl";

const NavIcons = () => {
  const router = useRouter();
  const profileRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Navbar");

  const isLoggedIn = true;

  const hideAll = () => {
    [profileRef, cartRef].forEach((menu) => {
      menu.current?.classList.add("hidden");
    });
  };

  const toggleMenu = (
    e: React.MouseEvent,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    e.stopPropagation();
    const isHidden = ref.current?.classList.contains("hidden");
    hideAll();
    if (isHidden) {
      ref.current?.classList.remove("hidden");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !profileRef.current?.parentElement?.contains(event.target as Node) &&
        !cartRef.current?.parentElement?.contains(event.target as Node)
      ) {
        hideAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      {/* Cart */}
      {isLoggedIn && (
        <div className="md:block hidden relative min-w-[22px] min-h-[22px]">
          <Image
            src="/cart.png"
            alt=""
            width={22}
            height={22}
            className="cursor-pointer"
            onClick={(e) => toggleMenu(e, cartRef)}
          />
          <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </div>
          <div ref={cartRef} className="hidden">
            <CartModal />
          </div>
        </div>
      )}

      {/* Profile or Login */}
      {isLoggedIn ? (
        <div className="relative">
          <Image
            src="/profile.png"
            alt=""
            className="cursor-pointer"
            width={22}
            height={22}
            onClick={(e) => toggleMenu(e, profileRef)}
          />
          <div
            ref={profileRef}
            className="absolute hidden top-14 md:right-0 -right-10 bg-white rounded-lg p-4 w-48 z-20 shadow-[0_8px_10px_0px_rgba(0,0,0,0.1)]"
          >
            <ul className="space-y-2">
              <li>
                <Link
                  href="/user/profile"
                  className="text-gray-800 hover:text-primary-600"
                >
                  {t("profile.profile")}
                </Link>
              </li>
              <li>
                <Link
                  href="/orders/userid"
                  className="text-gray-800 hover:text-primary-600"
                >
                  {t("profile.orders")}
                </Link>
              </li>
              <li>
                <Link
                  href="/logout"
                  className="text-gray-800 hover:text-primary-600"
                >
                  {t("profile.logout")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => router.push("/auth/login")}
          className="px-4 py-2 md:text-sm text-xs rounded-lg bg-primary-500 text-white active:bg-primary-600 transition"
        >
          {t("login")}
        </button>
      )}
    </div>
  );
};

export default NavIcons;
