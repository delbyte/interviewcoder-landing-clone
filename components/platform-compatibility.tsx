import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PlatformCompatibility() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Guaranteed to work with your setup</h2>
          <p className="text-xl text-muted-foreground">
            Interview Coder seamlessly integrates with your existing tools.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">LeetCode</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Interview Coder works flawlessly with LeetCode's online judge, providing real-time assistance without
              detection.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">HackerRank</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Our AI assistant is optimized for HackerRank challenges, ensuring you perform at your best.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">CodeSignal</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Ace your CodeSignal assessments with Interview Coder's undetectable support.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg">Custom Interview Platforms</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Interview Coder is designed to adapt to various custom interview environments, offering broad
              compatibility.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
