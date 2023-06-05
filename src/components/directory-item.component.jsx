import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ brand }) => {
  const { brandName, imageUrl } = brand;
  const navigate = useNavigate();

  const onClickHandler = () => navigate(`shop/${brandName}`);

  return (
    <div
      className="shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
      onClick={onClickHandler}
    >
      <img src={imageUrl} alt={brandName} className="w-full" />
      <p className="text-3xl text-center text-slate-600 py-8">{brandName}</p>
    </div>
  );
};

export default DirectoryItem;
