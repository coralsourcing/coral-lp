import Image from 'next/image';

const solutions = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/svgs/63d087bf7d4cd91eb2f50095_Target-8.svg?",
    iconAlt: "Target Icon",
    iconWidth: 80,
    iconHeight: 80,
    title: "Contingent Recruiting",
    description: "Get going and pay only for a successful placement. Better for single roles.",
    priceValue: "30",
    priceUnit: "% salary",
    features: [
      "Pay only upon a successful placement starting.",
      "One account manager for all ongoing questions and support.",
      "No month-to-month subscription, retainers, or hidden fees.",
    ],
    footerLink: "mailto:hello@coralsourcing.com?subject=Bulk%20Rates",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/images/63d0e563150c60206253eac0_5e6ab6a4fd8afa09f302a6f8_browser-8.png?",
    iconAlt: "Browser Icon",
    iconWidth: 80,
    iconHeight: 80,
    title: "Dedicated Recruiter",
    description: "Get your own full-time remote recruiter. Better for hiring 2-3 roles.",
    priceValue: "$1499",
    priceUnit: "/ month",
    features: [
      "Dedicate full-time ~40 hours per week to your business.",
      "One account manager for all ongoing questions and support.",
      "HR guidance including benefits administration, payroll, and more.",
    ],
    footerLink: "#",
  },
];

const OurSolutions = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[40px] font-bold leading-[1.2] text-black">
            Our Solutions
          </h2>
          <p className="text-[18px] leading-relaxed text-muted-foreground mt-4">
            Coral is designed to be affordable for the vast majority of organizations around the world and ~80% cheaper than a full-time recruiter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div key={solution.title} className="bg-secondary p-10 rounded-lg flex flex-col items-center text-center">
              <Image
                src={solution.icon}
                alt={solution.iconAlt}
                width={solution.iconWidth}
                height={solution.iconHeight}
              />
              <h3 className="text-2xl font-semibold text-black mt-8">
                {solution.title}
              </h3>
              <p className="text-base text-muted-foreground mt-2">
                {solution.description}
              </p>
              <p className="text-2xl text-muted-foreground mt-8">
                <span className="text-[40px] font-bold text-black">{solution.priceValue}</span>
                {solution.priceUnit}
              </p>
              <div className="w-full mt-8 flex-grow">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex}>
                    <div className="flex items-start gap-4 text-left">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/svgs/63cf35f010e34f610c8de9b8_check-9.svg?"
                        alt="Checkmark"
                        width={16}
                        height={16}
                        className="mt-1 flex-shrink-0"
                      />
                      <p className="text-sm font-medium text-gray-800">{feature}</p>
                    </div>
                    {featureIndex < solution.features.length - 1 && (
                      <div className="h-px bg-border my-4" />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-muted-foreground mt-8 pt-4">
                Hiring &gt;10 roles?{' '}
                <a href={solution.footerLink} className="text-primary hover:underline font-semibold">
                  Ask about bulk rates
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;