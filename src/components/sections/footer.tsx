import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/svgs/63d087bf7d4cd93375f5007f_Coral%20Logo-1.svg?";

  return (
    <footer className="bg-background border-t border-border">
      <div className="container max-w-[1200px] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-4">
          <div className="flex flex-col sm:flex-row items-center gap-y-4 text-center sm:gap-x-8">
            <Link href="/">
              <Image
                src={logoUrl}
                alt="Coral Logo"
                width={88}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-sm font-medium text-muted-foreground">
              Proudly built in 🇵🇭 +&nbsp;🇺🇸
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-x-8">
            <nav className="flex items-center gap-x-6">
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <a
                href="https://jobs.ashbyhq.com/coral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Careers
              </a>
            </nav>
            <p className="text-sm font-medium text-muted-foreground">
              © Coral Sourcing LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;