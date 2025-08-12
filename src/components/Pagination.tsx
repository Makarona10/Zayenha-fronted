"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  total: number;
}

export default function PaginationBar({ total = 10 }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(initialPage);

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const updateParam = (newpage: number) => {
    if (newpage < 1) return;
    if (newpage > total) return;

    setPage(newpage);
    const params = new URLSearchParams(searchParams);
    params.set("page", newpage.toString());
    router.push(`?${params.toString()}`);
    window.location.reload();
  };

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={() => updateParam(page - 1)}
        disabled={page === 1}
        className="px-3 py-1 border rounded disabled:cursor-not-allowed disabled:opacity-50"
      >
        السابق
      </button>
      <span className="font-medium">الصفحة {page} </span>
      <button
        onClick={() => updateParam(page + 1)}
        className="px-3 py-1 border rounded disabled:cursor-not-allowed disabled:opacity-50"
      >
        التالي
      </button>
    </div>
  );
}
