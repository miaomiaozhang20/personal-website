import { motion } from "framer-motion";

const MiscellaneousSection = () => {
  const yearlyCommitments = [
    {
      year: "G1",
      commitment: "WSET level 2 with Distinction",
    },
    {
      year: "G2",
      commitment: "Designed/taught undergrad AI & Innovation course + 200hr Yoga Teacher Training",
    },
    {
      year: "G3",
      commitment: "Taught yoga at Mather House as a non-resident tutor",
    },
    {
      year: "G4",
      commitment: "Teaching yoga at HBS Shad + meditation practice with a monk at HDS Multifaith Space (volunteer)",
    },
    {
      year: "G5",
      commitment: "First marathon (to-be-realized)",
    },
  ];

  const appreciations = [
    { name: "'Leke" },
    { name: "Joey" },
    { name: "Paul" },
    { name: "Jackie" },
    { name: "Faye" },
    { name: "Scott" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      className="space-y-12"
    >
      {/* Yearly Commitments Section */}
      <div className="space-y-4">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Life Portfolio Diversification
        </h2>
        <p className="text-text-light leading-relaxed italic">
          I commit to one thing per year orthogonal to my professional passion
        </p>
        <div className="space-y-4">
          {yearlyCommitments.map((item, index) => (
            <div key={index} className="border-l-2 border-primary/30 pl-4 py-2">
              <div className="flex items-baseline space-x-3">
                <span className="font-semibold text-primary text-sm">{item.year}</span>
                <p className="text-text-light">{item.commitment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-primary/20"></div>

      {/* Appreciations Section */}
      <div className="space-y-4">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Things I Appreciate About My Significant Others
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {appreciations.map((person, index) => (
            <div
              key={index}
              className="border border-primary/20 rounded-sm p-4 text-center hover:border-primary/40 transition-colors"
            >
              <p className="text-foreground font-medium">{person.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-primary/20"></div>

      {/* Why I Teach Section */}
      <div className="space-y-4">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Why I Teach
        </h2>
        <p className="text-text-light italic">More details coming soon</p>
      </div>

      {/* Divider */}
      <div className="border-t border-primary/20"></div>

      {/* Life Hacks Section */}
      <div className="space-y-4">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Life Hacks: Mind, Attention, Practice
        </h2>
        <p className="text-text-light italic">More details coming soon</p>
      </div>
    </motion.div>
  );
};

export default MiscellaneousSection;
