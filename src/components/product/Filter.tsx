"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Option {
  id: number | string;
  name: string;
}

interface FilterListProps {
  label: string;
  options: Option[];
  q_param: string;
  placeholder?: string;
}

const FilterList = ({
  label,
  options,
  q_param,
  placeholder = "قم بالإختيار",
}: FilterListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);

    const params = new URLSearchParams(searchParams.toString());
    params.set(q_param, String(option.id));
    router.push(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between w-40" ref={dropdownRef}>
      <div className="w-full">
        {label && (
          <label className="block mb-2 md:text-base text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="w-full relative flex flex-nowrap">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex md:text-sm text-xs font-medium gap-5 justify-between items-center px-4 py-2 text-gray-700 bg-white border border-primary-200 rounded-full shadow-sm hover:border-primary-500 focus:outline-none transition"
          >
            <span className="text-nowrap overflow-hidden">
              {selected ? selected.name : placeholder}
            </span>
            <ChevronDownIcon
              className={`w-3 h-3 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <ul className="absolute md:text-sm text-xs font-normal z-10 w-full mt-12 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
              {options.map((option) => (
                <li
                  title={option.name}
                  key={option.id}
                  onClick={() => handleSelect(option)}
                  className={`px-4 py-2 cursor-pointer font-normal hover:bg-primary-100/60 ${
                    selected && option.id === selected.id
                      ? "bg-primary-100/30 font-medium"
                      : ""
                  }`}
                >
                  {option.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterList;
