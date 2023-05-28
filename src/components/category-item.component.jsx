const CategoryItem = ({ phoneName }) => {
  return (
    <div className="py-16 bg-blue-200 shadow-lg hover:shadow-md transition duration-300">
      <p className="text-2xl text-center">{phoneName}</p>
    </div>
  );
};

export default CategoryItem;
