import { useState, useEffect } from "react";
import TabNavigation from "@/components/TabNavigation";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import MiscellaneousSection from "@/components/MiscellaneousSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'research', 'miscellaneous'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6">
      <TabNavigation activeSection={activeSection} />

      <section id="about" className="scroll-mt-8">
        <AboutSection />
      </section>

      <section id="research" className="scroll-mt-8">
        <ResearchSection />
      </section>

      <section id="miscellaneous" className="scroll-mt-8">
        <MiscellaneousSection />
      </section>
    </div>
  );
};

export default Index;
