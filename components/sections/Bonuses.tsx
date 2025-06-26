import React from 'react';
import { CustomButton } from '../CustomButton';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

const Bonuses = () => {
    const contestCards = [
        {
            title: 'OVERALL CONTEST',
            dates: 'July 4 - 10',
            amount: '$1,000',
            description: '(Total Sales)',
            bgColor: 'bg-[#0548a94c]',
            borderColor: 'border-[#9a0e49]',
            titleColor: 'text-[#0548a9]',
            iconPath: '/assets/icons/cup1.png',
            iconBg: 'bg-[#0548AA4D]',
        },
        {
            title: 'SPEED CONTEST',
            dates: 'July 4 - 5',
            amount: '$1,000',
            description: '(FE ONLY)',
            bgColor: 'bg-[#ee4c014c]',
            borderColor: 'border-[#9a0e49]',
            titleColor: 'text-[#ee4c01]',
            iconPath: '/assets/icons/cup2.png',
            iconBg: 'bg-[#EE4C014D]',
        },
        {
            title: 'OPENING CONTEST',
            dates: 'July 4 - 5',
            amount: '$2,000',
            description: '(Total Sales)',
            bgColor: 'bg-[#c403ad4c]',
            borderColor: 'border-[#9a0e49]',
            titleColor: 'text-[#c403ad]',
            iconPath: '/assets/icons/cup3.png',
            iconBg: 'bg-[#C404AE4D]',
        },
        {
            title: 'CLOSING CONTEST',
            dates: 'July 9 - 10',
            amount: '$2,000',
            description: '(Total Sales)',
            bgColor: 'bg-[#217bff4c]',
            borderColor: 'border-[#9a0e49]',
            titleColor: 'text-[#217bff]',
            iconPath: '/assets/icons/cup4.png',
            iconBg: 'bg-[#217BFF4D]',
        },
    ];

    const accessLinkCards = [
        {
            description:
                'Use our high-converting email swipes to make sure your promotions soar!',
        },
        {
            description:
                'Use our done-for-you bonuses in your promotions or for ads',
        },
        {
            description:
                'Everything You need to CRUSH your promo and make this your most profitable promo for the year!',
        },
    ];
    return (
        <section className="w-full bg-[#c8deff] py-16 overflow-x-hidden">
            <div className="container">
                <div className="mb-16 text-center">
                    <h2 className="bg-[linear-gradient(90deg,rgba(238,76,1,1)_0%,rgba(241,0,177,1)_100%)] bg-clip-text text-transparent font-bold text-[32px] mb-2">
                        PLUS: We&apos;ve included hand-picked exclusive bonuses
                        in the front-end offer
                    </h2>
                    <p className="text-[#0548a9] text-xl sm:text-2xl md:text-[32px] font-medium">
                        As well as each OTO, well suited to your subscribers to
                        make them drool
                    </p>
                    <CustomButton className="mt-8">
                        Get Your Link Now
                    </CustomButton>
                </div>

                <div className="relative w-full bg-[url(/assets/images/bg-linear.png)] bg-center bg-cover rounded-[30px] pt-8 pb-14 px-4 md:px-12 xl:px-24">
                    <h2 className="text-center bg-gradient-to-r from-[#ee4c01] to-[#ffbb00] bg-clip-text text-transparent font-bold text-4xl sm:text-6xl md:text-[100px] mb-4">
                        The Funnel
                    </h2>
                    <h3 className="text-center text-[#c8deff] text-2xl sm:text-3xl md:text-[42px] font-bold mb-12">
                        50% Commissions Across The Funnel
                    </h3>

                    <Card className="w-full max-w-[896px] mx-auto mb-10 rounded-[30px] border-2 border-[#0548a9] shadow-lg bg-white">
                        <CardContent className="p-8">
                            <div className="flex flex-col items-center">
                                <div className="relative mb-8">
                                    <div className="bg-[#ee4c014c] h-[51px] max-w-[284px] px-6 flex justify-center items-center text-center">
                                        <h3 className="text-2xl md:text-[42px] font-bold text-[#0548a9]">
                                            VidMagnet
                                        </h3>
                                    </div>
                                    <h4 className="text-xl md:text-4xl font-semibold text-[#0548a9] mb-6 text-center">
                                        Commercial
                                    </h4>
                                </div>
                                <p className="text-lg md:text-2xl text-[#110d1a] text-center mb-8">
                                    Core app — pick a viral video, launch a lead
                                    funnel, drive traffic
                                </p>
                                <p className="text-2xl md:text-4xl font-bold text-[#0548a9] text-center">
                                    $47
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        {/* OTO 1 */}
                        <Card className="rounded-[30px] border-2 border-[#0548a9] shadow-[0px_20px_50px_#0000001a] bg-white">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="bg-[#ee01ae4c] relative mb-6 w-[156px] h-[51px] text-center flex items-center justify-center">
                                    <h3 className="text-[42px] font-bold text-[#0548a9]">
                                        OTO 1
                                    </h3>
                                </div>

                                <h4 className="text-4xl font-semibold text-[#0548a9] mb-6">
                                    VidMagnet Unlimited
                                </h4>

                                <div className="text-[22px] mb-8 space-y-4">
                                    <p>
                                        <strong>
                                            Unlock unlimited everything —
                                        </strong>{' '}
                                        no limits on videos, sites, posts, or
                                        niches.
                                    </p>
                                    <p>
                                        <strong>Bonus Features:</strong> DFY
                                        funnel templates, split-test pages, AI
                                        copywriter.
                                    </p>
                                </div>

                                <p className="text-[42px] font-bold text-[#0548a9] mt-auto">
                                    $97
                                </p>
                            </CardContent>
                        </Card>

                        {/* OTO 2 */}
                        <Card className="rounded-[30px] border-2 border-[#0548a9] shadow-[0px_20px_50px_#0000001a] bg-white">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="bg-[#0157ee4c] relative w-[156px] mb-6 h-[51px] flex items-center justify-center">
                                    <h3 className=" text-[42px] font-bold text-[#0548a9]">
                                        OTO 2
                                    </h3>
                                </div>

                                <h4 className="text-4xl font-semibold text-[#0548a9] mb-6">
                                    VidMagnet Traffic Engine
                                </h4>

                                <div className="text-[22px] mb-8 space-y-4">
                                    <p>
                                        <strong>
                                            Plug-and-play traffic system —{' '}
                                        </strong>
                                        bulk social scheduler, niche hooks, cold
                                        email templates.
                                    </p>
                                    <p>
                                        The easiest way to get free traffic
                                        without ads or burnout.
                                    </p>
                                </div>

                                <p className="text-[42px] font-bold text-[#0548a9] mt-auto">
                                    $67
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-[30px] border-2 border-[#0548a9] shadow-[0px_20px_50px_#0000001a] bg-white">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="bg-[#87ee01]/30 relative mb-6 w-[156px] h-[51px] flex items-center justify-center">
                                    <h3 className="text-[42px] font-bold text-[#0548a9]">
                                        OTO 3
                                    </h3>
                                </div>

                                <h4 className="text-4xl font-semibold text-[#0548a9] mb-6">
                                    VidMagnet Fast Funnel Pack
                                </h4>

                                <div className="text-[22px] mb-8 space-y-4">
                                    <p>
                                        <strong>
                                            Copy-paste campaigns that work —
                                        </strong>
                                        DFY affiliate funnels + autoresponder
                                        emails.
                                    </p>
                                    <p>
                                        Perfect for users who want to skip setup
                                        and go straight to profits.
                                    </p>
                                </div>

                                <p className="text-[42px] font-bold text-[#0548a9] mt-auto">
                                    $97
                                </p>
                            </CardContent>
                        </Card>

                        {/* OTO 4 */}
                        <Card className="rounded-[30px] border-2 border-[#0548a9] shadow-[0px_20px_50px_#0000001a] bg-white">
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <div className="relative ">
                                    <div className="bg-[#01eeaa]/30 relative mb-6 w-[156px] h-[51px] flex items-center justify-center">
                                        <h3 className="text-[42px] font-bold text-[#0548a9]">
                                            OTO 4
                                        </h3>
                                    </div>
                                </div>

                                <h4 className="text-4xl font-semibold text-[#0548a9] mb-6">
                                    VidMagnet whitelabel
                                </h4>

                                <div className="text-[22px] mb-8 space-y-4">
                                    <p>
                                        <strong>
                                            Sell as your own, keep 100%
                                            commissions —
                                        </strong>{' '}
                                        instant software business in a box.
                                    </p>
                                    <p>
                                        Perfect for agencies, coaches, and biz
                                        opp resellers.
                                    </p>
                                </div>

                                <p className="text-[42px] font-bold text-[#0548a9] mt-auto">
                                    $197
                                </p>
                            </CardContent>
                        </Card>
                        {/* OTO 5 */}
                        <Card className="rounded-[30px] border-2 border-[#0548a9] shadow-[0px_20px_50px_#0000001a] bg-white">
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <div className="relative ">
                                    <div className="bg-[#01eeaa]/30 relative mb-6 w-[156px] h-[51px] flex items-center justify-center">
                                        <h3 className="text-[42px] font-bold text-[#0548a9]">
                                            OTO 5
                                        </h3>
                                    </div>
                                </div>

                                <h4 className="text-4xl font-semibold text-[#0548a9] mb-6">
                                    VidMagnet Reseller
                                </h4>

                                <div className="text-[22px] mb-8 space-y-4">
                                    <p>
                                        <strong>
                                            Sell as your own, keep 100%
                                            commissions —
                                        </strong>{' '}
                                        instant software business in a box.
                                    </p>
                                    <p>
                                        Perfect for agencies, coaches, and biz
                                        opp resellers.
                                    </p>
                                </div>

                                <p className="text-[42px] font-bold text-[#0548a9] mt-auto">
                                    $197
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-[30px] border-2 border-[#0548a9] shadow-[0px_20px_50px_#0000001a] bg-white">
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <div className="relative ">
                                    <div className="bg-[#01eeaa]/30 relative mb-6 flex items-center justify-center pr-[10px] pl-[10px]">
                                        <h3 className="text-[42px] font-bold text-[#0548a9]">
                                            Instant Bundle Deal
                                        </h3>
                                    </div>
                                </div>

                                <div className="text-[22px] mb-8 space-y-4">
                                    <p className="text-2xl text-center">
                                        <span className="font-bold text-[#110d1a]">
                                            All upgrades at 60% off
                                        </span>
                                        <span className="text-[#110d1a]">
                                            {' '}
                                            — massive value stack that converts
                                            like crazy
                                        </span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* <Card className="w-full max-w-[896px] mx-auto rounded-[30px] pb-8 border-2 border-[#0548a9] shadow-[0px_20px_50px_#0000001a] bg-white">
                        <CardContent className="p-8">
                            <div className="flex flex-col items-center">
                                <h3 className="text-[42px] font-bold text-[#0548a9] text-center mb-6">
                                    Instant Bundle Deal
                                </h3>
                                <p className="text-2xl text-center">
                                    <span className="font-bold text-[#110d1a]">
                                        All upgrades at 60% off
                                    </span>
                                    <span className="text-[#110d1a]">
                                        {' '}
                                        — massive value stack that converts like
                                        crazy
                                    </span>
                                </p>
                            </div>
                        </CardContent>
                    </Card> */}
                </div>

                <div className="mb-20 mt-8 relative ">
                    <Image
                        src="/assets/icons/coins-1.png"
                        alt="Icon"
                        width={146}
                        height={159}
                        className="object-cover absolute left-0 -translate-x-1/2 z-10 -left-[4rem] top-[4rem]"
                    />
                    <Image
                        src="/assets/icons/coins-2.png"
                        alt="Icon"
                        width={172}
                        height={238}
                        className="object-cover absolute -translate-x-1/2 z-10 bottom-[28rem] -right-[16rem] -rotate-[68deg]"
                    />
                    <Image
                        src="/assets/icons/coins-3.png"
                        alt="Icon"
                        width={200}
                        height={154}
                        className="object-cover absolute -translate-x-1/2 z-0 left-[2rem] top-[77rem] blur-[2.5px] -rotate-[22deg] "
                    />
                    <div className="flex flex-col justify-center">
                        <Image
                            src="/assets/icons/double-arrow.svg"
                            alt="Icon"
                            width={46}
                            height={46}
                            className="object-cover m-auto"
                        />
                        <h2 className="text-center mt-4 bg-gradient-to-b from-[#6d06e2] to-[#ee4c01] bg-clip-text text-transparent font-black text-5xl sm:text-6xl md:text-[100px] mb-2">
                            $5,000
                        </h2>
                        <h3 className="text-center text-[#0548a9] text-lg md:text-2xl font-bold mb-12">
                            IN JV CONTEST &amp; CASH PRIZES
                        </h3>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {contestCards.map((contest, index) => (
                                <Card
                                    key={`contest-${index}`}
                                    className={`rounded-[30px] shadow-[0px_20px_50px_#0000001a] bg-white border-2 border-solid ${contest.borderColor}`}
                                >
                                    <CardContent className="flex flex-col justify-center bg-white relative rounded-[30px] py-6">
                                        <div className="">
                                            <div
                                                className={`w-[141px] h-[134px] rounded-[30px] flex items-center justify-center mx-auto mb-8 ${contest.iconBg}`}
                                            >
                                                <Image
                                                    src={contest.iconPath}
                                                    alt="Icon"
                                                    width={68}
                                                    height={68}
                                                    className="object-contain"
                                                />
                                            </div>

                                            <div
                                                className={`${contest.titleColor} text-2xl md:text-4xl font-bold text-center`}
                                            >
                                                {contest.title}
                                            </div>

                                            <div className="text-xl md:text-4xl font-medium text-[#110d1a] text-center">
                                                {contest.dates}
                                            </div>

                                            <div className="text-5xl md:text-7xl font-bold text-[#4fb62e] text-center mt-10">
                                                {contest.amount}
                                            </div>

                                            <div className="text-xl md:text-4xl font-medium text-[#110d1a] text-center">
                                                {contest.description}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="max-w-[896px] m-auto text-center bg-gradient-to-r from-[#ee4c01] to-[#aa058c] bg-clip-text text-transparent font-bold text-[32px] md:text-[54px] mb-8">
                        I am well-known to bring the heat for all my JV Partners
                    </h2>

                    <Card className="w-full rounded-[30px] shadow-lg bg-white border-2 border-[#aa058c] mb-16">
                        <CardContent className="p-8 h-[400px] sm:h-[600px] md:h-[839px]"></CardContent>
                    </Card>

                    <h2 className="text-center text-[#8a02d8] font-bold text-[32px] md:text-[54px] mb-8">
                        Simply Pick-n-Use These Professionally Created Promo
                        Tools AND Bank BIG Commissions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {accessLinkCards.map((card, index) => (
                            <Card
                                key={`access-${index}`}
                                className="rounded-[30px] bg-white"
                            >
                                <CardContent className="p-4 flex flex-col items-center">
                                    <CustomButton className="bg-[#ee4c01] text-white font-bold text-[22px] rounded-[27px] px-[54px] py-2.5 max-w-[238px] h-[54px] mt-[30px] mb-6">
                                        Access Link
                                    </CustomButton>
                                    <p className="font-bold text-[#191919] text-2xl text-center rotate-[-0.95deg]">
                                        {card.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-[#0548a9] text-4xl font-semibold mb-4 max-w-[840px] m-auto">
                        I look forward to sending you tons of commissions and
                        taking great care of your customers
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Bonuses;
