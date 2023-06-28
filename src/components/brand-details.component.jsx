const BrandDetails = ({ brandName }) => {
  return (
    <div className="">
      <h3 className="text-gray-200 sm:text-8xl text-6xl font-bold sm:mb-10 mb-8">
        {brandName}
      </h3>
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
        perferendis aspernatur tempore distinctio, eligendi eveniet, beatae
        temporibus mollitia sed repudiandae molestias! Aliquam pariatur neque
        vero aliquid ipsa aperiam veniam molestias?
      </p>
    </div>
  );
};

export default BrandDetails;
