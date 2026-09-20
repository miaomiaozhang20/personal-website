import { ArrowLeft } from "lucide-react";
import SocialOrbits from "@/components/SocialOrbits";
import ThemeBubbles from "@/components/ThemeBubbles";

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
        <section>
          <p className="text-lg leading-relaxed text-text-light">
            A light digital detox, Fall 2026: I moved onto a Mudita Kompakt. I
            text, I call, I meditate. There is music, a notes app, and an alarm.
            It was supposed to be a five-day mini experiment.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            So much more time
          </h2>
          <p className="text-lg leading-relaxed text-text-light">
            I feel blocks of time arriving denser. Most of my evening walks are
            filled with lengthened sync calls.
          </p>
          <p className="text-lg leading-relaxed text-text-light">
            Luckily and expectedly, fewer chit chats during the day.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Noticing is learning
          </h2>
          <p className="text-lg leading-relaxed text-text-light">
            It honestly feels like getting out of a weekend-long vipassana.
            Sound, vision, smell, and touch all magnified. More of the state of
            staying present.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            The sympathy group of 15
          </h2>

          <p className="text-lg leading-relaxed text-text-light">
            Robin Dunbar&rsquo;s layers give the losses a shape. Past the five
            people you&rsquo;d call at 3am (I never!) sits a group of about
            fifteen — the sympathy group, the people whose loss would genuinely
            wound you, and roughly the most a person can hold at that depth at
            once. Each layer outward is about three times the last, and gets
            correspondingly thinner.
          </p>

          <SocialOrbits />

          <p className="text-lg leading-relaxed text-text-light">
            Kiana Tipton&rsquo;s{" "}
            <a
              href="https://inconvenientyear.substack.com/p/we-met-once-why-am-i-invited-to-your"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              &ldquo;We Met Once — Why Am I Invited to Your Birthday
              Party?&rdquo;
            </a>{" "}
            puts the same arithmetic in the first person:{" "}
            <span className="italic">
              &ldquo;My phone knows thousands of people but my life only has
              room for maybe twenty.&rdquo;
            </span>{" "}
            Her argument is that frictionless invitations spend a finite
            capacity on the outer layers.
          </p>

          <ThemeBubbles />
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            How long this lasts
          </h2>
          <p className="text-lg leading-relaxed text-text-light">
            Five days, unless I extend it — probably until my grandma on the
            other side of the world, who lives in WeChat these days, really
            can&rsquo;t stand my constant unavailability and delayed replies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Next phase, maybe
          </h2>
          <p className="text-lg leading-relaxed text-text-light">
            Someone suggested a black-and-white screen and a deliberately slow
            internet (2G speeds) as the next way to hack a digital life. Worth
            trying eventually. For now I am just indulging myself in this new
            modality.
          </p>
        </section>
      </article>
    </div>
  );
};

export default DumbPhone;
