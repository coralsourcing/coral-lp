import React from 'react';
import Image from 'next/image';
import Section from "@/components/ui/section";

const FinalCta = () => {
  return (
    <>
      <div className="border-t border-border" />
      <Section className="bg-background">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-[44px] font-bold leading-tight tracking-tight text-foreground">
                Your global recruiting team
              </h2>
              <p className="mt-4 mb-6 max-w-lg text-[18px] leading-relaxed text-muted-foreground">
                Our economics only work if we can retain clients and deliver real value over time. If you're interested in hiring global talent, we should talk.
              </p>
              <a
                href="https://aviaras.notion.site/25cd70509856803b878cc502df7e1d42?pvs=105"
                className="inline-block rounded-lg bg-primary py-3 px-6 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
              >
                Start Hiring
              </a>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/images/63d0878f05f31554c90f56c3_dedicated%20recruiting-14.webp?"
                alt="Illustration of a dedicated recruiting team collaborating on a project board"
                width={500}
                height={321}
                className="h-auto w-full max-w-[500px]"
              />
            </div>
          </div>
      </Section>
    </>
  );
};

export default FinalCta;