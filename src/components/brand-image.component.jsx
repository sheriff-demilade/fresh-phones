const BrandImage = ({ brandImage, onClickHandler }) => {
  return (
    <div
      className="relative max-w-sm sm:max-w-md md:w-7/12 self-center hover:-translate-y-2 duration-500 cursor-pointer"
      onClick={onClickHandler}
    >
      <img src={brandImage} alt="Mobile phone" className=" w-2/3 mx-auto" />
      <div className=" h-full w-full bg-blue-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full -z-20"></div>
      <div className="h-4/5 w-4/5 bg-blue-100 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full -z-20"></div>
    </div>
  );
};

export default BrandImage;
