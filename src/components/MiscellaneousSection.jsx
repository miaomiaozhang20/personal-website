import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Languages, Smartphone } from "lucide-react";

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
      commitment: (
        <span>
          Teaching yoga at{" "}
          <a
            href="https://mather.harvard.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Mather House
          </a>
          {" "}as a non-resident tutor, and later (continue as of today) at the
          HBS Shad Gym
        </span>
      ),
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
      commitment: "First marathon or triathlon (to-be-realized)",
    },
  ];

  const ideaSwarms = [
    {
      title: "Marketing of Science",
      tagline: "There is a Science of Science, but the marketing of it might just be as important!",
      paragraphs: [
        "Research has studied the Science of Science extensively: how discoveries get produced, funded, and cited. It has studied the marketing of science far less. I suspect storytelling and narrative are not packaging applied after the fact but a crucial part of the scientific process itself \u2014 shaping what gets framed as a problem, what counts as a \u201cgood\u201d question, and what audience appreciates the type of work innovators dedicate themselves to commit. This also raises the customer question every entrepreneur faces: who are you selling to? Impact is multi-faceted and reaches well beyond scholarly citations, which makes the choice of audience a real strategic decision and sampling matters too.",
      ],
    },
    {
      title: "Do I become more (dis)similar to my advisor?",
      tagline: "How advisors' personalities shape the scholars their students become",
      paragraphs: [
        "How much of a scholar is inherited? I want to trace how PhD advisors' personalities and styles shape their candidates, with heterogeneity across fields and attention to the extreme cases at both tails. Outcomes to measure: the academia-versus-industry choice, the style of the papers students go on to write, and the most interesting part, the mentoring style they adopt once they become advisors themselves.",
        "A related question one career stage later: how wide do junior faculty explore, and how soon do they converge? Junior faculty starting out are working out what they want and need in a research portfolio. Do they run something like a sampling process, the way entrepreneurs find customers and validate their market? My hunch is that many under-explore the problem space and converge to a \u201cscholarly identity\u201d too soon, which limits the upside potential of their impact (again, not necessarily as measured by citations).",
      ],
      note:
        "I plan to run LLM-led interviews to scale up data points collection, but I will head down to do a few interviews myself first to understand if this is a \u201cgood\u201d question worthy of studying!",
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

      {/* Idea Swarms Section */}
      <div className="space-y-4">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Idea Swarms
        </h2>
        <p className="text-text-light leading-relaxed italic">
          Half-formed ideas still buzzing around&hellip;
        </p>
        <Accordion type="single" collapsible className="w-full">
          {ideaSwarms.map((idea, index) => (
            <AccordionItem key={index} value={`idea-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex flex-col items-start">
                  <span className="font-medium text-foreground">{idea.title}</span>
                  <span className="text-sm text-secondary">{idea.tagline}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  {idea.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="text-text-light leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {idea.note && (
                    <p className="text-text-light leading-relaxed italic">{idea.note}</p>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="text-text-light italic">&hellip; and a lot more!</p>
      </div>

      {/* Divider */}
      <div className="border-t border-primary/20"></div>

      {/* "Parked" Project Section */}
      <div className="space-y-4">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          &ldquo;Parked&rdquo; Project
        </h2>
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
        <p className="text-lg leading-relaxed text-text-light">
          I think one thing i realized is that there are only two category of
          things happening in this world, one is "good" things and the other is
          things you don't yet know how they can be "good". One can argue that
          it's through learnings and experiences that the latter category should
          be rephrased to be closer to "I" have the ability to make everything
          "better" if it doesn't land its best shape at the first place. I think
          we are too ignorant to claim objectivity.
        </p>

        {/* Stubs stacked as stickers, same shape as the boarding-pass stub on
            the industry-research note */}
        <div className="flex flex-col items-start gap-3">
          <a
            href="#/dumb-phone-2026"
            className="group inline-flex items-stretch rounded-lg bg-accent/60 hover:bg-accent transition-colors"
          >
            <span className="flex items-center px-4 border-r-2 border-dashed border-primary/30">
              <Smartphone className="w-5 h-5 text-secondary group-hover:-rotate-6 transition-transform" />
            </span>
            <span className="px-4 py-3">
              <span className="block text-[11px] uppercase tracking-[0.15em] text-primary/60">
                Experiment
              </span>
              <span className="block font-display text-foreground group-hover:text-secondary transition-colors">
                Five Days on a Dumb Phone &rarr;
              </span>
            </span>
          </a>

          <a
            href="#/chapel-interpreter"
            className="group inline-flex items-stretch rounded-lg bg-accent/60 hover:bg-accent transition-colors"
          >
            <span className="flex items-center px-4 border-r-2 border-dashed border-primary/30">
              <Languages className="w-5 h-5 text-secondary group-hover:-rotate-6 transition-transform" />
            </span>
            <span className="px-4 py-3">
              <span className="block text-[11px] uppercase tracking-[0.15em] text-primary/60">
                Volunteering
              </span>
              <span className="block font-display text-foreground group-hover:text-secondary transition-colors">
                Interpreting at the Class of 1959 Chapel &rarr;
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiscellaneousSection;
