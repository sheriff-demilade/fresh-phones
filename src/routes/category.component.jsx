import { useParams } from "react-router-dom";
import CategoryItem from "../components/category-item.component";
import { PHONES_DATA } from "../phone-data";

const Category = () => {
  const { brandName } = useParams();
  return (
    <main className="container mx-auto px-4 sm:px-8 pt-14 pb-20">
      <h2 className="text-xl mb-14 uppercase text-center text-blue-400">
        {brandName}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-8 sm:gap-y-16 gap-12">
        {PHONES_DATA[brandName].map((phoneDetail, idx) => (
          <CategoryItem key={idx} phoneDetail={phoneDetail} />
        ))}
      </div>
    </main>
  );
};

export default Category;
