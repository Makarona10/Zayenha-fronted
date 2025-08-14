"use client";

import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function CashOnDeliveryPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "cairo",
    notes: "",
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
    // alert("تم تأكيد الطلب بنجاح!");
  };

  return (
    <div className="h-screen flex justify-center p-6">
      <div className="h-fit bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-primary-700 mb-6">
          الدفع عند الاستلام
        </h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Shipping Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-primary-600">
              بيانات الشحن
            </h2>
            <input
              type="text"
              name="name"
              placeholder="الاسم بالكامل"
              value={form.name}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:outline-primary-400 outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="رقم الموبايل"
              value={form.phone}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:outline-primary-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني (اختياري)"
              value={form.email}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:outline-primary-400 outline-none"
            />
            <label
              htmlFor="city"
              className="block text-sm font-medium text-primary-700 mb-1"
            >
              المحافظة
            </label>
            <select
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 w-full focus:outline-primary-400"
            >
              <option value="cairo">القاهرة</option>
            </select>
            <input
              type="text"
              name="address"
              placeholder="العنوان بالتفصيل"
              value={form.address}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:outline-primary-400 outline-none"
              required
            />
            <textarea
              name="notes"
              placeholder="ملاحظات إضافية"
              value={form.notes}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:outline-primary-400 outline-none"
            />
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-primary-600">
              ملخص الطلب
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
                  <span>{item.price * item.quantity} جنيه</span>
                </div>
              ))}
              <div className="flex justify-between font-semibold">
                <span>سعر المنتجات</span>
                <span>{totalPrice} جنيه</span>
              </div>
              {/* <div className="flex justify-between"> */}
              {/*   <span>الشحن</span> */}
              {/*   <span>{shippingCost} جنيه</span> */}
              {/* </div> */}
              <div className="flex justify-between text-lg font-bold text-primary-700 mt-2">
                <span>الإجمالي</span>
                <span>{grandTotal} جنيه</span>
              </div>
            </div>

            <button
              type="submit"
              className="bg-primary-400 hover:bg-primary-500 text-white w-full py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              تأكيد الطلب
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
