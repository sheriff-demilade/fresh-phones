import { Link } from "react-router-dom";
import CategoryItem from "./category-item.component";
import { PHONES_DATA } from "../phone-data";

const CategoryPreview = ({ title }) => {
  return (
    <div className="mb-12">
      <Link to={title} className="inline-block text-xl mb-6 uppercase ">
        {title}
      </Link>

      <div className="grid grid-cols-4 gap-8">
        {PHONES_DATA[title].map((phoneDetail, idx) => (
          <CategoryItem key={idx} phoneDetail={phoneDetail} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
