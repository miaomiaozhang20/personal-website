import { motion } from "framer-motion";

const TabNavigation = ({ activeSection }) => {
  const tabs = [
    { label: 'About', id: 'about' },
    { label: 'Research', id: 'research' },
    { label: 'Miscellaneous', id: 'miscellaneous' }
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="border-b border-primary/20 sticky top-0 bg-gray-50 z-10">
      <div className="flex justify-center md:justify-start space-x-8">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            onClick={(e) => handleClick(e, tab.id)}
            className={`relative px-4 py-3 text-lg font-medium transition-colors ${
              activeSection === tab.id
                ? 'text-primary'
                : 'text-text-light hover:text-foreground'
            }`}
          >
            {tab.label}
            {activeSection === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
