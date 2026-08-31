import { Plane } from "lucide-react";

const IndustryResearchSection = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-baseline space-x-3">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Industry Research Experience
        </h2>
        <span className="font-semibold text-primary text-sm">2026</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: the badge wall as a pinned print rather than a framed card */}
        <div className="bg-white p-3 pb-2 shadow-lg -rotate-1">
          <img
            src={`${import.meta.env.BASE_URL}google-badges.png`}
            alt="Google internal badge wall collected during my summer 2026 student researcher internship"
            className="w-full h-auto"
          />
          <p className="pt-2 text-center text-xs italic text-text-light">
            MOMA badge wall; the sparky badges meant "busy Googlers"
          </p>
        </div>

        {/* Right: the note, with the reflection stub tucked underneath */}
        <div className="space-y-6">
          <p className="text-text-light leading-relaxed">
            Student Researcher Intern at Google, summer 2026. The badge wall
            beside is the internal record of that summer: every tool learned,
            codelab finished, and small rite of passage collected along the way.
          </p>

          {/* Boarding-pass stub linking to the reflection */}
          <a
            href="#/google-2026"
            className="group inline-flex items-stretch rounded-lg bg-accent/60 hover:bg-accent transition-colors"
          >
            <span className="flex items-center px-4 border-r-2 border-dashed border-primary/30">
              <Plane className="w-5 h-5 text-secondary -rotate-12 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <span className="px-4 py-3">
              <span className="block text-[11px] uppercase tracking-[0.15em] text-primary/60">
                Reflections
              </span>
              <span className="block font-display text-foreground group-hover:text-secondary transition-colors">
                How I Spent My Three-Month "Paid Vacation" with Google →
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndustryResearchSection;
