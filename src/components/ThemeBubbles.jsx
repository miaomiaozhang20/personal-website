// The themes, as bubbles that drift. Size and position carry NO meaning here —
// these are labels, not data — so every bubble takes the same single hue and
// identity is carried by the text. Sizes vary only to fit the words.
const THEMES = [
  {
    label: "Emotional capacity",
    note: "Finite relational bandwidth",
    size: "h-40 w-40",
    delay: "0s",
  },
  {
    label: "Social orbits",
    note: "Close ties and remote ties (network stuff that I never truly understand)",
    size: "h-52 w-52",
    delay: "0.8s",
  },
  {
    label: "Commitment",
    note: "Responsibility as part of love",
    size: "h-36 w-36",
    delay: "1.6s",
  },
  {
    label: "Friction",
    note: "The effort was the signal",
    size: "h-36 w-36",
    delay: "2.4s",
  },
];

const ThemeBubbles = () => (
  <div className="mx-auto flex max-w-lg flex-wrap items-center justify-center gap-4">
    {THEMES.map((theme) => (
      <div
        key={theme.label}
        style={{ animationDelay: theme.delay }}
        className={`${theme.size} flex shrink-0 flex-col items-center justify-center rounded-full border border-secondary/40 bg-secondary/10 p-4 text-center animate-bubble-drift motion-reduce:animate-none`}
      >
        <p className="font-display text-sm font-semibold leading-tight text-secondary">
          {theme.label}
        </p>
        <p className="mt-1 text-[11px] leading-snug text-text-light">
          {theme.note}
        </p>
      </div>
    ))}
  </div>
);

export default ThemeBubbles;
