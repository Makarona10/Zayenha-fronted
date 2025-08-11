"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      const searchUrl = `/list?search=${encodeURIComponent(name)}`;
      router.push(searchUrl);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-1 items-center justify-between gap-4 bg-gray-100 p-2 rounded-md w-full"
    >
      <input
        type="text"
        name="name"
        placeholder="ابحث عن منتج..."
        className="flex-1 text-sm bg-transparent border-0 rounded-lg focus:outline-none focus:ring-0"
      />
      <button type="submit" className="">
        <Image src="/search.png" alt="Search" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
