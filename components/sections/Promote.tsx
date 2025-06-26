'use client';

import Image from 'next/image';
import { CardContent, Card } from '../ui/card';

type BulletContent = {
    intro: string;
    items: string[];
    outro: string;
};

type PromoteCard = {
    number: string;
    title: string;
    content: string[] | BulletContent;
};

const promoteData: PromoteCard[] = [
    {
        number: '1.',
        title: 'Zero Content Creation Required — Massive Mass Appeal',
        content: [
            "Your audience doesn't need to record videos, write emails, or build pages.",
            "VidMagnet does it all — using other people's content. That means instant attraction for beginners, busy marketers, and anyone tired of grinding.",
        ],
    },
    {
        number: '2.',
        title: 'Built for the Biz Opp + Affiliate Marketing Crowd',
        content: [
            'VidMagnet speaks the language of Make Money Online, side hustlers, and first-time funnel builders.',
            'This is exactly what those lists want: Done-for-you traffic, leads, and commissions — without the tech drama.',
        ],
    },
    {
        number: '3.',
        title: 'Proven Funnel with High-Converting OTOs',
        content: {
            intro: 'The offer includes a battle-tested funnel:',
            items: [
                'Unlimited Upgrade',
                'Traffic Toolkit',
                'DFY Fast Funnels',
                'Reseller License',
                'Bundle Deal',
            ],
            outro:
                'Each one is laser-targeted to unlock next-level results: more upgrades, more commissions, and more EPCs for you.',
        },
    },
    {
        number: '4.',
        title: 'Positioned as a Turnkey Funnel Business',
        content: [
            "This isn't just a tool.",
            'VidMagnet can be sold as a complete business-in-a-box — helping users launch their own list-building, affiliate, or client service business in one click.',
            'Big perceived value = easier sales.',
        ],
    },
    {
        number: '5.',
        title: 'Fresh Angle That Cuts Through the Noise',
        content: [
            'Faceless YouTube, AI funnels, lead magnets, affiliate promos — all tied into one ridiculously simple system.',
            'No complicated promises. Just click → launch → profit. The offer is hot. The angle is unique. Your subscribers will thank you — and you’ll earn commissions across the entire funnel.',
        ],
    },
];

function isBulletContent(
    content: PromoteCard['content']
): content is BulletContent {
    return (
        typeof content === 'object' &&
        !Array.isArray(content) &&
        'intro' in content &&
        'items' in content &&
        'outro' in content
    );
}

const Promote = () => {
    return (
        <section className="w-full py-16 sm:py-20 md:py-24 bg-[#110d1a] bg-[url(/assets/images/bg-gradient3.png)] bg-center bg-cover">
            <div className="container mx-auto px-4 relative">
                <Card className="sm:max-[1000px] m-auto bg-white">
                    <CardContent className="p-0 relative">
                        <div className="p-6 sm:p-10 md:p-16 pb-0">
                            <h2 className="text-center text-3xl sm:text-5xl md:text-[58px] font-bold bg-[linear-gradient(90deg,rgba(238,76,1,1)_0%,rgba(136,1,136,1)_100%)] bg-clip-text text-transparent mb-4">
                                FREE Commercial License
                            </h2>

                            <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#0548a9] mb-6">
                                Launch Your Own AI-Powered Lead Funnel Agency
                            </h3>

                            <p className="text-center text-base sm:text-lg md:text-[22px] text-[#110d1a] max-w-[855px] mx-auto mb-12">
                                With VidMagnet, your subscribers won't just
                                build funnels for themselves — they can charge
                                clients to build lead pages, grow email lists,
                                and run promotions in any niche.
                            </p>

                            <div className="w-full relative max-w-[669px] h-[389px] mx-auto mb-12 rounded-[30px] shadow-[0px_20px_50px_#0000001a] overflow-hidden">
                                <Image
                                    src="/assets/images/commercial-license.png"
                                    alt="Free Commercial License"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <h2 className="text-center text-[32px] sm:text-[42px] md:text-[58px] font-bold bg-gradient-to-r from-[#007FFF] to-[#07ea65] bg-clip-text text-transparent mt-4 mb-12 sm:mb-16">
                    TOP 5 Reasons You’ll Love Promoting VidMagnet
                </h2>

                <div className="flex flex-col gap-10">
                    {promoteData.map((card, index) => (
                        <div
                            key={index}
                            className="rounded-[30px] bg-white shadow-[0px_20px_50px_#0000001a]"
                        >
                            <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6">
                                <div className="text-[36px] sm:text-[42px] md:text-[48px] font-bold text-[#0548a9] min-w-[50px] sm:min-w-[60px]">
                                    {card.number}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-[22px] sm:text-[28px] md:text-[32px] font-bold text-[#0548a9] mb-4 leading-tight">
                                        {card.title}
                                    </h3>

                                    <div className="text-[16px] sm:text-[18px] md:text-[20px] text-[#110d1a] space-y-4 leading-relaxed">
                                        {isBulletContent(card.content) ? (
                                            <>
                                                <p>{card.content.intro}</p>
                                                <ul className="space-y-3">
                                                    {card.content.items.map(
                                                        (item, i) => (
                                                            <li
                                                                key={i}
                                                                className="flex items-start gap-2"
                                                            >
                                                                <Image
                                                                    src="/assets/icons/arrow.svg"
                                                                    alt="Arrow"
                                                                    width={20}
                                                                    height={20}
                                                                    className="mt-[2px] w-5 h-5"
                                                                />
                                                                <span>
                                                                    {item}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                                <p>{card.content.outro}</p>
                                            </>
                                        ) : (
                                            card.content.map((line, i) => (
                                                <p key={i}>{line}</p>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Image
                    src="/assets/icons/microphone.png"
                    alt=""
                    width={95}
                    height={95}
                    className="object-contain top-[0] right-0 absolute -z-[1px]"
                />
            </div>
        </section>
    );
};

export default Promote;
