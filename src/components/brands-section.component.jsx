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
    <section
      id="brands"
      className="pb-14 md:pb-16 lg:pb-20 pt-10 md:pt-14 lg:pt-16"
    >
      <div className="container mx-auto px-4 sm:px-8 mb-12 md:mb-14 lg:mb-20 text-center">
        <span className="text-sm lg:text-base font-medium tracking-widest text-blue-400 block mb-2">
          BRANDS
        </span>
        <h2 className="text-lg lg:text-xl">
          Veritatis odit assumenda porro expedita illo fugiat.
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-8 flex flex-col gap-16 lg:gap-20 items-center">
        {brands.map((brand, idx) => (
          <BrandItem key={idx} idx={idx} brand={brand} />
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
