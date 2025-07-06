import React from "react";
import products from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import Banner from "../Banner/Banner";

const CategoryPage = () => {
  const renderProduct = products.map((product) => {
    return (
      <Cards name={product.name} image={product.image} price={product.price} />
    );
  });

  return (
    <div>
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10">
        {renderProduct}
      </div>
    </div>
  );
};

export default CategoryPage;
