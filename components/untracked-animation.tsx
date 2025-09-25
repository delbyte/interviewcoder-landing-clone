import Image from "next/image"

export function UntrackedAnimation() {
  return (
    <section className="my-[6.25rem] lg:my-[10rem] max-w-7xl mx-auto px-5 md:px-8 lg:px-30">
      <div className="mb-16 text-left" style={{ opacity: 1, transform: "none" }}>
        <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6" style={{ opacity: 1, transform: "none" }}>
          All that without being <span className="text-white/60">tracked</span>
        </h2>
        <p className="text-lg leading-8 text-white/60 max-w-4xl" style={{ opacity: 1, transform: "none" }}>
          InterviewCoder is your AI Interview Assistant for passing any SWE<br />
          interviews (without grinding through 500 LeetCode problems).
        </p>
      </div>

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

          {/* Background interface (animation-3) */}
          <div 
            className="absolute inset-0 flex items-center justify-center z-30" 
            style={{ opacity: 1, transform: "translateX(15%) translateY(-1%)" }}
          >
            <div style={{ width: "60%", height: "auto" }}>
              <Image
                alt="AI Interview Assistant - Background interface"
                width={800}
                height={600}
                decoding="async"
                className="object-contain w-full h-auto opacity-90"
                src="/images/animation-3.avif"
              />
            </div>
          </div>

          {/* Middle interface (animation-2) */}
          <div 
            className="absolute inset-0 flex items-center justify-center z-20" 
            style={{ opacity: 1, transform: "translateX(-4%) translateY(10%)" }}
          >
            <div style={{ width: "50%", height: "auto" }}>
              <Image
                alt="AI Interview Assistant - Middle interface"
                width={800}
                height={600}
                decoding="async"
                className="object-contain w-full h-auto opacity-80"
                src="/images/animation-2.avif"
              />
            </div>
          </div>

          {/* Glow effect */}
          <div 
            className="absolute inset-0 flex items-center justify-center" 
            style={{ 
              zIndex: 21, 
              opacity: 1, 
              clipPath: "inset(0%)", 
              transform: "translateX(-8%) translateY(-1%)" 
            }}
          >
            <div style={{ width: "40%", height: "auto" }}>
              <Image
                alt="Glow effect"
                width={800}
                height={600}
                decoding="async"
                className="object-contain w-full h-auto opacity-80"
                src="/images/animation-glow.avif"
              />
            </div>
          </div>

          {/* Foreground interface (animation-1) */}
          <div 
            className="absolute inset-0 flex items-center justify-center z-10" 
            style={{ opacity: 1, transform: "translateX(calc(0% + 0rem)) translateY(25%)" }}
          >
            <div style={{ width: "100%", height: "auto" }}>
              <Image
                alt="AI Interview Assistant - Foreground interface"
                width={800}
                height={600}
                decoding="async"
                className="object-contain w-full h-auto"
                src="/images/animation-1.avif"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-10" style={{ opacity: 1, transform: "none" }}>
        <div className="flex justify-center flex-col items-center">
          <div className="flex items-end gap-3 p-2 rounded-2xl backdrop-blur-md border border-white/10" style={{ background: "linear-gradient(135deg, rgba(64, 64, 64, 0.5), rgba(43, 45, 43, 0.5))", opacity: 1 }}>
            <div className="relative" style={{ opacity: 0.6, transform: "none" }}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center cursor-pointer" style={{ backdropFilter: "blur(10px)" }}>
                <img 
                  alt="Chime" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="w-full h-full object-contain" 
                  style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }} 
                  sizes="100vw" 
                  src="/images/dock1.svg" 
                />
              </div>
            </div>
            <div className="relative" style={{ opacity: 0.6, transform: "none" }}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center cursor-pointer" style={{ backdropFilter: "blur(10px)" }}>
                <img 
                  alt="Hacker Rank" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="w-full h-full object-contain" 
                  style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }} 
                  sizes="100vw" 
                  src="/images/dock2.svg" 
                />
              </div>
            </div>
            <div className="relative" style={{ opacity: 0.6, transform: "none" }}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center cursor-pointer" style={{ backdropFilter: "blur(10px)" }}>
                <img 
                  alt="Zoom" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="w-full h-full object-contain" 
                  style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }} 
                  sizes="100vw" 
                  src="/images/dock3.svg" 
                />
              </div>
            </div>
            <div className="relative" style={{ opacity: 0.6, transform: "none" }}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center cursor-pointer" style={{ backdropFilter: "blur(10px)" }}>
                <img 
                  alt="Google Meet" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="w-full h-full object-contain" 
                  style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }} 
                  sizes="100vw" 
                  src="/images/dock4.svg" 
                />
              </div>
            </div>
            <div className="relative" style={{ opacity: 0.6, transform: "none" }}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center cursor-pointer" style={{ backdropFilter: "blur(10px)" }}>
                <img 
                  alt="Coder Pad" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="w-full h-full object-contain" 
                  style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }} 
                  sizes="100vw" 
                  src="/images/dock5.svg" 
                />
              </div>
            </div>
            <div className="relative" style={{ opacity: 0.6, transform: "none" }}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center cursor-pointer" style={{ backdropFilter: "blur(10px)" }}>
                <img 
                  alt="Code Signal" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="w-full h-full object-contain" 
                  style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }} 
                  sizes="100vw" 
                  src="/images/dock6.svg" 
                />
              </div>
            </div>
          </div>
          <p className="text-center text-3xl lg:text-4xl text-white/40 mt-10" style={{ opacity: 1, transform: "none" }}>Works with most of the <span className="text-white font-medium">interview apps</span></p>
        </div>
      </div>
    </section>
  )
}
