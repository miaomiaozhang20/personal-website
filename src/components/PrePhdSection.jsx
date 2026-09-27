import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PrePhdSection = () => {
  const prePhdPapers = [
    {
      title: "Regulatory Uncertainty, Entrepreneurial Entry, and Market Identity Specificity: Evidence from the U.S. Autonomous Vehicle Industry",
      authors: "Jiayi Bao, and Miaomiao Zhang",
      description: "In preparation to submit",
      status: "Work in Progress",
    },
    {
      title: "Organizational-Performance Pay and Compensation Dispersion",
      authors: "Jiayi Bao, Andy Wu, and Miaomiao Zhang",
      venue: (
        <span>
          Published in{" "}
          <a
            href="https://link.springer.com/article/10.1007/s41469-025-00187-3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Journal of Organization Design
          </a>
        </span>
      ),
      abstract: "To drive organizational performance, managers design compensation packages to incentivize the collective contribution of individuals across the organization. Different pay components across individuals may prompt individual concerns based on their views of fairness: those with equity concerns believe that compensation should reflect individual contributions and thus support differences in pay (dispersion), while those with equality concerns believe that similar compensation would be fairer, thus supporting uniform pay (compression). We document the performance implications of compensation dispersion under organizational-performance pay; in increasingly prevalent compensation forms such as stock options or pooled bonuses, individual compensation consists of a pre-designated share of rewards contingent on organizational performance. We argue that prevailing equality concerns under organizational-performance pay generate opposing and asymmetric responses to dispersion from individuals with high vs. low shares of the rewards, leading to lower overall organizational performance under unequal, heterogeneous share dispersion (vs. equal, homogeneous share compression). Evidence from a controlled experiment with online workers and a supplementary field study of professional eSports athletes validates our predictions. Manipulation of two boundary conditions in the experiment further supports the proposed mechanism, as the observed effects are more pronounced when equality concerns are stronger: (1) when the payment scheme involves reward sharing (vs. not) and (2) when the rewards are presented in a percentage framing (vs. a point framing) that facilitates a stronger perception of reward-sharing.",
      status: "Published",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl font-semibold text-foreground">
        Pre-PhD Works
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {prePhdPapers.map((paper, index) => (
          <AccordionItem key={`pre-phd-${index}`} value={`pre-phd-item-${index}`}>
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex flex-col items-start">
                <span className="font-medium text-foreground">{paper.title}</span>
                <span className="text-sm text-text-light">{paper.status}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                <p className="text-sm font-medium text-text-light">{paper.authors}</p>
                {paper.venue && <div className="text-sm text-text-light">{paper.venue}</div>}
                {paper.abstract && <p className="text-text-light leading-relaxed">{paper.abstract}</p>}
                {paper.description && !paper.abstract && <p className="text-text-light">{paper.description}</p>}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PrePhdSection;
