import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is Interview Coder?",
      answer:
        "Interview Coder is an AI-powered assistant designed to help you excel in technical interviews. It provides real-time coding assistance, solution generation, and strategic advice, all while remaining undetectable.",
    },
    {
      question: "How does Interview Coder remain undetectable?",
      answer:
        "Our proprietary algorithms and advanced obfuscation techniques ensure that Interview Coder operates without triggering any detection mechanisms used by interview platforms. We prioritize your anonymity and success.",
    },
    {
      question: "Can I use Interview Coder for any programming language?",
      answer:
        "Interview Coder supports a wide range of popular programming languages commonly used in technical interviews, including Python, Java, C++, JavaScript, and more. Our AI is continuously updated to expand language support.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a free plan with limited usage so you can experience the power of Interview Coder before committing to a paid subscription. You can upgrade at any time to unlock all premium features.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide community support for our free users and priority support for our Pro Plan subscribers. Our dedicated support team is always ready to assist you with any questions or issues you may encounter.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Got Questions? We've Got Answers</h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about Interview Coder.</p>
        </div>

        <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
