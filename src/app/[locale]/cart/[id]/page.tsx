"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function CartPage() {
  const t = useTranslations("cartpage"); // <-- use translations
  const router = useRouter();
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Elegant Ceramic Vase",
      price: 49.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1544207239-b36c85778165?w=500&auto=format&fit=crop&q=60",
      stock: 10,
    },
    {
      id: 2,
      name: "Minimalist Wall Clock",
      price: 89.99,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/9876229/pexels-photo-9876229.jpeg",
      stock: 8,
    },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = cart.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  return (
    <div className="mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-3xl font-bold text-primary-700 mb-8">{t("title")}</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">{t("empty")}</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex sm:flex-nowrap flex-wrap items-center bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative w-28 h-28 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-primary-600 font-medium">
                    {item.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-nowrap items-center sm:mt-0 mt-3">
                  <div className="flex items-center gap-3 p-4">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="w-6 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="p-4 text-red-500 hover:text-red-600 "
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-fit">
            <h2 className="text-xl font-bold mb-4 text-primary-700">
              {t("yourorder")}
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>{t("total")}</span>
                <span>{subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => router.push("/checkout/card")}
              className="w-full mt-6 bg-primary-500 text-white py-3 rounded-xl font-semibold shadow hover:bg-primary-600 transition"
            >
              {t("pay.online")}
            </button>
            <button
              onClick={() => router.push("/checkout/cash-on-delivery")}
              className="w-full mt-2 bg-gray-500 text-white py-3 rounded-xl font-semibold shadow hover:bg-gray-600 transition"
            >
              {t("pay.cash")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
