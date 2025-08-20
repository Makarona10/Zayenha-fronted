import { ProductInventoryProps } from "./ProductInventory";

interface EditProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductInventoryProps | null;
}

function EditProductModal({ isOpen, onClose, product }: EditProductModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Product</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              defaultValue={product.name}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Short Description
            </label>
            <textarea
              defaultValue={product.shortDescription}
              rows={3}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Price
              </label>
              <input
                type="number"
                defaultValue={product.price}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Offer Price
              </label>
              <input
                type="number"
                defaultValue={product.offerPrice}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-primary-400 text-white hover:opacity-90"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductModal;
