"use client"

import Image from "next/image"
import { useState } from "react"

export function PlatformCompatibility() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const platforms = [
    {
      number: "001",
      name: "Zoom",
      logo: "/images/zoom.avif",
      link: "https://support.zoom.us/hc/en/article?id=zm_kb&sysparm_article=KB0063824#:~:text=Advanced%20capture%20with%20window%20filtering,from%20the%20Zoom%20desktop%20app.",
      hasWarning: true,
      warningContent: (
        <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-yellow-500/20 shrink-0 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <p className="text-sm text-yellow-300">
              Hey! You'll need to either use Zoom version 6.16 or older, or turn on{" "}
              <a target="_blank" className="text-yellow-200 hover:text-white underline underline-offset-4" href="https://support.zoom.us/hc/en/article?id=zm_kb&sysparm_article=KB0063824#:~:text=Advanced%20capture%20with%20window%20filtering,from%20the%20Zoom%20desktop%20app">
                Advanced capture with window filtering
              </a>{" "}
              in your Zoom settings. This is important to make sure everything works smoothly.
            </p>
          </div>
        </div>
      )
    },
    {
      number: "002",
      name: "HackerRank",
      logo: "/images/hackerrank.avif"
    },
    {
      number: "003",
      name: "CodeSignal",
      logo: "/images/codesignal.avif"
    },
    {
      number: "004",
      name: "CoderPad",
      logo: "/images/coderpad.avif"
    },
    {
      number: "005",
      name: "Chime",
      logo: "/images/chime.avif",
      hasWarning: true,
      warningContent: (
        <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-yellow-500/20 shrink-0 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <p className="text-sm text-yellow-300">
              Heads up! The latest Chime desktop app isn't playing nice with our tool right now. Your best bet is to ask your interviewer for a browser link instead - that way you'll get the full experience. If you have to use the desktop app, we can't guarantee everything will work as expected.
            </p>
          </div>
        </div>
      )
    },
    {
      number: "006",
      name: "Microsoft Teams",
      logo: "/images/team.avif"
    },
    {
      number: "007",
      name: "Google Meet",
      logo: "/images/google_meet.avif"
    }
  ]

  return (
    <section id="guaranteed-setup" className="my-[6.25rem] lg:my-[10rem] max-w-7xl mx-auto px-5 md:px-8 lg:px-30">
      <div className="" style={{ opacity: 1 }}>
        <div className="text-center mb-16">
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">Guaranteed to Work with Your Setup</h2>
          </div>
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <p className="text-lg leading-8 text-gray-400 max-w-4xl mx-auto">
              Until companies switch back to in-person interviews or get rid of LeetCode interviews entirely, Interview Coder will work. Here's an up-to-date list of how well we work with each platform.<br />
              In addition to this list, Interview Coder works with any{" "}
              <a className="text-zinc-200 hover:text-white underline underline-offset-4" href="/still_working">web-based</a>{" "}
              interview platform.<br />
              Before you sign up for a subscription, make sure you pass our{" "}
              <a className="text-zinc-200 hover:text-white underline underline-offset-4" href="/help?section=basic-checks">basic checks</a>.
            </p>
          </div>
        </div>
      </div>

      <div className="" style={{ opacity: 1, transform: "none" }}>
        <div className="max-w-4xl mx-auto">
          <div className="relative flex flex-col divide-y divide-gray-800/50">
            {platforms.map((platform, index) => (
              <div key={index} className="" style={{ opacity: 1, transform: "none" }}>
                <div className="group relative flex items-center w-full hover:bg-gray-800/30 transition-colors duration-200 cursor-pointer">
                  <div className="flex flex-col w-full">
                    <div 
                      className="flex items-center gap-4 sm:gap-8 px-4 sm:px-6 h-[76px]"
                      onClick={() => toggleItem(index)}
                    >
                      <span className="text-gray-500 w-[40px] sm:w-[60px] font-mono text-sm sm:text-base font-medium">
                        {platform.number}
                      </span>
                      <div className="flex items-center gap-4 sm:gap-8 flex-1">
                        {platform.link ? (
                          <a target="_blank" className="flex items-center gap-4 sm:gap-8" href={platform.link}>
                            <Image
                              alt={platform.name}
                              width={128}
                              height={128}
                              decoding="async"
                              className="object-contain w-8 h-8 sm:w-10 sm:h-10 brightness-0 invert opacity-80"
                              sizes="(max-width: 640px) 128px, 192px"
                              src={platform.logo}
                            />
                            <span className="text-base sm:text-lg font-medium text-gray-300">{platform.name}</span>
                          </a>
                        ) : (
                          <div className="flex items-center gap-4 sm:gap-8">
                            <Image
                              alt={platform.name}
                              width={128}
                              height={128}
                              decoding="async"
                              className="object-contain w-8 h-8 sm:w-10 sm:h-10 brightness-0 invert opacity-80"
                              sizes="(max-width: 640px) 128px, 192px"
                              src={platform.logo}
                            />
                            <span className="text-base sm:text-lg font-medium text-gray-300">{platform.name}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-4 ml-auto">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className={`text-gray-500 transition-transform duration-200 w-5 h-5 ${
                              openItems.includes(index) ? 'rotate-0' : 'rotate-180'
                            }`}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {openItems.includes(index) && (
                      <div id={`details-${index}`} className="">
                        <div className="px-4 sm:px-6 py-4 sm:py-5 space-y-4 text-sm bg-gray-800/10">
                          {platform.hasWarning && (
                            <div className="text-gray-300 leading-relaxed">
                              {platform.warningContent}
                            </div>
                          )}
                          <div className="text-gray-400 leading-relaxed">
                            We've thoroughly tested this and can confirm it works perfectly as long as you pass these{" "}
                            <a target="_blank" className="text-zinc-200 hover:text-white underline underline-offset-4" href="/help?section=basic-checks">
                              basic checks
                            </a>{" "}
                            first. Want to know exactly how we keep you undetectable? Check out our{" "}
                            <a target="_blank" className="text-zinc-200 hover:text-white underline underline-offset-4" href="/still_working">
                              behind-the-scenes explanation
                            </a>{" "}
                            - we've laid out everything in detail.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <div className="mt-8">
              <p className="text-center text-sm text-zinc-500 px-4">
                Warning: Some MacOS versions are experiencing a WebRTC issue that breaks Interview Coder. If you're on MacOS, please make sure you pass our{" "}
                <a target="_blank" className="text-zinc-200 hover:text-white underline underline-offset-4" href="/help?section=basic-checks">
                  basic checks
                </a>{" "}
                to make sure you're good to go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
