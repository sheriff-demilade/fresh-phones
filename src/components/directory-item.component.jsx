const DirectoryItem = ({ title }) => {
  return (
    <div className="p-20 bg-slate-300 shadow-lg hover:shadow-md transition duration-300">
      <p className="text-2xl text-center">{title}</p>
    </div>
  );
};

export default DirectoryItem;
