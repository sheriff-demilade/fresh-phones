import CategoryItem from "./category-item.component";
import { PHONES_DATA } from "../phone-data";

const Category = ({ title }) => {
  return (
    <div className="mb-12">
      <h2 className="text-xl mb-6 uppercase">{title}</h2>

      <div className="grid grid-cols-4 gap-8">
        {PHONES_DATA[title].map((phoneName, idx) => (
          <CategoryItem key={idx} phoneName={phoneName} />
        ))}
      </div>
    </div>
  );
};

export default Category;
