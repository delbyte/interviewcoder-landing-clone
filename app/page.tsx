"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckIcon, PlayIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import { Testimonials } from "@/components/testimonials"
import { Proof } from "@/components/proof"
import { UndetectabilityGuarantee } from "@/components/undetectability-guarantee" // Renamed import
import { PlatformCompatibility } from "@/components/platform-compatibility" // New import
import { UntrackedAnimation } from "@/components/untracked-animation" // New import
import { FAQSection } from "@/components/faq-section" // New import
import { AffiliateProgram } from "@/components/affiliate-program" // New import
import { FinalCTA } from "@/components/final-cta" // New import

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="fixed top-2 inset-x-0 z-50 px-4">
        <nav className="max-w-7xl mx-auto bg-card/80 backdrop-blur-lg border border-border rounded-xl px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/images/interviewcoder-logo.png" alt="Interview Coder Logo" width={40} height={40} />
              <span className="text-xl font-semibold">Interview Coder</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </a>
              <a href="#proof" className="text-muted-foreground hover:text-foreground transition-colors">
                Proof
              </a>
              <a href="#undetectability" className="text-muted-foreground hover:text-foreground transition-colors">
                Undetectability
              </a>
              <a href="#compatibility" className="text-muted-foreground hover:text-foreground transition-colors">
                Compatibility
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
              <Button variant="outline" size="sm">
                Log in
              </Button>
              <Button size="sm">Get Started</Button>
            </div>

            <Button variant="ghost" size="sm" className="md:hidden">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{
          backgroundImage: `url(/images/proof-glow.png), url(/images/proof-glow.png)`,
          backgroundSize: "50% 100%, 50% 100%",
          backgroundPosition: "left center, right center",
          backgroundRepeat: "no-repeat",
          transform: "scaleX(1)", // Ensure the right image is flipped
        }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/proof-glow.png"
            alt="Background Glow"
            layout="fill"
            objectFit="cover"
            className="opacity-30 w-1/2 left-0"
          />
          <Image
            src="/images/proof-glow.png"
            alt="Background Glow Flipped"
            layout="fill"
            objectFit="cover"
            className="opacity-30 w-1/2 right-0 transform scaleX(-1)"
          />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge variant="secondary" className="mb-6">
            AI Interview Assistant
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance flex flex-col items-center justify-center">
            Pass Every
            <Image src="/images/leetcode-logo.png" alt="Leetcode Logo" width={300} height={100} className="my-4" />
            Interview
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Get real-time coding assistance during LeetCode-style interviews. Undetectable, powerful, and designed to
            help you showcase your true potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              Download for Free
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <PlayIcon className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg mb-12">
            <Image src="/images/hero-video-thumbnail.png" alt="Hero Video Thumbnail" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <PlayIcon className="h-20 w-20 text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <Image src="/images/amazon-logo.png" alt="Amazon" width={100} height={40} className="h-8 object-contain" />
            <Image
              src="/images/netflix-logo.png"
              alt="Netflix"
              width={100}
              height={40}
              className="h-8 object-contain"
            />
            <Image
              src="/images/spotify-logo.png"
              alt="Spotify"
              width={100}
              height={40}
              className="h-8 object-contain"
            />
            <Image src="/images/google-logo.png" alt="Google" width={100} height={40} className="h-8 object-contain" />
            <Image src="/images/meta-logo.png" alt="Meta" width={100} height={40} className="h-8 object-contain" />
          </div>
        </div>
      </section>

      <Testimonials />

      <Proof />
      <Proof flipped={true} />

      <UndetectabilityGuarantee />

      <PlatformCompatibility />

      <UntrackedAnimation />

      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Commands We Love</h2>
            <p className="text-xl text-muted-foreground">Control everything with simple keyboard commands</p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center py-6 border-b border-border">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Ask Question</h3>
                <p className="text-muted-foreground text-sm">Ask the AI assistant any question about the problem</p>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium">
                  Control
                </kbd>
                <span className="text-muted-foreground mx-2">+</span>
                <kbd className="bg-secondary text-secondary-foreground border border-border px-3 py-2 rounded-lg text-sm font-medium">
                  B
                </kbd>
              </div>
            </div>

            <div className="flex justify-between items-center py-6 border-b border-border">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Take Screenshot</h3>
                <p className="text-muted-foreground text-sm">Capture screenshots of the interview question</p>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium">
                  Control
                </kbd>
                <span className="text-muted-foreground mx-2">+</span>
                <kbd className="bg-secondary text-secondary-foreground border border-border px-3 py-2 rounded-lg text-sm font-medium">
                  H
                </kbd>
              </div>
            </div>

            <div className="flex justify-between items-center py-6 border-b border-border">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Generate Solution</h3>
                <p className="text-muted-foreground text-sm">Generate an initial solution with explanations</p>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium">
                  Control
                </kbd>
                <span className="text-muted-foreground mx-2">+</span>
                <kbd className="bg-secondary text-secondary-foreground border border-border px-3 py-2 rounded-lg text-sm font-medium">
                  Enter
                </kbd>
              </div>
            </div>

            <div className="flex justify-between items-center py-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Reset Context</h3>
                <p className="text-muted-foreground text-sm">Reset everything to start fresh with a new problem</p>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium">
                  Control
                </kbd>
                <span className="text-muted-foreground mx-2">+</span>
                <kbd className="bg-secondary text-secondary-foreground border border-border px-3 py-2 rounded-lg text-sm font-medium">
                  G
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pricing</h2>
            <p className="text-xl text-muted-foreground">How much is a SWE job offer worth to you?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">IC</span>
                  </div>
                  <CardTitle className="text-xl">Free Plan</CardTitle>
                </div>
                <CardDescription>Try it for Free</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-6" variant="secondary">
                  Get started
                </Button>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm">Limited usage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm">Basic features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm">Community support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Plan Annual (now highlighted) */}
            <Card className="bg-card border-primary relative scale-105 shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">The Best Deal</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">IC</span>
                  </div>
                  <CardTitle className="text-xl">Pro Plan Annual</CardTitle>
                </div>
                <CardDescription>Save 58% with annual billing</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$25</span>
                  <span className="text-muted-foreground">/month</span>
                  <div className="text-sm text-muted-foreground">Billed annually</div>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-6">Get started</Button>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm">Everything in Pro</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm">58% savings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm">Priority support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Plan Monthly (now regular) */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">IC</span>
                  </div>
                  <CardTitle className="text-xl">Pro Plan Monthly</CardTitle>
                </div>
                <CardDescription>Unlock all pro features</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$60</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-6" variant="secondary">
                  Get started
                </Button>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm">Unlimited usage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm">All features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm">Priority support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm">Advanced AI models</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FAQSection />

      <AffiliateProgram />

      <FinalCTA />

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image src="/images/interviewcoder-logo.png" alt="Interview Coder Logo" width={32} height={32} />
              <span className="text-lg font-semibold">Interview Coder</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-muted-foreground">© 2025 Interview Coder. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
