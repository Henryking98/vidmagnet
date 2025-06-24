'use client';

import React from 'react';
import Link from 'next/link';

const Features = () => {
    const featuresData = [
        {
            title: 'Running Paid Ads',
            description: 'High risk. High spend. And no guarantee of ROI.',
        },
        {
            title: 'Record Endless Content',
            description:
                'Burns time, drains energy — and still barely attracts attention.',
        },
        {
            title: 'Post Daily on Social Media',
            description:
                'Feels like a full-time job. And the algorithm never plays fair.',
        },
        {
            title: 'Cold Call Prospects',
            description:
                "Let's face it — nobody wants random sales calls anymore.",
        },
        {
            title: 'Do Webinars',
            description:
                'Some people thrive on camera. Most people just want to hide.',
        },
        {
            title: 'And more…',
            description: '',
            isHighlight: true,
            link: '/#',
        },
    ];

    return (
        <section className="relative w-full py-16 bg-[#110d1a] overflow-hidden bg-[url(/assets/images/abstract3.png)] bg-center bg-cover">
            <div className="relative container z-10 mx-auto px-4 text-center">
                <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] font-bold text-transparent bg-gradient-to-r from-[#ee4c01] to-[#8500fa] bg-clip-text mb-6 md:mb-8 max-w-4xl mx-auto leading-tight">
                    Why Most People Still Struggle to Get Leads (Even in 2025)…
                </h2>

                <p className="text-[18px] sm:text-[22px] md:text-[28px] font-medium text-transparent bg-gradient-to-r from-white to-[#c8deff] bg-clip-text max-w-3xl mx-auto mb-12 md:mb-20">
                    Your audience isn’t lazy — they’re just stuck using tools
                    that belong in 2015.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 place-items-center">
                    {featuresData.map((feature, index) => (
                        <div
                            key={index}
                            className={`min-h-[280px] sm:min-h-[300px] md:min-h-[343px] flex flex-col items-center text-white text-center px-4 ${
                                feature.isHighlight
                                    ? 'justify-center'
                                    : 'justify-between'
                            }`}
                        >
                            <h3
                                className={`text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] font-bold mb-4 ${
                                    feature.isHighlight ? 'text-white' : ''
                                }`}
                            >
                                {feature.link ? (
                                    <Link
                                        href={feature.link}
                                        className="hover:underline"
                                    >
                                        {feature.title}
                                    </Link>
                                ) : (
                                    feature.title
                                )}
                            </h3>

                            {!feature.isHighlight && (
                                <div className="w-full max-w-[340px] h-[180px] sm:h-[200px] md:h-[222px] bg-white border-2 border-[#9e12c0] rounded-[30px] shadow-[0px_20px_50px_#0000001a]" />
                            )}

                            {feature.description && (
                                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-4 font-medium">
                                    {feature.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
