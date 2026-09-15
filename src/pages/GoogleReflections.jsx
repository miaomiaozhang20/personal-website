import { ArrowLeft } from "lucide-react";
import BadgeWall from "@/components/BadgeWall";

// Photos run one at a time, each closing off a stretch of text rather than
// sitting beside another photo. Landscapes get the wider cap, portraits the
// narrower one, so nothing runs taller than a screen.
const Photo = ({ file, alt, width, height, cap = "max-w-lg" }) => (
  <figure className="flex justify-center py-2">
    <img
      src={`${import.meta.env.BASE_URL}${file}`}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={`w-full ${cap} h-auto rounded-lg border border-border/30 shadow-sm`}
    />
  </figure>
);

const GoogleReflections = () => {
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
          Industry Research Experience
        </p>
        <h1 className="font-display text-4xl font-bold text-foreground leading-tight">
          How I Spent My Three-Month "Paid Vacation" with Google
        </h1>
        <p className="text-lg text-text-light">
          Reflections on a summer 2026 student researcher internship — Miaomiao Zhang
        </p>
      </div>

      <div className="border border-border/30 rounded-lg overflow-hidden">
        <BadgeWall labelSizeClassName="text-[9px] sm:text-xs md:text-sm" />
        <p className="border-t border-border/30 bg-gray-50 p-3 text-sm text-text-light text-center">
          The badge wall: three months of tools, codelabs, and small rites of
          passage.
        </p>
      </div>

      <article className="space-y-6">
        <p className="text-lg leading-relaxed text-text-light">
          I was really just like an octopus, stretching my arms across the
          problem space and learning what other teams had been working on in
          areas adjacent to, related to, and sometimes completely orthogonal to
          my main project. I have been constantly growing the number of my arms
          too.. I even got an apron for myself at the Google store!
        </p>

        <Photo
          file="google-apron.jpg"
          alt="A black Google store apron on a hanger, printed with a smiling orange octopus"
          width="1050"
          height="1400"
          cap="max-w-sm"
        />

        <p className="text-lg leading-relaxed text-text-light">
          That kind of exploration (or diluted focus, if you may) was truly
          fulfilling. My data point is, of course, extremely biased. Take it
          with a grain of salt if you are reading trying to gauge how it’s like
          to work in the industry frontier AI lab as a research scientist.
          Still, I think I came away with a bird’s-eye view of an organization
          in which change might be the only constant factor, especially amidst
          this AI “chaos.”
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
          Perks, Perks, Perks.
        </h2>

        <p className="text-lg leading-relaxed text-text-light">
          My day often started on a G-bus whose Wi-Fi was faster than my in-home
          Wi-Fi.
        </p>

        <Photo
          file="google-gbus.jpg"
          alt="A Google shuttle departure board listing Mountain View routes, wait times and weather"
          width="875"
          height="1400"
          cap="max-w-sm"
        />

        <p className="text-lg leading-relaxed text-text-light">
          Then came the highly protected “Gradient Canopy” office: the
          architecture, the intentional design choices, the
          micro-kitchens, and the feeling that an enormous amount of
          thought had gone into shaping how people moved through and
          interacted with the space. Just like an art gallery. One badge
          also gave me access to Google offices around the world. I
          managed to tour six of them. How fun. Free buffet.
          “Only-locals-know” ice cream fridges. Baristas with “Gemini
          glow” lattes. Cooking classes. And, last but not least, there
          was my Boost schedule: yoga, spin, barre, Pilates, several
          running group around the SF bay view, and one bouldering and
          hip-hop class that I kept meaning—but was never quite able—to
          make. I even tried acro yoga for the first time. So yes: perks,
          perks, perks. All thrown at you at once. It was very easy to
          enjoy the honeymoon period of good pay, balanced work-life, a
          supportive team, and extremely kind and nice colleagues. I
          understand why people are drawn to this “Infinity Machine,” and
          why many decide to stay for decades, i.e., tenured Googlers!
        </p>

        <Photo
          file="google-office5.jpg"
          alt="An open workspace seen from above: curved partitions, lounge seating and desks in bright colours"
          width="1400"
          height="1050"
        />

        <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
          The Bitter-Sweet Lesson
        </h2>

        <p className="text-lg leading-relaxed text-text-light">
          The speed of execution is admirable. Academia on the other hand seemed
          to be too slow (even though I do feel sprints happen every so often
          with some of my best quality work but most of time decision making
          isn’t just get-go). At the same time, I started to appreciate the fact
          my PhD journey has really allowed for more space to sit with a
          question and pursue a certain profoundness of thinking.
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          That realization of my utility function arrived during my remote-work
          month (self-claimed, never officially announced or approved), when I
          was back in Boston because of academic conference travel. I went to a
          friend’s practice job talk. There were only four of us in the room,
          including the job-market candidate, but I could feel the exuberance,
          the sparkles of brain-cell fireworks… “oh god, that feeling of being
          intellectually challenged… isn’t that good?”
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          This is really not to say that my work at Google was not
          intellectually stimulating. Quite the opposite: it was interesting and
          engaging in ways that was outside of my in-sample training
          distribution.
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          But it was a different type of intellectual work.
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          I operated more like a coordination-and-communication generalist, with
          a specific niche—or expertise, if I may—in some domain that I could
          claim better systematic knowledge of. Sometimes I felt like a
          cheerleader. Sometimes I felt like an evangelist. Sometimes I felt
          like a fresh-out-of-school intern: a completely white canvas, or a
          sponge…
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          The muscle group I exercised was simply not the same muscle group that
          academia had prepared me for. That made the learning curve steep, but
          also valuable.
        </p>
        <Photo
          file="google-office4.jpg"
          alt="The Bay Bridge and the Embarcadero seen through an office window"
          width="1400"
          height="1050"
        />

        <p className="text-lg leading-relaxed text-text-light">
          Wearing my economist hat (?), I used to think that my utility function
          had perhaps five dimensions that I was optimizing over. Ex post, after
          this industry research experience, I think it has closer to fifty.I am
          also less inclined to think about my life as an optimization problem
          at all. Increasingly, I think of it as a sampling experiment.
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          To know the value of my chosen option, I first have to know what
          options are out there and perform disciplined, if not totally
          scientific experiment to max(learning) rather than max(conviction).
          And to know that, I have to sample a little more broadly, or perhaps a
          little more wildly.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
          Academia or Industry?
        </h2>

        <p className="text-lg leading-relaxed text-text-light">
          I am no longer sure this dichotomy holds. The frontiers of science,
          social science, organizational problems, and innovation are beginning
          to converge across industry and academia (which also happened when IBM
          and Yahoo Research was “cool”!). We see star scholars joining the
          industry “gold rush,” drawn by greater data availability, more
          compute, more resources, and possibly the opportunity for higher
          impact.
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          But there is also an alignment problem.
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          One person’s intellectual curiosity—the questions an individual
          inventor or scientist finds genuinely compelling—may not align with an
          organization’s current priorities. Organizational priorities also
          change, more than often quickly, pulling by some capital-driven
          central gravity and PR factors. A question can remain intellectually
          important while becoming operationally irrelevant, or become urgently
          relevant before anyone has developed the conceptual tools to
          understand it well.
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          It is difficult to remain merely a spectator when one is fascinated by
          the phenomena. But some distance from day-to-day operations (or
          firefighting, should I say?) can also unlock a different kind of
          insight or just a fresh perspective to reframe and reformulate the
          problem, especially when this world is filled with so much
          noise-conflated signals.
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          I have also realized that I do not care as much as I once thought
          about fame, title, or money. I am very privileged: I do not currently
          have to worry about raising a family or paying off student debt, for
          example. That privilege gives me room to ask what I actually want.
        </p>

        {/* The two architecture shots, paired. Cropped to a common 4:3 so the
            landscape and the portrait sit level beside each other. */}
        <figure className="grid grid-cols-2 gap-3 py-2">
          <img
            src={`${import.meta.env.BASE_URL}google-office.jpg`}
            alt="An indoor plaza under a timber canopy, with lampposts, planters and lounge seating"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-lg border border-border/30 object-cover shadow-sm"
          />
          <img
            src={`${import.meta.env.BASE_URL}google-office2.jpg`}
            alt="Sunlight falling across the building's curved timber ceiling ribs"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-lg border border-border/30 object-cover shadow-sm"
          />
        </figure>

        <p className="text-lg leading-relaxed text-text-light">
          What I truly care about is working on ambitious projects with a group
          of smart people.
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          At some point, I also want enough agency to establish a career that
          can unleash more possibilities for creativity and change. I do not yet
          know exactly what institutional form that career will take. Perhaps
          that is the wrong question to optimize over right now.
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          For the moment, I am still sampling.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
          Back to Being a Full-Time PhD
        </h2>

        <p className="text-lg leading-relaxed text-text-light">
          And so, I am back to being a full-time PhD student.
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          This is partly because of recent federal policy changes affecting work
          authorization during an academic program for people on student visas.
          But I also think this is probably the right moment to take a break
          from the really fun industry research and indulge myself in some
          unfinished ideas that I have been actively thinking about for a while.
        </p>

        <p className="text-lg leading-relaxed text-text-light">
          I do think i’ve known the value of my choice better now that I’ve
          sampled more.
        </p>
        <Photo
          file="google-office3.jpg"
          alt="Campus bikes racked behind a fence, with the Google logo on the wall beyond"
          width="1400"
          height="1050"
        />
      </article>
    </div>
  );
};

export default GoogleReflections;
