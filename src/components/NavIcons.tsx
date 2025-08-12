"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const router = useRouter();

  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  const isLoggedIn = true;

  const hideAll = () => {
    [profileRef, notificationRef, cartRef].forEach((menu) => {
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
        !notificationRef.current?.parentElement?.contains(
          event.target as Node,
        ) &&
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
      {/* Profile */}

      {/* Notifications */}
      {/* <div className="relative"> */}
      {/*   <Image */}
      {/*     src="/notification.png" */}
      {/*     alt="" */}
      {/*     width={22} */}
      {/*     height={22} */}
      {/*     className="cursor-pointer" */}
      {/*     onClick={(e) => toggleMenu(e, notificationRef)} */}
      {/*   /> */}
      {/*   <div */}
      {/*     ref={notificationRef} */}
      {/*     className="absolute hidden top-14 right-0 bg-white shadow-lg rounded-lg p-4 w-64 z-20" */}
      {/*   > */}
      {/*     <p className="text-sm text-gray-600">لا توجد إشعارات حالياً</p> */}
      {/*   </div> */}
      {/* </div> */}

      {/* Cart */}
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
      <div className="relative">
        <Image
          src="/profile.png"
          alt=""
          className="cursor-pointer"
          width={22}
          height={22}
          onClick={(e) => {
            if (!isLoggedIn) {
              router.push("/login");
              return;
            }
            toggleMenu(e, profileRef);
          }}
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
                الملف الشخصي
              </Link>
            </li>
            <li>
              <Link
                href="/orders/userid"
                className="text-gray-800 hover:text-primary-600"
              >
                الطلبات
              </Link>
            </li>
            {/* <li> */}
            {/*   <Link */}
            {/*     href="/settings" */}
            {/*     className="text-gray-800 hover:text-primary-600" */}
            {/*   > */}
            {/*     الإعدادات */}
            {/*   </Link> */}
            {/* </li> */}
            <li>
              <Link
                href="/logout"
                className="text-gray-800 hover:text-primary-600"
              >
                تسجيل الخروج
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavIcons;
