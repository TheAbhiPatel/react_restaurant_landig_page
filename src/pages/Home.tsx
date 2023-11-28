import HeroSection from "../components/HeroSection";
import OnlyTheBestSection from "../components/OnlyTheBestSection";
import OurStorySection from "../components/OurStorySection";
import ProductsSection from "../components/ProductsSection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurStorySection />
      <OnlyTheBestSection />
      <ProductsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
