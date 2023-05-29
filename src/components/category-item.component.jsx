const CategoryItem = ({ phoneDetail: { phoneName, price } }) => {
  return (
    <div className="py-16 bg-blue-200 hover:bg-blue-300 shadow-lg hover:shadow-md transition duration-300">
      <p className="text-2xl text-center mb-4">{phoneName}</p>
      <p className="text-xl text-center">${price}</p>
    </div>
  );
};

export default CategoryItem;
