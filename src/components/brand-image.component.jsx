const BrandImage = ({ brandImage, onClickHandler }) => {
  return (
    <div
      className="relative hover:-translate-y-2 translate-y-5 transition duration-500 cursor-pointer"
      onClick={onClickHandler}
    >
      <img
        src={brandImage}
        alt="Mobile phone"
        className="w-1/2 rounded-3xl mx-auto"
      />
      <div className="h-4/5 w-4/5 bg-blue-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full -z-20"></div>
      <div className="h-2/3 w-2/3 bg-blue-100 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full -z-20"></div>
    </div>
  );
};

export default BrandImage;
