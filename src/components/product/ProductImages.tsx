"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1679014/pexels-photo-1679014.jpeg",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1563650/pexels-photo-1563650.jpeg",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1679014/pexels-photo-1679014.jpeg",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          fill
          alt=""
          className="object-cover rounded-md"
          sizes="50vw"
        />
      </div>
      <div className="flex justify-between gap-2">
        {images.map((i, idx) => (
          <div
            key={i.id}
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            onClick={() => setIndex(idx)}
          >
            <Image
              src={i.url}
              fill
              alt=""
              className="object-cover rounded-md"
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
