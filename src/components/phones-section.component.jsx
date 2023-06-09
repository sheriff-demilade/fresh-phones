import { Link } from "react-router-dom";
import { PHONES_DATA } from "../phone-data";
import CategoryItem from "./category-item.component";
import { BsArrowRight } from "react-icons/bs";

const PhonesSection = () => {
  return (
    <section id="phones" className="py-14 md:py-16 lg:py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-8 mb-12 lg:mb-20 text-center">
        <span className="text-sm lg:text-base font-medium tracking-widest text-blue-400 block mb-2 lg:mb-3">
          PHONES
        </span>
        <h2 className="text-lg lg:text-xl">
          Est provident culpa nobis in nemo mollitia.
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-8 sm:gap-y-16 gap-12 ">
        {Object.values(PHONES_DATA).map((brands) =>
          brands
            .filter((phone, idx) => idx % 2)
            .map((phone, idx) => <CategoryItem key={idx} phoneDetail={phone} />)
        )}
      </div>

      <div className="mt-10 lg:mt-12 flex justify-center">
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
