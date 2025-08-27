import React from 'react';
import Section from "@/components/ui/section";

const logos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/svgs/63d087bf7d4cd95ca3f50081_disnep-2.svg?",
    alt: "Disney logo"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/svgs/63d087bf7d4cd9bc9cf50083_canva-3.svg?",
    alt: "Canva logo"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/svgs/63d087bf7d4cd95914f50082_salesforce-4.svg?",
    alt: "Salesforce logo"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/svgs/63d087bf7d4cd95898f50080_microsoft-5.svg?",
    alt: "Microsoft logo"
  }
];

const TrustedBy = () => {
  return (
    <Section>
      <div className="flex items-center gap-4">
        <p className="flex-shrink-0 text-xs text-muted-foreground whitespace-nowrap">
          Trusted by teams at
        </p>
        <div className="flex items-center gap-10">
          {logos.map((logo, index) => (
            <div key={index}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-auto max-h-[28px] w-auto opacity-60 grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TrustedBy;