import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
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
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
