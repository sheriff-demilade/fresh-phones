import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "./categories-preview.component";
import Category from "./category.component";

const Shop = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoriesPreview />} />
      <Route path=":brandName" element={<Category />} />
    </Routes>
  );
};

export default Shop;
