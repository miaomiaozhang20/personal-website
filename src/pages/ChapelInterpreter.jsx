import { ArrowLeft } from "lucide-react";

// Intentionally blank: the header stands, and the reflection gets written later.
const ChapelInterpreter = () => {
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
          Interpreting at the Class of 1959 Chapel
        </h1>
      </div>

      <p className="text-base italic leading-relaxed text-text-light/70">
        Notes to come.
      </p>
    </div>
  );
};

export default ChapelInterpreter;
