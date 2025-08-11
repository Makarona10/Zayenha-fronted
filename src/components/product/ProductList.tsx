import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div
      className={`w-full grid 2xl:grid-cols-5 2xl:gap-x-8 xl:grid-cols-4 xl:gap-x-7 lg:grid-cols-3 lg:gap-x-5 md:grid-cols-2
      md:gap-x-4 grid-cols-2 gap-x-5 md:gap-y-16 gap-y-8 items-center`}
    >
      <ProductCard
        image={`https://images.unsplash.com/photo-1559662780-ee70ddd742ac?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        name="قصرية زرع"
        description="متاح"
        price={64}
        originalPrice={80}
      />
      <ProductCard
        image="https://images.pexels.com/photos/26756094/pexels-photo-26756094.jpeg"
        name="قصرية زرع"
        description="متاح"
        price={64}
        originalPrice={80}
      />
      <ProductCard
        image={`https://images.unsplash.com/photo-1509885969792-d005c2c10110?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        name="قصرية زرع"
        description="متاح"
        price={64}
        originalPrice={80}
      />
      <ProductCard
        image="https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg"
        name="قصرية زرع"
        description="متاح"
        price={64}
        originalPrice={80}
        isFavorite={true}
      />
      <ProductCard
        image="https://images.pexels.com/photos/2249959/pexels-photo-2249959.jpeg"
        name="قصرية زرع"
        description="حاجة بسيطة كدة للمكتب بتاعك"
        price={64}
        originalPrice={80}
      />
      <ProductCard
        image="https://images.pexels.com/photos/26756094/pexels-photo-26756094.jpeg"
        name="قصرية زرع"
        description="متاح"
        price={64}
        originalPrice={80}
      />
      <ProductCard
        image="https://images.pexels.com/photos/7193632/pexels-photo-7193632.jpeg"
        name="قصرية زرع"
        description="متاح"
        price={64}
        originalPrice={80}
      />
      <ProductCard
        image="https://images.pexels.com/photos/26756094/pexels-photo-26756094.jpeg"
        name="قصرية زرع"
        description="متاح"
        price={64}
        originalPrice={80}
        isFavorite={true}
      />
      <ProductCard
        image="https://images.pexels.com/photos/26756094/pexels-photo-26756094.jpeg"
        name="قصرية زرع"
        description="متاح"
        price={64}
        originalPrice={80}
      />
      <ProductCard
        image="https://images.pexels.com/photos/26756094/pexels-photo-26756094.jpeg"
        name="قصرية زرع"
        description="متاح"
        price={64}
        originalPrice={80}
      />
    </div>
  );
};
export default ProductList;
