import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/section";

const Hero = () => {
  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-[56px] font-bold leading-[1.1] text-foreground max-w-[440px]">
              Hire amazing remote talent.
            </h1>

            <div className="max-w-[480px]">
              <p className="text-[18px] text-muted-foreground leading-[1.6] mt-4 mb-6">
                We recruit skilled remote talent in Asia, Latin America, and
                Eastern Europe for growing companies.
              </p>
            </div>

            <Link
              href="https://aviaras.notion.site/25cd70509856803b878cc502df7e1d42?pvs=105"
              className="inline-block bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg text-base hover:bg-primary/90 transition-colors"
            >
              Start Hiring
            </Link>
          </div>

          {/* Right Column */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/images/63d087bf7d4cd909d2f5009d_hero%20right-1.webp?"
              alt="Illustration of remote workers collaborating"
              width={500}
              height={478}
              priority
              className="w-full max-w-[500px] h-auto"
            />
          </div>
        </div>
    </Section>
  );
};

export default Hero;