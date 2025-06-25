'use client';

import Image from 'next/image';

const Growth = () => {
    return (
        <section className="relative w-full overflow-hidden py-16 sm:py-24 md:py-32">
            <div
                className="absolute inset-0 -z-20"
                style={{
                    backgroundImage: `linear-gradient(135deg, #B0099A, #160244), url('/assets/images/abstract-gradient.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundBlendMode: 'soft-light',
                }}
            />

            <div className="container relative z-10 mx-auto px-4">
                <div
                    className="relative w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden px-4 py-10 sm:px-10 sm:py-14 md:px-20 md:py-20"
                    style={{
                        backgroundImage: `linear-gradient(135deg, #007FFF, #7332C2), url('/assets/images/bg-gradient2.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundBlendMode: 'multiply',
                        opacity: 0.95,
                    }}
                >
                    <div className="flex flex-col items-center text-center gap-6 sm:gap-8 md:gap-10 z-10 relative max-w-6xl mx-auto">
                        <div className="relative w-[180px] sm:w-[240px] md:w-[320px] h-[60px] sm:h-[80px] md:h-[100px]">
                            <Image
                                src="/assets/logo-white.svg"
                                alt="VidMagnet Logo"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h2 className="font-outfit font-bold text-white text-[clamp(1.5rem,5vw,2.5rem)] leading-snug">
                            AI-Powered Funnels That Turn Viral Videos Into
                            Leads, List Growth &amp; Commissions — In Just 1
                            Click.
                        </h2>

                        <div className="relative w-full aspect-[16/9] max-w-[1000px]">
                            <Image
                                src="/assets/images/img3.png"
                                alt="VidMagnet Product Mockup"
                                fill
                                sizes="(max-width: 768px) 100vw, 1000px"
                                className="object-contain"
                                priority
                            />
                        </div>

                        <h3 className="font-outfit font-bold text-white text-[clamp(1.25rem,4vw,2.5rem)] leading-snug">
                            Your Subscribers Need VidMagnet if they WANT to…
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Growth;
