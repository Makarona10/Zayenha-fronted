"use client";

import FilterList from "@/components/product/Filter";
import ProductList from "@/components/product/ProductList";
import Image from "next/image";
import { products } from "@/app/data";
import { Suspense } from "react";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSceleton";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const PaginationBar = dynamic(() => import("@/components/Pagination"), {
  ssr: false,
});

const ListPage = () => {
  const t = useTranslations("searchpage");

  const typeOptions = t
    .raw("filters.type.options")
    .map((name: string, i: number) => ({
      id: i + 1,
      name,
    }));

  const priceOptions = t
    .raw("filters.price.options")
    .map((name: string, i: number) => ({
      id: i + 1,
      name,
    }));

  const materialOptions = t
    .raw("filters.material.options")
    .map((name: string, i: number) => ({
      id: i + 1,
      name,
    }));

  const orderOptions = t
    .raw("filters.order.options")
    .map((name: string, i: number) => ({
      id: i + 1,
      name,
    }));

  return (
    <div className="relative">
      {/* Campaign */}
      <div className="bg-primary-100 flex md:flex-row flex-col justify-between md:h-[320px] h-[640px]">
        <div className="md:w-5/12 w-full md:h-full h-1/2 flex flex-col items-center justify-center gap-8 p-8 bg-gradient-to-r from-primary-100 to-primary-100/50">
          <h1 className="text-3xl text-center font-bold leading-[48px] text-gray-700">
            {t("campaign.title")}
          </h1>
          <button className="rounded-full text-base font-semibold p-3 bg-primary-500 text-white">
            {t("campaign.button")}
          </button>
        </div>
        <div className="relative md:w-7/12 w-full md:h-full h-1/2">
          <Image
            alt=""
            src={`https://images.unsplash.com/photo-1572048572872-2394404cf1f3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            fill
            className="relative object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-16 px-4 md:px-20 xl:px-32 2xl:px-64">
        {/* Filter section */}
        <div className="flex flex-wrap items-end md:gap-5 gap-3 mt-12">
          <Suspense fallback={<>Filters loading ...</>}>
            <FilterList
              placeholder={t("filters.type.placeholder")}
              label={t("filters.type.label")}
              options={typeOptions}
              q_param="type"
            />
            <FilterList
              placeholder={t("filters.price.placeholder")}
              label={t("filters.price.label")}
              options={priceOptions}
              q_param="p"
            />
            <FilterList
              placeholder={t("filters.material.placeholder")}
              label={t("filters.material.label")}
              options={materialOptions}
              q_param="material"
            />
            <FilterList
              placeholder={t("filters.order.placeholder")}
              label={t("filters.order.label")}
              options={orderOptions}
              q_param="order"
            />
          </Suspense>
          <button className="bg-primary-500 px-4 py-2 text-white h-fit rounded-full">
            {t("searchButton")}
          </button>
        </div>

        <div className="w-full flex justify-center">
          <Suspense fallback={<ProductCardSkeleton count={10} />}>
            <ProductList load_more={false} api="" products={products} />
          </Suspense>
        </div>
      </div>

      <div className="mt-16 w-full flex justify-center">
        <PaginationBar total={10} />
      </div>
    </div>
  );
};

export default ListPage;
