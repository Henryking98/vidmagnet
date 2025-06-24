'use client';

import React from 'react';

const LeadsWork = () => {
    const LeadsWorkData = [
        {
            title: 'Build a List Without Any Work',
            description:
                "Use other people's content to create opt-in pages that convert like crazy — legally and instantly.",
        },
        {
            title: 'Expand Reach Effortlessly',
            description:
                'Auto-generate traffic posts across top platforms: YouTube Shorts, Insta, FB, LinkedIn.',
        },
        {
            title: 'Boost Opt-ins',
            description:
                'Use our built-in cheat sheets and funnels to skyrocket conversions.',
        },
        {
            title: 'Plug Into Any Niche',
            description:
                'Find viral videos in any niche — plug in your links and go.',
        },
        {
            title: 'Analyze & Optimize',
            description:
                'Track views, clicks, and opt-ins across every funnel automatically.',
        },
        {
            title: 'Let the Tool Work For You',
            description:
                'Let VidMagnet do the heavy lifting while you focus on growing your brand.',
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

                            <div className="w-full max-w-[564px] h-[334px] bg-white border-2 border-[#0A78F9] rounded-[30px] shadow-[0px_20px_50px_#0000001a] mb-6 mx-auto" />

                            <p className="text-[#110d1a] text-[18px] md:text-[22px] max-w-[500px]">
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
