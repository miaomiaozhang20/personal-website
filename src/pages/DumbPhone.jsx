import { ArrowLeft } from "lucide-react";

// Stub page for the Fall 2026 dumb-phone experiment. The section headings below
// are the reflections still to be written; each carries the raw note it grew
// from, in muted italic, so the page reads as in-progress rather than broken.
const SeedNote = ({ children }) => (
  <p className="text-base italic leading-relaxed text-text-light/70">
    {children}
  </p>
);

const DumbPhone = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <a
        href="#/"
        className="inline-flex items-center text-text-light hover:text-secondary transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to home
      </a>

      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wide text-secondary">
          Life Hacks: Mind, Attention, Practice
        </p>
        <h1 className="font-display text-4xl font-bold text-foreground leading-tight">
          Five Days on a Dumb Phone
        </h1>
      </div>

      <article className="space-y-8">
        <section className="space-y-4">
          <p className="text-lg leading-relaxed text-text-light">
            A light digital detox, Fall 2026: I moved onto a Mudita Kompakt. I
            text, I call, I meditate, and — luckily — there is music, a notes
            app, and an alarm. It was supposed to be a five-day mini experiment.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            So much more time
          </h2>
          <SeedNote>
            Blocks of time arriving denser, sometimes filled with lengthened
            sync calls. Fewer chit chats.
          </SeedNote>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Noticing is learning
          </h2>
          <SeedNote>
            More aware of my surroundings — sound, vision, smell, and touch all
            magnified. More of the state of staying present.
          </SeedNote>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            How long this lasts
          </h2>
          <SeedNote>
            Five days, unless I extend it — probably until my grandma on the
            other side of the world, who lives in WeChat these days, really
            can&rsquo;t stand my constant unavailability and delayed replies.
          </SeedNote>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Next phase, maybe
          </h2>
          <SeedNote>
            Someone suggested a black-and-white screen and a deliberately slow
            internet (2G speeds) as the next way to hack a digital life. Worth
            trying eventually. For now I am just indulging myself in this new
            modality.
          </SeedNote>
        </section>
      </article>
    </div>
  );
};

export default DumbPhone;
