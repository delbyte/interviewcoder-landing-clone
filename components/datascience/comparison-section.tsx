"use client";

import { cn } from "@/lib/utils";
import { Check, X, HelpCircle, Info, Inbox, Activity, MousePointer2, Siren, DollarSign, Globe, BadgeCheck } from "lucide-react";
import Image from "next/image";

// Custom Icons provided by user
function MicIcon() {
    return (
        <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.34492 11.7072V5.01738C3.34492 3.68669 3.87354 2.4105 4.81448 1.46956C5.75542 0.528616 7.03161 0 8.3623 0C9.693 0 10.9692 0.528616 11.9101 1.46956C12.8511 2.4105 13.3797 3.68669 13.3797 5.01738V11.7072C13.3797 13.0379 12.8511 14.3141 11.9101 15.2551C10.9692 16.196 9.693 16.7246 8.3623 16.7246C7.03161 16.7246 5.75542 16.196 4.81448 15.2551C3.87354 14.3141 3.34492 13.0379 3.34492 11.7072ZM16.7246 11.7072C16.7246 11.4854 16.6365 11.2727 16.4797 11.1159C16.3229 10.9591 16.1102 10.871 15.8884 10.871C15.6666 10.871 15.4539 10.9591 15.2971 11.1159C15.1403 11.2727 15.0521 11.4854 15.0521 11.7072C15.0521 13.4815 14.3473 15.1831 13.0927 16.4377C11.8382 17.6922 10.1366 18.3971 8.3623 18.3971C6.58805 18.3971 4.88646 17.6922 3.63187 16.4377C2.37728 15.1831 1.67246 13.4815 1.67246 11.7072C1.67246 11.4854 1.58436 11.2727 1.42753 11.1159C1.27071 10.9591 1.05801 10.871 0.83623 10.871C0.614448 10.871 0.40175 10.9591 0.244926 11.1159C0.0881028 11.2727 0 11.4854 0 11.7072C0.00254644 13.7796 0.773431 15.7773 2.16358 17.3142C3.55373 18.8511 5.46439 19.8179 7.52607 20.0277V23.4145C7.52607 23.6362 7.61418 23.8489 7.771 24.0058C7.92782 24.1626 8.14052 24.2507 8.3623 24.2507C8.58409 24.2507 8.79679 24.1626 8.95361 24.0058C9.11043 23.8489 9.19853 23.6362 9.19853 23.4145V20.0277C11.2602 19.8179 13.1709 18.8511 14.561 17.3142C15.9512 15.7773 16.7221 13.7796 16.7246 11.7072Z" fill="white" fillOpacity="0.6" />
        </svg>
    );
}

function DockIcon() {
    return (
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8018 0C19.3539 0.000222931 20.6123 1.25836 20.6123 2.81055V10.8418L18.3955 10.2373C17.6617 10.0372 16.9043 10.4694 16.7041 11.2031C16.504 11.937 16.9371 12.6944 17.6709 12.8945L20.0371 13.54C20.1034 13.5581 20.1701 13.5692 20.2363 13.5771C19.7513 14.4205 18.8444 14.9901 17.8018 14.9902H2.81055C1.86653 14.9902 1.0331 14.5235 0.523438 13.8096C0.644978 13.81 0.768638 13.7962 0.891602 13.7627L3.25781 13.1172C3.99165 12.917 4.42476 12.1596 4.22461 11.4258C4.02442 10.692 3.26701 10.2598 2.5332 10.46L0.166992 11.1055C0.109338 11.1212 0.0537751 11.1408 0 11.1631V2.81055C0 1.25828 1.25831 0.00010373 2.81055 0H17.8018ZM6.91504 9.875C6.1544 9.875 5.53809 10.4913 5.53809 11.252C5.53814 12.0125 6.15443 12.6289 6.91504 12.6289H6.99512C7.75572 12.6289 8.37299 12.0125 8.37305 11.252C8.37305 10.4913 7.75576 9.875 6.99512 9.875H6.91504ZM10.668 9.875C9.90748 9.87518 9.29102 10.4914 9.29102 11.252C9.29107 12.0124 9.90751 12.6287 10.668 12.6289H10.749C11.5096 12.6289 12.1259 12.0125 12.126 11.252C12.126 10.4913 11.5096 9.87502 10.749 9.875H10.668ZM14.4219 9.875C13.6612 9.875 13.0439 10.4913 13.0439 11.252C13.044 12.0125 13.6613 12.6289 14.4219 12.6289H14.502C15.2626 12.6289 15.8798 12.0125 15.8799 11.252C15.8799 10.4913 15.2626 9.875 14.502 9.875H14.4219Z" fill="white" fillOpacity="0.6" />
        </svg>
    );
}

function ScreenShareIcon() {
    return (
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 17.25C13.5 17.4489 13.421 17.6397 13.2803 17.7803C13.1397 17.921 12.9489 18 12.75 18H6.75C6.55109 18 6.36032 17.921 6.21967 17.7803C6.07902 17.6397 6 17.4489 6 17.25C6 17.0511 6.07902 16.8603 6.21967 16.7197C6.36032 16.579 6.55109 16.5 6.75 16.5H12.75C12.9489 16.5 13.1397 16.579 13.2803 16.7197C13.421 16.8603 13.5 17.0511 13.5 17.25ZM19.5 2.25V12.75C19.5 13.3467 19.2629 13.919 18.841 14.341C18.419 14.7629 17.8467 15 17.25 15H2.25C1.65326 15 1.08097 14.7629 0.65901 14.341C0.237053 13.919 0 13.3467 0 12.75V2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H17.25C17.8467 0 18.419 0.237053 18.841 0.65901C19.2629 1.08097 19.5 1.65326 19.5 2.25ZM12.5306 6.21937L10.2806 3.96937C10.211 3.89964 10.1283 3.84432 10.0372 3.80658C9.94616 3.76884 9.84856 3.74941 9.75 3.74941C9.65144 3.74941 9.55384 3.76884 9.4628 3.80658C9.37175 3.84432 9.28903 3.89964 9.21937 3.96937L6.96937 6.21937C6.82864 6.36011 6.74958 6.55098 6.74958 6.75C6.74958 6.94902 6.82864 7.13989 6.96937 7.28063C7.11011 7.42136 7.30098 7.50042 7.5 7.50042C7.69902 7.50042 7.88989 7.42136 8.03063 7.28063L9 6.31031V10.5C9 10.6989 9.07902 10.8897 9.21967 11.0303C9.36032 11.171 9.55109 11.25 9.75 11.25C9.94891 11.25 10.1397 11.171 10.2803 11.0303C10.421 10.8897 10.5 10.6989 10.5 10.5V6.31031L11.4694 7.28063C11.5391 7.35031 11.6218 7.40558 11.7128 7.4433C11.8039 7.48101 11.9015 7.50042 12 7.50042C12.0985 7.50042 12.1961 7.48101 12.2872 7.4433C12.3782 7.40558 12.4609 7.35031 12.5306 7.28063C12.6003 7.21094 12.6556 7.12822 12.6933 7.03717C12.731 6.94613 12.7504 6.84855 12.7504 6.75C12.7504 6.65145 12.731 6.55387 12.6933 6.46283C12.6556 6.37178 12.6003 6.28906 12.5306 6.21937Z" fill="white" fillOpacity="0.6" />
        </svg>
    );
}

export function DataScienceComparison() {
    const features = [
        { label: "Supports Audio", icon: <MicIcon /> },
        { label: "Invisible In Dock", icon: <DockIcon /> },
        { label: "Invisible To Screen Share", icon: <ScreenShareIcon /> },
        { label: "Invisible to tray", icon: <Inbox className="w-5 h-5 text-white/60" /> },
        { label: "Invisible to system/activity monitor", icon: <Activity className="w-5 h-5 text-white/60" /> },
        { label: "Click-through undetectability", icon: <MousePointer2 className="w-5 h-5 text-white/60" /> },
        { label: "Has been caught", icon: <Siren className="w-5 h-5 text-white/60" /> },
        { label: "Price", icon: <DollarSign className="w-5 h-5 text-white/60" /> },
        { label: "Detectable by browser", icon: <Globe className="w-5 h-5 text-white/60" /> },
        { label: "Has real proof from real users", icon: <BadgeCheck className="w-5 h-5 text-white/60" /> },
    ];

    const competitors = [
        {
            name: "IC",
            isPrimary: true,
            data: [true, true, true, true, true, true, true, true, true, true],
        },
        {
            name: "ULTRA",
            image: "/images/datascience/ultracode.png",
            data: [true, false, true, true, true, false, true, false, false, false],
        },
        {
            name: "LockedIn",
            image: "/images/datascience/lockedin.png",
            data: [true, false, true, true, true, false, true, false, false, false],
        },
        {
            name: "aiApp",
            image: "/images/datascience/aiapp.png",
            data: [true, false, true, true, true, false, true, false, false, false],
        },
    ];

    return (
        <div className="flex justify-center w-full py-10 px-4 overflow-x-auto">
            <div
                className="flex flex-row items-end justify-center gap-[19.59px]"
                style={{
                    width: "1200px",
                    height: "808.16px",
                    borderRadius: "24.49px",
                }}
            >
                {/* Features List Card (Frame 49) */}
                <div
                    style={{
                        width: "544.22px",
                        height: "808.16px",
                        background: "#141414",
                        border: "1.22px solid #202020",
                        boxShadow: "inset 0px 1px 2px rgba(255, 255, 255, 0.15)",
                        borderRadius: "19.59px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        padding: "40px", // Approximate padding
                        boxSizing: "border-box",
                    }}
                >
                    <div style={{ height: '88px', marginBottom: '0px' }} className="flex items-end">
                        <h3 className="text-2xl font-semibold text-white pb-4">
                            Undetectability features
                        </h3>
                    </div>
                    <div className="flex flex-col w-full gap-0">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 h-[64px]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-6 flex justify-center">
                                        {feature.icon}
                                    </div>
                                    <span className="text-lg text-gray-300 font-medium">{feature.label}</span>
                                </div>
                                <HelpCircle className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-400 transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Competitor Cards */}
                {competitors.map((comp, index) => (
                    <div
                        key={index}
                        style={{
                            width: "144.35px",
                            height: "808.16px",
                            background: comp.isPrimary
                                ? "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), linear-gradient(180deg, #EFB63A 0%, rgba(239, 204, 58, 0) 100%)"
                                : "#141414",
                            border: comp.isPrimary
                                ? "1.22px solid rgba(242, 209, 91, 0.11)"
                                : "1.22px solid #202020",
                            boxShadow: "inset 0px 1px 2px rgba(255, 255, 255, 0.15)",
                            borderRadius: "19.59px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "40px 0",
                            boxSizing: "border-box",
                        }}
                    >
                        {/* Header */}
                        <div style={{ height: '88px' }} className="flex items-end justify-center pb-4">
                            {comp.name === "IC" ? (
                                <div className="flex flex-row items-center justify-center gap-2">
                                    <Image
                                        src="/images/datascience/ic-wing-icon.png"
                                        width={40}
                                        height={40}
                                        alt="Interview Coder"
                                    />
                                    <span
                                        style={{
                                            fontFamily: 'Geist, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '21.21px',
                                            lineHeight: '90%',
                                            letterSpacing: '-0.04em',
                                            textAlign: 'center',
                                            color: 'white',
                                        }}
                                    >
                                        IC
                                    </span>
                                </div>
                            ) : comp.image ? (
                                <div className="relative w-28 h-14">
                                    <Image src={comp.image} alt={comp.name} fill className="object-contain opacity-80" />
                                </div>
                            ) : (
                                <span className="text-xl font-bold text-gray-400">{comp.name}</span>
                            )}
                        </div>

                        {/* Checks */}
                        <div className="flex flex-col w-full gap-0 items-center">
                            {comp.data.map((isValid, idx) => (
                                <div key={idx} className="flex items-center justify-center h-[64px] py-4 border-b border-white/5 last:border-0 w-full">
                                    {isValid ? (
                                        comp.isPrimary ? (
                                            <Image
                                                src="/images/datascience/specialcheckmark.svg"
                                                width={46}
                                                height={47}
                                                alt="Check"
                                            />
                                        ) : (
                                            <Check className="w-6 h-6 text-white" />
                                        )
                                    ) : (
                                        <X className="w-6 h-6 text-gray-500" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
