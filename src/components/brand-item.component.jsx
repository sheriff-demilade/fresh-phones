import { useNavigate } from "react-router-dom";
import BrandDetails from "./brand-details.component";
import BrandImage from "./brand-image.component";

const BrandItem = ({ idx, brand: { brandName, brandImage } }) => {
  const navigate = useNavigate();

  const onClickHandler = () => navigate(`shop/${brandName}`);

  return (
    <div
      className={`flex flex-col md:flex-row gap-8 md:gap-12 md:justify-center md:items-center md:${
        idx % 2 ? "flex-row-reverse" : ""
      }`}
    >
      <BrandImage brandImage={brandImage} onClickHandler={onClickHandler} />
      <BrandDetails brandName={brandName} />
    </div>
  );
};

export default BrandItem;
