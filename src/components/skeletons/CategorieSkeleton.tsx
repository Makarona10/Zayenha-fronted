interface CategorieItemSkeletonProps {
  count?: number;
}

const CategorieItemSkeleton = ({ count = 1 }: CategorieItemSkeletonProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col items-center animate-pulse">
          <div className="w-full aspect-square bg-white">
            <div className="relative w-full aspect-[11/12] bg-gray-200 rounded" />
          </div>

          <div className="h-4 bg-gray-200 rounded w-3/4 mt-2" />
        </div>
      ))}
    </div>
  );
};

export default CategorieItemSkeleton;
