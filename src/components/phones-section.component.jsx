import { Link } from "react-router-dom";
import { PHONES_DATA } from "../phone-data";
import CategoryItem from "./category-item.component";

const PhonesSection = () => {
  return (
    <section className="pt-20 pb-20 bg-blue-50">
      <div className="container mx-auto px-8 mb-20 text-center">
        <span className="font-medium tracking-widest text-blue-400 block mb-5">
          PHONES
        </span>
        <h2 className="sm:text-3xl text-2xl">
          Est provident culpa nobis in nemo mollitia.
        </h2>
      </div>

      <div className="container mx-auto px-8 grid sm:grid-cols-4 grid-cols-1 gap-x-8  gap-y-20">
        {Object.values(PHONES_DATA).map((brands) =>
          brands
            .filter((phone, idx) => idx % 2)
            .map((phone, idx) => <CategoryItem key={idx} phoneDetail={phone} />)
        )}
      </div>

      <div className="mt-16 text-center">
        <Link
          to="shop"
          className="text-blue-400 hover:underline underline-offset-4"
        >
          more phones
        </Link>
      </div>
    </section>
  );
};

export default PhonesSection;
