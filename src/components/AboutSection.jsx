import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
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
            at the Digital, Data, and Design Institute at Harvard.
          </p>
          <p className="text-lg text-text-light">
            I study how decision makers learn under uncertainty in the earliest stages of innovation process. I design and run field experiments in collaboration with entrepreneurial ecosystem partners. Theoretically, I am interested in the behavioral and cognitive aspects of firms from a problem-solving perspective. Empirically, I identify specific constraints in information processing, technology augmentation, and knowledge diffusion, and test interventions that mitigate these frictions.
          </p>
          <p className="text-lg text-text-light">
            My research links micro-level belief updating to macro-level outcomes in productivity, innovation direction, and creative recombination within organizations.
          </p>
          <p className="flex items-center text-lg text-foreground font-medium">
            <Mail className="w-5 h-5 mr-2 text-text-light" />
            <a href="mailto:mzhang@hbs.edu" className="hover:underline">
              mzhang[@]hbs.edu
            </a>
          </p>
          <p className="flex items-center text-lg text-foreground font-medium">
            <FileText className="w-5 h-5 mr-2 text-text-light" />
            <a
              href="https://www.dropbox.com/scl/fi/91yeba85gdub0zpmrn5bi/Miaomiao_Zhang_CV_032826.docx?rlkey=7umwss6tr0syl5q2fleai85rq&st=mdae1go0&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Curriculum Vitae
            </a>
          </p>
        </div>
      </div>

      {/* Affiliations Section */}
      <div className="mt-8 space-y-4">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Affiliations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Coast-to-Coast Doctoral Workshop */}
          <div className="border border-border rounded-lg overflow-hidden hover:border-secondary transition-all hover:shadow-lg">
            <div className="aspect-video overflow-hidden pointer-events-none">
              <iframe
                src="https://coast-to-coast.org"
                className="w-full h-full scale-50 origin-top-left"
                style={{ width: '200%', height: '200%' }}
                title="Coast-to-Coast Doctoral Workshop"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-foreground">
                <a
                  href="https://coast-to-coast.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Coast-to-Coast Doctoral Workshop
                </a>
              </h3>
              <p className="text-sm text-text-light">Co-leading the junior scholars community</p>
            </div>
          </div>

          {/* Innovation Growth Lab */}
          <div className="border border-border rounded-lg overflow-hidden hover:border-secondary transition-all hover:shadow-lg">
            <div className="aspect-video overflow-hidden pointer-events-none">
              <iframe
                src="https://www.innovationgrowthlab.org/about/research-network/phd-community"
                className="w-full h-full scale-50 origin-top-left"
                style={{ width: '200%', height: '200%' }}
                title="Innovation Growth Lab"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-foreground">
                <a
                  href="https://www.innovationgrowthlab.org/about/research-network/phd-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Innovation Growth Lab
                </a>
              </h3>
              <p className="text-sm text-text-light">Co-leading the "Behind the Scenes" of field experimental research series</p>
            </div>
          </div>

          {/* HBS Shad */}
          <div className="border border-border rounded-lg overflow-hidden hover:border-secondary transition-all hover:shadow-lg">
            <div className="aspect-video overflow-hidden pointer-events-none">
              <iframe
                src="https://www.instagram.com/p/DO6tNaEEcy4/embed"
                className="w-full h-full scale-50 origin-top-left"
                style={{ width: '200%', height: '200%' }}
                title="HBS Shad"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-foreground">
                <a
                  href="https://www.instagram.com/p/DO6tNaEEcy4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  HBS Shad
                </a>
              </h3>
              <p className="text-sm text-text-light">Yoga instructor</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
