"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  FaArrowLeft,
  FaArrowRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

interface Props {
  total: number;
}

export default function PaginationBar({ total = 10 }: Props) {
  const t = useTranslations("pagination");
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(initialPage);

  const updateParam = (newPage: number) => {
    if (newPage < 1 || newPage > total) return;
    setPage(newPage);
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div dir="ltr" className="flex gap-6 items-center justify-center py-6">
      {/* Go -5 pages */}
      <div className="flex flex-col items-center">
        <button
          onClick={() => updateParam(page - 5)}
          disabled={page <= 5}
          className="p-3 rounded-full bg-primary-400 text-white shadow-md
                     hover:scale-110 hover:shadow-lg transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaAngleDoubleLeft className="w-5 h-5" />
        </button>
        <span className="text-xs mt-1">{t("prev5")}</span>
      </div>

      {/* Go -1 page */}
      <div className="flex flex-col items-center">
        <button
          onClick={() => updateParam(page - 1)}
          disabled={page === 1}
          className="p-3 rounded-full bg-primary-400 text-white shadow-md
                     hover:scale-110 hover:shadow-lg transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-xs mt-1">{t("prev1")}</span>
      </div>

      {/* Current page */}
      <span
        className="px-6 py-2 bg-primary-400 text-white rounded-lg shadow-md font-medium 
                   animate-pulse"
      >
        {t("page")} {page}
      </span>

      {/* Go +1 page */}
      <div className="flex flex-col items-center">
        <button
          onClick={() => updateParam(page + 1)}
          disabled={page === total}
          className="p-3 rounded-full bg-primary-400 text-white shadow-md
                     hover:scale-110 hover:shadow-lg transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaArrowRight className="w-4 h-4" />
        </button>
        <span className="text-xs mt-1">{t("next1")}</span>
      </div>

      {/* Go +5 pages */}
      <div className="flex flex-col items-center">
        <button
          onClick={() => updateParam(page + 5)}
          disabled={page > total - 5}
          className="p-3 rounded-full bg-primary-400 text-white shadow-md
                     hover:scale-110 hover:shadow-lg transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaAngleDoubleRight className="w-5 h-5" />
        </button>
        <span className="text-xs mt-1">{t("next5")}</span>
      </div>
    </div>
  );
}
