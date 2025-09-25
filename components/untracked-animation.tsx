"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

export function UntrackedAnimation() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null)

  const dockIcons = [
    { src: "/images/dock1.svg", alt: "Chime", name: "Chime" },
    { src: "/images/dock2.svg", alt: "Hacker Rank", name: "HackerRank" },
    { src: "/images/dock3.svg", alt: "Zoom", name: "Zoom" },
    { src: "/images/dock4.svg", alt: "Google Meet", name: "Google Meet" },
    { src: "/images/dock5.svg", alt: "Coder Pad", name: "CoderPad" },
    { src: "/images/dock6.svg", alt: "Code Signal", name: "CodeSignal" }
  ]
  return (
    <section className="my-[6.25rem] lg:my-[10rem] max-w-7xl mx-auto px-5 md:px-8 lg:px-30">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-16 text-left"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-semibold text-white mb-6"
        >
          All that without being <span className="text-white/60">tracked</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg leading-8 text-white/60 max-w-4xl"
        >
          InterviewCoder is your AI Interview Assistant for passing any SWE<br />
          interviews (without grinding through 500 LeetCode problems).
        </motion.p>
      </motion.div>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden" style={{ transform: "translateY(-20%)" }}>
        <div className="relative w-full aspect-[7/5] flex items-center justify-center">
          {/* Bottom gradient overlay */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none" 
            style={{ 
              background: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)",
              zIndex: 40 
            }}
          ></div>

          {/* Foreground interface (animation-1) - Falls in first */}
          <motion.div 
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: "easeInOut"
            }}
            viewport={{ once: true }}
            className="absolute z-10" 
            style={{ 
              top: "40%",
              left: "1%",
              width: "100%",
              height: "auto"
            }}
          >
            <Image
              alt="AI Interview Assistant - Foreground interface"
              width={800}
              height={600}
              decoding="async"
              className="object-contain w-full h-auto"
              src="/images/animation-1.avif"
            />
          </motion.div>

          {/* Middle interface (animation-2) - Falls in second */}
          <motion.div 
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: "easeInOut"
            }}
            viewport={{ once: true }}
            className="absolute z-20" 
            style={{ 
              top: "30%",
              left: "20%",
              width: "50%",
              height: "auto"
            }}
          >
            <Image
              alt="AI Interview Assistant - Middle interface"
              width={800}
              height={600}
              decoding="async"
              className="object-contain w-full h-auto opacity-80"
              src="/images/animation-2.avif"
            />
          </motion.div>

          {/* Background interface (animation-3) - Falls in third */}
          <motion.div 
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              ease: "easeInOut"
            }}
            viewport={{ once: true }}
            className="absolute z-30" 
            style={{ 
              top: "15%",
              left: "35%",
              width: "60%",
              height: "auto"
            }}
          >
            <Image
              alt="AI Interview Assistant - Background interface"
              width={800}
              height={600}
              decoding="async"
              className="object-contain w-full h-auto opacity-90"
              src="/images/animation-3.avif"
            />
          </motion.div>

          {/* Glow effect - Falls in fourth */}
          <motion.div 
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.0,
              ease: "easeInOut"
            }}
            viewport={{ once: true }}
            className="absolute" 
            style={{ 
              zIndex: 21, 
              clipPath: "inset(0%)",
              top: "30%",
              left: "16.3%",
              width: "50%",
              height: "auto"
            }}
          >
            <Image
              alt="Glow effect"
              width={800}
              height={600}
              decoding="async"
              className="object-contain w-full h-auto opacity-80"
              src="/images/animation-glow.avif"
            />
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        viewport={{ once: true }}
        className="-mt-10"
      >
        <div className="flex justify-center flex-col items-center">
          <div className="flex items-end gap-5 p-2 rounded-2xl backdrop-blur-md border border-white/10 relative" style={{ background: "linear-gradient(135deg, rgba(64, 64, 64, 0.5), rgba(43, 45, 43, 0.5))" }}>
            {dockIcons.map((icon, index) => {
              const isHovered = hoveredIcon === index
              const isAdjacent = hoveredIcon !== null && Math.abs(hoveredIcon - index) === 1
              const shouldScale = isHovered ? 1.5 : isAdjacent ? 1.2 : 1
              const shouldBrighten = isHovered ? 1 : isAdjacent ? 0.8 : 0.6
              
              return (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Tooltip */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -top-12 bg-black/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap z-50"
                    >
                      {icon.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/90"></div>
                    </motion.div>
                  )}
                  
                  <motion.div 
                    className="relative flex items-end"
                    animate={{ 
                      scale: shouldScale,
                      opacity: shouldBrighten,
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20,
                      duration: 0.3
                    }}
                    style={{ originY: 1 }} // Grow from bottom
                    onHoverStart={() => setHoveredIcon(index)}
                    onHoverEnd={() => setHoveredIcon(null)}
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center cursor-pointer" style={{ backdropFilter: "blur(10px)" }}>
                      <img 
                        alt={icon.alt} 
                        loading="lazy" 
                        decoding="async" 
                        data-nimg="fill" 
                        className="w-full h-full object-contain" 
                        style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }} 
                        sizes="100vw" 
                        src={icon.src} 
                      />
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            viewport={{ once: true }}
            className="text-center text-3xl lg:text-4xl text-white/40 mt-10"
          >
            Works with most of the <span className="text-white font-medium">interview apps</span>
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
