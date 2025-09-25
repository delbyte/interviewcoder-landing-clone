import Image from "next/image"

export function PricingSection() {
  return (
    <section className="my-[6.25rem] lg:my-[10rem] bg-black max-w-7xl mx-auto px-5 md:px-8 lg:px-30">
      <div className="" style={{ opacity: 1 }}>
        <div className="text-center mb-13 md:mb-24">
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <h2 className="text-4xl font-semibold text-white mb-4">Pricing</h2>
          </div>
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              How much is a SWE job offer worth to you?
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {/* Free Plan */}
        <div className="bg-[#1E1E1E] rounded-3xl p-7 flex flex-col" style={{ opacity: 1, transform: "none" }}>
          <div className="flex justify-start mb-4">
            <div className="flex items-center gap-3 bg-[#FFFFFF]/4 p-[6px] rounded-2xl w-fit">
              <Image
                alt="Interview Coder - AI Interview Assistant"
                width={36}
                height={36}
                className="rounded-xl"
                src="/images/interviewcoder-logo.png"
              />
              <h3 className="text-xl font-semibold text-white p-[10px]">Free Plan</h3>
            </div>
          </div>
          <p className="text-white/70 mb-4">Try it for Free</p>
          <div className="mb-4 relative">
            <span className="text-[43px] font-bold text-white">$0/</span>
            <span className="text-gray-400 absolute top-[24px]">Month</span>
          </div>
          <button className="w-full bg-[#E5E5E5] text-black py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white mb-2 disabled:opacity-70 disabled:cursor-not-allowed">
            Get started
          </button>
          <div className="flex items-center justify-center gap-2 text-sm mb-4 text-transparent">
            <span>100% Secure checkout</span>
          </div>
          <div className="space-y-4 flex-grow">
            <div className="flex items-center gap-4">
              <Image
                alt="check"
                width={24}
                height={24}
                className="text-white/30"
                src="/images/check-circle.svg"
              />
              <span className="text-white/90">Evaluate Feature</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                alt="check"
                width={24}
                height={24}
                className="text-white/30"
                src="/images/check-circle.svg"
              />
              <span className="text-white/90">Secure streaming</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                alt="check"
                width={24}
                height={24}
                className="text-white/30"
                src="/images/check-circle.svg"
              />
              <span className="text-white/90">P2P support</span>
            </div>
            <div className="h-6"></div>
          </div>
        </div>

        {/* Pro Plan Annual - Best Deal */}
        <div className="relative top-12 md:top-0" style={{ opacity: 1, transform: "none" }}>
          <div aria-hidden="true" className="absolute inset-0 flex justify-center">
            <div className="absolute top-[-42px] left-[-4px] right-[-4px] h-full rounded-3xl bg-gradient-to-b from-[#FFD833] to-[#FFD83300] shadow-2xl">
              <div className="text-black px-6 pt-2 rounded-full font-semibold">Best Deal</div>
            </div>
          </div>
          <div className="relative bg-[#1E1E1E]/90 rounded-3xl p-7 z-10 flex flex-col">
            <div className="relative z-10 flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 bg-[#FFFFFF]/4 p-[6px] rounded-2xl w-fit">
                <Image
                  alt="Interview Coder - AI Interview Assistant"
                  width={36}
                  height={36}
                  className="rounded-xl"
                  src="/images/interviewcoder-logo.png"
                />
                <h3 className="text-xl font-semibold text-white p-[10px]">Pro Plan</h3>
              </div>
              <span className="text-gray-400">Billed annually</span>
            </div>
            <p className="text-white/70 mb-4">Unlock all pro features</p>
            <div className="mb-4 relative">
              <span className="text-[43px] font-bold text-white">$25/</span>
              <span className="text-gray-400 absolute top-[24px]">Month</span>
            </div>
            <button className="w-full bg-[#F5D742] text-black py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#E5C73A] mb-2 disabled:opacity-70 disabled:cursor-not-allowed">
              Subscribe
            </button>
            <div className="flex items-center justify-center gap-2 text-sm mb-4">
              <Image
                alt="100% Secure checkout"
                width={12}
                height={12}
                className="object-contain"
                src="/images/lock.svg"
              />
              <span className="text-white/70">100% Secure checkout</span>
            </div>
            <div className="space-y-4 flex-grow">
              <div className="flex items-center gap-4">
                <Image
                  alt="check"
                  width={24}
                  height={24}
                  className="text-white/30"
                  src="/images/check-circle.svg"
                />
                <span className="text-white/90">Unlimited yearly usage</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  alt="check"
                  width={24}
                  height={24}
                  className="text-white/30"
                  src="/images/check-circle.svg"
                />
                <span className="text-white/90">Get Instant Solutions & Bug Fixes in Seconds</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  alt="check"
                  width={24}
                  height={24}
                  className="text-white/30"
                  src="/images/check-circle.svg"
                />
                <span className="text-white/90">Solves FAANG-Level Complex Problems</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  alt="check"
                  width={24}
                  height={24}
                  className="text-white/30"
                  src="/images/check-circle.svg"
                />
                <span className="text-white/90">24/7 customer support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Plan Monthly */}
        <div className="bg-[#1E1E1E] rounded-3xl p-7 flex flex-col relative top-14 md:top-0" style={{ opacity: 1, transform: "none" }}>
          <div className="relative z-10 flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 bg-[#FFFFFF]/4 p-[6px] rounded-2xl w-fit">
              <Image
                alt="Interview Coder - AI Interview Assistant"
                width={36}
                height={36}
                className="rounded-xl"
                src="/images/interviewcoder-logo.png"
              />
              <h3 className="text-xl font-semibold text-white p-[10px]">Pro Plan</h3>
            </div>
            <span className="text-gray-400">Billed monthly</span>
          </div>
          <p className="text-white/70 mb-4">Unlock all pro features</p>
          <div className="mb-4 relative">
            <span className="text-[43px] font-bold text-white">$60/</span>
            <span className="text-gray-400 absolute top-[24px]">Month</span>
          </div>
          <button className="w-full bg-[#E5E5E5] text-black py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white mb-2 disabled:opacity-70 disabled:cursor-not-allowed">
            Subscribe
          </button>
          <div className="flex items-center justify-center gap-2 text-sm mb-4">
            <Image
              alt="Secure checkout"
              width={12}
              height={12}
              className="object-contain"
              src="/images/lock.svg"
            />
            <span className="text-white/70">100% Secure checkout</span>
          </div>
          <div className="space-y-4 flex-grow">
            <div className="flex items-center gap-4">
              <Image
                alt="check"
                width={24}
                height={24}
                className="text-white/30"
                src="/images/check-circle.svg"
              />
              <span className="text-white/90">Unlimited monthly usage</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                alt="check"
                width={24}
                height={24}
                className="text-white/30"
                src="/images/check-circle.svg"
              />
              <span className="text-white/90">Get Instant Solutions & Bug Fixes in Seconds</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                alt="check"
                width={24}
                height={24}
                className="text-white/30"
                src="/images/check-circle.svg"
              />
              <span className="text-white/90">Solves FAANG-Level Complex Problems</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                alt="check"
                width={24}
                height={24}
                className="text-white/30"
                src="/images/check-circle.svg"
              />
              <span className="text-white/90">24/7 customer support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}