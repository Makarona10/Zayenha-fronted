const btnsStyle = [
  "border-primary-600 bg-primary-600 ",
  "border-blue-500 bg-blue-500",
  "border-red-500 bg-red-500",
];

const CustomizeProduct = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium text-base md:text-lg">إختر اللون</h4>
      <ul className="flex items-center gap-3">
        <li className="h-8 w-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="h-8 w-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-white">
          {/* <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
        </li>
        <li className="h-8 w-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500">
          <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4 className="font-medium text-base md:text-lg">إختر الحجم</h4>
      <ul className="flex items-center gap-3 text-xs md:text-base">
        <li
          className={`text-white border-2 rounded-lg py-1 px-4 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${btnsStyle[0]}`}
        >
          صغير
        </li>
        <li>
          <button
            className={`text-white border-2  rounded-lg py-1 px-4 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${btnsStyle[1]}`}
          >
            متوسط
          </button>
        </li>
        <li>
          <button
            disabled
            className={`text-white border-2  rounded-lg py-1 px-4 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${btnsStyle[2]}`}
          >
            كبير
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CustomizeProduct;
