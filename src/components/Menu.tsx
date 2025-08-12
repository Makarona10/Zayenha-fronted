"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface Option {
  name: string;
  href: string;
}

const options: Option[] = [
  { name: "الرئيسية", href: "/" },
  { name: "آخر المنتجات", href: "/products/recents" },
  { name: "العروض", href: "/products/offered" },
  { name: "الملف الشخصي", href: "/user/profile" },
  { name: "اتصل بنا", href: "/contact-us" },
  { name: "العربة (1)", href: "/cart/userid" },
  { name: "تسجيل الخروج", href: "/logout" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Menu Icon */}
      <Image
        src="/menu.png"
        alt="Menu"
        width={24}
        height={24}
        onClick={() => setOpen(true)}
        className="cursor-pointer"
      />

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40"></div>
      )}

      {/* Side Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-screen w-[70%] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setOpen(false)}
            className="mb-6 text-red-500 hover:text-red-600"
          >
            ✕ إغلاق
          </button>
          <ul className="space-y-4 mt-5">
            {options.map((option, index) => (
              <li key={index} onClick={() => setOpen(false)}>
                <Link
                  href={option.href}
                  className="text-gray-800 hover:text-primary-600"
                >
                  {option.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
