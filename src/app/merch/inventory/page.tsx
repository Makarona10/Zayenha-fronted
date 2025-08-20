"use client";

import { useState } from "react";
import EditProductModal from "@/components/merchant/EditProdModal";
import ProductInventory, {
  ProductInventoryProps,
} from "@/components/merchant/ProductInventory";

export default function InventoryPage() {
  const [products, setProducts] = useState(
    Array.from({ length: 45 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Product ${i + 1}`,
      image: "/placeholder.png",
      shortDescription: "This is a short description of the product.",
      price: 100 + i,
      offerPrice: i % 2 === 0 ? 80 + i : undefined,
    })),
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductInventoryProps | null>(null);

  const [removeModalOpen, setRemoveModalOpen] = useState(false);
  const [productToRemove, setProductToRemove] =
    useState<ProductInventoryProps | null>(null);

  const [search, setSearch] = useState("");

  const itemsPerPage = 20;
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIdx,
    startIdx + itemsPerPage,
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleEdit = (productId: string) => {
    const product = products.find((p) => p.id === productId) || null;
    setSelectedProduct(product as ProductInventoryProps);
    setEditModalOpen(true);
  };

  const openRemoveModal = (productId: string) => {
    const product = products.find((p) => p.id === productId) || null;
    setProductToRemove(product as ProductInventoryProps);
    setRemoveModalOpen(true);
  };

  const confirmRemove = () => {
    if (productToRemove) {
      setProducts(products.filter((p) => p.id !== productToRemove.id));
    }
    setRemoveModalOpen(false);
    setProductToRemove(null);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Inventory</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full max-w-md p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
        />
      </div>

      {/* Product List */}
      <div className="space-y-4">
        {paginatedProducts.map((product) => (
          <ProductInventory
            key={product.id}
            {...product}
            onEdit={handleEdit}
            onRemove={openRemoveModal}
          />
        ))}
        {paginatedProducts.length === 0 && (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
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
      )}

      {/* Edit Modal */}
      <EditProductModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        product={selectedProduct}
      />

      {/* Remove Confirmation Modal */}
      {removeModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Confirm Remove
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to remove{" "}
              <span className="font-medium text-gray-900">
                {productToRemove?.name}
              </span>
              ?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setRemoveModalOpen(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemove}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
