"use client";

import { useState } from "react";

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  { id: "1", name: "Electronics" },
  { id: "2", name: "Home" },
  { id: "3", name: "Fashion" },
  { id: "4", name: "Sports" },
];

export default function AddProductPage() {
  const [productNameAr, setProductNameAr] = useState("");
  const [productNameEn, setProductNameEn] = useState("");
  const [shortDescAr, setShortDescAr] = useState("");
  const [shortDescEn, setShortDescEn] = useState("");
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [secondaryImages, setSecondaryImages] = useState<File[]>([]);
  const [price, setPrice] = useState<number | "">("");
  const [offerPrice, setOfferPrice] = useState<number | "">("");
  const [category, setCategory] = useState(categories[0].id);

  const handleSecondaryImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSecondaryImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // prepare form data
    const formData = new FormData();
    formData.append("name_ar", productNameAr);
    formData.append("name_en", productNameEn);
    formData.append("description_ar", shortDescAr);
    formData.append("description_en", shortDescEn);
    formData.append("price", price.toString());
    if (offerPrice !== "") {
      formData.append("offer_price", offerPrice.toString());
    }
    formData.append("category_id", category);

    if (mainImage) {
      formData.append("main_image", mainImage);
    }

    secondaryImages.forEach((file, index) => {
      formData.append(`secondary_images[${index}]`, file);
    });

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to add product");
      const data = await res.json();
    } catch (err) {}
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-primary-400 mb-6">
          إضافة منتج جديد
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name Arabic */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              اسم المنتج (عربي)
            </label>
            <input
              type="text"
              value={productNameAr}
              onChange={(e) => setProductNameAr(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              required
            />
          </div>

          {/* Product Name English */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Product Name (English)
            </label>
            <input
              type="text"
              value={productNameEn}
              onChange={(e) => setProductNameEn(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              required
            />
          </div>

          {/* Short Description Arabic */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              وصف قصير (عربي)
            </label>
            <textarea
              value={shortDescAr}
              onChange={(e) => setShortDescAr(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              rows={3}
              required
            />
          </div>

          {/* Short Description English */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Short Description (English)
            </label>
            <textarea
              value={shortDescEn}
              onChange={(e) => setShortDescEn(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              rows={3}
              required
            />
          </div>

          {/* Main Image */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Main Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files ? setMainImage(e.target.files[0]) : null
              }
              required
            />
          </div>

          {/* Secondary Images */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Secondary Images
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleSecondaryImages}
            />
            {secondaryImages.length > 0 && (
              <p className="text-sm text-gray-500 mt-1">
                {secondaryImages.length} image(s) selected
              </p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              min="0"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              required
            />
          </div>

          {/* Offer Price */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Offer Price (Optional)
            </label>
            <input
              type="number"
              min="0"
              value={offerPrice}
              onChange={(e) => setOfferPrice(Number(e.target.value))}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary-400 text-white font-medium py-3 rounded-lg shadow hover:bg-primary-500 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
