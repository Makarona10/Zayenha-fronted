import { getTranslations } from "next-intl/server";
import { serverApi } from "@/lib/api/server-api";

import Slider from "@/components/Slider";
import CategoriesList from "@/components/Categories/CategoriesList";
import ProductList from "@/components/product/ProductList";

interface HomePageProps {
  params: Promise<{ locale: string }> | { locale: string };
}

export default async function HomePage({ params }: HomePageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations("Home");

  let featuredProducts = [];
  let bestSellersProducts = [];
  let recentProducts = [];

  try {
    const api = await serverApi(locale);
    const response = await api.get("/products/homepage");

    const result = response.data?.data;
    if (result) {
      featuredProducts = result.featured || [];
      bestSellersProducts = result.bestSellers || [];
      recentProducts = result.newArrivals || [];
    }
  } catch (error) {
    console.error(
      "[SSR Fetch Error]: Global home page payload failed to load",
      error,
    );
  }

  const containerPadding = "2xl:px-64 xl:px-52 lg:px-32 px-10";

  return (
    <div className="flex flex-col w-full pb-24">
      <Slider />

      <div
        className={`flex flex-col gap-y-10 lg:mt-24 mt-12 ${containerPadding}`}
      >
        <h1 className="text-3xl font-bold mb-8">{t("featured")}</h1>
        <ProductList load_more={false} api="" products={featuredProducts} />
      </div>

      <div
        className={`flex flex-col gap-y-10 lg:mt-24 mt-12 ${containerPadding}`}
      >
        <h1 className="text-3xl font-bold mb-8">{t("bestsellers")}</h1>
        <ProductList load_more={false} api="" products={bestSellersProducts} />
      </div>

      <div className={`lg:mt-36 mt-12 ${containerPadding}`}>
        <h1 className="text-3xl font-bold mb-10">{t("categories")}</h1>
        <CategoriesList />
      </div>

      <div className="md:w-full md:h-48 bg-primary-100 mt-24 flex items-center justify-center text-3xl font-medium text-neutral-700">
        Seasonal marketing banner
      </div>

      <div
        className={`flex flex-col gap-y-10 lg:mt-24 mt-12 ${containerPadding}`}
      >
        <h1 className="text-3xl font-bold mb-8">{t("recent")}</h1>
        <ProductList load_more={false} api="" products={recentProducts} />
      </div>
    </div>
  );
}
