import { useParams } from "react-router-dom";
import CategoryItem from "../components/category-item.component";
import { PHONES_DATA } from "../phone-data";

const Category = () => {
  const { brandName } = useParams();
  return (
    <main className="container mx-auto px-4 py-14">
      <h2 className="text-xl mb-12 uppercase text-center">{brandName}</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
        {PHONES_DATA[brandName].map((phoneDetail, idx) => (
          <CategoryItem key={idx} phoneDetail={phoneDetail} />
        ))}
      </div>
    </main>
  );
};

export default Category;
