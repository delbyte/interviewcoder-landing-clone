"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const OFFER_CARDS = [
    {
        company: "Meta",
        logo: "/images/meta.svg",
        role: "Senior Data Scientist",
        offer: "$280k/yr",
        image: "/images/meta-clean-code.avif",
        bgGradient: "linear-gradient(135deg, #1877F2 0%, #0044CC 100%)",
        user: "Cracked Meta DS Interview"
    },
    {
        company: "Netflix",
        logo: "/images/netflix.svg",
        role: "Machine Learning Engineer",
        offer: "$450k/yr",
        image: "/images/netflix-logo.png", // specific placeholder or asset if available
        bgGradient: "linear-gradient(135deg, #E50914 0%, #B20710 100%)",
        user: "Landed Netflix MLE Offer"
    },
    {
        company: "Google",
        logo: "/images/google.svg",
        role: "Data Scientist L4",
        offer: "$210k/yr",
        image: "/images/google-logo.png",
        bgGradient: "linear-gradient(135deg, #4285F4 0%, #34A853 100%)",
        user: "Google Offer Secured"
    },
    // Add more mock data as needed to fill the scroll
    {
        company: "Amazon",
        logo: "/images/amazon.svg",
        role: "Applied Scientist",
        offer: "$320k/yr",
        image: "/images/amazon-logo.png",
        bgGradient: "linear-gradient(135deg, #FF9900 0%, #FF6600 100%)",
        user: "Amazon Applied Scientist"
    },
    {
        company: "Uber",
        logo: "/images/uber-interview.avif",
        role: "Data Analyst",
        offer: "$180k/yr",
        image: "/images/uber-interview.avif",
        bgGradient: "linear-gradient(135deg, #000000 0%, #333333 100%)",
        user: "Uber Data Analyst Offer"
    },
]

const OfferCard = ({ data }: { data: typeof OFFER_CARDS[0] }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "14.66px",
                gap: "16.66px",
                width: "100%", // Responsive width inside column
                maxWidth: "404.63px",
                height: "597.39px",
                borderRadius: "27px",
                background: "#0a0a0a", // Fallback
                position: "relative",
                overflow: "hidden",
            }}
            className="border border-white/5 mx-auto"
        >
            {/* Dynamic Logo Area - Simplification of the 'logo' part from Figma */}
            <div className="relative w-full h-[60px] flex items-center justify-center">
                <div className="flex items-center gap-2">
                    <Image src={data.logo} alt={data.company} width={40} height={40} className="object-contain" />
                    <span className="text-xl font-bold text-white">{data.company}</span>
                </div>
                {/* Decorative Pill/Highlight */}
                <div
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: data.bgGradient,
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%'
                    }}
                />
            </div>

            {/* Frame 2147238548 - Main Card Content */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "10px",
                    gap: "15px",
                    width: "100%",
                    height: "512px",
                    background: "rgba(255, 255, 255, 0.11)",
                    boxShadow: "inset 0px 1px 2px rgba(255, 255, 255, 0.15)",
                    borderRadius: "30px",
                }}
            >
                {/* Main Image Area */}
                <div
                    style={{
                        width: "100%",
                        flex: "1",
                        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${data.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: "20px",
                    }}
                />

                {/* Text Area */}
                <div
                    style={{
                        width: "100%",
                        fontFamily: "var(--font-geist-sans), sans-serif",
                        fontWeight: 500,
                        fontSize: "18px",
                        lineHeight: "140%",
                        color: "#FFFFFF",
                        padding: "0 4px"
                    }}
                >
                    {data.user}
                </div>

                {/* QR Code / CTA Area */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "18px 22px",
                        gap: "10px",
                        width: "100%",
                        height: "55px",
                        background: "#333333",
                        boxShadow: "inset 0px 1px 0px rgba(255, 255, 255, 0.15)",
                        borderRadius: "20px",
                        cursor: "pointer"
                    }}
                    className="group hover:bg-neutral-700 transition-colors"
                >
                    <span style={{
                        fontFamily: "Geist, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        color: "#FFFFFF"
                    }}>
                        View offer
                    </span>
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                        <path d="M1 6.5H13.5M13.5 6.5L8.5 1.5M13.5 6.5L8.5 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

const MarqueeColumn = ({ direction = "up", speed = 20, delay = 0 }) => {
    // Duplicate data to create seamless loop
    const duplicatedData = [...OFFER_CARDS, ...OFFER_CARDS, ...OFFER_CARDS]

    return (
        <div className="flex flex-col gap-6 overflow-hidden max-h-[1200px] relative w-full md:w-1/3">
            <motion.div
                className="flex flex-col gap-6"
                initial={{ y: direction === "up" ? 0 : -1000 }}
                animate={{ y: direction === "up" ? -2000 : 0 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                    delay: delay
                }}
            >
                {duplicatedData.map((card, idx) => (
                    <OfferCard key={idx} data={card} />
                ))}
            </motion.div>
        </div>
    )
}

export function DataScienceOffers() {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
                        Real Offers, Real Data Scientists
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        Join thousands of data scientists who breached the toughest interview screens.
                    </p>
                </div>

                <div className="flex flex-row gap-6 h-[800px] overflow-hidden relative mask-linear-gradient">
                    <MarqueeColumn direction="up" speed={45} />
                    <MarqueeColumn direction="down" speed={55} />
                    <MarqueeColumn direction="up" speed={50} />

                    {/* Fade overlay at bottom as requested */}
                    <div
                        className="absolute left-[-10px] right-[10px] bottom-[-35px] h-[300px] pointer-events-none z-20"
                        style={{
                            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 70.22%)"
                        }}
                    />
                    {/* Fade overlay at top for symmetry */}
                    <div
                        className="absolute left-0 right-0 top-0 h-[100px] pointer-events-none z-20"
                        style={{
                            background: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000000 100%)"
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
