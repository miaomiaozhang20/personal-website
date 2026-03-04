import { motion } from "framer-motion";

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = ['About', 'Research', 'Miscellaneous'];

  return (
    <div className="border-b border-primary/20">
      <div className="flex justify-center md:justify-start space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-3 text-lg font-medium transition-colors ${
              activeTab === tab
                ? 'text-primary'
                : 'text-text-light hover:text-foreground'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
