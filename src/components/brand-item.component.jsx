import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import BrandDetails from "./brand-details.component";
import BrandImage from "./brand-image.component";

const BrandItem = ({ idx, brand: { brandName, brandImage } }) => {
  const navigate = useNavigate();

  const onClickHandler = () => navigate(`shop/${brandName}`);

  return (
    <Fragment>
      {idx % 2 ? (
        <Fragment>
          <BrandDetails brandName={brandName} />
          <BrandImage brandImage={brandImage} onClickHandler={onClickHandler} />
        </Fragment>
      ) : (
        <Fragment>
          <BrandImage brandImage={brandImage} onClickHandler={onClickHandler} />{" "}
          <BrandDetails brandName={brandName} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default BrandItem;
