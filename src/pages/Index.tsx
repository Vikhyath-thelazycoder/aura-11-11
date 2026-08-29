/**
 * Index — Home Page
 * SOP: @seo-audit — semantic structure, single <h1> in HeroSection
 * Section order: Hero → Categories → Featured Products → Why Choose Us → Process → Instagram
 */
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomizationProcess from "@/components/CustomizationProcess";
import InstagramFeed from "@/components/InstagramFeed";

const Index = () => {
  return (
    <>
      {/* SOP @seo-audit — descriptive page title & meta can be added via Helmet */}
      <main id="main-content">
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <WhyChooseUs />
        <CustomizationProcess />
        <InstagramFeed />
      </main>
    </>
  );
};

export default Index;
