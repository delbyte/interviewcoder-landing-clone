"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Lock } from "lucide-react";

export function DataSciencePricing() {
    const [timeLeft, setTimeLeft] = useState({ hours: 16, minutes: 23, seconds: 24 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { hours, minutes, seconds } = prev;
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                }
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                }
                if (hours < 0) {
                    hours = 23;
                }
                return { hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const features = [
        "Unlimited lifetime usage",
        "Solving and debugging",
        "Most powerful agent models",
        "Fine-tuned AI for Data Science",
        "24/7 customer support",
    ];

    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "60px 0",
                gap: "120px",
                width: "100%",
                background: "linear-gradient(180deg, #000000 0%, #141414 47.12%, #000000 100%)",
            }}
        >
            {/* Pricing Card Container */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "4.87px",
                    gap: "4.87px",
                    width: "572.16px",
                    maxWidth: "90vw",
                    minHeight: "701.29px",
                    background: "linear-gradient(180deg, #FFD833 0%, rgba(255, 216, 51, 0) 100%)",
                    borderRadius: "36.53px",
                }}
            >
                {/* Yellow Header */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "12.18px 18.26px",
                        gap: "12.18px",
                        width: "100%",
                        height: "78px",
                        boxSizing: "border-box",
                    }}
                >
                    {/* 50% off */}
                    <span
                        style={{
                            fontFamily: "Geist, sans-serif",
                            fontWeight: 700,
                            fontSize: "34.09px",
                            lineHeight: "110%",
                            letterSpacing: "-0.04em",
                            color: "#111111",
                            flexGrow: 1,
                        }}
                    >
                        50% off
                    </span>

                    {/* Countdown Timer */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "10.96px",
                        }}
                    >
                        {/* Hours */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "15.83px 6.09px",
                                width: "50.6px",
                                height: "53.65px",
                                background: "rgba(15, 15, 15, 0.08)",
                                borderRadius: "16.63px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "Geist, sans-serif",
                                    fontWeight: 600,
                                    fontSize: "24.35px",
                                    lineHeight: "90.2%",
                                    textAlign: "center",
                                    letterSpacing: "-0.04em",
                                    color: "#000000",
                                }}
                            >
                                {String(timeLeft.hours).padStart(2, "0")}
                            </span>
                        </div>

                        {/* Colon */}
                        <span style={{ fontWeight: 700, fontSize: "24px", color: "#000000" }}>:</span>

                        {/* Minutes */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "15.83px 3.65px",
                                width: "50.6px",
                                height: "53.65px",
                                background: "rgba(15, 15, 15, 0.08)",
                                borderRadius: "16.63px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "Geist, sans-serif",
                                    fontWeight: 600,
                                    fontSize: "24.35px",
                                    lineHeight: "90.2%",
                                    textAlign: "center",
                                    letterSpacing: "-0.04em",
                                    color: "#000000",
                                }}
                            >
                                {String(timeLeft.minutes).padStart(2, "0")}
                            </span>
                        </div>

                        {/* Colon */}
                        <span style={{ fontWeight: 700, fontSize: "24px", color: "#000000" }}>:</span>

                        {/* Seconds */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "15.83px 3.65px",
                                width: "50.6px",
                                height: "53.65px",
                                background: "rgba(15, 15, 15, 0.08)",
                                borderRadius: "16.63px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "Geist, sans-serif",
                                    fontWeight: 600,
                                    fontSize: "24.35px",
                                    lineHeight: "90.2%",
                                    textAlign: "center",
                                    letterSpacing: "-0.04em",
                                    color: "#000000",
                                }}
                            >
                                {String(timeLeft.seconds).padStart(2, "0")}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Dark Body */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        padding: "37.74px 32.87px",
                        gap: "51.14px",
                        width: "100%",
                        minHeight: "287.33px",
                        background: "rgba(30, 30, 30, 0.9)",
                        borderRadius: "36.53px",
                        boxSizing: "border-box",
                    }}
                >
                    {/* Top Section */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "20.7px", width: "100%" }}>
                        {/* Logo + Title */}
                        <div style={{ display: "flex", alignItems: "center", gap: "12.18px" }}>
                            <Image
                                src="/images/interviewcoder-logo.png"
                                width={45}
                                height={45}
                                alt="Interview Coder"
                                style={{ borderRadius: "19.48px" }}
                            />
                            <span
                                style={{
                                    fontFamily: "Geist, sans-serif",
                                    fontWeight: 600,
                                    fontSize: "23.13px",
                                    lineHeight: "90.2%",
                                    letterSpacing: "-0.02em",
                                    color: "#F2CD32",
                                }}
                            >
                                Lifetime Pro
                            </span>
                        </div>

                        {/* Price Row */}
                        <div style={{ display: "flex", alignItems: "center", gap: "9.74px" }}>
                            <span
                                style={{
                                    width: '163px',
                                    height: '85px',
                                    fontFamily: "Geist, sans-serif",
                                    fontWeight: 600,
                                    fontSize: "65.75px",
                                    lineHeight: "130%",
                                    letterSpacing: "-0.04em",
                                    color: "#FED833",
                                    textAlign: 'center',
                                }}
                            >
                                $989
                            </span>
                            <span
                                style={{
                                    fontFamily: "Geist, sans-serif",
                                    fontWeight: 400,
                                    fontSize: "19.48px",
                                    lineHeight: "25px",
                                    letterSpacing: "-0.01em",
                                    color: "rgba(255, 255, 255, 0.67)",
                                }}
                            >
                                One-time payment
                            </span>
                        </div>

                        {/* Original Price */}
                        <div style={{ display: "flex", alignItems: "center", gap: "12.18px" }}>
                            <span
                                style={{
                                    fontFamily: "Geist, sans-serif",
                                    fontWeight: 400,
                                    fontSize: "21.91px",
                                    lineHeight: "28px",
                                    letterSpacing: "-0.01em",
                                    color: "rgba(255, 255, 255, 0.67)",
                                }}
                            >
                                Original price: $1978
                            </span>
                        </div>
                    </div>

                    {/* Buy Button Section */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12.18px", width: "100%" }}>
                        <button
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "15.83px 49.92px",
                                gap: "12.18px",
                                width: "100%",
                                height: "65.78px",
                                background: "linear-gradient(180deg, #EAC332 0%, #EAAF14 100%)",
                                boxShadow: "0px 9.74px 20.45px rgba(0, 0, 0, 0.25)",
                                borderRadius: "121.75px",
                                border: "none",
                                cursor: "pointer",
                                fontFamily: "Geist, sans-serif",
                                fontWeight: 500,
                                fontSize: "22.45px",
                                lineHeight: "34px",
                                textAlign: "center",
                                letterSpacing: "-0.01em",
                                color: "#000000",
                            }}
                        >
                            Buy now
                        </button>

                        {/* Secure Checkout */}
                        <div style={{ display: "flex", alignItems: "center", gap: "12.18px" }}>
                            <Lock style={{ width: "15.29px", height: "17.38px", color: "rgba(29, 255, 169, 0.7)" }} />
                            <span
                                style={{
                                    fontFamily: "Geist, sans-serif",
                                    fontWeight: 400,
                                    fontSize: "19.48px",
                                    lineHeight: "25px",
                                    letterSpacing: "-0.01em",
                                    color: "rgba(255, 255, 255, 0.67)",
                                }}
                            >
                                Secure checkout
                            </span>
                        </div>
                    </div>

                    {/* Features List */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "18.26px", width: "100%" }}>
                        {features.map((feature, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "19.48px" }}>
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "37.74px", height: "37.74px", flexShrink: 0 }}>
                                    <path d="M12.9746 20.0519L16.513 23.5903L24.7693 15.334" stroke="white" strokeOpacity="0.3" strokeWidth="1.58277" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.8733 33.024C26.6902 33.024 33.027 26.6872 33.027 18.8704C33.027 11.0536 26.6902 4.7168 18.8733 4.7168C11.0565 4.7168 4.71973 11.0536 4.71973 18.8704C4.71973 26.6872 11.0565 33.024 18.8733 33.024Z" stroke="white" strokeOpacity="0.3" strokeWidth="1.58277" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span
                                    style={{
                                        fontFamily: "Geist, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "19.48px",
                                        lineHeight: "25px",
                                        letterSpacing: "-0.01em",
                                        color: "rgba(255, 255, 255, 0.87)",
                                    }}
                                >
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
