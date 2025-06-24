'use client';

import Image from 'next/image';

const Growth = () => {
    return (
        <section className="relative w-full bg-[url(/assets/images/abstract-gradient.png)] bg-cover bg-center py-16 sm:py-24 md:py-36">
            <div className="container mx-auto px-4">
                <div className="w-full mx-auto rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[url(/assets/images/bg-gradient2.png)] bg-cover bg-center p-6 sm:p-10 md:p-20">
                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-[200px] sm:w-[280px] md:w-[377px] h-[60px] sm:h-[80px] md:h-[100px] mb-6 sm:mb-8 md:mb-10">
                            <Image
                                src="/assets/logo.svg"
                                alt="VidMagnet Logo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 377px"
                            />
                        </div>

                        <h2 className="font-outfit font-bold text-white text-[24px] sm:text-[32px] md:text-[40px] leading-snug sm:leading-snug md:leading-snug mb-10 sm:mb-14 md:mb-16 max-w-4xl">
                            AI-Powered Funnels That Turn Viral Videos Into
                            Leads, List Growth &amp; Commissions — In Just 1
                            Click.
                        </h2>

                        <div className="w-full h-[300px] sm:h-[380px] md:h-[457px] bg-white rounded-[20px] sm:rounded-[24px] md:rounded-[30px] p-4 sm:p-6 md:p-8 mb-10 sm:mb-14 md:mb-16" />

                        <h3 className="font-outfit font-bold text-white text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-snug max-w-2xl">
                            Your Subscribers Need VidMagnet If They WANT to…
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Growth;
