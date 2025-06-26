'use client';

import React from 'react';
import Image from "next/image";

const IncreadibleFeatures = () => {
    const features = [
        {
            id: 1,
            title: 'Viral Video Finder',
            description:
                'Use smart filters to instantly discover top-performing YouTube videos based on keyword, niche, or category.\n\nVidMagnet scans millions of videos to find ones that are already viral — so your users can legally "borrow" the momentum of proven content without having to create anything from scratch.\n\nNo guesswork. No camera. Just plug in a proven video and go.',
            image: '/assets/images/illustrations/illust20.png',
        },
        {
            id: 2,
            title: '1 ‑ Click Lead Funnel Launcher',
            description:
                'Turn any viral video into a fully hosted lead funnel page in just one click.\n\nThe system auto-builds an opt-in page with the video embedded, ready to capture leads or promote any offer.\n\nIt even comes preloaded with high-converting layouts, so users can launch in under 2 minutes.\nBuild your list or promote affiliate links — all without writing a single line of code.',
            image: '/assets/images/illustrations/illust21.png',
        },
        {
            id: 3,
            title: 'AI Cheat Sheet Generator',
            description:
                "Need a freebie to get people to opt in?\n\nVidMagnet's built-in AI creates custom lead magnets (like cheat sheets, tip guides, or checklists) based on your niche.\n\nThese are automatically added to your funnel to increase opt-ins and email signups, even if you're starting from zero.\n\nMore leads, better conversions, and zero writing required.",
            image: '/assets/images/illustrations/illust22.png',
        },
        {
            id: 4,
            title: 'Traffic Post Generator',
            description:
                'Automatically generate scroll-stopping social media posts to drive free traffic to your VidMagnet funnels. Supports Facebook, Instagram, LinkedIn, TikTok, and more.\n\nJust pick your niche and post type — and VidMagnet handles the copy and formatting.\n\nConsistent traffic without needing to "go viral" yourself.',
            image: '/assets/images/illustrations/illust23.png',
        },
        {
            id: 5,
            title: 'Custom CTA & Affiliate Link Support',
            description:
                "Add your own buttons, links, or call-to-actions directly below the video — whether you're growing your email list, promoting an affiliate product, booking strategy calls, or selling your own offer.\n\nEverything is editable and integrated.\n\nMake money your way — from leads, commissions, or sales.",
            image: '/assets/images/illustrations/illust24.png',
        },
        {
            id: 6,
            title: 'Built-In Hosting + Funnel Templates',
            description:
                'Forget setting up your own website or paying for page builders.\n\nVidMagnet hosts everything for you — and gives you beautifully designed templates that are optimized for mobile, desktop, and conversion.\n\nNo tech stress. Just pick a template, plug in a video, and publish.',
            image: '/assets/images/illustrations/illust25.png',
        },
        {
            id: 7,
            title: 'Beginner-Friendly Page Editor',
            description:
                'The built-in drag & drop editor is fast, flexible, and built for non-techies.\n\nChange fonts, colors, layout, or text in seconds. You can fully customize your funnel without touching code or installing anything.\n\nIf you can type, you can launch a funnel.',
            image: '/assets/images/illustrations/illust26.png',
        },
        {
            id: 8,
            title: 'Funnel Analytics Dashboard',
            description:
                'Track performance without extra tools.\n\nVidMagnet’s analytics dashboard shows opt-ins, views, and conversions at a glance.\n\nKnow what’s working, tweak what’s not — and scale what’s crushing it.',
            image: '/assets/images/illustrations/illust27.png',
        },
    ];

    return (
        <section className="w-full py-16 sm:py-20 md:py-24 bg-[#eff4ff]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#007FFF] to-[#880188] bg-clip-text text-transparent leading-snug">
                    Here&apos;s Just Some Of the Incredible Features Of
                    VidMagnet
                </h2>

                <div className="flex flex-col gap-16 sm:gap-20">
                    {features.map((feature, index) => {
                        const isEven = index % 2 !== 0;
                        return (
                            <div
                                key={feature.id}
                                className={`flex flex-col md:flex-row ${
                                    isEven ? 'md:flex-row-reverse' : ''
                                } items-center gap-8 md:gap-12`}
                            >
                                <div className="w-full md:w-1/2">
                                    <div className="relative w-full max-w-[564px] h-[434px] bg-white rounded-[30px] border-2 border-[#0548a9] shadow-[0px_20px_50px_#0000001a] overflow-hidden group">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0548a9] font-['Outfit',Helvetica]">
                                        {feature.title}
                                    </h3>
                                    <p className="text-base sm:text-lg md:text-[22px] font-medium text-[#110d1a] font-['Outfit',Helvetica] whitespace-pre-line">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-[24px] sm:text-[30px] md:text-4xl font-bold text-[#0548a9] text-center mt-20 font-['Outfit',Helvetica]">
                    And a lot more…
                </div>
            </div>
        </section>
    );
};

export default IncreadibleFeatures;
