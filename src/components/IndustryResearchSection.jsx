const IndustryResearchSection = () => {
  return (
    <div className="border-l-2 border-primary/30 pl-4 py-2 space-y-3">
      <div className="flex items-baseline space-x-3">
        <span className="font-semibold text-primary text-sm">2026</span>
        <h3 className="font-medium text-foreground">
          Industry Research Experience
        </h3>
      </div>

      <p className="text-text-light">
        Student Researcher Intern at Google, summer 2026. The badge wall below is
        the internal record of that summer: every tool learned, codelab finished,
        and small rite of passage collected along the way.
      </p>

      <a
        href="#/google-2026"
        className="block max-w-md border border-border/30 rounded-md overflow-hidden hover:border-secondary transition-colors group"
      >
        <img
          src={`${import.meta.env.BASE_URL}google-badges.png`}
          alt="Google internal badge wall collected during my summer 2026 student researcher internship"
          className="w-full h-auto"
        />
        <p className="bg-gray-50 border-t border-border/30 p-2 text-sm text-secondary text-center group-hover:bg-gray-100 transition-colors">
          How I Spent My Three-Month "Paid Vacation" with Google →
        </p>
      </a>
    </div>
  );
};

export default IndustryResearchSection;
