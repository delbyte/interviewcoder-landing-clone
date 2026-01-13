"use client"

import React from "react"
import Image from "next/image"

interface FeatureCardProps {
    icon: React.ReactNode
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    reversed?: boolean
}

function FeatureCard({ icon, title, description, imageSrc, imageAlt, reversed = false }: FeatureCardProps) {
    return (
        <div
            className="flex items-center rounded-[30px] w-full"
            style={{
                flexDirection: reversed ? 'row-reverse' : 'row',
                padding: '10px 10px 10px 40px',
                gap: '10px',
                height: '528px',
            }}
        >
            {/* Text Content */}
            <div
                className="flex flex-col justify-center items-start"
                style={{
                    padding: '0px 50px 0px 10px',
                    gap: '21px',
                    width: '611px',
                    flexGrow: 1,
                }}
            >
                {/* Icon */}
                <div
                    className="flex items-center justify-center"
                    style={{
                        width: '67px',
                        height: '65.71px',
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(180deg, #EFCC3A 0%, #DE9E15 100%), #3E371F',
                        borderRadius: '12.88px',
                    }}
                >
                    {icon}
                </div>

                {/* Title */}
                <h3
                    className="text-white"
                    style={{
                        fontFamily: 'Geist, sans-serif',
                        fontWeight: 600,
                        fontSize: '40px',
                        lineHeight: '130%',
                        letterSpacing: '-0.04em',
                    }}
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    style={{
                        fontFamily: 'Geist, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '159%',
                        color: 'rgba(255, 255, 255, 0.7)',
                        maxWidth: '551px',
                    }}
                >
                    {description}
                </p>
            </div>

            {/* Image */}
            <div
                className="relative flex-shrink-0 overflow-hidden"
                style={{
                    width: '579px',
                    height: '508px',
                    background: 'linear-gradient(180deg, #EAC332 0%, #EAAF14 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #EFB63A 0%, #EFCC3A 100%)',
                    borderRadius: '20px',
                }}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )
}

// Icon components
function DockIcon() {
    return (
        <svg width="51" height="51" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="6" width="26" height="22" rx="3" stroke="black" strokeWidth="2.5" />
            <path d="M12 24H22" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    )
}

function ActivityIcon() {
    return (
        <svg width="39" height="27" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9H7L10 1L14 17L18 5L21 9H25" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function VideoOffIcon() {
    return (
        <svg width="51" height="51" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33594 2.20605C3.48486 2.20873 3.63151 2.24215 3.76758 2.30273C3.90174 2.36251 4.02326 2.44788 4.12402 2.55469L31.4453 29.876L31.4473 29.8789C31.6495 30.0885 31.7615 30.3689 31.7588 30.6602C31.7561 30.9513 31.6395 31.2297 31.4336 31.4355C31.2276 31.6414 30.9485 31.7584 30.6572 31.7607C30.3661 31.7631 30.0853 31.6506 29.876 31.4482L29.874 31.4463L22.749 24.3223C22.3736 25.0572 21.8153 25.6849 21.1221 26.1387C20.348 26.6452 19.4426 26.9152 18.5176 26.915H6.98145C5.72076 26.915 4.51156 26.4139 3.62012 25.5225C2.72868 24.631 2.22754 23.4218 2.22754 22.1611V11.8398C2.22744 10.7414 2.60864 9.67687 3.30469 8.82715C3.92343 8.07185 4.75726 7.52705 5.69141 7.26367L2.55371 4.125V4.12402C2.44713 4.02336 2.36145 3.90252 2.30176 3.76855C2.24117 3.63249 2.20775 3.48583 2.20508 3.33691C2.20245 3.18789 2.23036 3.03958 2.28613 2.90137C2.342 2.76306 2.4248 2.63672 2.53027 2.53125C2.63575 2.42578 2.76209 2.34297 2.90039 2.28711C3.0386 2.23133 3.18692 2.20343 3.33594 2.20605ZM18.5176 7.08594C19.7782 7.08602 20.9875 7.58712 21.8789 8.47852C22.7702 9.36996 23.2705 10.5792 23.2705 11.8398V12.0645L28.1201 8.71582C29.6615 7.65012 31.7655 8.75584 31.7656 10.6289V23.3672C31.7655 24.7707 30.5864 25.7398 29.3496 25.6934L29.2715 25.6904L23.3506 19.7695L23.6055 19.4639L29.3818 23.4521C29.3973 23.4628 29.4158 23.4695 29.4346 23.4707C29.4534 23.4718 29.4725 23.4678 29.4893 23.459C29.5059 23.4503 29.5195 23.4369 29.5293 23.4209C29.539 23.4048 29.5449 23.3861 29.5449 23.3672V10.6289L29.541 10.6006C29.5385 10.5917 29.5341 10.5832 29.5293 10.5752C29.5196 10.5591 29.5059 10.5459 29.4893 10.5371C29.4725 10.5283 29.4534 10.5243 29.4346 10.5254C29.4158 10.5266 29.3973 10.5332 29.3818 10.5439L23.2705 14.7627V19.6895L22.9297 19.3486L21.1084 17.5264L21.0498 17.4678V11.8398C21.0498 11.1683 20.7825 10.5237 20.3076 10.0488C19.8328 9.57419 19.1889 9.3077 18.5176 9.30762H12.8887L10.667 7.08594H18.5176ZM6.98145 9.30762C6.31009 9.30765 5.66621 9.5742 5.19141 10.0488C4.71654 10.5237 4.44922 11.1683 4.44922 11.8398V22.1611C4.44922 22.8327 4.71657 23.4763 5.19141 23.9512C5.66625 24.426 6.30992 24.6933 6.98145 24.6934H18.5176C19.1321 24.6933 19.7256 24.4698 20.1875 24.0645C20.6257 23.6799 20.9138 23.1559 21.0107 22.583L7.73633 9.30762H6.98145Z" fill="black" stroke="black" strokeWidth="0.4" />
        </svg>
    )
}

function ClickIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7595 2.35198V1.17604C11.7595 0.864159 11.8834 0.565054 12.1039 0.344522C12.3245 0.12399 12.6236 9.67508e-05 12.9355 9.67508e-05C13.2473 9.67508e-05 13.5464 0.12399 13.767 0.344522C13.9875 0.565054 14.1114 0.864159 14.1114 1.17604V2.35198C14.1114 2.66386 13.9875 2.96296 13.767 3.1835C13.5464 3.40403 13.2473 3.52792 12.9355 3.52792C12.6236 3.52792 12.3245 3.40403 12.1039 3.1835C11.8834 2.96296 11.7595 2.66386 11.7595 2.35198ZM1.17604 14.1114H2.35198C2.66386 14.1114 2.96296 13.9875 3.1835 13.767C3.40403 13.5464 3.52792 13.2473 3.52792 12.9355C3.52792 12.6236 3.40403 12.3245 3.1835 12.1039C2.96296 11.8834 2.66386 11.7595 2.35198 11.7595H1.17604C0.864159 11.7595 0.565054 11.8834 0.344522 12.1039C0.12399 12.3245 9.67508e-05 12.6236 9.67508e-05 12.9355C9.67508e-05 13.2473 0.12399 13.5464 0.344522 13.767C0.565054 13.9875 0.864159 14.1114 1.17604 14.1114ZM17.113 4.58039C17.2512 4.6496 17.4017 4.69088 17.5558 4.70189C17.71 4.71289 17.8648 4.6934 18.0114 4.64453C18.158 4.59565 18.2936 4.51836 18.4103 4.41706C18.527 4.31575 18.6227 4.19244 18.6917 4.05416L19.8676 1.70227C20.0072 1.42334 20.0302 1.10038 19.9317 0.804455C19.8331 0.508528 19.6211 0.263872 19.3421 0.124306C19.0632 -0.0152603 18.7402 -0.0383026 18.4443 0.0602475C18.1484 0.158798 17.9037 0.370868 17.7642 0.649804L16.5882 3.00169C16.519 3.13979 16.4776 3.29019 16.4665 3.44429C16.4554 3.59839 16.4747 3.75317 16.5235 3.89978C16.5722 4.04639 16.6494 4.18196 16.7505 4.29874C16.8517 4.41552 16.9748 4.51123 17.113 4.58039ZM3.00169 16.5882L0.649804 17.7642C0.370868 17.9037 0.158798 18.1484 0.0602475 18.4443C-0.0383026 18.7402 -0.0152603 19.0632 0.124306 19.3421C0.263872 19.6211 0.508528 19.8331 0.804455 19.9317C1.10038 20.0302 1.42334 20.0072 1.70227 19.8676L4.05416 18.6917C4.19227 18.6226 4.31542 18.5269 4.41658 18.4102C4.51774 18.2935 4.59491 18.1581 4.64371 18.0115C4.69251 17.865 4.71197 17.7103 4.70098 17.5563C4.68999 17.4022 4.64876 17.2518 4.57965 17.1137C4.51055 16.9756 4.41492 16.8525 4.29821 16.7513C4.18151 16.6501 4.04603 16.573 3.89951 16.5242C3.75298 16.4754 3.59827 16.4559 3.44423 16.4669C3.29018 16.4779 3.1398 16.5191 3.00169 16.5882ZM31.0611 25.8708C31.2796 26.0892 31.4529 26.3485 31.5711 26.6339C31.6893 26.9193 31.7502 27.2251 31.7502 27.534C31.7502 27.8429 31.6893 28.1488 31.5711 28.4342C31.4529 28.7196 31.2796 28.9789 31.0611 29.1973L29.1973 31.0611C28.9789 31.2796 28.7196 31.4529 28.4342 31.5711C28.1488 31.6893 27.8429 31.7502 27.534 31.7502C27.2251 31.7502 26.9193 31.6893 26.6339 31.5711C26.3485 31.4529 26.0892 31.2796 25.8708 31.0611L18.3301 23.5189L15.7283 30.2938C15.7283 30.3085 15.7166 30.3247 15.7092 30.3409C15.5292 30.7605 15.2298 31.1178 14.8482 31.3685C14.4666 31.6192 14.0197 31.752 13.5631 31.7505H13.447C12.9708 31.7304 12.5124 31.5645 12.1335 31.2753C11.7547 30.9861 11.4738 30.5876 11.3288 30.1336L3.64552 6.60301C3.51362 6.19148 3.49765 5.75158 3.59937 5.33157C3.70109 4.91157 3.91657 4.52771 4.22214 4.22214C4.52771 3.91657 4.91157 3.70109 5.33157 3.59937C5.75158 3.49765 6.19148 3.51362 6.60301 3.64552L30.1336 11.3288C30.5833 11.4793 30.9771 11.7621 31.2632 12.1403C31.5492 12.5185 31.7143 12.9744 31.7367 13.4481C31.7592 13.9218 31.6378 14.3911 31.3887 14.7947C31.1396 15.1982 30.7744 15.517 30.3409 15.7092L30.2938 15.7283L23.5189 18.3286L31.0611 25.8708ZM29.3986 27.5333L21.8564 19.9911C21.585 19.7201 21.3839 19.3869 21.2707 19.0204C21.1576 18.6539 21.1358 18.2653 21.2072 17.8884C21.2787 17.5115 21.4412 17.1579 21.6807 16.8582C21.9202 16.5586 22.2293 16.3221 22.5811 16.1693L22.6282 16.1487L29.3825 13.5558L5.87981 5.87981L13.5528 29.3781L16.1472 22.6164C16.1472 22.6002 16.159 22.5841 16.1664 22.5679C16.3192 22.2163 16.5557 21.9075 16.8551 21.6682C17.1546 21.4289 17.5081 21.2664 17.8847 21.195C18.0302 21.168 18.1777 21.1542 18.3257 21.1538C18.9488 21.1545 19.5462 21.4024 19.9867 21.8432L27.5333 29.3986L29.3986 27.5333Z" fill="black" />
        </svg>
    )
}

export function DataScienceFeatures() {
    const features = [
        {
            icon: <DockIcon />,
            title: "Nowhere on Your Dock",
            description: "Interview Coder runs silently in the background - no Dock icon, no visible apps, no suspicion during live DS interviews.",
            imageSrc: "/images/datascience/dock.png",
            imageAlt: "Invisible on Dock demonstration",
            reversed: false,
        },
        {
            icon: <ActivityIcon />,
            title: "Invisible in Activity Monitor",
            description: "Leaves zero traces in macOS Activity Monitor - even during heavy Python, SQL, or ML problem-solving.",
            imageSrc: "/images/datascience/activitymonitor.png",
            imageAlt: "Activity Monitor showing no trace",
            reversed: true,
        },
        {
            icon: <VideoOffIcon />,
            title: "Screen-Recording Proof",
            description: "Whether it's Zoom, Teams, or Google Meet, Interview Coder never appears - even if the session is recorded.",
            imageSrc: "/images/datascience/screenrecording.png",
            imageAlt: "Screen recording proof demonstration",
            reversed: false,
        },
        {
            icon: <ClickIcon />,
            title: "Completely Click-Through. Truly Invisible",
            description: "Hover, click, or interact freely. No focus shifts. No window detection. No system flags.",
            imageSrc: "/images/datascience/clickthrough.png",
            imageAlt: "Click-through invisibility demonstration",
            reversed: true,
        },
    ]

    return (
        <section
            className="flex flex-col items-center"
            style={{
                padding: '0px 100px',
                gap: '35.65px',
                width: '100%',
                maxWidth: '1440px',
                margin: '0 auto',
            }}
        >
            {/* Header */}
            <div
                className="flex flex-col items-center"
                style={{
                    gap: '10px',
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                <h2
                    className="text-white text-center"
                    style={{
                        fontFamily: 'Geist, sans-serif',
                        fontWeight: 600,
                        fontSize: '40px',
                        lineHeight: '130%',
                        letterSpacing: '-0.04em',
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        maxWidth: '669px',
                    }}
                >
                    Made for Cracking Data Science Interviews
                </h2>
                <p
                    className="text-center"
                    style={{
                        fontFamily: 'Geist, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '160%',
                        color: 'rgba(255, 255, 255, 0.6)',
                        maxWidth: '658px',
                    }}
                >
                    InterviewCoder supports you in real time, helping you break down questions and reach correct solutions under pressure.
                </p>
            </div>

            {/* Feature Cards */}
            <div
                className="flex flex-col justify-center items-center"
                style={{
                    gap: '42px',
                    width: '100%',
                    maxWidth: '1240px',
                }}
            >
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        imageSrc={feature.imageSrc}
                        imageAlt={feature.imageAlt}
                        reversed={feature.reversed}
                    />
                ))}
            </div>
        </section>
    )
}
