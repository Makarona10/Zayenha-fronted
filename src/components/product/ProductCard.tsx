"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import { currency } from "@/currency";

export interface ProductTranslation {
  productId: number;
  name: string;
  shortDescription?: string;
  description?: string;
}

export interface ProductImage {
  image: string;
}

export interface Product {
  id: number;
  price: string;
  offerPrice: string;
  mainImage: string;
  images: ProductImage[];
  translations: ProductTranslation[];
  isFavorite: boolean;
}

const ProductCard = (product: Product) => {
  const t = useTranslations("productCard");
  const locale = useLocale();

  const handle_favourite = () => {};

  const translation = product.translations?.[0] || {};
  const productName = translation.name || "";
  const productDescription =
    translation.shortDescription || translation.description || "";

  const secondaryImage = product.images?.[0]?.image || product.mainImage;

  const numOfferPrice = Number(product.offerPrice);
  const numPrice = Number(product.price);

  const displayPrice =
    numOfferPrice && numOfferPrice > 0 ? numOfferPrice : numPrice;
  const hasDiscount =
    numOfferPrice && numOfferPrice > 0 && numPrice && numPrice > numOfferPrice;

  const serverUrl =
    process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
  const mainImgSrc = `${serverUrl}/${product.mainImage}`;
  const secondImgSrc = `${serverUrl}/${secondaryImage}`;

  return (
    <div className="w-full bg-white rounded-lg transform transition-transform">
      <div className="w-full">
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <div className="absolute top-2 left-2 z-20">
            <button
              onClick={handle_favourite}
              className={`${
                product.isFavorite
                  ? "text-red-500 hover:text-gray-500"
                  : "text-gray-500 hover:text-red-500"
              } transition-colors duration-300`}
            >
              <FaHeart className="w-5 h-5" />
            </button>
          </div>
          <Link href={`/product/${product.id}`}>
            <Image
              src={mainImgSrc}
              alt={productName}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 hover:scale-110 transition-all duration-700 ease-in-out"
            />
            <Image
              src={secondImgSrc}
              alt={productName}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="absolute object-cover rounded-md"
            />
          </Link>
        </div>

        <div className="pt-2 gap-y-2 flex flex-col items-start pb-4">
          <h2 className="sm:text-lg text-base font-semibold text-gray-800 line-clamp-1">
            {productName}
          </h2>
          <p className="line-clamp-2 tracking-tighter md:text-xs text-[11px] text-gray-600 h-10">
            {productDescription}
          </p>

          <div className="flex items-center justify-between w-full">
            <span className="md:text-sm text-xs font-bold text-gray-900">
              {displayPrice} {currency[locale as keyof typeof currency]}
            </span>
            {hasDiscount && (
              <span className="line-through md:text-sm text-xs text-gray-500 px-2">
                {numPrice} {currency[locale as keyof typeof currency]}
              </span>
            )}
          </div>

          <div className="flex flex-nowrap gap-2 justify-between w-full font-bold">
            <button className="md:w-7/12 flex flex-nowrap md:justify-start justify-center items-center gap-2 w-full md:py-2 md:px-4 p-2 md:text-xs text-[10px] rounded-full bg-primary-500 text-white transition-colors duration-300">
              {t("addToCart")}
              <Image
                src="/cart.png"
                alt="Cart Icon"
                width={20}
                height={20}
                className="inline-block mr-2 filter brightness-0 invert duration-300 transform transition-all"
              />
            </button>
            <Link
              href={`/product/${product.id}`}
              className="md:flex line-clamp-1 hidden px-4 py-3 md:text-xs text-[10px] rounded-full bg-rose-500 text-white transition-colors duration-300 items-center justify-center text-center"
            >
              {t("viewProduct")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
