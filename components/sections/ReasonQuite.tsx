'use client';

import React from 'react';
import { X } from 'lucide-react';
import { FaCircle } from 'react-icons/fa';
import Image from 'next/image';

const ReasonQuite = () => {
    const bulletFails = [
        'No reminders.',
        'No value.',
        'No relationship.',
        'No conversions.',
    ];

    const solutionPoints = [
        'Capturing the lead with a free AI-generated cheat sheet',
        'Delivering it automatically',
        'And letting users plug in autoresponder follow-ups that do the nurturing for them',
    ];

    return (
        <section className="relative w-full py-14 sm:py-20 md:py-24 bg-[#c8deff]">
            <div className="container mx-auto px-4">
                <h2 className="text-center font-bold text-[#ee4c01] text-[28px] sm:text-[36px] md:text-[42px] leading-tight max-w-4xl mx-auto mb-10 sm:mb-12">
                    Lack of Leads Is the #1 Reason People Quit Affiliate
                    Marketing
                </h2>

                <div className="flex flex-col md:flex-row gap-10 md:gap-12 justify-between mb-16 max-w-[1090px] mx-auto">
                    <div className="relative w-full md:w-1/2 h-[588px] bg-white border border-[#ee4c01] rounded-[30px] shadow-[0px_20px_50px_#0000001a]">
                        <Image
                            src="/assets/images/img1.png"
                            alt=""
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="w-full md:w-1/2 text-[22px] text-[#110d1a] font-medium space-y-4">
                        <p>
                            Not getting consistent leads is the #1 reason most
                            beginners give up.
                        </p>
                        <p>
                            You could have the best product, the highest payout,
                            or even the best funnel… But if there&apos;s no
                            traffic and no one to see your offer — it&apos;s
                            game over.
                        </p>
                        <p>Plain and simple.</p>
                        <p>
                            It&apos;s not about what you&apos;re selling —
                            it&apos;s about who you&apos;re selling it to, and
                            whether new eyeballs are hitting your page{' '}
                            <span className="font-bold">daily.</span>
                        </p>
                        <ul className="font-bold space-y-1">
                            <li>No leads = no list.</li>
                            <li>No list = no sales.</li>
                            <li>No sales = no motivation.</li>
                        </ul>
                        <p>
                            That&apos;s the exact loop VidMagnet was built to
                            break.
                        </p>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-center font-medium text-[#110d1a] text-[22px] sm:text-[26px] md:text-[28px] mb-4">
                        Another Hidden Killer?
                    </h3>

                    <h2 className="text-center font-bold text-[#ee4c01] text-[28px] sm:text-[36px] md:text-[42px] leading-tight max-w-4xl mx-auto mb-10 sm:mb-12">
                        Losing Leads Before They Ever Convert
                    </h2>

                    <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-12 justify-between max-w-[1090px] mx-auto">
                        <div className="relative w-full md:w-1/2 h-[588px] bg-white border border-[#ee4c01] rounded-[30px] shadow-[0px_20px_50px_#0000001a]">
                            <Image
                                src="/assets/images/img2.png"
                                alt=""
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="w-full md:w-1/2 font-medium text-[#110d1a] text-[22px]">
                            <div className="space-y-6">
                                <p>
                                    The #2 mistake beginners make is not
                                    following up.
                                </p>
                                <p>
                                    Most people get a lead… and then do nothing
                                    with it.
                                </p>{' '}
                                {bulletFails.map((text, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-2 mb-0"
                                    >
                                        <X className="text-[#110D1A] w-5 h-5 mt-1" />
                                        <span>{text}</span>
                                    </div>
                                ))}
                                <p>
                                    Those leads end up buying from someone else
                                    — usually the guy who stayed in touch.
                                </p>
                            </div>
                            <div className="mt-4">
                                <p>VidMagnet solves this by:</p>
                                <div className="space-y-4">
                                    {solutionPoints.map((text, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-2"
                                        >
                                            <FaCircle className="text-[#110d1a] w-3 h-3 mt-[12px] shrink-0" />
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                    <p>
                                        {' '}
                                        Every day you don&apos;t follow up…
                                        someone else is.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReasonQuite;
