import { useState } from "react"
import Image from "next/image"

// Array of different testimonial images to rotate through
const testimonialImages = [
  "/images/cisco-success.avif",
  "/images/Goole-offer.avif", 
  "/images/apple-interview.avif",
  "/images/faizan-tweet.avif",
  "/images/meta-clean-code.avif"
]

// Sample companies for testimonials
const companies = ["Meta", "Google", "Amazon", "Microsoft", "Dream job"]

// Different testimonial texts
const testimonialTexts = [
  "Got my Meta offer",
  "Landed my dream job at Google", 
  "Just landed Amazon offer",
  "Got my dream job at Microsoft",
  "Successfully to find a Job"
]

const TestimonialCard = ({ index }: { index: number }) => {
  const company = companies[index % companies.length]
  const image = testimonialImages[index % testimonialImages.length]
  const text = testimonialTexts[index % testimonialTexts.length]
  const initial = "A" // All use "A" as shown in the HTML
  
  return (
    <div className="testimonial-item select-none" style={{touchAction: 'pan-x'}}>
      <div className="mb-6 p-5 transition-all duration-300 cursor-pointer hover:shadow-2xl w-full" style={{borderRadius: '33px', background: 'linear-gradient(90deg, rgb(29, 29, 29) 0%, rgb(23, 23, 23) 100%)', boxShadow: 'rgba(255, 255, 255, 0.25) 0px 1px 2px 0px inset', touchAction: 'pan-x'}}>
        <div className="flex items-center gap-3" style={{touchAction: 'pan-x'}}>
          <div className="w-10 h-10 bg-[#FFFF00]/20 rounded-full flex items-center justify-center" style={{touchAction: 'pan-x'}}>
            <span className="text-[#FFFF00] font-semibold text-lg select-none" style={{touchAction: 'pan-x'}}>
              {initial}
            </span>
          </div>
          <div className="flex-1 tracking-tight" style={{touchAction: 'pan-x'}}>
            <div className="text-white font-semibold select-none" style={{touchAction: 'pan-x'}}>Anonymous User</div>
            <div className="text-white/80 select-none" style={{touchAction: 'pan-x'}}>{company}</div>
          </div>
          <div className="flex gap-0.5" style={{touchAction: 'pan-x'}}>
            <Image alt="star" width={16} height={16} className="w-4 h-4" src="/images/star.svg" style={{color: 'transparent', touchAction: 'pan-x'}} />
            <Image alt="star" width={16} height={16} className="w-4 h-4" src="/images/star.svg" style={{color: 'transparent', touchAction: 'pan-x'}} />
            <Image alt="star" width={16} height={16} className="w-4 h-4" src="/images/star.svg" style={{color: 'transparent', touchAction: 'pan-x'}} />
            <Image alt="star" width={16} height={16} className="w-4 h-4" src="/images/star.svg" style={{color: 'transparent', touchAction: 'pan-x'}} />
            <Image alt="star" width={16} height={16} className="w-4 h-4" src="/images/star.svg" style={{color: 'transparent', touchAction: 'pan-x'}} />
          </div>
        </div>
        <blockquote className="pb-4 pt-7 text-white/60 leading-6 select-none" style={{touchAction: 'pan-x'}}>
          {text.split(company).map((part, i) => 
            i === 0 ? part : [<strong key={i} className="font-bold text-white" style={{touchAction: 'pan-x'}}>{company}</strong>, part]
          )}
        </blockquote>
        <div className="relative w-full overflow-hidden rounded-lg bg-black/40" style={{touchAction: 'pan-x'}}>
          <Image 
            alt="AI Interview Assistant - Anonymous User testimonial screenshot" 
            draggable={false} 
            width={400} 
            height={200} 
            className="w-full h-auto object-cover select-none" 
            src={image} 
            style={{color: 'transparent', aspectRatio: 'auto', touchAction: 'pan-x'}} 
          />
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [pausedColumns, setPausedColumns] = useState({
    column1: false,
    column2: false,
    column3: false
  })
  
  // Generate indices for testimonials (15 total, 5 per column)
  const totalTestimonials = 15
  const column1 = Array.from({length: 5}, (_, i) => i * 3)
  const column2 = Array.from({length: 5}, (_, i) => i * 3 + 1) 
  const column3 = Array.from({length: 5}, (_, i) => i * 3 + 2)

  const handleMouseEnter = (column: 'column1' | 'column2' | 'column3') => {
    setPausedColumns(prev => ({ ...prev, [column]: true }))
  }

  const handleMouseLeave = (column: 'column1' | 'column2' | 'column3') => {
    setPausedColumns(prev => ({ ...prev, [column]: false }))
  }

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="w-3/5 mx-auto">
        <div className="relative h-[780px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]">
        <div className="absolute inset-0 flex justify-center gap-8">
          {/* Column 1: Scrolls Up */}
          <div 
            className="w-1/3 flex flex-col gap-8 will-change-transform animate-marquee-up"
            style={{
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d',
              translate: 'none',
              rotate: 'none', 
              scale: 'none',
              willChange: 'transform',
              transformOrigin: '50% 50%',
              touchAction: 'pan-x',
              animationPlayState: pausedColumns.column1 ? 'paused' : 'running'
            }}
            onMouseEnter={() => handleMouseEnter('column1')}
            onMouseLeave={() => handleMouseLeave('column1')}
          >
            {column1.map((index) => (
              <TestimonialCard key={index} index={index} />
            ))}
            {/* Duplicate for seamless loop */}
            {column1.map((index) => (
              <TestimonialCard key={`dup-${index}`} index={index} />
            ))}
          </div>

          {/* Column 2: Scrolls Down */}
          <div 
            className="w-1/3 flex flex-col gap-8 will-change-transform animate-marquee-down"
            style={{
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d',
              translate: 'none',
              rotate: 'none',
              scale: 'none', 
              willChange: 'transform',
              transformOrigin: '50% 50%',
              touchAction: 'pan-x',
              animationPlayState: pausedColumns.column2 ? 'paused' : 'running'
            }}
            onMouseEnter={() => handleMouseEnter('column2')}
            onMouseLeave={() => handleMouseLeave('column2')}
          >
            {column2.map((index) => (
              <TestimonialCard key={index} index={index} />
            ))}
            {/* Duplicate for seamless loop */}
            {column2.map((index) => (
              <TestimonialCard key={`dup-${index}`} index={index} />
            ))}
          </div>

          {/* Column 3: Scrolls Up */}
          <div 
            className="w-1/3 flex flex-col gap-8 will-change-transform animate-marquee-up"
            style={{
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d', 
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              willChange: 'transform',
              transformOrigin: '50% 50%',
              touchAction: 'pan-x',
              animationPlayState: pausedColumns.column3 ? 'paused' : 'running'
            }}
            onMouseEnter={() => handleMouseEnter('column3')}
            onMouseLeave={() => handleMouseLeave('column3')}
          >
            {column3.map((index) => (
              <TestimonialCard key={index} index={index} />
            ))}
            {/* Duplicate for seamless loop */}
            {column3.map((index) => (
              <TestimonialCard key={`dup-${index}`} index={index} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
