import { Link } from "react-router-dom";
import { PHONES_DATA } from "../phone-data";
import CategoryItem from "./category-item.component";
import { BsArrowRight } from "react-icons/bs";

const PhonesSection = () => {
  return (
    <section className="py-10 bg-blue-50">
      <div className="container mx-auto px-4 mb-12 text-center">
        <span className="text-sm font-medium tracking-widest text-blue-400 block mb-2">
          PHONES
        </span>
        <h2 className="sm:text-3xl text-lg">
          Est provident culpa nobis in nemo mollitia.
        </h2>
      </div>

      <div className="container mx-auto px-4 grid sm:grid-cols-4 grid-cols-1 gap-x-8  gap-y-11">
        {Object.values(PHONES_DATA).map((brands) =>
          brands
            .filter((phone, idx) => idx % 2)
            .map((phone, idx) => <CategoryItem key={idx} phoneDetail={phone} />)
        )}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="shop"
          className="text-blue-400 hover:underline underline-offset-4 flex gap-2 items-center w-fit "
        >
          <span>more phones</span>
          <BsArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default PhonesSection;
