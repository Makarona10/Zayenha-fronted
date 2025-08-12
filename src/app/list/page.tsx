import FilterList from "@/components/product/Filter";
import ProductList from "@/components/product/ProductList";
import Image from "next/image";
import { products } from "@/app/data";
import { Suspense } from "react";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSceleton";
import dynamic from "next/dynamic";
const PaginationBar = dynamic(() => import("@/components/Pagination"), {
  ssr: false,
});

const options = [
  { id: 1, name: "فازات" },
  { id: 2, name: "ساعات حائط" },
  { id: 3, name: "ساعات مكتبية" },
  { id: 4, name: "لوح زيت" },
  { id: 5, name: "أنتيكات" },
  { id: 6, name: "إكسسوارات" },
];
const label = "النوع";
const q_param = "type";

const options2 = [
  { id: 1, name: "من 0 إلى 200 جنيه" },
  { id: 2, name: "من 200 إلى 450 جنيه" },
  { id: 3, name: "من 450 إلى 1000 جنيه" },
  { id: 4, name: "من 1000 جنيه إلى 2500 جنيه" },
  { id: 5, name: "أكثر من 2500 جنيه" },
];
const label2 = "السعر";
const q_param2 = "p";

const options3 = [
  { id: 1, name: "البلاسيتك" },
  { id: 2, name: "الذهب" },
  { id: 3, name: "الفضة" },
  { id: 4, name: "السيراميك" },
  { id: 5, name: "الزجاج" },
  { id: 6, name: "أخرى" },
];
const label3 = "مادة التصنيع";
const q_param3 = "material";

const options4 = [
  { id: 1, name: "بالسعر (تصاعديا)" },
  { id: 2, name: "بالسعر (تنازليا)" },
  { id: 3, name: "الأجدد أولا" },
  { id: 4, name: "الأقدم أولا" },
];
const label4 = "الترتيب";
const q_param4 = "order";

const ListPage = () => {
  return (
    <div className="relative ">
      {/* Campaign */}
      <div className="bg-primary-100 flex md:flex-row flex-col justify-between md:h-[320px] h-[640px]">
        <div className="md:w-5/12 w-full md:h-full h-1/2 flex flex-col items-center justify-center gap-8 p-8 bg-gradient-to-r from-primary-100 to-primary-100/50">
          <h1 className="text-3xl text-center font-bold leading-[48px] text-gray-700">
            أحصل على خصم يصل إلى 50% على الزينة المكتبية
          </h1>
          <button className="rounded-full text-base font-semibold p-3 bg-primary-500 text-white">
            تسوق الآن
          </button>
        </div>
        <div className="relative md:w-7/12 w-full md:h-full h-1/2">
          <Image
            alt=""
            src={`https://images.unsplash.com/photo-1572048572872-2394404cf1f3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            fill
            className="relative object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-16 px-4 md:px-20 xl:px-32 2xl:px-64">
        {/* Filter section */}
        <div className="flex flex-wrap items-end md:gap-5 gap-3 mt-12">
          <Suspense fallback={<>Filters loading ...</>}>
            <FilterList
              placeholder="إختر النوع"
              label={label}
              options={options}
              q_param={q_param}
            />
            <FilterList
              placeholder="حدد الميزانية"
              label={label2}
              options={options2}
              q_param={q_param2}
            />
            <FilterList
              placeholder="إختر الخامة"
              label={label3}
              options={options3}
              q_param={q_param3}
            />
            <FilterList
              placeholder="الترتيب"
              label={label4}
              options={options4}
              q_param={q_param4}
            />
            <FilterList
              placeholder="إختر الخامة"
              label={label3}
              options={options3}
              q_param={q_param3}
            />
          </Suspense>
          <button className="bg-primary-500 px-4 py-2 text-white h-fit rounded-full">
            بحث
          </button>
        </div>
        <div className="w-full flex justify-center">
          <Suspense fallback={<ProductCardSkeleton count={10} />}>
            <ProductList load_more={false} api="" products={products} />
          </Suspense>
        </div>
      </div>
      <div className="mt-16 w-full flex justify-center">
        <Suspense fallback={<>loading..</>}>
          <PaginationBar total={10} />
        </Suspense>
      </div>
    </div>
  );
};

export default ListPage;
