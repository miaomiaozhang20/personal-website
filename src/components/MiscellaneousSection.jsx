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

  const parkedProjects = [
    {
      title: "From Pilot Plots to Platform Posts: Knowledge Architectures in the Nascent Durian Industry",
      tagline: "Entrepreneurial co-opetition among local government, university scientists, and farmers",
      blurb:
        "Hainan, China's southernmost province, is trying to grow a nascent industry for durian \u2014 a tropical, highly-profitable crop that has never been ecologically viable at this latitude. The project traces the co-opetition among entrepreneurs, local government, university agronomists, and smallholder farmers to assemble land, cultivars, capital, and know-how. The macro backdrop is climate adaptation. The entrepreneurial entry decision is made under unknown market potential, climate risk, and no settled view of the optimal \u201ctechnology bundle.\u201d Underneath sit questions of firm boundaries and incomplete contracts, and whether the actors approach market formation as a zero-sum game or as growing the pie.",
      status: "Fieldwork notes",
    },
    {
      title: "Formula 1 and the Halo \u201cShock\u201d",
      tagline: "A mandated safety technology as a natural experiment",
      blurb:
        "The 2018 halo mandate imposed a sudden, non-negotiable design constraint on every team at once. Placeholder for a project on how organizations absorb an externally imposed technical shock \u2014 and whether the constraint redirected innovation elsewhere.",
      status: "Placeholder",
    },
    {
      title: "Mindbody \u00d7 ClassPass",
      tagline: "Platform merger and potential antitrust concerns",
      blurb:
        "Placeholder for a project on what happens to studios, instructors, and consumers when a supply-side software platform merges with the demand-side aggregator that used to be its counterparty.",
      status: "Placeholder",
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

      {/* "Parked" Projects Section */}
      <div className="space-y-4">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          &ldquo;Parked&rdquo; Projects
        </h2>
        <p className="text-text-light leading-relaxed italic">
          Questions I keep circling back to, parked until the right data, coauthor, or moment arrives.
        </p>
        <div className="space-y-4">
          {parkedProjects.map((project, index) => (
            <div key={index} className="border-l-2 border-primary/30 pl-4 py-2 space-y-1">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                <span className="text-xs text-text-light italic whitespace-nowrap">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-secondary">{project.tagline}</p>
              <p className="text-text-light leading-relaxed">{project.blurb}</p>
            </div>
          ))}
          <div className="border-l-2 border-primary/30 pl-4 py-2">
            <p className="text-text-light italic">&hellip; and a lot more!</p>
          </div>
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
          <span className="font-medium italic">教学相长</span> (jiào xué xiāng zhǎng) — "Teaching and learning promote each other."
          This ancient Chinese wisdom captures my belief that the act of teaching deepens one's own understanding.
          When we explain ideas to others, we discover gaps in our knowledge and forge new connections.
          Teaching is not just a transfer of information; it is a mutual journey of growth.
        </p>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Course Card - EC970 */}
          <a
            href="https://subsequent-germanium-5af.notion.site/EC970-Economics-of-Innovation-with-Generative-AI-b8e6e85d47d04883991e16993feee735"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="border border-transparent rounded-lg overflow-hidden hover:border-secondary transition-all hover:shadow-lg h-full">
              <div className="aspect-video overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}course-preview.webp`}
                  alt="EC970 Course Preview"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                  EC970: Economics of Innovation with Generative AI
                </h3>
                <p className="text-sm text-text-light">
                  The first undergraduate tutorial for economics major Harvard College students on Generative AI
                </p>
              </div>
            </div>
          </a>

          {/* Summer Lecture - Future of Work */}
          <a
            href="https://www.dropbox.com/scl/fi/a170sfepnqsoh9d2g7kq6/Raj_FoW_Miaomiao_GenAI_062325.pdf?rlkey=wumqgzykpufnlpmv7n7nlbv9i&st=wdjcngjp&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="border border-transparent rounded-lg overflow-hidden hover:border-secondary transition-all hover:shadow-lg h-full">
              <div className="aspect-video overflow-hidden bg-black">
                <img
                  src={`${import.meta.env.BASE_URL}ai-value-chain.png`}
                  alt="AI Value Chain"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                  Future of Work and Jobs — Organizational Perspective
                </h3>
                <p className="text-sm text-text-light">
                  Summer lecture on Generative AI
                </p>
                <p className="text-xs text-text-light italic">
                  Grateful to Professor Prithwiraj (Raj) Choudhury for inviting me to lead this lecture, and to Professor Andy Wu and Professor Léonard Boussioux for generously sharing their course materials. All errors remain my own.
                </p>
              </div>
            </div>
          </a>
        </div>
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
