"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

interface Product {
  id: string;
  main_image: string;
  second_image: string;
  name: string;
  description?: string;
  price?: number;
  offer_price?: number;
  isFavorite?: boolean;
}

const ProductCard = (product: Product) => {
  const handle_favourite = () => {};

  return (
    <div className="w-full bg-white rounded-lg transform transition-transform ">
      <div className="w-full">
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <div className="absolute top-2 left-2 z-20">
            <button
              onClick={() => handle_favourite()}
              className={`${
                product.isFavorite
                  ? "text-red-500 hover:text-gray-500"
                  : "text-gray-500 hover:text-red-500"
              }
                transition-colors duration-300`}
            >
              <FaHeart className="w-5 h-5" />
            </button>
          </div>
          <Link href="">
            <Image
              src={product.main_image}
              alt={product.name}
              fill
              sizes=""
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-300 ease-in-out"
            />
            <Image
              src={
                "https://images.pexels.com/photos/33118537/pexels-photo-33118537.jpeg"
              }
              alt={product.name}
              fill
              sizes=""
              className="absolute object-cover rounded-md "
            />
          </Link>
        </div>
        <div className="pt-2 gap-y-2 flex flex-col items-start pb-4">
          <h2 className="sm:text-lg text-base font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="line-clamp-2 tracking-tighter md:text-xs text-[11px] text-gray-600 h-10">
            {product.description}
          </p>
          <div className="flex items-center justify-between w-full">
            <span className="md:text-sm text-xs font-bold text-gray-900">
              {product.offer_price || product.price} LE
            </span>
            {product.price && (
              <span className="line-through md:text-sm text-xs text-gray-500 px-2">
                {product.price} LE
              </span>
            )}
          </div>
          <div className="flex flex-nowrap justify-between w-full">
            <button
              className={`md:w-max w-full md:py-2 md:px-4 p-2 md:text-xs text-[10px] font-medium rounded-full
            bg-primary-500 text-white transition-colors duration-300`}
            >
              أضف إلى السلة
              <Image
                src="/cart.png"
                alt="Cart Icon"
                width={20}
                height={20}
                className="inline-block mr-2 filter brightness-0 invert duration-300 transform transition-all"
              />
            </button>
            <button
              className={`md:flex hidden py-2 px-2 p-2 md:text-xs text-[10px] font-medium rounded-full
              bg-rose-500 text-white transition-colors duration-300`}
            >
              عرض المنتج
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
