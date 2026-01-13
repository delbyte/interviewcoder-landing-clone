'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const PlatformSection = () => {
    // Static bars for "uptime graph" - 100% full bars as per "100% Uptime"
    const bars = Array(80).fill(100)

    return (
        <section className="flex flex-col items-center justify-center w-full px-4 mb-32">
            {/* Header Content */}
            <div className="flex flex-col items-center gap-[10px] w-full max-w-[1200px] mb-12">
                <h2
                    className="text-center text-white w-full max-w-[669px]"
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '40px',
                        lineHeight: '130%',
                        letterSpacing: '-0.04em',
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                >
                    Works on Every Data Science Interview Platform
                </h2>
                <p
                    className="text-center text-white/60 w-full max-w-[632px]"
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '160%'
                    }}
                >
                    Daily testing, real-world checks, and constant monitoring ensure InterviewCoder remains undetectable - 100% of the time
                </p>
            </div>

            {/* Status Card */}
            <div
                className="w-full max-w-[800px] rounded-[14px] flex flex-col gap-[15px]"
                style={{
                    padding: '19px 22px',
                    background: `
                        linear-gradient(180deg, rgba(60, 174, 47, 0.1) 0%, rgba(60, 174, 47, 0) 23.08%) padding-box,
                        linear-gradient(0deg, #131313, #131313) padding-box,
                        linear-gradient(180deg, #3CAE2F 0%, rgba(60, 174, 47, 0) 31.73%) border-box
                    `,
                    border: '1px solid transparent',
                    borderRadius: '14px',
                }}
            >
                <div className="flex flex-col gap-[29px] w-full">
                    {/* Top Bar with Status */}
                    <div className="flex flex-col gap-[20px] w-full">
                        <div className="flex flex-row items-center justify-between w-full h-[36px]">

                            {/* Left: Platform Info */}
                            <div className="flex flex-row items-center gap-[10px]">
                                <span style={{
                                    fontFamily: 'Fragment Mono, monospace',
                                    fontSize: '14px',
                                    color: 'rgba(255, 255, 255, 0.5)'
                                }}>001</span>

                                {/* Zoom Icon Container */}
                                <div
                                    className="w-[36.29px] h-[36.29px] items-center justify-center flex relative"
                                    style={{
                                        background: 'linear-gradient(180deg, #0080FD 0%, #0F34D8 100%)',
                                        borderRadius: '9.55px',
                                        // box-shadow from "Zoom" icon structure not explicitly on container but likely on inner or global
                                    }}
                                >
                                    {/* Top Highlight (Ellipse) */}
                                    <div style={{
                                        position: 'absolute',
                                        width: '5.89px',
                                        height: '5.89px',
                                        left: '15.14px',
                                        top: '-2.76px',
                                        background: '#FFFFFF',
                                        filter: 'blur(5.23px)'
                                    }} />

                                    {/* Camera Icon SVG */}
                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 2 }}>
                                        <path d="M14 2.5C14 1.67157 13.3284 1 12.5 1H2.5C1.67157 1 1 1.67157 1 2.5V11.5C1 12.3284 1.67157 13 2.5 13H12.5C13.3284 13 14 12.3284 14 11.5V2.5Z" fill="white" />
                                        <path d="M15.5 3.5L19 1.5V12.5L15.5 10.5V3.5Z" fill="white" />
                                    </svg>

                                    {/* Bottom Reflection (Vector shadow approximation) */}
                                    <div style={{
                                        position: 'absolute',
                                        width: '27.82px',
                                        height: '6.33px',
                                        left: '4.23px',
                                        top: '14.98px',
                                        background: 'rgba(255, 255, 255, 0.6)',
                                        filter: 'blur(4px)', // Adding blur to blend it as reflection
                                        opacity: 0.3,
                                        borderRadius: '50%'
                                    }} />
                                </div>

                                <span style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    color: '#FFFFFF'
                                }}>Zoom</span>
                            </div>

                            {/* Right: Status Badges */}
                            <div className="flex flex-row items-center gap-[10px]">
                                {/* Last Updated */}
                                <div className="flex flex-row items-center gap-[10px]">
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        background: '#69F064',
                                        border: '5px solid rgba(105, 240, 100, 0.2)',
                                        borderRadius: '50%',
                                        boxSizing: 'content-box'
                                    }} />
                                    <span style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        color: 'rgba(255, 255, 255, 0.8)'
                                    }}>Last updated 8hrs ago</span>
                                </div>

                                {/* Undetectable Badge */}
                                <div className="flex flex-row items-center gap-[10px] px-[13px] py-[9px] rounded-[40px]"
                                    style={{ background: 'rgba(105, 240, 100, 0.1)' }}>
                                    <span style={{
                                        fontFamily: 'Chivo Mono, monospace',
                                        fontWeight: 500,
                                        fontSize: '14px',
                                        color: '#69F064',
                                        lineHeight: '17px'
                                    }}>Undetectable</span>
                                    <div className="w-[22px] h-[22px] flex items-center justify-center rounded-full">
                                        {/* Chevron Top */}
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.5 13.75L11 8.25L5.5 13.75" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Static Uptime Horizontal Bars */}
                        <div className="flex flex-row items-center gap-[5px] w-full h-[44px]">
                            {bars.map((_, i) => (
                                <div
                                    key={i}
                                    style={{
                                        flex: 1,
                                        height: '44px',
                                        minWidth: '4px',
                                        background: 'linear-gradient(180deg, #69F064 0%, #3C8A3A 100%)',
                                        borderRadius: '32px'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Bottom Video/Image Placeholder */}
                    <div className="flex flex-col gap-[15px] w-full">
                        <div className="flex flex-row justify-between items-center w-full">
                            <span style={{
                                fontFamily: 'Geist, sans-serif',
                                fontWeight: 500,
                                fontSize: '23.59px',
                                letterSpacing: '-0.03em',
                                color: '#FFFFFF'
                            }}>Watch how its undetectable on Zoom</span>
                            <span style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: '14px',
                                color: '#67EC62'
                            }}>100% Uptime</span>
                        </div>

                        <div
                            className="w-full h-[428.47px] rounded-[15px] relative overflow-hidden flex items-center justify-center"
                            style={{
                                boxShadow: 'inset 0px 2px 2px rgba(255, 255, 255, 0.2)'
                            }}
                        >
                            <Image
                                src="/images/datascience/platform-demo.png"
                                fill
                                alt="Undetectable on Zoom"
                                style={{ objectFit: 'cover' }}
                            />

                            {/* Gradient Overlay */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 67.37%, #000000 100%)'
                                }}
                            />

                            {/* Play Button */}
                            <button
                                style={{
                                    boxSizing: 'border-box',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '9.43px',
                                    gap: '7.86px',
                                    width: '86.42px',
                                    height: '86.42px',
                                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.16) 100%)',
                                    border: '0.79px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0px 10.999px 31.43px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(5.5px)',
                                    borderRadius: '78.56px',
                                    cursor: 'pointer'
                                }}
                            >
                                {/* Inner Circle */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '67.56px',
                                    height: '67.56px',
                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), #EFCC3A',
                                    backgroundBlendMode: 'overlay, normal',
                                    boxShadow: '0px 13.36px 9.51px rgba(0, 0, 0, 0.25), inset 0px 1.57px 2.36px rgba(255, 255, 255, 0.55)',
                                    borderRadius: '78.56px'
                                }}>
                                    {/* Play Vector */}
                                    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px' }}>
                                        <path d="M21.61 12.765L0 25.53V0L21.61 12.765Z" fill="white" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
