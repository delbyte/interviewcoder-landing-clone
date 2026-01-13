"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function DataScienceFAQ() {
    const [openFAQ, setOpenFAQ] = useState("is-interview-coder-free")

    const faqs = [
        {
            id: "is-interview-coder-free",
            question: "Is interview Coder Free?",
            answer: "Yes, you can try it for free. You won't get access to the latest models and you won't be able to see the entire solution on the free version, though."
        },
        {
            id: "how-interview-coder-undetectable",
            question: "How Interview Coder is undetectable?",
            answer: "The assistant runs as a native desktop process that does not inject code into the interview window. That design, combined with window filtering and optional Zoom advanced capture, keeps the tool invisible to common recording checks."
        },
        {
            id: "what-programming-languages-supported",
            question: "What programming languages are supported?",
            answer: "We support all major programming languages including Python, R, SQL, Java, JavaScript, C++, and many more commonly used in data science interviews."
        },
        {
            id: "experiencing-bug",
            question: "I'm experiencing a bug, what should I do",
            answer: "Please reach out to our support team at abdulla@interviewcoder.com. We'll help you resolve the issue as quickly as possible."
        },
        {
            id: "does-app-work-zoom",
            question: "Does the app work with current Zoom versions?",
            answer: "Yes, our app is regularly updated to work with the latest versions of Zoom and other video conferencing platforms."
        }
    ]

    const toggleFAQ = (id: string) => {
        setOpenFAQ(openFAQ === id ? "" : id)
    }

    return (
        <section
            className="w-full overflow-hidden py-[6.25rem] lg:py-[10rem] relative"
            aria-labelledby="faq-heading"
            style={{
                background: "linear-gradient(180deg, #000000 0%, #141414 47.12%, #000000 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-30">
                <div className="flex flex-col gap-[51px] items-center justify-start p-0 relative size-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col gap-2.5 items-center justify-start p-0 relative shrink-0 w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="font-semibold leading-[1.3] max-w-[669px] text-[30px] lg:text-[40px] text-center tracking-[-1.2px] lg:tracking-[-1.6px] w-full" style={{ fontFamily: 'Geist, sans-serif' }}>
                                    <p className="block mb-0 text-white">Frequently Asked Questions</p>
                                    <p className="block text-[rgba(255,255,255,0.4)]">(Data Science Edition)</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-[13px] md:gap-5 items-start justify-start w-full max-w-[900px]" role="list" aria-label="Frequently asked questions">
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
                                                <div className="basis-0 font-medium grow leading-[0] min-h-px min-w-px text-white text-[16px] lg:text-[18px] text-left tracking-[-0.16px] lg:tracking-[-0.18px]" style={{ fontFamily: 'Geist, sans-serif' }}>
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
                                                            className="font-normal leading-[0] text-[14px] md:text-[16px] text-[rgba(255,255,255,0.67)] text-left tracking-[-0.14px] md:tracking-[-0.16px] w-full px-4 pb-3.5 md:px-6 md:pb-[17px] lg:px-[26px] lg:pb-[22px]"
                                                            style={{ fontFamily: 'Geist, sans-serif' }}
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
                        transition={{ duration: 0.6, delay: 1.0 }}
                        viewport={{ once: true }}
                        className="w-full max-w-[900px]"
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                padding: '22px 26px',
                                gap: '10px',
                                width: '100%',
                                maxWidth: '900px',
                                height: '102px',
                                background: '#0B0B0B',
                                border: '1px dashed rgba(255, 255, 255, 0.23)',
                                borderRadius: '20px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <div className="flex flex-col md:flex-row gap-[10px] md:gap-2.5 items-start md:items-center justify-between w-full">
                                <div className="flex flex-col gap-1 items-start justify-center text-left">
                                    <div className="font-medium text-[#ffffff] text-[16px] lg:text-[18px] tracking-[-0.16px] lg:tracking-[-0.18px]" style={{ fontFamily: 'Geist, sans-serif' }}>
                                        Couldn't find your answer?
                                    </div>
                                    <div className="font-normal text-[14px] md:text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.14px] md:tracking-[-0.16px]" style={{ fontFamily: 'Geist, sans-serif' }}>
                                        Send us an email at{' '}
                                        <a href="mailto:abdulla@interviewcoder.com" className="underline text-[rgba(255,255,255,0.7)]">abdulla@interviewcoder.com</a>
                                    </div>
                                </div>
                                <a
                                    href="/help"
                                    className="bg-[#333333] flex items-center justify-center px-7 py-[15px] rounded-[100px] shrink-0 w-full md:w-[203px]"
                                >
                                    <span className="font-medium text-[#ffffff] text-[16px] md:text-[20px] text-center tracking-[-0.16px] md:tracking-[-0.2px]" style={{ fontFamily: 'Geist, sans-serif' }}>
                                        Visit help center
                                    </span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
