const MiscellaneousSection = () => {
  const yearlyCommitments = [
    {
      year: "G1",
      commitment: "WSET level 2 with Distinction",
    },
    {
      year: "G2",
      commitment: (
        <span>
          Designed a{" "}
          <a
            href="https://subsequent-germanium-5af.notion.site/EC970-Economics-of-Innovation-with-Generative-AI-b8e6e85d47d04883991e16993feee735?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            new course
          </a>
          {" "}on AI and innovation for economics major undergrads
        </span>
      ),
    },
    {
      year: "G3",
      commitment: "Teaching yoga at Mather House as a non-resident tutor, and later at the Shad Gym at HBS",
    },
    {
      year: "G4",
      commitment: (
        <span>
          Meditation practice with{" "}
          <a
            href="https://www.amffxianshu.org/?page_id=13271"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Master Xianshu
          </a>
          {" "}at the{" "}
          <a
            href="https://www.amffcambridge.org/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Art of the Mindfulness Foundation
          </a>
        </span>
      ),
    },
    {
      year: "G5",
      commitment: "First marathon (to-be-realized)",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Yearly Commitments Section */}
      <div className="space-y-4">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Life Portfolio Diversification
        </h2>
        <p className="text-text-light leading-relaxed italic">
          I commit to something "random" per year orthogonal to my professional passion.
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
    </div>
  );
};

export default MiscellaneousSection;
