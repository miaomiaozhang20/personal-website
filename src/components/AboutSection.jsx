import { Mail, FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Image Section - Bigger and Square */}
        <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}IMG_2834.JPG`}
            alt="Miaomiao Zhang"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <h1 className="text-5xl font-bold text-foreground">Miaomiao Zhang</h1>
          <p className="text-sm text-text-light">
            淼淼 "Mee-ow Mee-ow" (she/her/hers)
          </p>
          <p className="text-lg text-text-light">
            Hello! I am a PhD candidate at Harvard Business School, where I am fortunate to be advised by Jacqueline (Jackie) Lane, Scott Stern (MIT), and Raffaella Sadun. I am also affiliated with the{" "}
            <a
              href="https://d3.harvard.edu/lish/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              Laboratory for Innovation Science Research
            </a>{" "}
            at the HBS AI Institute.
          </p>
          <p className="text-lg text-text-light">
            I study opportunity identification in the early stages of the innovation process, from both the ideation and the evaluation angles. I design and run field experiments in collaboration with entrepreneurial ecosystem partners. Theoretically, I am interested in the behavioral and cognitive aspects of firms from a problem-solving perspective. Empirically, I identify specific constraints in technology, productivity, and knowledge diffusion, and test interventions that mitigate these frictions.
          </p>
          <p className="text-lg text-text-light">
            I constantly draw inspiration from industry practitioners at frontier AI labs and from research teams at innovation-driven institutions. I collaborate with teams across operations research, computer science, economics, strategy, and psychology to study phenomena that matter for organizations in the digital age of AI and entrepreneurship.
          </p>
          <p className="flex items-center text-lg text-foreground font-medium">
            <Mail className="w-5 h-5 mr-2 text-text-light" />
            {/* Written out rather than linked, so the address never appears
                in machine-readable markup */}
            <span>mzhang [at] hbs [dot] edu</span>
          </p>
          <p className="flex items-center text-lg text-foreground font-medium">
            <FileText className="w-5 h-5 mr-2 text-text-light" />
            <a
              href="https://www.dropbox.com/scl/fi/l2a7ew2vu11so5jedg1vx/ZHANG_Miaomiao_CV.docx?rlkey=7uz5wqmlh3hq5abf0ly6twpid&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              CV
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
