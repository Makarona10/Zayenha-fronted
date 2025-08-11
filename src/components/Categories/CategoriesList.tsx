import Image from "next/image";
import Link from "next/link";
import CategorieItem from "./CategorieItem";

const CategoriesList = () => {
  return (
    <div className="relative mx-auto">
      <div
        className="w-full grid 2xl:grid-cols-4 2xl:gap-x-8 xl:grid-cols-4 xl:gap-x-7 lg:grid-cols-3 lg:gap-x-5 md:grid-cols-2
      md:gap-x-4 grid-cols-2 gap-x-5 md:gap-y-16 gap-y-8 items-center"
      >
        <CategorieItem
          id="1"
          image="https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg"
          name="فئة 1"
          description="وصف الفئة 1"
        />
        <CategorieItem
          id="2"
          image="https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg"
          name="فئة 2"
          description="وصف الفئة 2"
        />
        <CategorieItem
          id="3"
          image="https://images.pexels.com/photos/3794377/pexels-photo-3794377.jpeg"
          name="فئة 3"
          description="وصف الفئة 3"
        />
        <CategorieItem
          id="4"
          image="https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg"
          name="فئة 4"
          description="وصف الفئة 4"
        />
        <CategorieItem
          id="5"
          image="https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg"
          name="فئة 5"
          description="وصف الفئة 5"
        />
        <CategorieItem
          id="6"
          image="https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg"
          name="فئة 6"
          description="وصف الفئة 6"
        />
        <CategorieItem
          id="7"
          image="https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg"
          name="فئة 7"
          description="وصف الفئة 7"
        />
        <CategorieItem
          id="8"
          image="https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg"
          name="فئة 8"
          description="وصف الفئة 8"
        />
      </div>
    </div>
  );
};

export default CategoriesList;
