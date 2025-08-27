"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Section from "@/components/ui/section";

const faqData = [
  {
    id: "item-1",
    question: "Do you offer a guarantee?",
    answer: (
      <p>
        We offer a 60 day guarantee, starting with the new hire's start date. If the client decides to part ways with the new hire within 60 days for any reason, we will initiate a new search for the same role at no cost.
      </p>
    ),
  },
  {
    id: "item-2",
    question: "Does Coral hire outside Asia, Latam, or Eastern Europe?",
    answer: (
      <div className="space-y-4">
        <p>
          Not at the moment. Our team is physically located in California, Manila, and Buenos Aires, and we recently expanded to recruit in Eastern Europe as well.
        </p>
        <p>
          We believe our edge is our local know-how versus our global competitors, and we are fully committed to specializing and serving the unique needs and intricacies of our core candidate markets.
        </p>
      </div>
    ),
  },
  {
    id: "item-3",
    question: "What types of companies do you work with?",
    answer: (
      <p>
        We work with all types of companies from local bakeries in Australia to tech startups that are starting to hit stride, to Fortune 100 global corporations. Just as we screen our talent for clients, we also screen our clients to make sure we are sending candidates to healthy work environments.
      </p>
    ),
  },
  {
    id: "item-4",
    question: "Can Coral hire employees on behalf of my company?",
    answer: (
      <p>
        Yes. We hire employees on behalf of clients from all over the world so we incur the full employment risk while also providing a performance guarantee to the client. We perform this employment service for a small fee.
      </p>
    ),
  },
];

const Faqs = () => {
  return (
    <Section className="bg-background">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[320px_1fr] lg:gap-x-20">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">FAQs</h2>
            <p className="mt-4 text-[18px] leading-relaxed text-muted-foreground">
              Our team is committed to hiring the best possible talent. We've been doing this for 10+ years.
            </p>
          </div>
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="py-8 text-left text-lg font-semibold text-foreground hover:no-underline [&>svg]:hidden">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pt-0 text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
    </Section>
  );
};

export default Faqs;