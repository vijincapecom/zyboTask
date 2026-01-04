"use client";

import ProductCard from "./utils/product";

const ProductPage = ({ products }: ProductResponse) => {

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">Men’s Jordan Shoes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {Object?.values(products)?.map((product) => (
         <ProductCard key={product.id } product={product as never} />
        ))}
      </div> 
    </div>
  );
};

export default ProductPage;