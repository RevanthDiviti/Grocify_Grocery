import React from "react";
import Banner from "../Banner/Banner";
import CategoryPage from "../CategoryPage/CategoryPage";
import bgSeaFood from "../../assets/seafood-banner.jpg";

const SeaFood = () => {
  return (
    <div>
      <CategoryPage
        title="Meat & SeaFood"
        bgImage={bgSeaFood}
        categories={["SeaFood", "Meat"]}
      />
    </div>
  );
};

export default SeaFood;
