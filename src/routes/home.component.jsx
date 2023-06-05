import DirectoryItem from "../components/directory-item.component";
import { PHONES_DATA } from "../phone-data";

const brands = Object.keys(PHONES_DATA).map((brandName) => ({
  brandName: brandName,
  imageUrl: PHONES_DATA[brandName][2].imageUrl,
}));

const Home = () => {
  return (
    <main className="container mx-auto px-8 mt-20 grid grid-cols-2 gap-20">
      {brands.map((brand, idx) => (
        <DirectoryItem key={idx} brand={brand} />
      ))}
    </main>
  );
};

export default Home;
