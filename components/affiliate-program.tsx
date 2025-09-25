import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AffiliateProgram() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Earn with Interview Coder</h2>
        <p className="text-xl text-muted-foreground mb-12">
          Join our affiliate program and help others ace their interviews while earning commissions.
        </p>

        <Card className="relative w-full max-w-3xl mx-auto h-64 overflow-hidden rounded-lg">
          <Image src="/affiliate-program-background.jpg" alt="Affiliate Program" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-white">
            <h3 className="text-3xl font-bold mb-4">Become an Affiliate</h3>
            <p className="text-lg mb-6">Share Interview Coder and earn up to 30% commission on every sale.</p>
            <Button variant="secondary" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
