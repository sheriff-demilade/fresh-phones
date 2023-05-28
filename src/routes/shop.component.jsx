import Category from "../components/category.component";
import { PHONES_DATA } from "../phone-data";

const Shop = () => {
  return (
    <main className="container mx-auto px-32 mt-20">
      {Object.keys(PHONES_DATA).map((brandName) => (
        <Category key={brandName} title={brandName} />
      ))}
    </main>
  );
};

export default Shop;
