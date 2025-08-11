import Image from "next/image";
import Link from "next/link";

interface CategorieItemProps {
  id?: string;
  image?: string;
  name?: string;
  description?: string;
}

const CategorieItem = (props: CategorieItemProps) => {
  return (
    <Link href="">
      <div
        className={`flex flex-col relative items-center justify-center
          w-full aspect-square bg-white`}
      >
        <div className="relative w-full aspect-[11/12] overflow-hidden">
          <Image
            src={
              props.image ||
              "https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg"
            }
            alt={props.name || "فئة"}
            fill
            className="hover:scale-105 transition-all duration-500 object-cover mb-2"
          />
        </div>
      </div>
      <span className="text-lg font-semibold">{props.name || ""}</span>
    </Link>
  );
};

export default CategorieItem;
