"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const CartModal = () => {
  const cartItems = false;
  const t = useTranslations("cartmodal");

  return (
    <div className="w-max absolute p-4 bg-white shadow-[0_8px_10px_0px_rgba(0,0,0,0.1)] rounded-md md:left-0 -left-16 top-16 flex flex-col gap-6 z-20">
      {cartItems ? (
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">{t("head")}</h2>
          <p>{t("empty")}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-8 overflow-y-auto">
          <h2 className="text-lg font-semibold">{t("head")}</h2>
          <div className="flex gap-4">
            {/* Image Container */}
            <div className="relative w-[100px] h-[105px] overflow-hidden rounded-md">
              <Image
                src="https://images.pexels.com/photos/26756094/pexels-photo-26756094.jpeg"
                alt="Cart Icon"
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col justify-between w-full">
              {/* TOP */}
              <div>
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                  <h2 className="text-md font-semibold">قصرية زرع</h2>
                  <p className="p-1 text-gray-500 text-sm">64 LE</p>
                </div>
                {/* DESCRIPTION */}
                <div className="text-gray-600 text-sm">متاح</div>
              </div>
              {/* BOTTOM */}
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">{t("item.quantity")}: 2</p>
                <button className="text-red-500 hover:text-red-700">
                  {t("item.rmbutton")}
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            {/* Image Container */}
            <div className="relative w-[100px] h-[105px] overflow-hidden rounded-md">
              <Image
                src="https://images.pexels.com/photos/26756094/pexels-photo-26756094.jpeg"
                alt="Cart Icon"
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col justify-between w-full">
              {/* TOP */}
              <div>
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                  <h2 className="text-md font-semibold">قصرية زرع</h2>
                  <p className="p-1 text-gray-500 text-sm">64 LE</p>
                </div>
                {/* DESCRIPTION */}
                <div className="text-gray-600 text-sm">متاح</div>
              </div>
              {/* BOTTOM */}
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">الكمية: 1</p>
                <button className="text-red-500 hover:text-red-700">حذف</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center text-md">
              <span className="text-gray-700">{t("total")}:</span>
              <span className="">128 LE</span>
            </div>
            <p className="text-gray-500 text-xs mt-2">{t("note")}</p>
            <div className="flex gap-4 text-sm">
              <Link href="/cart/userid" className="w-full">
                <button className="w-full bg-primary-400 text-white py-2 rounded-md hover:bg-primary-500 transition duration-200">
                  {t("checkout")}
                </button>
              </Link>
              {/* <Link href="/cart/userid" className="w-full"> */}
              {/*   <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition duration-200"> */}
              {/*     فتح العربة */}
              {/*   </button> */}
              {/* </Link> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
