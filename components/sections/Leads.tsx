'use client';

import React from 'react';

const Leads = () => {
    const LeadsData = [
        {
            title: 'Build a List Without Any Work',
            description:
                "Use other people's content to create opt-in pages that convert like crazy — legally and instantly.",
        },
        {
            title: 'Leverage Other People’s Content',
            description:
                "Quickly find viral videos with built-in demand and turn them into list-building machines.",
        },
        {
            title: 'Automate Your Funnel Strategy',
            description:
                "No tech, no experience — just AI-driven simplicity that creates stunning funnels in seconds.",
        },
    ];

    return (
        <section className="w-full bg-[#F0F5FF] bg-[url(/assets/images/abstract.png)] bg-center bg-cover py-16 sm:py-20 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-center font-bold text-[#ee4c01] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] mb-10 sm:mb-14 md:mb-16 leading-tight">
                    Turn Viral Videos Into Leads
                </h2>

                <div className="space-y-16">
                    {LeadsData.map((item, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row ${
                                    !isEven ? 'md:flex-row-reverse' : ''
                                } items-center gap-8 md:gap-12`}
                            >
                                <div className="w-full md:w-1/2 flex justify-center px-4 sm:px-6">
                                    <div className="w-full max-w-[564px] h-[200px] sm:h-[260px] md:h-[334px] border-2 border-[#0A78F9] bg-white rounded-[20px] sm:rounded-[24px] md:rounded-[30px] shadow-[0px_20px_50px_#0000001a] p-2" />
                                </div>

                                <div className="w-full md:w-1/2 text-center md:text-left px-2 sm:px-4">
                                    <h3 className="text-[#0548a9] font-bold text-[22px] sm:text-[26px] md:text-[32px] mb-4 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#110d1a] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Leads;
