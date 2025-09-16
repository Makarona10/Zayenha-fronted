import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  offer_price: number;
  price: number;
  main_image: string;
  second_image: string;
  short_description?: string;
  description?: string;
  isFavorite: boolean;
}

type Props = { products: Product[]; api: string; load_more: boolean };

const ProductList = async ({ products, api = "" }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = res.json();

  return (
    <div
      className={`w-full grid 2xl:grid-cols-4 2xl:gap-x-8 xl:grid-cols-4 xl:gap-x-7 lg:grid-cols-3 lg:gap-x-5 md:grid-cols-2
      md:gap-x-4 grid-cols-2 gap-x-5 md:gap-y-16 gap-y-8 items-center`}
    >
      {products.map((prod: Product) => {
        return (
          <ProductCard
            id={prod.id}
            name={prod.name}
            main_image={prod.main_image}
            description={prod.description}
            second_image={prod.second_image}
            key={prod.id}
            price={prod.price}
            offer_price={prod.offer_price}
            isFavorite={prod.isFavorite}
          />
        );
      })}
    </div>
  );
};
export default ProductList;
