'use client';

import React from 'react';
import Image from 'next/image';

const LeadsWork = () => {
    const LeadsWorkData = [
        {
            title: 'Build a List Without Any Work',
            description:
                "Use other people's content to create opt-in pages that convert like crazy — legally and instantly.",
            image: '/assets/images/illustrations/illust4.png',
        },
        {
            title: 'Expand Reach Effortlessly',
            description:
                'Auto-generate traffic posts across top platforms: YouTube Shorts, Insta, FB, LinkedIn.',
            image: '/assets/images/illustrations/illust5.png',
        },
        {
            title: 'Boost Opt-ins',
            description:
                'Use our built-in cheat sheets and funnels to skyrocket conversions.',
            image: '/assets/images/illustrations/illust6.png',
        },
        {
            title: 'Plug Into Any Niche',
            description:
                'Find viral videos in any niche — plug in your links and go.',
            image: '/assets/images/illustrations/illust7.png',
        },
        {
            title: 'Analyze & Optimize',
            description:
                'Track views, clicks, and opt-ins across every funnel automatically.',
            image: '/assets/images/illustrations/illust8.png',
        },
        {
            title: 'Let the Tool Work For You',
            description:
                'Let VidMagnet do the heavy lifting while you focus on growing your brand.',
            image: '/assets/images/illustrations/illust9.png',
        },
    ];

    return (
        <section className="w-full py-20 bg-[#c8deff]">
            <div className="container px-4">
                <h2 className="text-center mb-16 font-bold text-[#ee4c01] text-[32px] md:text-[58px]">
                    Turn Viral Videos Into Leads
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
                    {LeadsWorkData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <h3 className="text-[#0548a9] font-bold text-[24px] md:text-[32px] mb-6">
                                {item.title}
                            </h3>

                            <div className="relative w-full max-w-[564px] h-[334px] border-2 border-[#0A78F9] bg-white rounded-[30px] shadow-[0px_20px_50px_#0000001a] p-2 overflow-hidden group">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                            </div>
                            <p className="text-[#110d1a] text-[18px] md:text-[22px] max-w-[500px] font-[500] mt-[6px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadsWork;
