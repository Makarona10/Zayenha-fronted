// src/app/[locale]/loading.tsx
import ProductCardSkeleton from "@/components/skeletons/ProductCardSceleton";
import CategorieItemSkeleton from "@/components/skeletons/CategorieSkeleton";

export default function HomePageLoading() {
  // Mimicking your actual layout spacings so there's zero layout shift (CLS)
  const containerPadding = "2xl:px-64 xl:px-52 lg:px-32 px-10";

  return (
    <div className="flex flex-col w-full pb-24 animate-pulse">
      {/* 1. Placeholder for the Hero Slider */}
      <div className="w-full h-[300px] md:h-[450px] lg:h-[550px] bg-neutral-200" />

      {/* 2. Featured Lane Skeleton */}
      <div
        className={`flex flex-col gap-y-10 lg:mt-24 mt-12 ${containerPadding}`}
      >
        <div className="h-8 w-48 bg-neutral-200 rounded-md mb-8" />{" "}
        {/* Title text placeholder */}
        <ProductCardSkeleton count={10} />
      </div>

      {/* 3. Best Sellers Lane Skeleton */}
      <div
        className={`flex flex-col gap-y-10 lg:mt-24 mt-12 ${containerPadding}`}
      >
        <div className="h-8 w-48 bg-neutral-200 rounded-md mb-8" />
        <ProductCardSkeleton count={10} />
      </div>

      {/* 4. Categories Section Skeleton */}
      <div className={`lg:mt-36 mt-12 ${containerPadding}`}>
        <div className="h-8 w-48 bg-neutral-200 rounded-md mb-10" />
        <CategorieItemSkeleton count={8} />
      </div>

      {/* 5. Marketing Banner Strip Placeholder */}
      <div className="md:w-full md:h-48 bg-neutral-100 mt-24" />
    </div>
  );
}
