"use client";

import Link from "next/link";

export default function OrdersHistoryPage() {
  const orders = [
    {
      id: "ORD-1001",
      date: "2025-08-08 14:32",
      itemsCount: 3,
      totalAmount: 149.97,
      status: "Delivered",
    },
    {
      id: "ORD-1002",
      date: "2025-08-05 10:18",
      itemsCount: 2,
      totalAmount: 99.99,
      status: "Shipped",
    },
  ];

  return (
    <div className="mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-3xl font-bold text-primary-700 mb-8">
        تاريخ الطلبات
      </h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <Link
            key={order.id}
            href={`/orders/${order.id}`}
            className="block bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-lg hover:border-primary-300 transition"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              {/* Left section */}
              <div>
                <p className="text-gray-800 font-semibold">
                  رقم الطلب: {order.id}
                </p>
                <p className="text-gray-500 text-sm">{order.date}</p>
              </div>

              {/* Right section */}
              <div className="flex flex-wrap sm:flex-nowrap gap-6 text-gray-700">
                <div>
                  <p className="text-sm text-gray-500">عدد العناصر</p>
                  <p className="font-semibold">{order.itemsCount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">الإجمالي</p>
                  <p className="font-semibold text-primary-600">
                    {order.totalAmount.toFixed(2)} جنيه
                  </p>
                </div>
                {/* <div> */}
                {/*   <p className="text-sm text-gray-500">Status</p> */}
                {/*   <p */}
                {/*     className={`font-semibold ${ */}
                {/*       order.status === "Delivered" */}
                {/*         ? "text-green-600" */}
                {/*         : "text-yellow-600" */}
                {/*     }`} */}
                {/*   > */}
                {/*     {order.status} */}
                {/*   </p> */}
                {/* </div> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
