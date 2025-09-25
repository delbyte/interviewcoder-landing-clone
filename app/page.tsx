"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckIcon, PlayIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import { Testimonials } from "@/components/testimonials"
import { ProofSectionTwo } from "@/components/proof-section-two"
import { UndetectabilityGuarantee } from "@/components/undetectability-guarantee" 
import { PlatformCompatibility } from "@/components/platform-compatibility" 
import { UntrackedAnimation } from "@/components/untracked-animation"
import { CommandsSection } from "@/components/commands-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section" 
import { AffiliateProgram } from "@/components/affiliate-program"
import { FinalCTA } from "@/components/final-cta" 
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

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
      <style dangerouslySetInnerHTML={{ __html: `.hero-bg::before { content: ''; position: absolute; top: 0; left: 0; width: 50%; height: 100%; background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%), url(/images/proof-glow.png); background-size: cover, 100% 100%; background-position: center; background-repeat: no-repeat; opacity: 0.8; } .hero-bg::after { content: ''; position: absolute; top: 0; right: 0; width: 50%; height: 100%; background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%), url(/images/proof-glow.png); background-size: cover, 100% 100%; background-position: center; background-repeat: no-repeat; transform: scaleX(-1); opacity: 0.8; }` }} />
      <section
        className="flex flex-col items-center justify-center pt-32 md:pt-28 m-6 rounded-[38px] text-white overflow-hidden mb-[4rem] lg:mb-[6rem] relative hero-bg"
        style={{ background: 'linear-gradient(to bottom, #FFFFFF10, #FFFFFF00)' }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-4">
              Pass Every
              <Image src="/images/leetcode-logo.png" alt="Leetcode Logo" width={300} height={100} />
            </div>
            Interview
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            InterviewCoder is an undetectable desktop application that uses AI to help you ace any Leetcode interview or online assesment.
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

          <div className="w-full mx-auto text-center relative z-20">
                  <div className="justify-center items-center gap-10 relative overflow-hidden hidden md:flex">
            <img alt="google" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '180px', height: '240px', objectFit: 'contain'}} src="/images/google-logo.png" />
            <img alt="amazon" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '180px', height: '240px', objectFit: 'contain'}} src="/images/amazon-logo.png" />
            <img alt="meta" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '180px', height: '240px', objectFit: 'contain'}} src="/images/meta-logo.png" />
            <img alt="netflix" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '180px', height: '240px', objectFit: 'contain'}} src="/images/netflix-logo.png" />
            <img alt="spotify" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '180px', height: '240px', objectFit: 'contain'}} src="/images/spotify-logo.png" />
            <img alt="google" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '180px', height: '240px', objectFit: 'contain'}} src="/images/google-logo.png" />
            <img alt="amazon" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '180px', height: '240px', objectFit: 'contain'}} src="/images/amazon-logo.png" />
            <img alt="meta" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '180px', height: '240px', objectFit: 'contain'}} src="/images/meta-logo.png" />
            <img alt="netflix" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '180px', height: '240px', objectFit: 'contain'}} src="/images/netflix-logo.png" />
            <img alt="spotify" className="transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100" style={{width: '180px', height: '240px', objectFit: 'contain'}} src="/images/spotify-logo.png" />
            <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none z-10" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.8), transparent)'}}></div>
            <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none z-10" style={{background: 'linear-gradient(to left, rgba(0,0,0,0.8), transparent)'}}></div>
          </div>
        </div>
        
        <div className="w-3/5 mx-auto relative z-10">
          <div className="pt-8" style={{opacity: 1}}>
            <div className="text-left mb-2 font-semibold text-2xl md:text-3xl lg:text-4xl leading-[130%] text-white/40 lg:max-w-4/7">
              Trusted by <span className="text-white font-bold">97,000+ developers</span>, landing internship to staff level offers at <span className="text-white font-bold">FAANG, Big Tech, Quant</span>, and more.
            </div>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ProofSectionTwo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <UndetectabilityGuarantee />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <PlatformCompatibility />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <UntrackedAnimation />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <CommandsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <PricingSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <FAQSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AffiliateProgram />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <FinalCTA />
      </motion.div>

      {/* Footer */}
      <footer className="relative">
        <Image
          alt=""
          width={200}
          height={200}
          className="size-200 mx-auto rotate-85 opacity-35 brightness-120 absolute top-[-100px] bottom-0 left-0 right-0 transform -translate-y-1/5 z-0"
          src="/images/isolatedCube.avif"
        />

        <div className="border-t border-white/[0.1] px-8 pt-10 bg-neutral-950/88 backdrop-blur-3xl w-full relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start md:px-8">
            <div>
              <div className="mr-0 md:mr-4 md:flex mb-4">
                <a className="font-normal flex space-x-2 items-center text-xl mr-4 text-black px-2 py-1 relative z-20" aria-label="Interview Coder Home" href="/">
                  <Image
                    alt="Interview Coder Logo - AI Interview Assistant for Technical Interviews"
                    width={30}
                    height={30}
                    className="rounded-full"
                    src="/images/interviewcoder-logo.png"
                  />
                  <span className="font-bold text-white">Interview Coder</span>
                </a>
              </div>
              <p className="text-neutral-300/90 text-sm max-w-sm ml-2">
                Interview Coder is a desktop app designed to help job seekers ace technical interviews by providing real-time assistance with coding questions.
              </p>
              <nav className="flex flex-col sm:flex-row justify-between items-center mx-2 mt-4 mb-10" aria-label="Social media links">
                <div className="flex items-center space-x-4 mr-16">
                  <a target="_blank" rel="noopener noreferrer" aria-label="Follow Interview Coder on X (Twitter)" href="https://x.com/abdullaababakre">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-5 h-5 text-neutral-500 hover:text-neutral-300 transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" aria-label="Follow Interview Coder on Instagram" href="https://www.instagram.com/interviewcoder/">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-5 h-5 text-neutral-500 hover:text-neutral-300 transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" aria-label="Follow Interview Coder on TikTok" href="https://www.tiktok.com/@interviewcoder0/video/7488973603648605471">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-5 h-5 text-neutral-500 hover:text-neutral-300 transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" aria-label="Follow Interview Coder on LinkedIn" href="https://www.linkedin.com/company/interviewcoder/">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-5 h-5 text-neutral-500 hover:text-neutral-300 transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </a>
                </div>
              </nav>
              <div className="mt-7 ml-1.5 bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1 flex items-center gap-2 w-fit select-none">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-neutral-400 text-xs">All systems online</span>
              </div>
              <div className="mt-3 ml-2 text-[13px] select-none">© 2025 Interview Coder. All rights reserved.</div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
              <nav aria-label="Legal information">
                <h2 className="text-neutral-300 font-bold select-none text-lg">Legal</h2>
                <ul className="text-neutral-300 list-none space-y-4 text-[15px]">
                  <li><a className="transition-colors hover:text-primary" title="Learn about our refund policy and terms for Interview Coder services" href="/policies">Refund Policy</a></li>
                  <li><a className="transition-colors hover:text-primary" title="Review the terms and conditions for using Interview Coder" href="/policies">Terms of Service</a></li>
                  <li><a className="transition-colors hover:text-primary" title="Understand our cancellation policy for Interview Coder services" href="/policies">Cancellation Policy</a></li>
                </ul>
              </nav>
              
              <nav aria-label="Site navigation">
                <h2 className="text-neutral-300 font-bold select-none text-lg">Pages</h2>
                <ul className="text-neutral-300 list-none space-y-4 text-[15px]">
                  <li><a className="transition-colors hover:text-primary" title="Get help and support for Interview Coder" href="/help?section=contact">Contact Support</a></li>
                  <li><a className="transition-colors hover:text-primary" title="Sign up for Interview Coder to start preparing for technical interviews" href="/signup">Create account</a></li>
                  <li><a className="transition-colors hover:text-primary" title="Log in to your Interview Coder account" href="/signin">Login to account</a></li>
                  <li><a className="transition-colors hover:text-primary" title="Join our affiliate program and earn 20% commission on referrals" target="_blank" rel="noopener noreferrer" href="https://interviewcoder.tolt.io/">Affiliate Program</a></li>
                  <li><a className="transition-colors hover:text-primary" title="Explore a curated list of Leetcode problems for interview preparation" href="/leetcode-problems">Leetcode Problems</a></li>
                  <li><a className="transition-colors hover:text-primary" title="Compare different offers you can get from top tech companies" href="/compare-offers">Compare Offers</a></li>
                  <li><a className="transition-colors hover:text-primary" title="Explore software engineer salary data across top tech companies" href="/software-engineer-salaries">Software Engineer Salaries</a></li>
                </ul>
              </nav>
              
              <nav aria-label="Platform comparisons">
                <h2 className="text-neutral-300 font-bold select-none text-lg">Compare</h2>
                <ul className="text-neutral-300 list-none space-y-4 text-[15px]">
                  <li><a className="transition-colors hover:text-primary" title="See how Interview Coder compares to Final Round AI" href="/final-round-ai-alternative">Final Round AI Alternative</a></li>
                  <li><a className="transition-colors hover:text-primary" title="See how Interview Coder compares to AIApply" href="/ai-apply-alternative">AIApply Alternative</a></li>
                  <li><a className="transition-colors hover:text-primary" title="See how Interview Coder compares to UltraCode" href="/ultracode-ai-alternative">UltraCode Alternative</a></li>
                  <li><a className="transition-colors hover:text-primary" title="See how Interview Coder compares to LockedIn AI" href="/lockedin-ai-alternative">LockedIn AI Alternative</a></li>
                  <li><a className="transition-colors hover:text-primary" title="See how Interview Coder compares to Interviewing.io" href="/interviewingio-alternative">Interviewing.io Alternative</a></li>
                  <li><a className="transition-colors hover:text-primary" title="See how Interview Coder compares to Formation.Dev" href="/formation-dev-alternative">Formation.Dev Alternative</a></li>
                </ul>
              </nav>
            </div>
          </div>
          
          <h1 className="text-center mt-20 text-[min(10vw,10rem)] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-primary/20 inset-x-0 lg:-mb-5 select-none whitespace-nowrap">
            Interview Coder
          </h1>
        </div>
      </footer>
    </div>
  )
}
