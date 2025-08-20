"use client";

import Link from "next/link";
import {
  FaChartLine,
  FaCalendarAlt,
  FaPlusCircle,
  FaEdit,
  FaBoxes,
} from "react-icons/fa";

export default function MerchantDashboard() {
  const cards = [
    {
      title: "Track Sales",
      description: "See how many pieces you sold for each product.",
      icon: <FaChartLine className="text-primary-400 text-3xl" />,
      link: "/merch/sales-tracking",
    },
    {
      title: "Profit Reports",
      description: "View profits for a specific date range.",
      icon: <FaCalendarAlt className="text-primary-400 text-3xl" />,
      link: "/merch/profit-reports",
    },
    {
      title: "Add Product",
      description: "List a new product for sale.",
      icon: <FaPlusCircle className="text-primary-400 text-3xl" />,
      link: "/merch/add-product",
    },
    {
      title: "Modify Product",
      description: "Edit an existing product’s details.",
      icon: <FaEdit className="text-primary-400 text-3xl" />,
      link: "/merch/edit-product",
    },
    {
      title: "List Inventory",
      description: "View all inventory items with stock levels.",
      icon: <FaBoxes className="text-primary-400 text-3xl" />,
      link: "/merch/inventory",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Merchant Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <Link
            key={idx}
            href={card.link}
            className="group bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              {card.icon}
              <h2 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h2>
            </div>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
