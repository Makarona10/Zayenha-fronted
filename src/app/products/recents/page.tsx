import { products } from "@/app/data";
import ProductList from "@/components/product/ProductList";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSceleton";
import { Suspense } from "react";

const RecentProducts = () => {
  return (
    <div className="flex flex-col space-y-16 px-4 md:px-20 xl:px-32 2xl:px-64">
      <div className="relative text-center text-4xl w-full h-72 bg-gradient-to-r from-primary-100 to-slate-50">
        {/* <Image src={} /> */}
        HERE THE RECENT OR WHATEVER BANNER WILL BE
      </div>
      <Suspense fallback={<ProductCardSkeleton count={10} />}>
        <ProductList load_more={false} api="" products={products} />
      </Suspense>
    </div>
  );
};

export default RecentProducts;
