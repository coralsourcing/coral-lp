import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  return (
    <header className="bg-background">
      <div className="container max-w-[1200px] mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Go to Coral Sourcing homepage">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/svgs/63d087bf7d4cd93375f5007f_Coral%20Logo-1.svg?"
              alt="Coral Logo"
              width={112}
              height={32}
              priority
            />
          </Link>
          <nav>
            <Link
              href="https://aviaras.notion.site/25cd70509856803b878cc502df7e1d42?pvs=105"
              className="inline-block bg-primary text-primary-foreground font-semibold text-base py-3 px-6 rounded-md hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Start Hiring
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;