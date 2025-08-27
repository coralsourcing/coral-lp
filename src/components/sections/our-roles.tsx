import Image from "next/image";
import Section from "@/components/ui/section";

const rolesData = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/svgs/63d087bf7d4cd97a5df5008b_growth%20marketing-6.svg?",
    title: "Growth & Marketing",
    description: "Growth Marketing Manager, Marketing Analyst, Paid Media Buyer",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/images/63d0e93d12f0f9445d4210ad_Messages-2.png?",
    title: "Support",
    description: "Customer Support Associate, Customer Success Manager, Account Manager",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/images/63d0e9478842ec287ab0138c_Phone-3.png?",
    title: "Sales & Bizdev",
    description: "Sales Development Representative, Account Executive, Lead Generation",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/images/63d0e950550a56f2497b1ed0_Calculator-4.png?",
    title: "Finance & Accounting",
    description: "Finance Analyst, Planning Manager, Bookkeeper, CPA, Controller",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/svgs/63d0878f05f3152cae0f56b4_assistants-7.svg?",
    title: "Assistants & Admin",
    description: "Executive Assistant, Virtual Assistant, Administrative Assistant",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/images/63d0e95980f1f2372260e055_Chart-5.png?",
    title: "Engineering & Data",
    description: "Software Engineer, Data Engineer, Data Analyst, Engineering Manager",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756332113901-olsejh6axb.png",
    title: "Creative & Design",
    description: "Visual Designer, Graphic Designer, Video Editor, 3D Artist, Product Designer",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dd79c64-86bb-4543-a494-38dfbeac7367-coralsourcing-com/assets/images/63d0e9673b9fe784689effe7_Hammer-7.png?",
    title: "Management",
    description: "Product Manager, Project Manager, Scrum Master",
  },
];

const OurRoles = () => {
  return (
    <Section className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-20">
          <div className="lg:col-span-1">
            <div className="max-w-xs">
              <h2 className="text-[40px] font-bold leading-[1.2] text-foreground">
                Our Roles
              </h2>
              <div className="mt-4">
                <p className="text-[18px] leading-[1.6] text-muted-foreground">
                  We focus on recruiting skilled roles that have proven success in a
                  remote-first environments.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {rolesData.map((role) => (
              <div key={role.title} className="flex flex-row items-start">
                <Image
                  src={role.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="mr-4 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold leading-7 text-foreground">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-base leading-6 text-muted-foreground">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </Section>
  );
};

export default OurRoles;