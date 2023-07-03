import { Link } from "react-router-dom";
import CategoryItem from "./category-item.component";
import { PHONES_DATA } from "../phone-data";
import { BsArrowRight } from "react-icons/bs";

const CategoryPreview = ({ title }) => {
  return (
    <div className="mb-12">
      <h3 className="inline-block text-xl font-medium mb-10 uppercase text-blue-400">
        {title}
      </h3>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-8 sm:gap-y-16 gap-12
      "
      >
        {PHONES_DATA[title].map((phoneDetail, idx) => (
          <CategoryItem key={idx} phoneDetail={phoneDetail} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to={title}
          className="text-blue-400 hover:underline underline-offset-4 flex gap-2 items-center w-fit "
        >
          <span>more {title}s</span>
          <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default CategoryPreview;
