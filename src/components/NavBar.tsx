import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

interface LinkType {
  name: string;
  ref: string;
}

const links: LinkType[] = [
  { name: "الرئيسية", ref: "/" },
  { name: "المنتجات", ref: "/products" },
  { name: "العروض", ref: "/offers" },
  { name: "حولنا", ref: "/about" },
  { name: "اتصل بنا", ref: "/contact" },
];

const NavBar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 font-medium bg-white shadow-md flex items-center gap-16">
      {/* Mobile */}
      <div className="flex w-full md:hidden items-center gap-16">
        <Link
          href="/"
          className="flex flex-1 flex-nowrap items-center gap-2 text-2xl font-bold text-gray-800 pl-4 md:pl-0"
        >
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
          <div className="text-2xl tracking-wide text-primary-600">زينها</div>
        </Link>
        <NavIcons />
        <Menu />
      </div>
      {/* Desktop */}
      <div className="w-full hidden md:flex items-center gap-8 h-full justify-between">
        {/* left side */}
        <div className="w-1/2 flex items-center gap-14">
          <Link
            href="/"
            className="flex flex-nowrap items-center gap-2 text-2xl font-bold text-gray-800"
          >
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <div className="text-2xl tracking-wide text-primary-600">زينها</div>
          </Link>
          <div className="flex items-center gap-4 ">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.ref}
                className="text-nowrap text-gray-800 hover:text-primary-500 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="w-1/2 text-nowrap flex items-center gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
