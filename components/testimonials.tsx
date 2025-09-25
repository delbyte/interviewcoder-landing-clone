// Array of different testimonial images to rotate through
const testimonialImages = [
  "/images/cisco-success.avif",
  "/images/Goole-offer.avif", 
  "/images/apple-interview.avif",
  "/images/faizan-tweet.avif",
  "/images/meta-clean-code.avif"
]

// Sample companies for testimonials
const companies = ["Google", "Amazon", "Meta", "Netflix", "Apple", "Microsoft", "Cisco", "Uber"]

const TestimonialCard = ({ index }: { index: number }) => {
  const company = companies[index % companies.length]
  const image = testimonialImages[index % testimonialImages.length]
  const initial = String.fromCharCode(65 + (index % 26)) // A, B, C, etc.
  
  return (
    <div className="mb-1.5 p-1.5 transition-all duration-300 cursor-pointer hover:shadow-2xl w-full" style={{borderRadius: '8px', background: 'linear-gradient(90deg, rgb(29, 29, 29) 0%, rgb(23, 23, 23) 100%)', boxShadow: 'rgba(255, 255, 255, 0.25) 0px 1px 2px 0px inset', touchAction: 'pan-x'}}>
      <div className="flex items-center gap-1" style={{touchAction: 'pan-x'}}>
        <div className="w-2.5 h-2.5 bg-[#FFFF00]/20 rounded-full flex items-center justify-center" style={{touchAction: 'pan-x'}}>
          <span className="text-[#FFFF00] font-semibold text-[8px] select-none" style={{touchAction: 'pan-x'}}>
            {initial}
          </span>
        </div>
        <div className="flex-1 tracking-tight" style={{touchAction: 'pan-x'}}>
          <div className="text-white font-semibold select-none text-[8px]" style={{touchAction: 'pan-x'}}>Anonymous User</div>
          <div className="text-white/80 select-none text-[8px]" style={{touchAction: 'pan-x'}}>{company}</div>
        </div>
        <div className="flex gap-0.5" style={{touchAction: 'pan-x'}}>
          <img alt="star" loading="lazy" width="4" height="4" decoding="async" data-nimg="1" className="w-1 h-1" src="/images/star.svg" style={{color: 'transparent', touchAction: 'pan-x'}} />
          <img alt="star" loading="lazy" width="4" height="4" decoding="async" data-nimg="1" className="w-1 h-1" src="/images/star.svg" style={{color: 'transparent', touchAction: 'pan-x'}} />
          <img alt="star" loading="lazy" width="4" height="4" decoding="async" data-nimg="1" className="w-1 h-1" src="/images/star.svg" style={{color: 'transparent', touchAction: 'pan-x'}} />
          <img alt="star" loading="lazy" width="4" height="4" decoding="async" data-nimg="1" className="w-1 h-1" src="/images/star.svg" style={{color: 'transparent', touchAction: 'pan-x'}} />
          <img alt="star" loading="lazy" width="4" height="4" decoding="async" data-nimg="1" className="w-1 h-1" src="/images/star.svg" style={{color: 'transparent', touchAction: 'pan-x'}} />
        </div>
      </div>
      <blockquote className="pb-1 pt-1.5 text-white/60 leading-3 select-none text-[8px]" style={{touchAction: 'pan-x'}}>
        Just landed <strong className="font-bold text-white" style={{touchAction: 'pan-x'}}>{company} offer</strong>
      </blockquote>
      <div className="relative w-full overflow-hidden rounded-sm bg-black/40" style={{touchAction: 'pan-x'}}>
        <img alt={`AI Interview Assistant testimonial screenshot`} draggable="false" loading="lazy" width="100" height="50" decoding="async" data-nimg="1" className="w-full h-auto object-cover select-none" src={image} style={{color: 'transparent', aspectRatio: 'auto', touchAction: 'pan-x'}} />
      </div>
    </div>
  )
}

export function Testimonials() {
  // Generate indices for testimonials (15 total, 5 per column)
  const totalTestimonials = 15
  const column1 = Array.from({length: 5}, (_, i) => i * 3)
  const column2 = Array.from({length: 5}, (_, i) => i * 3 + 1) 
  const column3 = Array.from({length: 5}, (_, i) => i * 3 + 2)

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="w-3/5 mx-auto">
        <div className="relative h-[780px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]">
        <div className="absolute inset-0 flex justify-center gap-8">
          {/* Column 1: Scrolls Up */}
          <div className="w-1/3 flex flex-col gap-8 animate-marquee-up">
            {column1.map((index) => (
              <TestimonialCard key={index} index={index} />
            ))}
            {/* Duplicate for seamless loop */}
            {column1.map((index) => (
              <TestimonialCard key={`dup-${index}`} index={index} />
            ))}
          </div>

          {/* Column 2: Scrolls Down */}
          <div className="w-1/3 flex flex-col gap-8 animate-marquee-down">
            {column2.map((index) => (
              <TestimonialCard key={index} index={index} />
            ))}
            {/* Duplicate for seamless loop */}
            {column2.map((index) => (
              <TestimonialCard key={`dup-${index}`} index={index} />
            ))}
          </div>

          {/* Column 3: Scrolls Up */}
          <div className="w-1/3 flex flex-col gap-8 animate-marquee-up">
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
