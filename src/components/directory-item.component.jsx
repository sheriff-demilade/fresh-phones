const DirectoryItem = ({ children }) => {
  return (
    <div className="p-20 bg-slate-300 shadow-lg hover:shadow transition duration-300">
      <p className="text-2xl">{children}</p>
    </div>
  );
};

export default DirectoryItem;
