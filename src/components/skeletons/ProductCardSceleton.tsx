interface Props {
  count: number;
}

const ProductCardSkeleton = ({ count }: Props) => {
  return (
    <div
      className={`w-full grid 2xl:grid-cols-4 2xl:gap-x-8 xl:grid-cols-4 xl:gap-x-7 lg:grid-cols-3 lg:gap-x-5 md:grid-cols-2
      md:gap-x-4 grid-cols-2 gap-x-5 md:gap-y-16 gap-y-8 items-center`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-full bg-white rounded-lg shadow-sm animate-pulse"
        >
          <div className="w-full aspect-[4/5] bg-gray-200 rounded-t-lg" />

          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4" />

            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />

            <div className="h-4 bg-gray-200 rounded w-1/3 mt-2" />

            <div className="h-9 bg-gray-200 rounded mt-3" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardSkeleton;
