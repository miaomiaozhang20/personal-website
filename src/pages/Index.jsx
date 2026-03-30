import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TabNavigation from "@/components/TabNavigation";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import MiscellaneousSection from "@/components/MiscellaneousSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [activeTab, setActiveTab] = useState('main'); // 'main' or 'miscellaneous'

  useEffect(() => {
    if (activeTab === 'main') {
      const handleScroll = () => {
        const sections = ['about', 'research'];
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
    }
  }, [activeTab]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6">
      <TabNavigation
        activeSection={activeSection}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <AnimatePresence mode="wait">
        {activeTab === 'main' ? (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <section id="about" className="scroll-mt-8">
              <AboutSection />
            </section>

            <section id="research" className="scroll-mt-8 mt-8">
              <ResearchSection />
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="miscellaneous"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MiscellaneousSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
