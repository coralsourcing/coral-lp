import Image from 'next/image';
import Section from "@/components/ui/section";

const screeningItems = [
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756332454052-hjczi8mbhp4.png',
    title: 'Top 1%',
    description: 'We typically screen 200-300 candidates per role and send only the best.',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756332460123-7jyfkdolhc.png',
    title: 'Western Culture',
    description: 'Our candidates are accustomed to Western work environments.',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756332466170-jbe1vn8ol1.png',
    title: 'Flexible Hours',
    description: 'Talent will work on global time zones based on your business needs.',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756332473805-4y7eql4xgx.png',
    title: 'Dedicated to You',
    description: 'We actively screen to ensure new hires are exclusively working for you.',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756332479315-s0ajkefezk.png',
    title: 'Remote First',
    description: 'Our candidates have proven experience with working in remote roles.',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756332485093-pi3d7lz0x9f.png',
    title: 'College Educated',
    description: '100% of candidates we hire have a degree from a reputable university.',
  },
];

interface ScreeningItemProps {
  item: (typeof screeningItems)[0];
}

const ScreeningItem = ({ item }: ScreeningItemProps) => {
  const { iconUrl, title, description } = item;

  return (
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0 w-12 h-12">
        <Image src={iconUrl} alt={`${title} icon`} width={48} height={48} className="w-full h-full object-contain" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-base leading-snug text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const OurScreening = () => {
  return (
    <Section className="bg-background">
        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-20">
          <div className="lg:w-5/12 flex-shrink-0">
            <div className="lg:max-w-sm">
              <h2 className="text-[40px] font-bold leading-tight text-foreground">Our Screening</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Assessing remote talent isn't easy. We've developed a proprietary set of criteria and process after hundreds of successful hires for clients.
              </p>
            </div>
          </div>
          <div className="lg:w-7/12 mt-12 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {screeningItems.map((item) => (
                <ScreeningItem key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
    </Section>
  );
};

export default OurScreening;