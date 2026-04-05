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
          Registered Yoga Teacher Training 200 Hours with{" "}
          <a
            href="https://downunderyoga.com/200-hour-boston-yoga-teacher-training"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Down Under School of Yoga
          </a>
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
        <p className="text-text-light leading-relaxed">
          <span className="font-medium">教学相长</span> (jiào xué xiāng zhǎng) — "Teaching and learning promote each other."
          This ancient Chinese wisdom captures my belief that the act of teaching deepens one's own understanding.
          When we explain ideas to others, we discover gaps in our knowledge and forge new connections.
          Teaching is not just a transfer of information; it is a mutual journey of growth.
        </p>

        {/* Course Card */}
        <a
          href="https://subsequent-germanium-5af.notion.site/EC970-Economics-of-Innovation-with-Generative-AI-b8e6e85d47d04883991e16993feee735"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 group"
        >
          <div className="border border-primary/20 rounded-sm overflow-hidden hover:border-primary/40 transition-colors">
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}course-preview.png`}
                alt="EC970 Course Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col items-center justify-center text-text-light/50">
                <span className="text-4xl mb-2">📚</span>
                <span className="text-sm">Course Preview</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-foreground group-hover:text-secondary transition-colors">
                EC970: Economics of Innovation with Generative AI
              </h3>
              <p className="text-sm text-text-light mt-1">
                A course designed for economics major undergraduates exploring the intersection of AI and innovation
              </p>
            </div>
          </div>
        </a>
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
