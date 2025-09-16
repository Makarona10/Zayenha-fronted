"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Order {
  id: string;
  total: number;
  date: string;
}

interface Address {
  street: string;
  city: string;
}

interface UserProfile {
  name: string;
  email: string;
  orders: Order[];
  lastAddress: Address;
}

const UserProfilePage = () => {
  const t = useTranslations("profilepage");
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    setUser({
      name: "ربيع الدسوقي",
      email: "ahmed@exame.com",
      orders: [
        { id: "1", total: 250, date: "2025-07-01" },
        { id: "2", total: 500, date: "2025-07-15" },
        { id: "3", total: 150, date: "2025-08-01" },
      ],
      lastAddress: {
        street: "33 شارع محمد شريف متفرع من ترعة المحمودية - القناطر",
        city: "القاهرة",
      },
    });
  }, []);

  if (!user) {
    return <p className="p-8 text-center text-gray-500">{t("loading")}</p>;
  }

  const ordersCount = user.orders.length;
  const totalAmount = user.orders.reduce((sum, o) => sum + o.total, 0);
  const mostValuableOrder = user.orders.reduce((max, o) =>
    o.total > max.total ? o : max,
  );
  const lastOrderDate = user.orders[ordersCount - 1]?.date;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link href="profile/modify">
              <button className="px-4 py-2 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition">
                {t("editProfile")}
              </button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">{t("stats.ordersCount")}</p>
            <p className="text-xl font-semibold">{ordersCount}</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">{t("stats.totalAmount")}</p>
            <p className="text-xl font-semibold">
              {totalAmount} {t("currency")}
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">
              {t("stats.mostValuableOrder")}
            </p>
            <p className="text-xl font-semibold">
              {mostValuableOrder.total} {t("currency")}
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">{t("stats.lastOrderDate")}</p>
            <p className="text-xl font-semibold">{lastOrderDate}</p>
          </div>
        </div>

        {/* Last Address */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {t("lastAddress.title")}
          </h2>
          <p className="text-gray-600">
            {user.lastAddress.street}, {user.lastAddress.city}
          </p>
        </div>

        {/* Orders Table */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {t("ordersHistory.title")}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
              <thead className="text-start bg-gray-100">
                <tr>
                  <th className="text-start px-4 py-2 text-sm font-semibold text-gray-600">
                    {t("ordersHistory.orderId")}
                  </th>
                  <th className="text-start px-4 py-2  text-sm font-semibold text-gray-600">
                    {t("ordersHistory.total")}
                  </th>
                  <th className="px-4 py-2 text-start text-sm font-semibold text-gray-600">
                    {t("ordersHistory.date")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {user.orders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="px-4 py-2 text-gray-700">{order.id}</td>
                    <td className="px-4 py-2 text-gray-700">
                      {order.total} {t("currency")}
                    </td>
                    <td className="px-4 py-2 text-gray-700">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
