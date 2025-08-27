import Image from 'next/image';

type Testimonial = {
  quoteIconUrl: string;
  quoteIconWidth: number;
  quoteIconHeight: number;
  quoteIconClassName: string;
  quote: string;
  profileImageUrl: string;
  profileName: string;
  profileTitle: string;
};

const testimonialsData: Testimonial[] = [
{
  quoteIconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/images/63d0e6fd5a4ea17167a1a6b6_Frame 2-13.png?",
  quoteIconWidth: 110,
  quoteIconHeight: 24,
  quoteIconClassName: "h-6",
  quote: "Coral isn't like other agencies. They really dive deep into the job requirements and culture. We are thrilled with the hires they've helped with and look forward to working with them again soon.",
  profileImageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/svgs/63d087bf7d4cd9b1baf50098_image%2021-12.svg?",
  profileName: "Ryan G.",
  profileTitle: "Director of Product"
},
{
  quoteIconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/svgs/63d087bf7d4cd9f90cf500a5_image%2023-13.svg?",
  quoteIconWidth: 32,
  quoteIconHeight: 32,
  quoteIconClassName: "h-8",
  quote: "Our dedicated recruiter has been a true game changer. He not only helped us surpass our hiring targets but also delivered a universally positive experience with every candidate.",
  profileImageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/icons/63d0e6a6cca0885b39c47844_image%2021-1-1.png?",
  profileName: "Anne D.",
  profileTitle: "Head of People"
},
{
  quoteIconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/svgs/63d087bf7d4cd9adfef500a7_Frame%201.svg?",
  quoteIconWidth: 32,
  quoteIconHeight: 32,
  quoteIconClassName: "h-8",
  quote: "We've used every offshoring agency out there and nobody comes close. Our hiring managers and candidates rave about our Coral experience. We just opened another 5 roles with them.",
  profileImageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/icons/63d0e663acb275afa33d1560_image%2023-2.png?",
  profileName: "Jeremy C.",
  profileTitle: "CEO"
}];


export default function Testimonials() {
  return (
    <section className="bg-background py-20">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-foreground mb-10">Our Clients</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full text-left">
            {testimonialsData.map((testimonial, index) =>
            <div key={index} className="flex flex-col gap-6">
                <p className="text-base text-muted-foreground leading-normal">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <Image
                  src={testimonial.profileImageUrl}
                  alt={testimonial.profileName}
                  width={48}
                  height={48}
                  className="w-12 h-12" />

                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {testimonial.profileName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.profileTitle}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);
}