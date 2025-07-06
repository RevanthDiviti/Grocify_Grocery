import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import bgAllProducts from '../../assets/all-banner.jpg';

const AllProducts = () => {
  return (
    <div>
      <CategoryPage title="All Products" bgImage={bgAllProducts} categories={["All"]} />
    </div>
  );
};

export default AllProducts;
