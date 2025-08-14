"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

export default function OrderDetailsPage() {
  const { id } = useParams();

  const order = {
    id,
    date: "2025-08-08 14:32",
    status: "Delivered",
    items: [
      {
        id: 1,
        name: "Elegant Ceramic Vase",
        price: 49.99,
        quantity: 2,
        image:
          "https://images.pexels.com/photos/9876229/pexels-photo-9876229.jpeg",
      },
      {
        id: 2,
        name: "Minimalist Wall Clock",
        price: 89.99,
        quantity: 1,
        image:
          "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg",
      },
    ],
    shippingAddress: "14 شارع  فاروق عثمان بجانب شارع الترمسة - حلوان",
  };

  const subtotal = order.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <div className="mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-3xl font-bold text-primary-700 mb-4">
        رقم الطلب: {order.id}
      </h1>
      <p className="text-gray-500 mb-6">{order.date}</p>

      {/* Status */}
      <div
        className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-6 ${
          order.status === "Delivered"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {order.status}
      </div>

      {/* Items */}
      <div className="space-y-4 mb-8">
        {order.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
          >
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">الكمية: {item.quantity}</p>
            </div>
            <div className="p-4 font-semibold text-primary-600">
              {(item.price * item.quantity).toFixed(2)} جنيه
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
        <h2 className="text-xl font-bold text-primary-700 mb-4">سعر الطلب</h2>
        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between">
            <span>إجمالي المنتجات</span>
            <span>{subtotal.toFixed(2)} جنيه</span>
          </div>
          {/* <div className="flex justify-between"> */}
          {/*   <span>التوصيل</span> */}
          {/*   <span>{shipping.toFixed(2)}جنيه </span> */}
          {/* </div> */}
          <div className="border-t pt-3 flex justify-between font-bold text-lg text-primary-700">
            <span>الإجمالي</span>
            <span>{total.toFixed(2)} جنيه</span>
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-primary-700 mb-2">
          عنوان التوصيل
        </h2>
        <p className="text-gray-700">{order.shippingAddress}</p>
      </div>
    </div>
  );
}
