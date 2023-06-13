import BrandsSection from "../components/brands-section.component";
import FeaturedInSection from "../components/featured-in-section.component";
import FeaturesSection from "../components/features-section";
import HeroSection from "../components/hero-section.component";

// const brands = Object.keys(PHONES_DATA).map((brandName) => ({
//   brandName: brandName,
//   imageUrl: PHONES_DATA[brandName][2].imageUrl,
// }));

const Home = () => {
  return (
    <main className="">
      <HeroSection />
      <FeaturedInSection />
      <BrandsSection />
      <FeaturesSection />
    </main>
  );
};

export default Home;
