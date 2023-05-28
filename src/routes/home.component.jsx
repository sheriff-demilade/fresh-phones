import DirectoryItem from "../components/directory-item.component";

const PHONES_BRAND = ["Iphone", "Samsung", "Infinix", "Tecno"];

const Home = () => {
  return (
    <div className="container mx-auto mt-20 justify-center flex gap-8">
      {PHONES_BRAND.map((phoneBrand, idx) => (
        <DirectoryItem key={idx}>{phoneBrand}</DirectoryItem>
      ))}
    </div>
  );
};

export default Home;
