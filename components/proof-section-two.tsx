import Image from "next/image"

export function ProofSectionTwo() {
  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden">
      {/* Background with proof-glow.png on left and right with fade effects */}
      <div 
        className="absolute inset-0 pointer-events-none"
        dangerouslySetInnerHTML={{
          __html: `
            <style>
              .proof-section::before,
              .proof-section::after {
                content: '';
                position: absolute;
                top: 0;
                width: 50%;
                height: 100%;
                background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.8) 100%),
                           url('/proof-glow.png');
                background-size: cover;
                background-position: center;
                opacity: 0.6;
                z-index: 0;
              }
              
              .proof-section::before {
                left: 0;
                background-position: left center;
              }
              
              .proof-section::after {
                right: 0;
                background-position: right center;
                transform: scaleX(-1);
              }
            </style>
          `
        }}
      />
      
      <div className="proof-section relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* Proof SVG */}
          <div className="flex justify-center mb-4">
            <Image
              src="/proof.svg"
              alt="Proof"
              width={400}
              height={120}
              className="h-16 w-auto"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-white">Interview Coder working on real assessments</h2>
          <p className="text-lg text-white/70">Watch Interview Coder in action taking down the latest online assessments and technical interviews.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 my-8">
          {/* Main Video - Left Side */}
          <div className="w-full lg:flex-1 lg:min-w-0">
            <div className="relative overflow-hidden group h-full">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black h-full flex flex-col rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div 
                  className="aspect-[16/9] rounded-2xl relative group cursor-pointer flex-shrink-0 lg:h-[28rem] p-1"
                  style={{ background: 'linear-gradient(to bottom, #FFDE5820, #FFFFFF10)' }}
                >
                  <video 
                    src="https://api.interviewcoder.co/storage/v1/object/sign/Videos/landing-page/Landing%20a%20200k_yr%20SWE%20job%20at%20Amazon%20using%20Interview%20Coder(2025)%20-%20InterviewCoder%20(1080p,%20h264).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZWI0ZWNhYy1jNDBlLTQxM2YtYjNjZC00ODIzMzJhNzcxMWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvbGFuZGluZy1wYWdlL0xhbmRpbmcgYSAyMDBrX3lyIFNXRSBqb2IgYXQgQW1hem9uIHVzaW5nIEludGVydmlldyBDb2RlcigyMDI1KSAtIEludGVydmlld0NvZGVyICgxMDgwcCwgaDI2NCkubXA0IiwiaWF0IjoxNzU4MjgyMDg2LCJleHAiOjE3ODk4MTgwODZ9.bglXrytkAf-BmaWPDcFwtfLewLwlKsLELLZ4HkE4A4w"
                    poster="https://api.interviewcoder.co/storage/v1/object/sign/Videos/landing-page/thumb-%20Landing%20a%20$200k:yr%20SWE%20job%20at%20Amazon%20using%20Interview%20Coder(2025).avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZWI0ZWNhYy1jNDBlLTQxM2YtYjNjZC00ODIzMzJhNzcxMWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvbGFuZGluZy1wYWdlL3RodW1iLSBMYW5kaW5nIGEgJDIwMGs6eXIgU1dFIGpvYiBhdCBBbWF6b24gdXNpbmcgSW50ZXJ2aWV3IENvZGVyKDIwMjUpLmF2aWYiLCJpYXQiOjE3NTgyODIxODMsImV4cCI6MTc4OTgxODE4M30.G3hT-qkzKblYsuNW3gc6SIEkKm7DRZvTWFtAL5B7Cr0"
                    className="w-full h-auto lg:h-full object-cover rounded-2xl cursor-pointer bg-black"
                    preload="metadata"
                    playsInline
                    muted
                    controls
                  />
                </div>
                <div className="flex justify-between py-5">
                  <h3 className="text-xl font-bold text-white line-clamp-2 leading-tight flex-1 min-w-0">
                    Landing a 200k_yr SWE job at Amazon using Interview Coder(2025)
                  </h3>
                  <span className="text-white/50 whitespace-nowrap">Jan 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Playlist - Right Side */}
          <div className="w-full lg:w-96 lg:flex-shrink-0">
            {/* Mobile Carousel */}
            <div className="lg:hidden relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <button className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white/70 hover:text-white hover:bg-black/70 transition-all duration-200 shadow-lg" aria-label="Scroll left">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <button className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white/70 hover:text-white hover:bg-black/70 transition-all duration-200 shadow-lg" aria-label="Scroll right">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 px-8">
                {/* Video items would go here */}
              </div>
            </div>

            {/* Desktop List */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="cursor-pointer bg-white/10 rounded-2xl">
                <div className="relative rounded-2xl">
                  <div className="flex gap-4 p-2">
                    <div className="relative flex-shrink-0 w-32 h-20 border-2 border-white/10 rounded-lg overflow-hidden">
                      <Image
                        src="https://api.interviewcoder.co/storage/v1/object/sign/Videos/landing-page/thumb-%20Landing%20a%20$200k:yr%20SWE%20job%20at%20Amazon%20using%20Interview%20Coder(2025).avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZWI0ZWNhYy1jNDBlLTQxM2YtYjNjZC00ODIzMzJhNzcxMWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvbGFuZGluZy1wYWdlL3RodW1iLSBMYW5kaW5nIGEgJDIwMGs6eXIgU1dFIGpvYiBhdCBBbWF6b24gdXNpbmcgSW50ZXJ2aWV3IENvZGVyKDIwMjUpLmF2aWYiLCJpYXQiOjE3NTgyODIxODMsImV4cCI6MTc4OTgxODE4M30.G3hT-qkzKblYsuNW3gc6SIEkKm7DRZvTWFtAL5B7Cr0"
                        alt="Landing a 200k_yr SWE job at Amazon using Interview Coder(2025)"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-0.5"/>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm line-clamp-2 mb-1">
                        Landing a 200k_yr SWE job at Amazon using Interview Coder(2025)
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cursor-pointer">
                <div className="relative rounded-2xl">
                  <div className="flex gap-4 p-2">
                    <div className="relative flex-shrink-0 w-32 h-20 border-2 border-white/10 rounded-lg overflow-hidden">
                      <Image
                        src="https://api.interviewcoder.co/storage/v1/object/sign/Videos/landing-page/thumb-%20Using%20InterviewCoder%20to%20Pass%20the%20Tagged%20Java%20Software%20Engineer%20OA%20(2026).avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZWI0ZWNhYy1jNDBlLTQxM2YtYjNjZC00ODIzMzJhNzcxMWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvbGFuZGluZy1wYWdlL3RodW1iLSBVc2luZyBJbnRlcnZpZXdDb2RlciB0byBQYXNzIHRoZSBUYWdnZWQgSmF2YSBTb2Z0d2FyZSBFbmdpbmVlciBPQSAoMjAyNikuYXZpZiIsImlhdCI6MTc1ODI4MjM2MSwiZXhwIjoxNzg5ODE4MzYxfQ.5mjXwHgjm4hcLyBCQNlW7w-PK3oSPSjDEejQpOXCrmE"
                        alt="Pass the Tagged Java Software Engineer OA (2026)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white/70 font-medium text-sm line-clamp-2 mb-1">
                        Pass the Tagged Java Software Engineer OA (2026)
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cursor-pointer">
                <div className="relative rounded-2xl">
                  <div className="flex gap-4 p-2">
                    <div className="relative flex-shrink-0 w-32 h-20 border-2 border-white/10 rounded-lg overflow-hidden">
                      <Image
                        src="https://api.interviewcoder.co/storage/v1/object/sign/Videos/landing-page/thumb-Using%20Interview%20Coder%20to%20pass%20the%20SnowFlake%20Software%20Engineer%20OA%20(2026).avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZWI0ZWNhYy1jNDBlLTQxM2YtYjNjZC00ODIzMzJhNzcxMWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvbGFuZGluZy1wYWdlL3RodW1iLVVzaW5nIEludGVydmlldyBDb2RlciB0byBwYXNzIHRoZSBTbm93Rmxha2UgU29mdHdhcmUgRW5naW5lZXIgT0EgKDIwMjYpLmF2aWYiLCJpYXQiOjE3NTgyODI0MjIsImV4cCI6MTc4OTgxODQyMn0.R0NAnxTvm2YNiIdHek2mRv_j63y0yK-IwMKpw9ZZF2I"
                        alt="Pass the SnowFlake Software Engineer OA (2026)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white/70 font-medium text-sm line-clamp-2 mb-1">
                        Pass the SnowFlake Software Engineer OA (2026)
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cursor-pointer">
                <div className="relative rounded-2xl">
                  <div className="flex gap-4 p-2">
                    <div className="relative flex-shrink-0 w-32 h-20 border-2 border-white/10 rounded-lg overflow-hidden">
                      <Image
                        src="https://api.interviewcoder.co/storage/v1/object/sign/Videos/landing-page/thumb-%20Using%20Interview%20Coder%20to%20pass%20the%20Oracle%20Software%20Engineer%20OA%20(2026).avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZWI0ZWNhYy1jNDBlLTQxM2YtYjNjZC00ODIzMzJhNzcxMWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvbGFuZGluZy1wYWdlL3RodW1iLSBVc2luZyBJbnRlcnZpZXcgQ29kZXIgdG8gcGFzcyB0aGUgT3JhY2xlIFNvZnR3YXJlIEVuZ2luZWVyIE9BICgyMDI2KS5hdmlmIiwiaWF0IjoxNzU4MjgyNDkyLCJleHAiOjE3ODk4MTg0OTJ9.i_Y2mo1L5C5E2Y9E2sVLnjsfQdbJQHab3kGhKfwB7EE"
                        alt="Pass the Oracle Software Engineer OA (2026)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white/70 font-medium text-sm line-clamp-2 mb-1">
                        Pass the Oracle Software Engineer OA (2026)
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
