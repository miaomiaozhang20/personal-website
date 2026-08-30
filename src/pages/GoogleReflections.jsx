import { ArrowLeft } from "lucide-react";

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
        <img
          src={`${import.meta.env.BASE_URL}google-badges.png`}
          alt="Google internal badge wall collected during my summer 2026 student researcher internship"
          className="w-full h-auto"
        />
        <p className="border-t border-border/30 bg-gray-50 p-3 text-sm text-text-light text-center">
          The badge wall: three months of tools, codelabs, and small rites of
          passage.
        </p>
      </div>

      {/*
        TODO: embed the full blog post here.
        - If it lives on Substack/Medium/Notion, drop an <iframe> in the block below.
        - If you'd rather write it inline, replace the block with your own <p> tags,
          styled like: <p className="text-lg text-text-light leading-relaxed">…</p>
      */}
      <div className="border-2 border-dashed border-secondary/50 rounded-lg p-10 text-center space-y-2">
        <p className="text-lg font-medium text-foreground">
          The full reflection is on its way.
        </p>
        <p className="text-text-light italic">
          Coming soon — this page is where it will live.
        </p>
      </div>
    </div>
  );
};

export default GoogleReflections;
