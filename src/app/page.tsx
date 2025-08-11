import CategoriesList from "@/components/Categories/CategoriesList";
import Slider from "@/components/Slider";
import ProductList from "@/components/product/ProductList";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <Slider />
      <div className="flex flex-col gap-y-10 lg:mt-24 mt-12 2xl:px-64 xl:px-52 lg:px-32 px-10">
        <h1 className="text-3xl font-bold mb-8 ">المنتجات المميزة</h1>
        <ProductList />
      </div>
      <div className="lg:mt-24 mt-12 2xl:px-64 xl:px-52 lg:px-32 px-10">
        <h1 className="text-3xl font-bold mb-10">فئات المنتجات</h1>
        <CategoriesList />
      </div>
      <div className="flex flex-col gap-y-10 lg:mt-24 mt-12 2xl:px-64 xl:px-52 lg:px-32 px-10">
        <h1 className="text-3xl font-bold mb-8 ">أحدث المنتجات</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
