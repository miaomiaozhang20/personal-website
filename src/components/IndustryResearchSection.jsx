import { Plane } from "lucide-react";
import BadgeWall from "@/components/BadgeWall";

// The Google shuttle, drawn 1:1 against an h-4/w-7 box so it sits on the route
// line with its wheels on the road. Faces right; the shuttle animation flips it.
const GBus = ({ className = "" }) => (
  <svg viewBox="0 0 28 16" aria-hidden="true" className={className}>
    <rect x="1" y="2" width="25" height="10" rx="3" fill="#4285F4" />
    <path d="M20.5 4h4a1 1 0 0 1 1 1v2h-5z" fill="#fdfbf7" />
    <rect x="3" y="4" width="4.5" height="3" rx="0.8" fill="#fdfbf7" />
    <rect x="9" y="4" width="4.5" height="3" rx="0.8" fill="#fdfbf7" />
    <rect x="15" y="4" width="4" height="3" rx="0.8" fill="#fdfbf7" />
    <rect x="24.4" y="8.4" width="1.6" height="1.6" rx="0.7" fill="#FBBC05" />
    <circle cx="7" cy="13" r="2.2" fill="#3d2e5f" />
    <circle cx="20" cy="13" r="2.2" fill="#3d2e5f" />
  </svg>
);

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
          <BadgeWall />
        </div>

        {/* Right: the note, with the reflection stub tucked underneath */}
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="font-display text-foreground">
              Student Researcher Intern
            </p>
            <p className="text-text-light">Google Research, Summer 2026</p>

            {/* Indented under the role: what the print is, and the commute it
                was collected on, with a G-bus running the route */}
            <p className="pl-5 text-sm text-text-light">MOMA Badge Wall</p>
            <p className="flex items-center gap-2 pl-5 text-sm text-text-light">
              <span>San Francisco</span>
              <span className="relative inline-block h-4 w-20 shrink-0 [--gbus-travel:3.25rem]">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-[3px] border-t border-dashed border-primary/40"
                />
                <GBus className="absolute bottom-0 left-0 h-4 w-7 animate-gbus-shuttle motion-reduce:animate-none" />
                <span className="sr-only">to</span>
              </span>
              <span>Mountain View</span>
            </p>
          </div>

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
