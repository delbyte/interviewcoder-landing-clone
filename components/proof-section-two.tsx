import Image from "next/image"
import { motion } from "framer-motion"

export function ProofSectionTwo() {
  return (
    <section className="relative py-30 px-4 bg-black overflow-hidden">
      {/* Background with proof-glow.png on left and right with fade effects */}
      <style dangerouslySetInnerHTML={{ __html: `.proof-bg::before { content: ''; position: absolute; top: 0; left: 0; width: 50%; height: 100%; background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.8) 100%), url(/images/proof-glow.png); background-size: cover, 100% 100%; background-position: center; background-repeat: no-repeat; opacity: 0.6; z-index: 1; } .proof-bg::after { content: ''; position: absolute; top: 0; right: 0; width: 50%; height: 100%; background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.8) 100%), url(/images/proof-glow.png); background-size: cover, 100% 100%; background-position: center; background-repeat: no-repeat; transform: scaleX(-1); opacity: 0.6; z-index: 1; }` }} />
      
      <div className="proof-bg relative z-10 w-full mx-auto">
        <div className="text-center mb-16">
          {/* Proof SVG */}
          <motion.div 
            className="flex justify-center mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src="images/proof.svg"
              alt="Proof"
              width={800}
              height={240}
              className="h-56 w-auto"
            />
          </motion.div>
          <motion.h2 
            className="text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Interview Coder working on real assessments
          </motion.h2>
          <motion.p 
            className="text-2xl text-white/70"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Watch Interview Coder in action taking down the latest online assessments and technical interviews.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 my-8 w-3/5 mx-auto relative z-20">
          {/* Main Video - Left Side */}
          <motion.div 
            className="w-full lg:flex-1 lg:min-w-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          {/* Video Playlist - Right Side */}
          <motion.div 
            className="w-full lg:w-96 lg:flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
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
              <motion.div 
                className="cursor-pointer bg-white/10 rounded-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                viewport={{ once: true }}
              >
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
              </motion.div>

              <motion.div 
                className="cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                viewport={{ once: true }}
              >
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
              </motion.div>

              <motion.div 
                className="cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                viewport={{ once: true }}
              >
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
              </motion.div>

              <motion.div 
                className="cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Second Video Section - Reversed Layout */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:flex-row-reverse gap-6 my-8 w-3/5 mx-auto relative z-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          viewport={{ once: true }}
        >
          {/* Main Video - Right Side (reversed) */}
          <motion.div 
            className="w-full lg:flex-1 lg:min-w-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden group h-full">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black h-full flex flex-col rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div 
                  className="aspect-[16/9] rounded-2xl relative group cursor-pointer flex-shrink-0 lg:h-[28rem] p-1"
                  style={{ background: 'linear-gradient(to bottom, #FFDE5820, #FFFFFF10)' }}
                >
                  <video 
                    src="https://api.interviewcoder.co/storage/v1/object/sign/Videos/landing-page/Using%20Interview%20Coder%20to%20pass%20the%20IBM%20Software%20Engineer%20OA%20(2026)%20-%20InterviewCoder%20(1080p,%20h264).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZWI0ZWNhYy1jNDBlLTQxM2YtYjNjZC00ODIzMzJhNzcxMWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvbGFuZGluZy1wYWdlL1VzaW5nIEludGVydmlldyBDb2RlciB0byBwYXNzIHRoZSBJQk0gU29mdHdhcmUgRW5naW5lZXIgT0EgKDIwMjYpIC0gSW50ZXJ2aWV3Q29kZXIgKDEwODBwLCBoMjY0KS5tcDQiLCJpYXQiOjE3NTgyODI1MDcsImV4cCI6MTc4OTgxODUwN30.xKjsAqSeTBIWEPr68m6t1Q8zswKaS0u01BHkqGuFgik"
                    poster="https://api.interviewcoder.co/storage/v1/object/sign/Videos/landing-page/thumb-Using%20Interview%20Coder%20to%20pass%20the%20IBM%20Software%20Engineer%20OA%20(2026).avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZWI0ZWNhYy1jNDBlLTQxM2YtYjNjZC00ODIzMzJhNzcxMWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvbGFuZGluZy1wYWdlL3RodW1iLVVzaW5nIEludGVydmlldyBDb2RlciB0byBwYXNzIHRoZSBJQk0gU29mdHdhcmUgRW5naW5lZXIgT0EgKDIwMjYpLmF2aWYiLCJpYXQiOjE3NTgyODI1MjEsImV4cCI6MTc4OTgxODUyMX0.QGdfkNf6plu3y1gTt1vCHEvQDHdaJLCfp_BwAn0dGmU"
                    className="w-full h-auto lg:h-full object-cover rounded-2xl cursor-pointer bg-black"
                    preload="metadata"
                    playsInline
                    muted
                    controls
                  />
                </div>
                <div className="flex justify-between py-5">
                  <h3 className="text-xl font-bold text-white line-clamp-2 leading-tight flex-1 min-w-0">
                    Pass the IBM Software Engineer OA (2026)
                  </h3>
                  <span className="text-white/50 whitespace-nowrap">Sep 2025</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Playlist - Left Side (reversed) */}
          <motion.div 
            className="w-full lg:w-96 lg:flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            viewport={{ once: true }}
          >
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
                {/* Mobile carousel items would go here */}
              </div>
              <div className="flex justify-center gap-2 mt-4">
                <button className="w-2 h-2 rounded-full transition-all duration-300 bg-white"/>
                <button className="w-2 h-2 rounded-full transition-all duration-300 bg-white/30 hover:bg-white/50"/>
                <button className="w-2 h-2 rounded-full transition-all duration-300 bg-white/30 hover:bg-white/50"/>
                <button className="w-2 h-2 rounded-full transition-all duration-300 bg-white/30 hover:bg-white/50"/>
              </div>
            </div>

            {/* Desktop List */}
            <div className="hidden lg:flex flex-col gap-4">
              <motion.div 
                className="cursor-pointer bg-white/10 rounded-2xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 2.2 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl">
                  <div className="flex gap-4 p-2">
                    <div className="relative flex-shrink-0 w-32 h-20 border-2 border-white/10 rounded-lg overflow-hidden">
                      <Image
                        src="https://api.interviewcoder.co/storage/v1/object/sign/Videos/landing-page/thumb-Using%20Interview%20Coder%20to%20pass%20the%20IBM%20Software%20Engineer%20OA%20(2026).avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZWI0ZWNhYy1jNDBlLTQxM2YtYjNjZC00ODIzMzJhNzcxMWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvbGFuZGluZy1wYWdlL3RodW1iLVVzaW5nIEludGVydmlldyBDb2RlciB0byBwYXNzIHRoZSBJQk0gU29mdHdhcmUgRW5naW5lZXIgT0EgKDIwMjYpLmF2aWYiLCJpYXQiOjE3NTgyODI1MjEsImV4cCI6MTc4OTgxODUyMX0.QGdfkNf6plu3y1gTt1vCHEvQDHdaJLCfp_BwAn0dGmU"
                        alt="Pass the IBM Software Engineer OA (2026)"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-0.5"/>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm line-clamp-2 mb-1">
                        Pass the IBM Software Engineer OA (2026)
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="cursor-pointer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 2.3 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl">
                  <div className="flex gap-4 p-2">
                    <div className="relative flex-shrink-0 w-32 h-20 border-2 border-white/10 rounded-lg overflow-hidden">
                      <Image
                        src="https://api.interviewcoder.co/storage/v1/object/sign/Videos/landing-page/thumb-%20Using%20Interview%20Coder%20to%20pass%20the%20Citadel%20Software%20Engineer%20OA%20(2026).avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZWI0ZWNhYy1jNDBlLTQxM2YtYjNjZC00ODIzMzJhNzcxMWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvbGFuZGluZy1wYWdlL3RodW1iLSBVc2luZyBJbnRlcnZpZXcgQ29kZXIgdG8gcGFzcyB0aGUgQ2l0YWRlbCBTb2Z0d2FyZSBFbmdpbmVlciBPQSAoMjAyNikuYXZpZiIsImlhdCI6MTc1ODI4MjU5NywiZXhwIjoxNzg5ODE4NTk3fQ.zQmNaw94t8uqXL26yhGUn7Vede_YZHrsiH-UodH0FRA"
                        alt="Pass the Citadel Software Engineer OA (2026)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white/70 font-medium text-sm line-clamp-2 mb-1">
                        Pass the Citadel Software Engineer OA (2026)
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="cursor-pointer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 2.4 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl">
                  <div className="flex gap-4 p-2">
                    <div className="relative flex-shrink-0 w-32 h-20 border-2 border-white/10 rounded-lg overflow-hidden">
                      <Image
                        src="https://api.interviewcoder.co/storage/v1/object/sign/Videos/landing-page/thumb-Using%20Interview%20Coder%20to%20pass%20the%20CapitalOne%20Software%20Engineer%20OA%20(2026).avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZWI0ZWNhYy1jNDBlLTQxM2YtYjNjZC00ODIzMzJhNzcxMWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvbGFuZGluZy1wYWdlL3RodW1iLVVzaW5nIEludGVydmlldyBDb2RlciB0byBwYXNzIHRoZSBDYXBpdGFsT25lIFNvZnR3YXJlIEVuZ2luZWVyIE9BICgyMDI2KS5hdmlmIiwiaWF0IjoxNzU4MjgzOTAwLCJleHAiOjE3ODk4MTk5MDB9.ANaMlyBqfGSNc83Ezg3Szxe-ZbbMxMleMZhtY2ObZLo"
                        alt="Pass the CapitalOne Software Engineer OA (2026)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white/70 font-medium text-sm line-clamp-2 mb-1">
                        Pass the CapitalOne Software Engineer OA (2026)
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="cursor-pointer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 2.5 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl">
                  <div className="flex gap-4 p-2">
                    <div className="relative flex-shrink-0 w-32 h-20 border-2 border-white/10 rounded-lg overflow-hidden">
                      <Image
                        src="https://api.interviewcoder.co/storage/v1/object/sign/Videos/landing-page/thumb-Using%20Interview%20Coder%20to%20pass%20the%20Roblox%20Software%20Engineer%20OA%20(2026).avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZWI0ZWNhYy1jNDBlLTQxM2YtYjNjZC00ODIzMzJhNzcxMWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MvbGFuZGluZy1wYWdlL3RodW1iLVVzaW5nIEludGVydmlldyBDb2RlciB0byBwYXNzIHRoZSBSb2Jsb3ggU29mdHdhcmUgRW5naW5lZXIgT0EgKDIwMjYpLmF2aWYiLCJpYXQiOjE3NTgyODI4OTYsImV4cCI6MTc4OTgxODg5Nn0.9Z55FKj0n-SS0mginNDlyN0HvVB8d9-Xu78uIramKKo"
                        alt="Pass the Roblox Software Engineer OA (2026)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white/70 font-medium text-sm line-clamp-2 mb-1">
                        Pass the Roblox Software Engineer OA (2026)
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
