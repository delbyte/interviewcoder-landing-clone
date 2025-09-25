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
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className={`fixed inset-x-0 z-50 transition-all duration-300 top-2`}>
        <nav className={`transition-all duration-300 p-4 max-w-[92vw] mx-auto rounded-2xl z-[60]`} style={isScrolled ? { transform: 'translateY(15px)' } : { transform: 'translateY(40px)' }}>
          {!isScrolled ? (
            <div className="hidden xl:flex flex-row self-start items-center justify-between w-full bg-transparent">
              <a className="z-100 text-white hover:text-white/80 transition-colors flex items-center gap-2 shrink-0" href="/">
                <Image src="/images/interviewcoder-logo.png" alt="Interview Coder Logo" width={46} height={46} className="rounded-xl" />
                <span className="text-sm font-semibold transition-opacity duration-200 md:block hidden text-[1.2rem] tracking-tighter">Interview Coder</span>
              </a>
              <div className="xl:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center gap-1 xl:gap-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
                <a className="hover:bg-neutral-800 rounded-full duration-200 transition-all text-white/70 relative px-2 xl:px-4 py-2 whitespace-nowrap cursor-pointer" href="/#proof-section">
                  <span className="relative z-20 flex items-center text-sm xl:text-base">Proof
                    <div className="hover:cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 relative bg-primary/10 text-primary hover:opacity-90 transition-all border border-primary/40 ml-2" style={{textShadow: '0_0_10px_hsl(60_100%_50%_/_0.5)', boxShadow: '0_0_20px_hsl(60_100%_50%_/_0.3)'}}>
                      <div className="absolute -inset-0.5 bg-primary/20 rounded-full blur-[8px] -z-10"></div>
                      NEW
                    </div>
                  </span>
                </a>
                <a className="hover:bg-neutral-800 rounded-full duration-200 transition-all text-white/70 relative px-2 xl:px-4 py-2 whitespace-nowrap cursor-pointer" href="/#pricing">
                  <span className="relative z-20 flex items-center text-sm xl:text-base">Pricing</span>
                </a>
                <a className="hover:bg-neutral-800 rounded-full duration-200 transition-all text-white/70 relative px-2 xl:px-4 py-2 whitespace-nowrap cursor-pointer" href="/help">
                  <span className="relative z-20 flex items-center text-sm xl:text-base">Help</span>
                </a>
                <a className="hover:bg-neutral-800 rounded-full duration-200 transition-all text-white/70 relative px-2 xl:px-4 py-2 whitespace-nowrap cursor-pointer" href="/blog">
                  <span className="relative z-20 flex items-center text-sm xl:text-base">Blog</span>
                </a>
                <a className="hover:bg-neutral-800 rounded-full duration-200 transition-all text-white/70 relative px-2 xl:px-4 py-2 whitespace-nowrap cursor-pointer" href="/still_working">
                  <span className="relative z-20 flex items-center text-sm xl:text-base">How it works</span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a className="text-stone-400 font-medium text-sm hover:text-white mr-2 z-20" href="/signin">Login</a>
                <button className="hidden rounded-full bg-white text-black font-semibold px-4 py-2 hover:bg-amber-200 md:flex items-center gap-2">
                  <span>Download for Free</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-4 h-4 cursor-pointer">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden xl:flex flex-row self-start items-center justify-between w-full bg-neutral-950/80 select-none overflow-visible p-2 rounded-2xl" style={{ backdropFilter: 'blur(10px)', boxShadow: 'rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset' }}>
              <a className="z-100 text-white hover:text-white/80 transition-colors flex items-center gap-2 shrink-0" href="/">
                <Image src="/images/interviewcoder-logo.png" alt="Interview Coder Logo" width={46} height={46} className="rounded-xl" />
                <span className="text-sm font-semibold transition-opacity duration-200 md:block hidden text-[1.2rem] tracking-tighter">Interview Coder</span>
              </a>
              <div className="xl:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center gap-1 xl:gap-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
                <a className="hover:bg-neutral-800 rounded-full duration-200 transition-all text-white/70 relative px-2 xl:px-4 py-2 whitespace-nowrap cursor-pointer" href="/#proof-section">
                  <span className="relative z-20 flex items-center text-sm xl:text-base">Proof
                    <div className="hover:cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 relative bg-primary/10 text-primary hover:opacity-90 transition-all border border-primary/40 ml-2" style={{textShadow: '0_0_10px_hsl(60_100%_50%_/_0.5)', boxShadow: '0_0_20px_hsl(60_100%_50%_/_0.3)'}}>
                      <div className="absolute -inset-0.5 bg-primary/20 rounded-full blur-[8px] -z-10"></div>
                      NEW
                    </div>
                  </span>
                </a>
                <a className="hover:bg-neutral-800 rounded-full duration-200 transition-all text-white/70 relative px-2 xl:px-4 py-2 whitespace-nowrap cursor-pointer" href="/#pricing">
                  <span className="relative z-20 flex items-center text-sm xl:text-base">Pricing</span>
                </a>
                <a className="hover:bg-neutral-800 rounded-full duration-200 transition-all text-white/70 relative px-2 xl:px-4 py-2 whitespace-nowrap cursor-pointer" href="/help">
                  <span className="relative z-20 flex items-center text-sm xl:text-base">Help</span>
                </a>
                <a className="hover:bg-neutral-800 rounded-full duration-200 transition-all text-white/70 relative px-2 xl:px-4 py-2 whitespace-nowrap cursor-pointer" href="/blog">
                  <span className="relative z-20 flex items-center text-sm xl:text-base">Blog</span>
                </a>
                <a className="hover:bg-neutral-800 rounded-full duration-200 transition-all text-white/70 relative px-2 xl:px-4 py-2 whitespace-nowrap cursor-pointer" href="/still_working">
                  <span className="relative z-20 flex items-center text-sm xl:text-base">How it works</span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a className="text-stone-400 font-medium text-sm hover:text-white mr-2 z-20" href="/signin">Login</a>
                <button className="hidden rounded-full bg-white text-black font-semibold px-4 py-2 hover:bg-amber-200 md:flex items-center gap-2">
                  <span>Download for Free</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-4 h-4 cursor-pointer">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <style dangerouslySetInnerHTML={{ __html: `.hero-bg::before { content: ''; position: absolute; top: 0; left: 0; width: 50%; height: 100%; background-image: url(/images/proof-glow.png); background-size: 100% 100%; background-position: center; background-repeat: no-repeat; } .hero-bg::after { content: ''; position: absolute; top: 0; right: 0; width: 50%; height: 100%; background-image: url(/images/proof-glow.png); background-size: 100% 100%; background-position: center; background-repeat: no-repeat; transform: scaleX(-1); }` }} />
      <section
        className="flex flex-col items-center justify-center pt-32 md:pt-28 m-6 rounded-[38px] text-white overflow-hidden mb-[4rem] lg:mb-[6rem] relative hero-bg"
        style={{ background: 'linear-gradient(to bottom, #FFFFFF10, #FFFFFF00)' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/proof-glow.png"
            alt="Background Glow"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-30 w-1/2 left-0"
          />
          <Image
            src="/images/proof-glow.png"
            alt="Background Glow Flipped"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-30 w-1/2 right-0 transform scaleX(-1)"
          />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-4">
              Pass Every
              <Image src="/images/leetcode-logo.png" alt="Leetcode Logo" width={300} height={100} />
            </div>
            Interview
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Get real-time coding assistance during LeetCode-style interviews. Undetectable, powerful, and designed to
            help you showcase your true potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="relative">
              <button className="group relative flex items-center justify-center gap-3 px-5 py-4 rounded-full text-base md:text-lg font-semibold min-w-[200px] overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed">
                <div className="absolute inset-0 bg-gradient-to-b from-[#EFCC3A] to-[#EFB63A]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <img alt="Apple" width="18" height="18" className="opacity-90 brightness-0" src="/images/apple.svg" />
                  <span className="text-black font-semibold tracking-tight">Get for Mac</span>
                </div>
                <div className="absolute inset-0 rounded-full shadow-xl shadow-[#EFCC3A]/30 group-hover:shadow-[#EFCC3A]/50 transition-shadow duration-300"></div>
              </button>
            </div>
            <div className="relative">
              <button className="group relative flex items-center justify-center gap-3 px-5 py-4 rounded-full text-base md:text-lg font-semibold min-w-[200px] overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed">
                <div className="absolute inset-0 bg-gradient-to-b from-[#EFCC3A] to-[#EFB63A]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <img alt="Windows" width="18" height="18" className="opacity-90 brightness-0" src="/images/windows.svg" />
                  <span className="text-black font-semibold tracking-tight">Get for Windows</span>
                </div>
                <div className="absolute inset-0 rounded-full shadow-xl shadow-[#EFCC3A]/30 group-hover:shadow-[#EFCC3A]/50 transition-shadow duration-300"></div>
              </button>
            </div>
          </div>
        </div>

                <div className="aspect-video rounded-[32px] overflow-visible shadow-2xl relative p-2 mb-12 mx-auto" style={{background: 'linear-gradient(to bottom, #FFDE5820, #FFFFFF10)', maxWidth: '1100px', width: '100%'}}>
          <video src="https://api.interviewcoder.co/storage/v1/object/sign/Videos/how%20to%20use_new.MOV?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZWI0ZWNhYy1jNDBlLTQxM2YtYjNjZC00ODIzMzJhNzcxMWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvaG93IHRvIHVzZV9uZXcuTU9WIiwiaWF0IjoxNzU4MjU0OTg1LCJleHAiOjMxNTM2MDE3NTgyNTQ5ODV9.CbkfCODV_3EmJJymOLmtaBg4uuSa4z12ExTUmBsiT44" poster="/images/hero-video-thumbnail.png" autoPlay muted loop controls playsInline className="w-full h-full rounded-[32px] relative z-10 bg-black" preload="auto">
            Your browser does not support the video tag.
          </video>
          <img alt="Hero Video Top" width="700" height="700" className="absolute rounded-[32px] pointer-events-none z-0" style={{color: 'transparent', top: '-45%', left: '50%', transform: 'translateX(-50%)'}} src="/images/hero-video-top.png" />
        </div>

        <span className="text-white/60 text-2xl hidden md:block my-8">Trusted by <span className="text-white font-bold">97,000+ Devs</span> Hired at Top Companies</span>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="justify-center items-center gap-10 relative overflow-hidden hidden md:flex">
            <img alt="google" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '120px', height: '120px', objectFit: 'contain'}} src="/images/google-logo.png" />
            <img alt="amazon" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '120px', height: '120px', objectFit: 'contain'}} src="/images/amazon-logo.png" />
            <img alt="meta" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '120px', height: '120px', objectFit: 'contain'}} src="/images/meta-logo.png" />
            <img alt="netflix" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '120px', height: '120px', objectFit: 'contain'}} src="/images/netflix-logo.png" />
            <img alt="spotify" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '120px', height: '120px', objectFit: 'contain'}} src="/images/spotify-logo.png" />
            <img alt="google" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '120px', height: '120px', objectFit: 'contain'}} src="/images/google-logo.png" />
            <img alt="amazon" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '120px', height: '120px', objectFit: 'contain'}} src="/images/amazon-logo.png" />
            <img alt="meta" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '120px', height: '120px', objectFit: 'contain'}} src="/images/meta-logo.png" />
            <img alt="netflix" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '120px', height: '120px', objectFit: 'contain'}} src="/images/netflix-logo.png" />
            <img alt="spotify" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '120px', height: '120px', objectFit: 'contain'}} src="/images/spotify-logo.png" />
            <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none z-10" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.8), transparent)'}}></div>
            <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none z-10" style={{background: 'linear-gradient(to left, rgba(0,0,0,0.8), transparent)'}}></div>
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
