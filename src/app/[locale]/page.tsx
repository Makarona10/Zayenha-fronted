import CategoriesList from "@/components/Categories/CategoriesList";
import Slider from "@/components/Slider";
import ProductList from "@/components/product/ProductList";
import { products } from "../data";
import { Suspense } from "react";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSceleton";
import CategorieItemSkeleton from "@/components/skeletons/CategorieSkeleton";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Home");
  return (
    <div className="flex flex-col w-full">
      <Slider />
      <div className="flex flex-col gap-y-10 lg:mt-24 mt-12 2xl:px-64 xl:px-52 lg:px-32 px-10">
        <h1 className="text-3xl font-bold mb-8">المنتجات المميزة</h1>
        <Suspense fallback={<ProductCardSkeleton count={10} />}>
          <ProductList load_more={false} api="" products={products} />
        </Suspense>
      </div>
      <div className="lg:mt-24 mt-12 2xl:px-64 xl:px-52 lg:px-32 px-10">
        <h1 className="text-3xl font-bold mb-10">فئات المنتجات</h1>

        <Suspense fallback={<CategorieItemSkeleton count={8} />}>
          <CategoriesList />
        </Suspense>
      </div>
      <div className="flex flex-col gap-y-10 lg:mt-24 mt-12 2xl:px-64 xl:px-52 lg:px-32 px-10">
        <h1 className="text-3xl font-bold mb-8 ">أحدث المنتجات</h1>
        <Suspense fallback={<ProductCardSkeleton count={10} />}>
          <ProductList load_more={false} api="" products={products} />
        </Suspense>
      </div>
    </div>
  );
}

// src/app/[locale]/page.ts
// export default function HomePage() {
//   console.log("HomePage component rendered");
//   return (
//     <div>
//       <h1 className="text-red-500">Hello World - This is working!</h1>
//       <p>If you can see this, the routing is working</p>
//     </div>
//   );
// }
