import React from 'react';

const methodSteps = [
  {
    number: "01.",
    title: "Define Role",
    description: "Share your ideal hire: hard skills, experience, target comp, culture fit, timeline, and more. We will base our screening and sourcing off of your requirements.",
    duration: "2-3 days",
  },
  {
    number: "02.",
    title: "Source & Screen",
    description: "We source candidates through our local networks and interview based on the details you provide. All conversations and notes are recorded and shared.",
    duration: "1-2 wks",
  },
  {
    number: "03.",
    title: "Hire & Onboard",
    description: "We work with your team to perform reference checks, close, and onboard the most qualified candidate as swiftly as possible for your business.",
    duration: "1-2 wks",
  },
  {
    number: "04.",
    title: "Performance Guarantee",
    description: "If you decides to part ways with your new hire within 60 days for any reason, we will initiate a new search for the same role at no cost.",
    duration: "60 days",
  },
];

const OurMethod = () => {
  return (
    <>
      <div className="h-px bg-border" />
      <section className="bg-background py-20 lg:py-24">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-start gap-16">
            <div className="max-w-lg">
              <h2 className="text-[40px] font-bold leading-tight tracking-[-0.02em] text-foreground">
                Our Method
              </h2>
              <p className="mt-4 text-[18px] leading-relaxed text-muted-foreground">
                We function more like your internal recruiting team than an outside agency, fully immersing ourselves in your business and culture.
              </p>
            </div>

            <div className="w-full divide-y divide-border border-y border-border">
              {methodSteps.map((step) => (
                <div key={step.number} className="flex w-full items-start justify-between gap-x-6 py-10 md:gap-x-10">
                  <p className="w-12 flex-shrink-0 text-sm text-muted-foreground">{step.number}</p>
                  <div className="flex-grow">
                    <h3 className="text-[18px] font-semibold leading-tight text-foreground">{step.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                  <p className="w-20 flex-shrink-0 text-right text-sm text-muted-foreground">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMethod;