import { useId } from "react";

// The badge wall, with an annotation pointing at the "sparky" badges — the
// black tiles flecked with colored squares, which marked a busy Googler.
//
// The overlay is drawn in the source image's own pixel space (1526 x 952) and
// stretched over the <img>, so every coordinate below is an image pixel and the
// whole annotation scales with the photo at any width.
const IMAGE_VIEW_BOX = "0 0 1526 952";

// Tail sits in the empty white gutter under the last row; the head lands in the
// block of sparky tiles above it.
const ARROW_PATH = "M 1298 891 C 1232 901, 1142 889, 1064 838";

const BadgeWall = ({
  className = "",
  labelSizeClassName = "text-[7px] sm:text-[9px] md:text-[10px]",
}) => {
  // Scoped so the marker keeps working if two walls ever render on one page.
  const markerId = `sparky-arrowhead-${useId()}`;

  return (
    <div className={`relative ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}google-badges.png`}
        alt="Google internal badge wall collected during my summer 2026 student researcher internship"
        className="w-full h-auto"
      />

      <svg
        viewBox={IMAGE_VIEW_BOX}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-secondary"
      >
        <defs>
          <marker
            id={markerId}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>

        <g className="animate-sparky-nudge motion-reduce:animate-none">
          {/* Halo first, so the arrow stays legible where it meets the dark tiles */}
          <path
            d={ARROW_PATH}
            fill="none"
            stroke="#ffffff"
            strokeWidth="14"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d={ARROW_PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            markerEnd={`url(#${markerId})`}
          />
        </g>
      </svg>

      <p
        className={`pointer-events-none absolute bottom-[2.5%] right-[2.5%] font-display italic leading-none text-secondary ${labelSizeClassName}`}
      >
        <span className="sr-only">The dark, speckled badges above mean </span>
        <span aria-hidden="true">= </span>
        &ldquo;busy Googler&rdquo;
      </p>
    </div>
  );
};

export default BadgeWall;
