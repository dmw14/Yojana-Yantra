
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SchemeCategories from "@/components/SchemeCategories";
import TrendingSchemes from "@/components/TrendingSchemes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SchemeCategories />
      <TrendingSchemes />
      <Footer />
    </div>
  );
};

export default Index;
