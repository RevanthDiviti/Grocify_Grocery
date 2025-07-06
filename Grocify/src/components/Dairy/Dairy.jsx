import React from "react";
import bgDairy from '../../assets/dairy-banner.jpg'
import CategoryPage from "../CategoryPage/CategoryPage";

const Dairy = () => {
  return (
    <div>
      <CategoryPage title="Dairy & Eggs" bgImage={bgDairy} categories={["Dairy"]}/>
    </div>
  );
};

export default Dairy;
