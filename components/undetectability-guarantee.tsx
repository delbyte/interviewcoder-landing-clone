"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function UndetectabilityGuarantee() {
  return (
    <section id="undetectability" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How we guarantee undetectability</h2>
          <p className="text-xl text-muted-foreground">
            Our advanced AI ensures you remain completely anonymous during your interviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="md:col-span-2 bg-card border-border flex flex-col items-center justify-center p-6">
            <CardHeader>
              <CardTitle className="text-2xl">Advanced Obfuscation</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/abstract-circuit-board.png"
                alt="Advanced Obfuscation"
                width={400}
                height={200}
                className="rounded-lg object-cover"
              />
            </CardContent>
          </Card>

          <Card className="bg-card border-border flex flex-col items-center justify-center p-6">
            <CardHeader>
              <CardTitle className="text-2xl">Human-like Responses</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/human-brain-neural-network.jpg"
                alt="Human-like Responses"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </CardContent>
          </Card>

          <Card className="bg-card border-border flex flex-col items-center justify-center p-6">
            <CardHeader>
              <CardTitle className="text-2xl">Real-time Adaptation</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/adaptive-algorithm-flow-chart.jpg"
                alt="Real-time Adaptation"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </CardContent>
          </Card>

          <Card className="bg-card border-border flex flex-col items-center justify-center p-6">
            <CardHeader>
              <CardTitle className="text-2xl">Secure Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/secure-server-infrastructure.jpg"
                alt="Secure Infrastructure"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
