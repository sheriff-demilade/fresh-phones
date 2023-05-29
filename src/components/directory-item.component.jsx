import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ title }) => {
  const navigate = useNavigate();

  const onClickHandler = () => navigate(`shop/${title}`);

  return (
    <div
      className="p-20 bg-slate-200 hover:bg-slate-300 shadow-lg hover:shadow-md transition duration-400"
      onClick={onClickHandler}
    >
      <p className="text-2xl text-center">{title}</p>
    </div>
  );
};

export default DirectoryItem;
