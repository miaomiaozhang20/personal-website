// Dunbar's layers as nested orbits, with the sympathy group of 15 as the one
// mark that carries the accent — every other ring is context.
//
// Radius is proportional to the square root of the layer size, so a ring's AREA
// is proportional to how many people it holds. The numbers are cumulative, the
// way Dunbar states them: the 15 contains the 5, the 50 contains the 15.
const CENTER = 160;
const LAYERS = [
  {
    n: 150,
    r: 150,
    fill: "#efeaf5",
    ink: "#3d2e5f",
    labelY: 42,
    name: "Casual friends",
    note: "Dunbar's number",
  },
  {
    n: 50,
    r: 86.6,
    fill: "#cfc4e0",
    ink: "#3d2e5f",
    labelY: 93,
    name: "Close friends",
    note: "The people you'd invite to a large party.",
  },
  {
    n: 15,
    r: 47.4,
    fill: "#a8556c",
    ink: "#fdfbf7",
    labelY: 122.6,
    name: "Sympathy group",
    note: "My saved contact list since Day 0 of the mini-experiment.",
    emphasis: true,
  },
  {
    n: 5,
    r: 27.4,
    fill: "#3d2e5f",
    ink: "#fdfbf7",
    labelY: CENTER,
    name: "Support clique",
  },
];

const SocialOrbits = () => (
  <figure className="rounded-lg border border-border/30 bg-white p-5 sm:p-6">
    <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
      <svg
        viewBox="0 0 320 320"
        role="img"
        aria-label="Dunbar's layers drawn as nested circles: 150 casual friends, 50 close friends, 15 in the sympathy group, and a support clique of 5. Circle area is proportional to the number of people."
        className="w-full max-w-[260px] shrink-0"
      >
        {LAYERS.map((layer) => (
          <circle
            key={layer.n}
            cx={CENTER}
            cy={CENTER}
            r={layer.r}
            fill={layer.fill}
            stroke={layer.emphasis ? "#8f4458" : "#8a7aa5"}
            strokeWidth={layer.emphasis ? 2 : 1.25}
          />
        ))}
        {LAYERS.map((layer) => (
          <text
            key={layer.n}
            x={CENTER}
            y={layer.labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={layer.ink}
            fontSize={layer.emphasis ? 13 : 11}
            fontWeight={layer.emphasis ? 700 : 500}
          >
            {layer.n}
          </text>
        ))}
      </svg>

      <ul className="w-full space-y-2.5">
        {LAYERS.map((layer) => (
          <li key={layer.n} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
              style={{
                backgroundColor: layer.fill,
                outline: `1px solid ${layer.emphasis ? "#8f4458" : "#8a7aa5"}`,
              }}
            />
            <span className="text-sm leading-snug">
              <span
                className={
                  layer.emphasis
                    ? "font-semibold text-secondary"
                    : "font-medium text-foreground"
                }
              >
                {layer.n} · {layer.name}
              </span>
              {layer.note && (
                <span className="block text-text-light">{layer.note}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <figcaption className="mt-5 border-t border-border/30 pt-3 text-xs leading-relaxed text-text-light">
      Robin Dunbar&rsquo;s layers, each roughly three times the one inside it.
      Circle area is proportional to group size; the layers are cumulative. Two
      further layers sit outside this frame — about 500 acquaintances and 1,500
      faces you can put a name to.
    </figcaption>
  </figure>
);

export default SocialOrbits;
