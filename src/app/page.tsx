import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import TrustedBy from '@/components/sections/trusted-by';
import OurRoles from '@/components/sections/our-roles';
import OurMethod from '@/components/sections/our-method';
import OurSolutions from '@/components/sections/our-solutions';
import OurScreening from '@/components/sections/our-screening';
import Faqs from '@/components/sections/faqs';
import Testimonials from '@/components/sections/testimonials';
import FinalCta from '@/components/sections/final-cta';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <TrustedBy />
        <OurRoles />
        <OurMethod />
        <OurSolutions />
        <OurScreening />
        <Faqs />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}