'use client';

import React from 'react';
import Image from 'next/image';

const Steps = () => {
    const stepsData = [
        {
            id: 1,
            title: 'Pick a viral YouTube video.',
            image: '/assets/images/illustrations/illust15.png',
        },
        {
            id: 2,
            title: 'Launch a funnel in minutes.',
            image: '/assets/images/illustrations/illust16.png',
        },
        {
            id: 3,
            title: 'Add your affiliate link or lead magnet.',
            image: '/assets/images/illustrations/illust17.png',
        },
        {
            id: 4,
            title: 'Add your affiliate link or lead magnet.',
            image: '/assets/images/illustrations/illust18.png',
        },
        {
            id: 5,
            title:
                'Make profits by selling your own offers — or earn big commissions promoting others',
            image: '/assets/images/illustrations/illust19.png',
        },
    ];

    return (
        <section className="relative w-full bg-[#eff4ff] py-16 sm:py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="sm:max-w-[1000px] m-auto">
                    <h2 className="text-center text-[28px] sm:text-[36px] md:text-[48px] font-bold bg-gradient-to-r from-[#ee4c01] to-[#880188] bg-clip-text text-transparent">
                        But Now… There&apos;s a Smarter, Simpler Way
                    </h2>
                    <h3 className="text-center text-[20px] sm:text-[28px] md:text-[36px] font-[500] text-[#110d1a] mb-12 sm:mb-16">
                        With VidMagnet — AI Does the Heavy Lifting While You
                        Collect the Leads.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {stepsData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center text-center ${
                                index === stepsData.length - 1
                                    ? 'md:col-span-2 md:max-w-2xl mx-auto'
                                    : ''
                            }`}
                        >
                            <div className="relative w-full max-w-[564px] h-[334px] bg-white border-2 border-[#880188] rounded-[30px] shadow-[0px_20px_50px_#0000001a] mb-4 sm:mb-6 mx-auto overflow-hidden group">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-[#110D1A] font-bold text-[20px] sm:text-[24px] md:text-[28px]">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;
