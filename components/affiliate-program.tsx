import Image from "next/image"

export function AffiliateProgram() {
  return (
    <section className="my-[6.25rem] lg:my-[10rem] px-5 md:px-8 lg:px-30 max-w-7xl mx-auto">
      <div className="relative pt-16 pb-13 rounded-3xl overflow-hidden" style={{ background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.11), #0F0F0F 0%, #0F0F0F 100%)" }}>
        <div className="absolute inset-0">
          <Image
            alt=""
            fill
            className="object-cover mx-auto"
            style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }}
            sizes="100vw"
            src="/images/affiliate-stars.avif"
          />
        </div>
        <div className="relative z-10 text-center">
          <div className="" style={{ opacity: 1 }}>
            <div className="" style={{ opacity: 1, transform: "none" }}>
              <div className="mb-8 flex justify-center mx-auto">
                <Image
                  alt=""
                  width={1200}
                  height={600}
                  className="min-w-[1200px] w-[1200px] h-auto translate-x-[2%]"
                  style={{ color: "transparent" }}
                  src="/images/affiliate-bg.avif"
                />
              </div>
            </div>
            <div className="" style={{ opacity: 1, transform: "none" }}>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Earn with Interview Coder</h2>
            </div>
            <div className="" style={{ opacity: 1, transform: "none" }}>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-[30px] leading-relaxed">
                Interview Coder offers a generous referral program. Earn 40% of all<br />
                earnings from people using your referral code.
              </p>
            </div>
            <div className="" style={{ opacity: 1, transform: "none" }}>
              <div className="flex flex-col items-center">
                <button className="group relative flex items-center justify-center px-6 py-4 rounded-full text-base md:text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#EFCC3A] to-[#EFB63A]"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent"></div>
                  <div className="absolute top-0 left-2 right-2 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-[#F5D742] to-[#E5A83A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="text-black font-semibold tracking-tight">
                      <span className="md:hidden">Join affiliate program</span>
                      <span className="hidden md:inline">Join affiliate program (40% commission)</span>
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-full shadow-xl shadow-[#EFCC3A]/30 group-hover:shadow-[#EFCC3A]/50 transition-shadow duration-300"></div>
                </button>
                <span className="text-gray-300 text-sm mt-2 md:hidden">(40% commission)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
