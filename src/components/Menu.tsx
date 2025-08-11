"use client";
import Image from "next/image";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="md:hidden">
      <Image
        src="/menu.png"
        alt="Menu"
        width={24}
        height={24}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="absolute top-20 right-4 bg-white shadow-lg rounded-lg p-4 w-48 z-10">
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-800 hover:text-blue-600">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="/products" className="text-gray-800 hover:text-blue-600">
                المنتجات
              </a>
            </li>
            <li>
              <a href="/products" className="text-gray-800 hover:text-blue-600">
                العروض
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-800 hover:text-blue-600">
                حولنا
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-800 hover:text-blue-600">
                اتصل بنا
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-800 hover:text-blue-600">
                تسجيل الخروج
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-800 hover:text-blue-600">
                العربة(1)
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Menu;
