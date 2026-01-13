"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { DataScienceFeatures } from '@/components/datascience/features-section'
import { PlatformSection } from '@/components/datascience/platform-section'
import { DataScienceComparison } from '@/components/datascience/comparison-section'
import { Testimonials } from '@/components/testimonials'
import { DataSciencePricing } from '@/components/datascience/pricing-section'
import { DataScienceFAQ } from '@/components/datascience/faq-section'

export default function DataSciencePage() {
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
                    <div className="hover:cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 relative bg-primary/10 text-primary hover:opacity-90 transition-all border border-primary/40 ml-2" style={{ textShadow: '0_0_10px_hsl(60_100%_50%_/_0.5)', boxShadow: '0_0_20px_hsl(60_100%_50%_/_0.3)' }}>
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
                    <div className="hover:cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 relative bg-primary/10 text-primary hover:opacity-90 transition-all border border-primary/40 ml-2" style={{ textShadow: '0_0_10px_hsl(60_100%_50%_/_0.5)', boxShadow: '0_0_20px_hsl(60_100%_50%_/_0.3)' }}>
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
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center pt-[143px] m-6 rounded-[40px] text-white mb-[4rem] lg:mb-[6rem] relative isolate overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/datascience/background.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <span
              className="rounded-[60px] text-sm font-medium border border-white/5 backdrop-blur-sm"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px 12px',
                gap: '10px',
                width: '541px',
                height: '35px',
                background: 'rgba(255, 255, 255, 0.05)',
                justifyContent: 'center'
              }}
            >
              Built on Real Interview Insights from Senior Data Scientists →
            </span>
          </div>

          <div
            className="flex flex-col items-center p-0 mx-auto mb-6"
            style={{
              gap: '1px',
              width: '957.63px',
              height: '175.9px',
            }}
          >
            <h1
              className="font-medium text-balance flex flex-col items-center justify-center p-0 m-0"
              style={{
                fontFamily: 'var(--font-geist-sans), sans-serif',
                fontWeight: 500,
                fontSize: 'min(70px, 11vw)',
                lineHeight: '120%',
                letterSpacing: '-0.04em',
                textAlign: 'center'
              }}
            >
              This Is All You Need To
            </h1>
            <div className="relative mt-2 mx-auto w-full max-w-[957px]">
              <Image
                src="/images/datascience/crackdatascienceinterviews.png"
                alt="Crack Data Science Interviews"
                width={957}
                height={86}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Now upgraded with audio support and 20+ cutting-edge undetectability features — built to keep you invisible across SQL screens, Python notebooks, ML rounds, and live case interviews.
          </p>

          <div
            className="flex flex-row gap-[10px] items-center justify-center mb-12 mx-auto"
            style={{
              padding: '0px',
              width: '510px',
              height: '60px',
            }}
          >
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
                <div className="absolute inset-0 border border-white/20 rounded-full bg-white/5 backdrop-blur-md"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <img alt="Windows" width="18" height="18" className="opacity-90 brightness-200" src="/images/windows.svg" />
                  <span className="text-white font-semibold tracking-tight">Get for Windows</span>
                </div>
              </button>
            </div>
          </div>

          <div
            className="mt-8 flex flex-row items-center font-medium text-white/50 mx-auto"
            style={{
              gap: '31px',
              width: '580px',
              height: '38px',
              alignItems: 'flex-start',
              padding: '0px'
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#EFCC3A]/20 flex items-center justify-center border border-[#EFCC3A]/30">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L5 11M5 11L1 7M5 11L9 7" stroke="#EFCC3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              Undetectable
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#EFCC3A]/20 flex items-center justify-center border border-[#EFCC3A]/30">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 1V11M1 6H11" stroke="#EFCC3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              Real-Time
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#EFCC3A]/20 flex items-center justify-center border border-[#EFCC3A]/30">
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L4.5 9L11 1" stroke="#EFCC3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              Works On Major Platforms
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div
          className="rounded-[32px] overflow-hidden shadow-2xl relative p-0 mb-12 mx-auto"
          style={{
            width: '100%',
            maxWidth: '1144.64px',
            height: '712.75px',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            src="/images/datascience/codepreviewdatascience.png"
            alt="Data Science Code Preview"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-24"
      >
        <DataScienceFeatures />
      </motion.div>

      {/* Comparison Section */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Why Interview Coder Works for Data <br className="hidden md:block" />
            Science <span className="text-white/40">(When Others Fail)</span>
          </h2>
        </div>
        <DataScienceComparison />
      </section>

      {/* Testimonials Section */}
      <section className="mb-32 flex flex-col px-4 md:px-16 lg:px-32">
        {/* Header Text - Left Aligned */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            maxWidth: '669.08px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '40px',
            lineHeight: '130%',
            letterSpacing: '-0.04em',
            color: 'rgba(255, 255, 255, 0.4)',
            textAlign: 'left',
          }}
          className="mb-16"
        >
          Trusted by <span style={{ color: 'white' }}>97,000+</span> developers and data scientists, landing internship to staff level offers at FAANG, Big Tech, Quant, and more.
        </motion.h2>

        {/* Testimonials Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full mb-16"
        >
          <Testimonials />
        </motion.div>

        {/* Offer Card - Centered */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              width: '676px',
              maxWidth: '90vw',
              height: 'auto',
              minHeight: '298.83px',
              background: 'linear-gradient(180deg, rgba(239, 204, 58, 0.16) 0%, rgba(239, 204, 58, 0) 100%), rgba(255, 255, 255, 0.07)',
              border: '1px dashed #816500',
              borderRadius: '40px',
              padding: '32px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '22px',
              boxSizing: 'border-box',
            }}
          >
            {/* Offer Icons */}
            <Image
              src="/images/datascience/offer-icons.png"
              width={150}
              height={75}
              alt="Interview Coder Offer"
              className="object-contain"
            />

            {/* Offer Text */}
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '160%',
                textAlign: 'center',
                color: 'white',
                maxWidth: '500px',
              }}
            >
              Land your dream job with INTERVIEW CODER, share a redacted offer letter, and get a $200 Amazon gift card - on us.
            </p>

            {/* Email Container */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '4px 4px 4px 16px',
                gap: '12px',
                width: '502.98px',
                maxWidth: '90vw',
                height: '63.98px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '58px',
                boxSizing: 'border-box',
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                Email us at: abdulla@interviewcoder.com
              </span>

              {/* Copy Email Button */}
              <button
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '15px 18px',
                  gap: '10px',
                  width: '156.98px',
                  height: '55.98px',
                  background: 'linear-gradient(180deg, #EFB63A 0%, #EFCC3A 100%)',
                  boxShadow: '0px 9.74px 20.45px rgba(0, 0, 0, 0.25), inset 0px -3px 0px rgba(255, 255, 255, 0.45)',
                  borderRadius: '28px',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => navigator.clipboard.writeText('abdulla@interviewcoder.com')}
              >
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '25.98px', height: '25.98px' }}>
                  <path d="M22.5471 13.9224C22.7322 13.4753 22.7322 12.907 22.7322 11.7726C22.7322 10.6381 22.7322 10.0698 22.5471 9.62276C22.4247 9.32717 22.2452 9.0586 22.019 8.83237C21.7928 8.60614 21.5242 8.42671 21.2286 8.30431C20.7816 8.1192 20.2133 8.1192 19.0788 8.1192H12.0156C10.6517 8.1192 9.96975 8.1192 9.44908 8.38441C8.99039 8.61799 8.6175 8.99088 8.38392 9.44957C8.11871 9.96916 8.11871 10.6511 8.11871 12.0161V19.0793C8.11871 20.2137 8.11871 20.782 8.30382 21.2291C8.55171 21.8255 9.02583 22.3008 9.62228 22.5476C10.0693 22.7327 10.6376 22.7327 11.7721 22.7327C12.9065 22.7327 13.4748 22.7327 13.9219 22.5476M22.5471 13.9224C22.4247 14.218 22.2452 14.4865 22.019 14.7128C21.7928 14.939 21.5242 15.1184 21.2286 15.2408C20.7816 15.4259 20.2133 15.4259 19.0788 15.4259C17.9444 15.4259 17.3761 15.4259 16.929 15.611C16.6334 15.7334 16.3648 15.9129 16.1386 16.1391C15.9124 16.3653 15.733 16.6339 15.6105 16.9295C15.4254 17.3766 15.4254 17.9449 15.4254 19.0793C15.4254 20.2137 15.4254 20.782 15.2403 21.2291C15.1179 21.5247 14.9385 21.7933 14.7123 22.0195C14.4861 22.2457 14.2175 22.4252 13.9219 22.5476M22.5471 13.9224C21.9648 15.9303 20.8936 17.7624 19.4296 19.2548C17.9655 20.7472 16.1542 21.8533 14.1579 22.474L13.9219 22.5476M17.861 8.1192V7.14497C17.861 5.78105 17.861 5.09909 17.5958 4.57841C17.3625 4.11989 16.99 3.74702 16.5317 3.51325C16.01 3.24805 15.328 3.24805 13.9641 3.24805H7.14448C5.78056 3.24805 5.0986 3.24805 4.57793 3.51325C4.11924 3.74683 3.74634 4.11973 3.51277 4.57841C3.24756 5.098 3.24756 5.77996 3.24756 7.14497V13.9646C3.24756 15.3285 3.24756 16.0105 3.51277 16.5311C3.74658 16.9901 4.11895 17.3625 4.57793 17.5963C5.09752 17.8615 5.78056 17.8615 7.14556 17.8615H8.11871" stroke="black" strokeWidth="1.62372" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '19px',
                    color: '#000000',
                  }}
                >
                  Copy email
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <PlatformSection />

      {/* Pricing Section */}
      <DataSciencePricing />

      {/* FAQ Section */}
      <DataScienceFAQ />

      {/* Footer */}
      <footer className="relative w-full overflow-hidden" style={{ background: '#000000' }}>
        {/* Main Footer Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '60px 10px 0',  /* Line 457: Footer horizontal padding - change 10px to adjust */
            gap: '43px',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '351px',
          }}
        >
          {/* Top Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              gap: '60px',  /* Line 472: Gap between logo, text section, and buttons */
              width: '100%',
              maxWidth: '1200px',
            }}
          >
            {/* Logo with shadow */}
            <div
              style={{
                width: '90.55px',
                height: '90.55px',
                borderRadius: '24px',
                overflow: 'hidden',
                filter: 'drop-shadow(0px 17px 12.1px rgba(0, 0, 0, 0.25))',
              }}
            >
              <Image
                src="/images/interviewcoder-logo.png"
                width={91}
                height={91}
                alt="Interview Coder Logo"
                style={{ borderRadius: '24px' }}
              />
            </div>

            {/* Text Section */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0px',
                gap: '8px',
                maxWidth: '625px',
              }}
            >
              {/* Heading */}
              <h2
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '40px',
                  lineHeight: '130%',
                  textAlign: 'center',
                  letterSpacing: '-0.04em',
                  color: '#FFFFFF',
                  margin: 0,
                  maxWidth: '516px',
                }}
              >
                Ready to Crack Your Next Data Science Interview?
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '160%',
                  textAlign: 'center',
                  color: 'rgba(255, 255, 255, 0.6)',
                  margin: 0,
                }}
              >
                100% Undetectable. Real-Time AI. Proven Results.
              </p>
            </div>

            {/* Download Buttons */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '10px',
                width: '510px',
                maxWidth: '100%',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: '20px',  /* Line 554: Space between subtitle and buttons - adjust as needed */
              }}
            >
              {/* Windows Button */}
              <button
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '18px 22px',
                  gap: '10px',
                  width: '250px',
                  height: '56px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #EFCC3A 0%, #EFB63A 100%)',
                  boxShadow: 'inset 0px 3px 0px rgba(255, 255, 255, 0.45)',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2.857L8.182 1.714V9.714H0V2.857ZM0 17.143L8.182 18.286V10.286H0V17.143ZM9.091 18.429L20 20V10.286H9.091V18.429ZM9.091 1.571V9.714H20V0L9.091 1.571Z" fill="black" />
                </svg>
                <span
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '19px',
                    color: '#000000',
                  }}
                >
                  Download for Windows
                </span>
              </button>

              {/* Mac Button */}
              <button
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '18px 22px',
                  gap: '10px',
                  width: '250px',
                  height: '56px',
                  background: '#333333',
                  boxShadow: 'inset 0px 1px 0px rgba(255, 255, 255, 0.15)',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.365 12.741C16.354 10.584 17.368 8.936 19.414 7.727C18.273 6.081 16.545 5.177 14.258 5.008C12.086 4.844 9.715 6.284 8.839 6.284C7.913 6.284 5.815 5.067 4.118 5.067C0.608 5.122 -3.126 7.782 -3.126 13.02C-3.126 14.615 -2.814 16.264 -2.19 17.967C-1.349 20.211 1.709 25.777 4.893 25.679C6.465 25.64 7.578 24.569 9.633 24.569C11.627 24.569 12.656 25.679 14.408 25.679C17.62 25.631 20.385 20.567 21.184 18.315C16.178 15.916 16.365 12.878 16.365 12.741ZM12.698 2.766C14.364 0.789 14.206 -1.012 14.152 -1.68C12.686 -1.598 10.986 -0.519 10.032 0.512C8.987 1.621 8.365 3.004 8.494 4.582C10.078 4.702 11.527 3.733 12.698 2.766Z" fill="white" />
                </svg>
                <span
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '19px',
                    color: '#FFFFFF',
                  }}
                >
                  Download for Mac
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Section - Brand Info and Links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '30px',
              width: '100%',
              maxWidth: '1200px',
              marginTop: '80px', /* Line 639: Space between buttons and nav bar below - adjust as needed */
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '40px',
                width: '100%',
                flexWrap: 'wrap',
              }}
            >
              {/* Left Column - Brand Info */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                  gap: '12px',
                  width: '447px',
                  maxWidth: '100%',
                  flexShrink: 0,
                }}
              >
                {/* Logo and Brand Name */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '8px',
                  }}
                >
                  <Image
                    src="/images/interviewcoder-logo.png"
                    width={47}
                    height={47}
                    alt="Interview Coder"
                    style={{ borderRadius: '10px' }}
                  />
                  <span
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '21.24px',
                      lineHeight: '90.2%',
                      textAlign: 'center',
                      letterSpacing: '-0.06em',
                      color: '#FFFFFF',
                    }}
                  >
                    Interview Coder
                  </span>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '160%',
                    color: 'rgba(255, 255, 255, 0.6)',
                    margin: 0,
                    maxWidth: '447px',
                  }}
                >
                  Interview Coder is a desktop app designed to help job seekers ace technical interviews by providing real-time assistance with coding questions.
                </p>

                {/* Social Icons */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '20px',
                  }}
                >
                  {/* LinkedIn */}
                  <a href="#" aria-label="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="white" />
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a href="#" aria-label="Twitter">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.16 4.69 15.9 5.41 16.43C6.13 16.96 6.99 17.26 7.89 17.27C6.36 18.5 4.43 19.16 2.44 19.13C2.1 19.13 1.77 19.11 1.44 19.07C3.44 20.38 5.74 21.09 8.12 21.07C16 21.07 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="white" />
                    </svg>
                  </a>
                  {/* TikTok */}
                  <a href="#" aria-label="TikTok">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6 5.82C15.9165 5.03962 15.5397 4.03743 15.54 3H12.45V15.4C12.4262 16.071 12.1429 16.7066 11.6598 17.1729C11.1767 17.6393 10.5315 17.8999 9.86 17.9C8.44 17.9 7.26 16.74 7.26 15.3C7.26 13.58 8.92 12.29 10.63 12.82V9.66C7.18 9.2 4.16 11.88 4.16 15.3C4.16 18.63 6.92 21 9.85 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2974 10.3926 19.84 10.39V7.3C19.84 7.3 17.96 7.39 16.6 5.82Z" fill="white" />
                    </svg>
                  </a>
                  {/* Discord */}
                  <a href="#" aria-label="Discord">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.89 4 14.79 4.05 14.74 4.14C14.59 4.42 14.41 4.79 14.29 5.08C12.68 4.84 11.08 4.84 9.51 5.08C9.39 4.78 9.2 4.42 9.05 4.14C9 4.05 8.9 4 8.79 4C7.29 4.26 5.86 4.71 4.53 5.33C4.49 5.35 4.45 5.38 4.43 5.42C1.69 9.61 0.93 13.69 1.3 17.73C1.3 17.79 1.34 17.84 1.39 17.87C3.24 19.25 5.03 20.08 6.79 20.63C6.9 20.66 7.01 20.62 7.08 20.54C7.42 20.08 7.72 19.59 7.97 19.07C8.05 18.93 7.98 18.77 7.83 18.71C7.34 18.52 6.87 18.29 6.42 18.03C6.26 17.94 6.25 17.71 6.4 17.61C6.49 17.54 6.58 17.47 6.67 17.39C6.75 17.33 6.85 17.31 6.94 17.35C10.22 18.84 13.81 18.84 17.05 17.35C17.14 17.31 17.24 17.32 17.32 17.38C17.41 17.46 17.5 17.54 17.59 17.61C17.74 17.71 17.74 17.94 17.57 18.03C17.12 18.3 16.65 18.52 16.16 18.71C16.01 18.77 15.95 18.93 16.02 19.07C16.28 19.59 16.58 20.07 16.91 20.53C16.97 20.61 17.09 20.65 17.2 20.62C18.97 20.07 20.76 19.24 22.61 17.87C22.66 17.84 22.7 17.79 22.7 17.73C23.14 13.03 21.92 8.99 19.37 5.42C19.35 5.38 19.31 5.35 19.27 5.33ZM8.52 15.07C7.49 15.07 6.63 14.1 6.63 12.91C6.63 11.72 7.47 10.75 8.52 10.75C9.58 10.75 10.42 11.73 10.41 12.91C10.41 14.1 9.57 15.07 8.52 15.07ZM15.49 15.07C14.46 15.07 13.6 14.1 13.6 12.91C13.6 11.72 14.44 10.75 15.49 10.75C16.55 10.75 17.39 11.73 17.38 12.91C17.38 14.1 16.55 15.07 15.49 15.07Z" fill="white" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Navigation Links Column */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                  gap: '22px',
                  width: '181px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '18px',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  Navigation Links
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="#" style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '154.3%', color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>Why Interview Coder</a>
                  <a href="#" style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '154.3%', color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>Features</a>
                  <a href="#" style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '154.3%', color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>Pricing</a>
                  <a href="#" style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '154.3%', color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>FAQ</a>
                </div>
              </div>

              {/* Important Links Column */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                  gap: '22px',
                  width: '181px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '18px',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  Important Links
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="#" style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '154.3%', color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>Link 1</a>
                  <a href="#" style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '154.3%', color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>Link 2</a>
                  <a href="#" style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '154.3%', color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>Link 3</a>
                </div>
              </div>

              {/* Features Column */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                  gap: '22px',
                  width: '181px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '18px',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  Features
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="#" style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '154.3%', color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>AI Assistant</a>
                  <a href="#" style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '154.3%', color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>Analytics</a>
                  <a href="#" style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '154.3%', color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>Monetization</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Fade Image */}
        <div style={{ width: '100%', height: '100px', position: 'relative', marginTop: '-50px' }}>
          <Image
            src="/images/datascience/footer-fade.png"
            fill
            alt=""
            style={{ objectFit: 'cover' }}  /* No opacity - image is already faded */
          />
        </div>
      </footer>
    </div>
  )
}
