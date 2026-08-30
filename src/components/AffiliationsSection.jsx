const AffiliationsSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl font-semibold text-foreground">
        Affiliations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Coast-to-Coast Doctoral Workshop */}
        <div className="border border-transparent rounded-lg overflow-hidden hover:border-secondary transition-all hover:shadow-lg">
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
        <div className="border border-transparent rounded-lg overflow-hidden hover:border-secondary transition-all hover:shadow-lg">
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
        <div className="border border-transparent rounded-lg overflow-hidden hover:border-secondary transition-all hover:shadow-lg">
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
  );
};

export default AffiliationsSection;
