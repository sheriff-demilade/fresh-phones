import { Link } from "react-router-dom";
import CategoryItem from "./category-item.component";
import { PHONES_DATA } from "../phone-data";

const CategoryPreview = ({ title }) => {
  return (
    <div className="mb-12 text-gray-600">
      <Link
        to={title}
        className="inline-block text-xl mb-6 uppercase hover:text-blue-400 transition duration-300 "
      >
        {title}
      </Link>

      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-16">
        {PHONES_DATA[title].map((phoneDetail, idx) => (
          <CategoryItem key={idx} phoneDetail={phoneDetail} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
