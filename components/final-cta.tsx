import Image from "next/image"

export function FinalCTA() {
  return (
    <section className="relative flex flex-col items-center justify-center mt-[6.25rem] lg:mt-[10rem] mx-5 rounded-[40px] text-white pb-50" id="download">
      <div className="" style={{ opacity: 1 }}>
        <div className="text-center max-w-4xl mx-auto">
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <div className="relative mx-auto w-[3.75rem] md:w-[4.375rem] lg:w-[5.625rem] h-[3.75rem] md:h-[4.375rem] lg:h-[5.625rem] mb-8 border-2 border-black rounded-2xl" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.55)" }}>
              <Image
                alt="Interview Coder - AI Interview Assistant Logo"
                width={90}
                height={90}
                className="w-full h-full object-contain rounded-2xl"
                src="/images/interviewcoder-logo.png"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[black]/0 to-[black] rounded-2xl mix-blend-overlay pointer-events-none"></div>
            </div>
          </div>
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-2 leading-tight text-white">
              Ready to Pass Any SWE Interviews with 100% Undetectable AI?
            </h2>
          </div>
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <p className="text-base lg:text-lg mb-8 lg:mb-11 max-w-2xl mx-auto leading-relaxed text-gray-300">
              Start Your Free Trial Today
            </p>
          </div>
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-[600px] mx-auto">
              <div className="relative flex-1 min-w-[280px]">
                <button className="group relative flex items-center justify-center gap-3 px-5 py-4 rounded-full text-base md:text-lg font-semibold w-full overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap" aria-expanded="false">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#EFCC3A] to-[#EFB63A]"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent"></div>
                  <div className="absolute top-0 left-2 right-2 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-[#F5D742] to-[#E5A83A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    <Image
                      alt="Apple"
                      width={18}
                      height={18}
                      className="opacity-90 brightness-0"
                      src="/images/apple.svg"
                    />
                    <span className="text-black font-semibold tracking-tight">Pass Your Next Interview</span>
                  </div>
                  <div className="absolute inset-0 rounded-full shadow-xl shadow-[#EFCC3A]/30 group-hover:shadow-[#EFCC3A]/50 transition-shadow duration-300"></div>
                </button>
              </div>
              <button className="group relative flex items-center justify-center gap-3 px-5 py-4 rounded-full text-base md:text-lg font-semibold w-full min-w-[280px] overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap">
                <div className="absolute inset-0 bg-gradient-to-b from-[#EFCC3A] to-[#EFB63A]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent"></div>
                <div className="absolute top-0 left-2 right-2 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#F5D742] to-[#E5A83A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <Image
                    alt="Windows"
                    width={18}
                    height={18}
                    className="opacity-90"
                    src="/images/windows.svg"
                  />
                  <span className="text-black font-semibold tracking-tight">Pass Your Next Interview</span>
                </div>
                <div className="absolute inset-0 rounded-full shadow-xl shadow-[#EFCC3A]/30 group-hover:shadow-[#EFCC3A]/50 transition-shadow duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
