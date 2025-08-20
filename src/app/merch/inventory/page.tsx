"use client";

import EditProductModal from "@/components/merchant/EditProdModal";
import ProductInventory, {
  ProductInventoryProps,
} from "@/components/merchant/ProductInventory";
import { useState } from "react";

export default function InventoryPage() {
  const [products, setProducts] = useState(
    Array.from({ length: 45 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Product ${i + 1}`,
      image: "/placeholder.png", // replace with real image path
      shortDescription: "This is a short description of the product.",
      price: Math.floor(Math.random() * 200) + 50,
      offerPrice:
        Math.random() > 0.5 ? Math.floor(Math.random() * 100) + 30 : undefined,
    })),
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductInventoryProps | null>(null);

  const itemsPerPage = 20;
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIdx, startIdx + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleEdit = (productId: string) => {
    const product = products.find((p) => p.id === productId) || null;
    setSelectedProduct(product as ProductInventoryProps);
    setEditModalOpen(true);
  };

  const handleRemove = (productId: string) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Inventory</h1>

      <div className="space-y-4">
        {paginatedProducts.map((product) => (
          <ProductInventory
            key={product.id}
            {...product}
            onEdit={handleEdit}
            onRemove={handleRemove}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Edit Modal */}
      <EditProductModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        product={selectedProduct}
      />
    </main>
  );
}
