import CategoryPreview from "../components/category-preview.component";
import { PHONES_DATA } from "../phone-data";

const CategoriesPreview = () => {
  return (
    <main className="container mx-auto px-32 mt-20">
      {Object.keys(PHONES_DATA).map((brandName) => (
        <CategoryPreview key={brandName} title={brandName} />
      ))}
    </main>
  );
};

export default CategoriesPreview;
