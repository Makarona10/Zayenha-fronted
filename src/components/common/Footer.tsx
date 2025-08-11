import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-4 py-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full lg:w-1/4 md:w-1/2 flex flex-col gap-8">
          <Link href={"/"} className="flex flex-nowrap items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <div className="text-2xl font-bold tracking-wide text-primary-600">
              زينها
            </div>
          </Link>
          <p>23 شارع ترعة المحمودية خلف نادي الحدايق - حدايق حلوان </p>
          <span className="font-semibold">
            ahmedabdelnabykhalil10@gmail.com
          </span>
          <span dir="ltr" className="font-semibold">
            +20 115 2877 919
          </span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">الشركة</h1>
            <div className="flex flex-col gap-4">
              <Link href="">حولنا</Link>
              <Link href="">المبرمجين</Link>
              <Link href="">أتصل بنا</Link>
              <Link href=""></Link>
              <Link href=""></Link>
              <Link href=""></Link>
              <Link href=""></Link>
              <Link href=""></Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">التسوق</h1>
            <div className="flex flex-col gap-4">
              <Link href="">المنتجات الجديدة</Link>
              <Link href="">التريندات</Link>
              <Link href="">العروض</Link>
              <Link href="/">الصفحة الرئيسية</Link>
              <Link href=""></Link>
              <Link href=""></Link>
              <Link href=""></Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">المساعدة</h1>
            <div className="flex flex-col gap-4">
              <Link href="">خدمة العملاء</Link>
              <Link href="">حسابنا</Link>
              <Link href="">السياسة والخصوصية</Link>
              <Link href=""></Link>
              <Link href=""></Link>
              <Link href=""></Link>
              <Link href=""></Link>
              <Link href=""></Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">إشترك</h1>
          <p>تابع اخر الأخبار والمنتجات والعروض, والمزيد من زينها</p>
          <div className="flex">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="p-2 w-3/4 outline-none"
            />
            <button className="w-1/4 bg-primary-500 text-white">
              إنضم إلينا
            </button>
          </div>
          <span className="font-semibold">طرق دفع آمنة</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div></div>
    </div>
  );
};

export default Footer;
