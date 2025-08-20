"use client";

import { useEffect, useState } from "react";

interface ProductSales {
  id: string;
  name: string;
  unitPrice: number;
  sold: number;
}

export default function MerchantSalesPage() {
  const [sales, setSales] = useState<ProductSales[]>([]);

  useEffect(() => {
    // TODO: Replace with backend API call

    setSales([
      { id: "1", name: "Gaming Mouse", unitPrice: 50, sold: 120 },
      { id: "2", name: "Mechanical Keyboard", unitPrice: 100, sold: 80 },
      { id: "3", name: "4K Monitor", unitPrice: 300, sold: 25 },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-primary-400 mb-6">
          تقرير المبيعات
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-primary-400 text-white">
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Unit Price</th>
                <th className="p-3 text-left">Sold Pieces</th>
                <th className="p-3 text-left">Total Revenue</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.unitPrice}EGP</td>
                  <td className="p-3">{item.sold}</td>
                  <td className="p-3 font-semibold text-primary-500">
                    {item.unitPrice * item.sold}EGP
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <p className="text-lg font-semibold text-gray-700">
            Total Revenue:{" "}
            <span className="text-primary-500">
              {sales.reduce((acc, item) => acc + item.unitPrice * item.sold, 0)}
              EGP
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
