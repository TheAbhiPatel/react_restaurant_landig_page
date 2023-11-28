import HeroSection from "../components/HeroSection";
import NewsAndEventSection from "../components/NewsAndEventSection";
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
      <NewsAndEventSection />
    </div>
  );
};

export default Home;
