"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { currency } from "@/currency";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const previousAddresses = [
  {
    id: 1,
    city: "Cairo",
    district: "Nasr City",
    street: "Street 10",
    buildingAndFloor: "Building 5, Floor 2",
    landmark: "Near Mall",
  },
  {
    id: 2,
    city: "Giza",
    district: "Dokki",
    street: "Street 22",
    buildingAndFloor: "Building 2, Floor 1",
    landmark: "Near Metro",
  },
];

export default function CashOnDeliveryPage() {
  const t = useTranslations("cashOnDelivery");
  const locale = useLocale();
  const currentCurrency = currency[locale as keyof typeof currency];

  const [addressMode, setAddressMode] = useState<"previous" | "new">("new");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    district: "",
    street: "",
    buildingAndFloor: "",
    landmark: "",
  });

  const cartItems: CartItem[] = [
    { id: 1, name: "ديكور خشبي", price: 200, quantity: 2 },
    { id: 2, name: "مزهرية سيراميك", price: 150, quantity: 1 },
  ];

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const grandTotal = totalPrice;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submit logic
  };

  return (
    <div className="h-screen flex justify-center p-6">
      <div className="h-fit bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-primary-700 mb-6">
          {t("title")}
        </h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Shipping Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-primary-600">
              {t("shippingInfo")}
            </h2>

            {/* Always visible fields */}
            <input
              type="text"
              name="name"
              placeholder={t("fullName")}
              value={form.name}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:outline-primary-400 outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={t("phoneNumber")}
              value={form.phone}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:outline-primary-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("email")}
              value={form.email}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:outline-primary-400 outline-none"
            />

            {/* Address choice */}
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="addressMode"
                  value="previous"
                  checked={addressMode === "previous"}
                  onChange={() => setAddressMode("previous")}
                />
                {t("choosePrevious")}
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="addressMode"
                  value="new"
                  checked={addressMode === "new"}
                  onChange={() => setAddressMode("new")}
                />
                {t("addNew")}
              </label>
            </div>

            {/* Conditional Address Section */}
            {addressMode === "previous" ? (
              <select
                name="previousAddress"
                className="border rounded-lg p-3 w-full focus:outline-primary-400"
              >
                {previousAddresses.map((addr) => (
                  <option key={addr.id} value={addr.id}>
                    {addr.city}, {addr.district}, {addr.street}
                  </option>
                ))}
              </select>
            ) : (
              <>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-primary-700 mb-1"
                >
                  {t("city")}
                </label>
                <select
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="border rounded-lg p-3 w-full focus:outline-primary-400"
                >
                  <option value="Cairo">Cairo</option>
                  <option value="Giza">Giza</option>
                </select>
                <input
                  type="text"
                  name="district"
                  placeholder={t("district")}
                  value={form.district}
                  onChange={handleChange}
                  className="border rounded-lg p-3 w-full focus:outline-primary-400 outline-none"
                  required
                />
                <input
                  type="text"
                  name="street"
                  placeholder={t("street")}
                  value={form.street}
                  onChange={handleChange}
                  className="border rounded-lg p-3 w-full focus:outline-primary-400 outline-none"
                  required
                />
                <input
                  type="text"
                  name="buildingAndFloor"
                  placeholder={t("buildingAndFloor")}
                  value={form.buildingAndFloor}
                  onChange={handleChange}
                  className="border rounded-lg p-3 w-full focus:outline-primary-400 outline-none"
                  required
                />
                <textarea
                  name="landmark"
                  placeholder={t("landmark")}
                  value={form.landmark}
                  onChange={handleChange}
                  className="border rounded-lg p-3 w-full focus:outline-primary-400 outline-none"
                />
              </>
            )}
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-primary-600">
              {t("orderSummary")}
            </h2>
            <div className="bg-primary-50 p-4 rounded-lg">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b pb-2 mb-2 text-sm"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>
                    {item.price * item.quantity} {currentCurrency}
                  </span>
                </div>
              ))}
              <div className="flex justify-between font-semibold">
                <span>{t("productPrice")}</span>
                <span>
                  {totalPrice} {currentCurrency}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold text-primary-700 mt-2">
                <span>{t("total")}</span>
                <span>
                  {grandTotal} {currentCurrency}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="bg-primary-400 hover:bg-primary-500 text-white w-full py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              {t("confirmOrder")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
