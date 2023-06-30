import { useNavigate } from "react-router-dom";
import BrandDetails from "./brand-details.component";
import BrandImage from "./brand-image.component";

const BrandItem = ({ idx, brand: { brandName, brandImage } }) => {
  const navigate = useNavigate();

  const onClickHandler = () => navigate(`shop/${brandName}`);

  return (
    <div className="flex flex-col gap-8">
      <BrandImage brandImage={brandImage} onClickHandler={onClickHandler} />
      <BrandDetails brandName={brandName} />
    </div>
  );
};

export default BrandItem;
