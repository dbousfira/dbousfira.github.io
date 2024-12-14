import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Pricing from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Pricing />
    </div>
  );
};

export default Index;