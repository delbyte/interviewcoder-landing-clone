"use client"

import React from "react"
import Image from "next/image"

export function DataScienceInvisible() {
    return (
        <section className="py-32 relative bg-black overflow-hidden flex justify-center">
            {/* Container matching Frame 2147236220 */}
            <div
                className="relative flex flex-row justify-between items-center p-[10px] pl-[40px] gap-[10px]"
                style={{
                    width: "1240px",
                    maxWidth: "95vw",
                    height: "528px",
                    borderRadius: "30px",
                }}
            >

                {/* Left Side: Text Content - Frame 2147237659 */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "0px 50px 0px 10px",
                    gap: "21px",
                    width: "611px",
                    maxHeight: "217.71px"
                }} className="z-10 bg-transparent">

                    {/* Icon Box - Frame 2147236213 */}
                    <div
                        style={{
                            width: "67px",
                            height: "65.71px",
                            background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(180deg, #EFCC3A 0%, #DE9E15 100%), #3E371F",
                            borderRadius: "12.88px",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {/* iconoir:mac-dock representation */}
                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                            <path d="M2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19Z" stroke="currentColor" strokeWidth="2" />
                            <path d="M2 16H22" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>

                    <h2
                        style={{
                            fontFamily: "Geist, sans-serif",
                            fontWeight: 600,
                            fontSize: "40px",
                            lineHeight: "130%",
                            letterSpacing: "-0.04em",
                            color: "#FFFFFF"
                        }}
                    >
                        Nowhere on Your Dock
                    </h2>

                    <p
                        style={{
                            fontFamily: "Geist, sans-serif",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "159%",
                            color: "rgba(255, 255, 255, 0.7)"
                        }}
                    >
                        Interview Coder runs silently in the background - no Dock icon, no visible apps, no suspicion during live DS interviews.
                    </p>
                </div>

                {/* Right Side: Visual - Frame 2147236215 */}
                <div
                    style={{
                        width: "579px",
                        height: "508px",
                        background: "linear-gradient(180deg, #EAC332 0%, #EAAF14 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #EFB63A 0%, #EFCC3A 100%)",
                        borderRadius: "20px",
                        position: "relative",
                        overflow: "hidden"
                    }}
                    className="hidden md:flex flex-col items-center justify-center shrink-0"
                >
                    {/* Abstract background elements from CSS */}
                    <div
                        style={{
                            position: "absolute",
                            width: "1759px",
                            height: "951px",
                            left: "-550px", // Adjusted for relative positioning inside overflow-hidden container
                            top: "0px",
                            pointerEvents: "none"
                        }}
                    >
                        {/* Dock representation image (Using the uploaded one or placeholder) */}
                        <Image
                            src="/images/datascience/dock.png"
                            alt="Mac Dock"
                            layout="fill"
                            objectFit="cover" // Adjust as needed
                            className="opacity-90"
                        />
                    </div>

                    {/* The "Invisible" representation - Yellow Glow */}
                    <div
                        style={{
                            position: "absolute",
                            width: "260px",
                            height: "100px",
                            left: "160px",
                            top: "200px",
                            background: "#FFFFFF",
                            opacity: 0.6,
                            filter: "blur(81.45px)"
                        }}
                    />

                    {/* Bin Icon */}
                    <div className="absolute top-[200px] right-[100px] w-24 h-24">
                        {/* Placeholder for bin icon asset if not in dock image */}
                    </div>

                    {/* Icons on the dock - absolute positioning based on provided CSS approximations */}
                    {/* Using a simple row for icons if the image doesn't contain them */}
                    <div className="absolute bottom-10 left-10 flex gap-4 opacity-50 blur-[2px]">
                        {/* Mock icons */}
                        <div className="w-16 h-16 bg-white/20 rounded-2xl"></div>
                        <div className="w-16 h-16 bg-white/20 rounded-2xl"></div>
                        <div className="w-16 h-16 bg-white/20 rounded-2xl"></div>
                        <div className="w-16 h-16 bg-white/20 rounded-2xl"></div>
                    </div>

                    {/* "Invisible on Dock" Text overlay */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "40px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "rgba(0,0,0,0.6)",
                            backdropFilter: "blur(10px)",
                            padding: "8px 16px",
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "white",
                            fontSize: "14px",
                            fontWeight: 500
                        }}
                    >
                        Invisible Mode Active
                    </div>
                </div>
            </div>
        </section>
    )
}
