import PhonesSection from "../components/phones-section.component";
import BrandsSection from "../components/brands-section.component";
import FeaturedInSection from "../components/featured-in-section.component";
import FeaturesSection from "../components/features-section";
import HeroSection from "../components/hero-section.component";
import CtaSection from "../components/cta-section.component";
import TestimonialSection from "../components/testimonial-section.component";

// const brands = Object.keys(PHONES_DATA).map((brandName) => ({
//   brandName: brandName,
//   imageUrl: PHONES_DATA[brandName][2].imageUrl,
// }));

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedInSection />
      <BrandsSection />
      <PhonesSection />
      <FeaturesSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  );
};

export default Home;
