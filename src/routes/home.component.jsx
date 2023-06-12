import BrandsSection from "../components/brands-section.component";
import HeroSection from "../components/hero-section.component";

// const brands = Object.keys(PHONES_DATA).map((brandName) => ({
//   brandName: brandName,
//   imageUrl: PHONES_DATA[brandName][2].imageUrl,
// }));

const Home = () => {
  return (
    <main className="">
      <HeroSection />
      <BrandsSection />
    </main>
  );
};

export default Home;
