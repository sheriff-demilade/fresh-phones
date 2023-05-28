import DirectoryItem from "../components/directory-item.component";
import { PHONES_DATA } from "../phone-data";

const Home = () => {
  return (
    <main className="container mx-auto px-8 mt-20 justify-center flex gap-8">
      {Object.keys(PHONES_DATA).map((brandName, idx) => (
        <DirectoryItem key={idx} title={brandName} />
      ))}
    </main>
  );
};

export default Home;
