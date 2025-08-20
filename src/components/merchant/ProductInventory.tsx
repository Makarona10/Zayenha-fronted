import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";

export interface ProductInventoryProps {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  price: number;
  offerPrice?: number;
  onEdit: (productId: string) => void;
  onRemove: (productId: string) => void;
}

function ProductInventory({
  id,
  name,
  image,
  shortDescription,
  price,
  offerPrice,
  onEdit,
  onRemove,
}: ProductInventoryProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex-shrink-0 w-20 h-20 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{shortDescription}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-primary-400 font-bold text-lg">
              ${offerPrice ?? price}
            </span>
            {offerPrice && (
              <span className="text-gray-500 line-through text-sm">
                ${price}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(id)}
              className="flex items-center gap-1 text-sm bg-primary-400 text-white px-3 py-1 rounded-lg hover:opacity-90"
            >
              <FaEdit /> Edit
            </button>
            <button
              onClick={() => onRemove(id)}
              className="flex items-center gap-1 text-sm bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              <FaTrash /> Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInventory;
