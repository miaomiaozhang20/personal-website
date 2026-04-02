import { motion } from "framer-motion";

const TabNavigation = ({ activeSection, activeTab, setActiveTab }) => {
  const scrollTabs = [
    { label: 'About', id: 'about' },
    { label: 'Research', id: 'research' }
  ];

  const handleScrollClick = (e, id) => {
    e.preventDefault();
    if (activeTab !== 'main') {
      setActiveTab('main');
      setTimeout(() => {
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
      }, 100);
    } else {
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
    }
  };

  const handleMiscellaneousClick = () => {
    setActiveTab('miscellaneous');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (id) => {
    if (id === 'miscellaneous') {
      return activeTab === 'miscellaneous';
    }
    return activeTab === 'main' && activeSection === id;
  };

  return (
    <div className="border-b border-primary/20 sticky top-0 bg-gray-50 z-10">
      <div className="flex justify-center md:justify-start space-x-8">
        {scrollTabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            onClick={(e) => handleScrollClick(e, tab.id)}
            className={`relative px-4 py-3 text-lg font-medium transition-colors ${
              isActive(tab.id)
                ? 'text-primary'
                : 'text-text-light hover:text-foreground'
            }`}
          >
            {tab.label}
            {isActive(tab.id) && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        ))}
        <button
          onClick={handleMiscellaneousClick}
          className={`relative px-4 py-3 text-lg font-medium transition-colors ${
            isActive('miscellaneous')
              ? 'text-primary'
              : 'text-text-light hover:text-foreground'
          }`}
        >
          Misc
          {isActive('miscellaneous') && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
