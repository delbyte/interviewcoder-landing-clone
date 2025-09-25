"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState("is-this-cheating")

  const faqs = [
    {
      id: "how-does-it-remain-undetectable",
      question: "How does it remain undetectable?",
      answer: "The assistant runs as a native desktop process that does not inject code into the interview window. That design, combined with window filtering and optional Zoom advanced capture, keeps the tool invisible to common recording checks."
    },
    {
      id: "is-this-cheating",
      question: "Is this cheating?",
      answer: "We disagree with the idea that this is cheating. The interview format already rewards rote puzzle recall, and our tool helps experienced engineers show real problem-solving instead of memorized tricks."
    },
    {
      id: "can-i-get-caught-using-this",
      question: "Can I get caught using this?",
      answer: "No, our tool is designed to be completely undetectable by interview platforms and recording software."
    },
    {
      id: "do-you-store-my-interview-content",
      question: "Do you store my interview content?",
      answer: "No, we do not store any of your interview content. All processing happens locally on your device to ensure complete privacy."
    },
    {
      id: "is-there-a-free-trial",
      question: "Is there a free trial?",
      answer: "Yes, we offer a free plan with limited usage so you can try out Interview Coder before upgrading to a paid plan."
    },
    {
      id: "what-is-an-ai-interview-assistant-for-technical-interviews-and-how-does-it-help",
      question: "What is an AI Interview Assistant for technical interviews and how does it help?",
      answer: "An AI Interview Assistant is a tool that helps you during technical interviews by providing real-time coding assistance, solution suggestions, and strategic advice to help you perform better."
    },
    {
      id: "what-if-something-breaks-during-an-interview",
      question: "What if something breaks during an interview?",
      answer: "Our tool is designed to be reliable, but if issues occur, our support team provides immediate assistance and backup solutions."
    },
    {
      id: "what-programming-languages-are-supported",
      question: "What programming languages are supported?",
      answer: "We support all major programming languages including Python, Java, JavaScript, C++, C#, Go, Rust, and many more."
    },
    {
      id: "does-the-app-work-with-current-zoom-versions",
      question: "Does the app work with current Zoom versions?",
      answer: "Yes, our app is regularly updated to work with the latest versions of Zoom and other video conferencing platforms."
    }
  ]

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? "" : id)
  }

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-30 my-[6.25rem] lg:my-[10rem] relative bg-black" aria-labelledby="faq-heading">
      <div className="flex flex-col gap-[51px] items-center justify-start p-0 relative size-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className=""
        >
          <div className="flex flex-col gap-2.5 items-center justify-start p-0 relative shrink-0 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className=""
            >
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.3] max-w-[669px] not-italic relative shrink-0 text-[30px] lg:text-[40px] text-center tracking-[-1.2px] lg:tracking-[-1.6px] w-full">
                <p className="block mb-0 text-[rgba(255,255,255,0.4)]">Got Questions?</p>
                <p className="block text-[#ffffff]">We've Got Answers</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="flex flex-col gap-[13px] md:gap-5 items-start justify-start w-full" role="list" aria-label="Frequently asked questions">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === faq.id
            return (
            <motion.div 
              key={faq.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className={`rounded-[20px] relative w-full ${isOpen ? "p-[1px]" : ""}`} style={isOpen ? { background: "linear-gradient(180deg, #EFCC3A 0%, transparent 100%)", borderRadius: "20px" } : {}}>
                <div className={`rounded-[20px] relative w-full ${isOpen ? "" : "bg-[rgba(255,255,255,0.11)]"}`} style={isOpen ? { background: "linear-gradient(180deg, rgba(239, 204, 58, 0.10) 0%, rgba(239, 204, 58, 0.00) 100%), #171717", borderRadius: "20px" } : {}}>
                  <button 
                    className="flex w-full items-center justify-center px-4 py-3.5 md:px-6 md:py-[17px] lg:px-[26px] lg:py-[22px] text-left gap-2.5"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${faq.id}`}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic text-white text-[16px] lg:text-[18px] text-left tracking-[-0.16px] lg:tracking-[-0.18px]">
                      <p className="block leading-[1.5] lg:leading-[normal]">{faq.question}</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.1)] flex flex-row gap-2.5 items-center justify-start p-[8px] lg:p-[9px] rounded-[40px] shrink-0">
                      <motion.div 
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[22px]">
                          <path d="M11 5V17M5 11H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </motion.div>
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && faq.answer && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden" 
                        id={`faq-${faq.id}`} 
                        role="region"
                      >
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic text-[14px] md:text-[16px] text-[rgba(255,255,255,0.67)] text-left tracking-[-0.14px] md:tracking-[-0.16px] w-full px-4 pb-3.5 md:px-6 md:pb-[17px] lg:px-[26px] lg:pb-[22px]"
                        >
                          <p className="block leading-[1.6]">{faq.answer}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
            )
          })}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className=""
        >
          <div className="flex flex-col gap-[20px] md:gap-2.5 items-start justify-start px-4 py-[14px] md:px-[26px] md:py-[22px] relative rounded-[20px] shrink-0 w-full max-w-[900px] -mt-[38px] sm:-mt-[31px]">
            <div className="absolute border border-[rgba(255,255,255,0.23)] border-dashed inset-0 pointer-events-none rounded-[20px]" aria-hidden="true"></div>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-2.5 items-start md:items-end justify-start p-0 relative shrink-0 w-full">
              <div className="flex flex-col gap-1 grow items-start justify-center leading-[0] not-italic p-0 relative shrink-0 text-left w-full md:w-auto">
                <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#ffffff] text-[16px] lg:text-[18px] tracking-[-0.16px] lg:tracking-[-0.18px] w-full">
                  <p className="block leading-[normal]">Couldn't find your answer?</p>
                </div>
                <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] md:text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.14px] md:tracking-[-0.16px] w-full">
                  <p className="leading-[1.4]">
                    <span>Send us an email at </span>
                    <span className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] text-[rgba(255,255,255,0.7)]">
                      <a href="mailto:abdulla@interviewcoder.com">abdulla@interviewcoder.com</a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-[#333333] flex flex-row gap-2.5 items-center justify-center px-7 py-[15px] relative rounded-[100px] shadow-[0px_172px_48px_0px_rgba(0,0,0,0),0px_110px_44px_0px_rgba(0,0,0,0),0px_62px_37px_0px_rgba(0,0,0,0),0px_28px_28px_0px_rgba(0,0,0,0),0px_7px_15px_0px_rgba(0,0,0,0)] shrink-0 w-full md:w-[203px]">
                <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] md:text-[20px] text-center md:text-left tracking-[-0.16px] md:tracking-[-0.2px]">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    <a href="/help">Visit help center</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
