import Add from "@/components/product/Add";
import CustomizeProduct from "@/components/product/CustomizeProduct";
import ProductImages from "@/components/product/ProductImages";

const SinglePage = () => {
  return (
    <div className="mt-5 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="md:text-4xl text-2xl font-medium">إسم المنتج</h1>
        <p className="text-gray-500 md:text-base text-sm">
          لوحة فنية جدارية عصرية من القماش لغرفة المعيشة، مقاومة للماء، لا تبهت،
          متينة ومقاومة للغبار، متوافقة تمامًا مع المعايير. لوحة فنية جدارية
          عصرية من القماش لغرفة المعيشة، مقاومة للماء، لا تبهت، متينة ومقاومة
          للغبار، متوافقة تمامًا مع المعايير. لوحة فنية جدارية عصرية من القماش
          لغرفة المعيشة، مقاومة للماء، لا تبهت، متينة ومقاومة للغبار، متوافقة
          تمامًا مع المعايير.
        </p>
        <div className="h-[1px] bg-gray-300" />
        <div className="flex items-center gap-4">
          <h3 className="md:text-xl text-sm text-gray-500 line-through">
            130 جنيه
          </h3>
          <h3 className="font-medium md:text-2xl text-base">130 جنيه</h3>
        </div>
        <div className="h-[1px] bg-gray-300" />
        <CustomizeProduct />
        <Add />
        <div className="h-[1px] bg-gray-300" />
        <div className="text-sm">
          <h4 className="font-semibold mb-4">عن المنتج</h4>
          <p className="text-xs md:text-sm">
            لوحة فنية جدارية عصرية من القماش لغرفة المعيشة، مقاومة للماء، لا
            تبهت، متينة ومقاومة للغبار، متوافقة تمامًا مع المعايير. لوحة فنية
            جدارية عصرية من القماش لغرفة المعيشة، مقاومة للماء، لا تبهت، متينة
            ومقاومة للغبار، متوافقة تمامًا مع المعايير. لوحة فنية جدارية عصرية
            من القماش لغرفة المعيشة، مقاومة للماء، لا تبهت، متينة ومقاومة
            للغبار، متوافقة تمامًا مع المعايير.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-4">سياسة الاسترجاع</h4>
          <p className="text-xs md:text-sm">
            لوحة فنية جدارية عصرية من القماش لغرفة المعيشة، مقاومة للماء، لا
            تبهت، متينة ومقاومة للغبار، متوافقة تمامًا مع المعايير. لوحة فنية
            جدارية عصرية من القماش لغرفة المعيشة، مقاومة للماء، لا تبهت، متينة
            ومقاومة للغبار، متوافقة تمامًا مع المعايير. لوحة فنية جدارية عصرية
            من القماش لغرفة المعيشة، مقاومة للماء، لا تبهت، متينة ومقاومة
            للغبار، متوافقة تمامًا مع المعايير.
          </p>
        </div>
        {/* <div className="text-sm"> */}
        {/*   <h4 className="font-medium mb-4">Title</h4> */}
        {/*   <p> */}
        {/*     لوحة فنية جدارية عصرية من القماش لغرفة المعيشة، مقاومة للماء، لا */}
        {/*     تبهت، متينة ومقاومة للغبار، متوافقة تمامًا مع المعايير. لوحة فنية */}
        {/*     جدارية عصرية من القماش لغرفة المعيشة، مقاومة للماء، لا تبهت، متينة */}
        {/*     ومقاومة للغبار، متوافقة تمامًا مع المعايير. لوحة فنية جدارية عصرية */}
        {/*     من القماش لغرفة المعيشة، مقاومة للماء، لا تبهت، متينة ومقاومة */}
        {/*     للغبار، متوافقة تمامًا مع المعايير. */}
        {/*   </p> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SinglePage;
