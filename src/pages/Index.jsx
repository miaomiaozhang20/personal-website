import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TabNavigation from "@/components/TabNavigation";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import MiscellaneousSection from "@/components/MiscellaneousSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState('About');

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6">
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <AnimatePresence mode="wait">
        {activeTab === 'About' && <AboutSection key="about" />}
        {activeTab === 'Research' && <ResearchSection key="research" />}
        {activeTab === 'Miscellaneous' && <MiscellaneousSection key="misc" />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
