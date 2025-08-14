"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const t = useTranslations("prod_page");

  const stock = 5;

  const handleQuantity = (action: "i" | "d") => {
    if (action === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (action === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-2">
      <h4 className="font-medium">{t("quantity")}</h4>
      <div className="flex justify-between ">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 rounded-3xl flex items-center justify-between w-32">
            <button
              onClick={() => handleQuantity("i")}
              className="cursor-pointer text-xl px-4"
            >
              +
            </button>
            {quantity}
            <button
              onClick={() => handleQuantity("d")}
              className="cursor-pointer text-xl px-4"
            >
              -
            </button>
          </div>
          <div className="text-xs">
            {t("only")}{" "}
            <span className="text-red-600 font-bold">
              {stock} {t("pl")}
            </span>{" "}
            <br />
            {t("dm")}!
          </div>
        </div>
        <button
          className={`md:w-36 w-28 md:text-sm text-xs font-medium rounded-3xl ring-1 ring-primary-400 text-primary-500
        py-2 px-4 hover:text-white hover:bg-primary-400
        disabled:cursor-not-allowed disabled:bg-primary-400-30 disabled:text-white`}
        >
          {t("add")}
        </button>
      </div>
    </div>
  );
};

export default Add;
