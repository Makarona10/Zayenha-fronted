import ProductCard, { Product } from "./ProductCard";

type Props = { products: Product[]; api: string; load_more: boolean };

const ProductList = async ({ products, api = "" }: Props) => {
  return (
    <div
      className={`w-full grid 2xl:grid-cols-4 2xl:gap-x-8 xl:grid-cols-4 xl:gap-x-7 lg:grid-cols-3 lg:gap-x-5 md:grid-cols-2
      md:gap-x-4 grid-cols-2 gap-x-5 md:gap-y-16 gap-y-8 items-center`}
    >
      {products.map((prod: Product) => {
        return (
          <ProductCard
            key={prod.id}
            id={prod.id}
            price={prod.price}
            offerPrice={prod.offerPrice}
            mainImage={prod.mainImage}
            images={prod.images}
            translations={prod.translations}
            isFavorite={prod.isFavorite}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
