import BrandItem from "./brand-item.component";
import iphoneImg from "../assets/iphone-img.png";
import samsungImg from "../assets/samsung-img.png";
import infinixImg from "../assets/infinix-img.png";
import tecnoImg from "../assets/tecno-img.png";

const brands = [
  { brandName: "Iphone", brandImage: iphoneImg },
  { brandName: "Infinix", brandImage: infinixImg },
  { brandName: "Samsung", brandImage: samsungImg },
  { brandName: "Tecno", brandImage: tecnoImg },
];

const BrandsSection = () => {
  return (
    <section className="pt-20 pb-20">
      <div className="container mx-auto px-8 mb-20 text-center">
        <span className="font-medium tracking-widest text-blue-400 block mb-5">
          BRANDS
        </span>
        <h2 className="text-3xl">
          Veritatis odit assumenda porro expedita illo fugiat.
        </h2>
      </div>

      <div className="container mx-auto px-8 grid grid-cols-2 gap-24 items-center">
        {brands.map((brand, idx) => (
          <BrandItem key={idx} idx={idx} brand={brand} />
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
