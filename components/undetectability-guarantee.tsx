"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function UndetectabilityGuarantee() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-30 my-[6.25rem] lg:my-[7.5rem]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16 lg:flex lg:items-center">
          <h2 className="text-4xl lg:text-4xl font-bold text-white/40 mb-6 lg:mb-0 text-left leading-[1.3]">
            See how we guarantee <span className="text-white">undetectability</span>
          </h2>
          <div className="lg:flex lg:flex-col lg:justify-start">
            <p className="text-left">
              Interview Coder is designed for complete stealth. You can't even click on Interview Coder in an interview, it will never steal focus, and it's completely invisible to screenshare. Interview Coder is undetectable
            </p>
            <button className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 mx-0">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 lg:aspect-[2.4/1]">
          <div className="bg-[#151515] rounded-2xl overflow-hidden lg:col-span-5 relative pt-4 aspect-[1.5/1] lg:aspect-auto cursor-pointer group hover:scale-[1.02] transition-transform">
            <div className="absolute left-0 bottom-0 px-5 md:px-8 py-4 h-20 flex justify-between items-center z-10 w-full">
              <h3 className="text-lg text-white">Invisible to screen-share</h3>
              <button className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 bg-white/5 p-3 rounded-full hover:bg-white/10 group">
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <Image
              alt="Screen share demonstration"
              loading="lazy"
              width={1600}
              height={1200}
              decoding="async"
              className="object-cover h-4/5 w-auto mx-auto lg:w-7/8 lg:h-auto lg:mx-auto"
              src="images/undetectability-1.avif"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          </div>

          <div className="bg-[#151515] rounded-2xl overflow-hidden lg:col-span-3 relative pt-4 aspect-[1.5/1] lg:aspect-auto cursor-pointer group hover:scale-[1.02] transition-transform">
            <div className="absolute left-0 bottom-0 px-5 md:px-8 py-4 h-20 flex justify-between items-center z-10 w-full">
              <h3 className="text-lg text-white">Never steals Active Tab focus</h3>
              <button className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 bg-white/5 p-3 rounded-full hover:bg-white/10 group">
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <Image
              alt="Active tab focus demonstration"
              loading="lazy"
              width={1600}
              height={1200}
              decoding="async"
              className="object-cover h-4/5 w-auto mx-auto lg:w-7/8 lg:h-auto lg:mx-auto"
              src="images/undetectability-2.avif"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#151515] rounded-2xl overflow-hidden aspect-[1.2/1] relative pt-4 cursor-pointer group hover:scale-[1.02] transition-transform">
            <div className="absolute left-0 bottom-0 px-5 md:px-8 py-4 h-20 flex justify-between items-center z-10 w-full">
              <h3 className="text-lg text-white">Movable Screen (Follows your eyes)</h3>
              <button className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 bg-white/5 p-3 rounded-full hover:bg-white/10 group">
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <Image
              alt="Movable screen demonstration"
              loading="lazy"
              width={1600}
              height={1200}
              decoding="async"
              className="object-cover h-4/5 w-auto mx-auto lg:w-8/9 lg:h-auto lg:mx-auto"
              src="images/undetectability-3.avif"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          </div>

          <div className="relative rounded-4xl overflow-hidden aspect-[0.71/1] md:aspect-[1.5/1] lg:aspect-[1.2/1] bg-[#151515]">
            <Image
              alt="Interview success"
              loading="lazy"
              decoding="async"
              fill
              className="object-cover"
              sizes="100vw"
              src="images/undetectability-4.avif"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8 z-10">
              <h3 className="text-2xl font-semibold text-white mb-4">Ace Your Next Tech Interview</h3>
              <p className="text-[#7D7E80] mb-6">You're exactly who InterviewCoder was built for - to fix what's broken in your prep.</p>
              <button className="text-black px-6 py-3 rounded-full font-semibold transition-opacity w-fit bg-gradient-to-b from-[#F3F3F3] to-[#CBCBCB] hover:bg-gradient-to-b hover:from-[#CBCBCB] hover:to-[#F3F3F3]">
                Level Up Your Prep
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
