import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const pathname = usePathname(); // e.g. /ar/products/recents
  const segments = pathname.split("/");
  const currentLocale = segments[1] || "en";

  const switchTo = currentLocale === "en" ? "ar" : "en";
  const newPath = `/${switchTo}/${segments.slice(2).join("/")}`;

  return (
    <button
      onClick={() => {
        window.location.href = newPath;
      }}
      className="p-2 border rounded"
    >
      {switchTo.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;
