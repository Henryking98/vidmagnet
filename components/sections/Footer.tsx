import React from 'react';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { CustomButton } from '../CustomButton';
import Image from 'next/image';
import { Button } from '../ui/button';

const people = [
    {
        name: 'Rahim Farhouni',
        profileImage: '/assets/images/rahim.png',
        icon: '/assets/icons/skype.svg',
        bottomText: 'Connect on Skype',
    },
    {
        name: 'Vivek Gour',
        profileImage: '/assets/images/vivek.png',
        icon: '/assets/icons/skype.svg',
        bottomText: 'Connect on Skype',
    },
];

const Footer = () => {
    return (
        <footer className="w-full relative bg-[linear-gradient(180deg,rgba(124,0,77,1)_0%,rgba(17,13,26,1)_100%),url('/assets/images/abstract4.png')] bg-cover bg-center bg-no-repeat bg-blend-darken">
            <div className="container px-4 pt-20 mx-auto">
                <div className="text-center max-w-[898px] mx-auto">
                    <h2 className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight">
                        Need Anything Else?
                    </h2>
                    <p className="font-medium text-xl sm:text-2xl md:text-3xl bg-[linear-gradient(90deg,rgba(240,245,255,1)_0%,rgba(200,222,255,1)_100%)] bg-clip-text text-transparent">
                        If you need anything at all that can help you promote
                        VidMagnet to your list… feel free to get in touch.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 mt-8 mb-8">
                    {people.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center w-full max-w-[305px] px-4 sm:px-0"
                        >
                            <div className="relative w-[180px] h-[180px] sm:w-[222px] sm:h-[222px] rounded-full overflow-hidden bg-white mb-4">
                                <Image
                                    src={person.profileImage}
                                    alt={person.name}
                                    fill
                                    className="object-cover rounded-full"
                                    priority
                                />
                            </div>

                            <h3 className="text-[28px] sm:text-[36px] text-white font-bold text-center mb-3">
                                {person.name}
                            </h3>

                            <Button
                                className="w-full py-[9px] min-h-[50px] sm:min-h-[57px] px-6 rounded-full text-white font-medium text-[18px] sm:text-[20px] font-[500] mb-4 inline-flex items-center justify-center gap-2 cursor-pointer"
                                style={{
                                    background:
                                        'linear-gradient(90deg, #007FFF 0%, #23FF99 100%)',
                                }}
                            >
                                <Image
                                    src={person.icon}
                                    alt="Skype icon"
                                    width={24}
                                    height={24}
                                />
                                Connect on Skype
                            </Button>
                        </div>
                    ))}
                </div>

                <Card className="max-w-[854px] mx-auto mt-20 bg-[#ffffff33] rounded-[30px] border-2 border-white">
                    <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-10 lg:p-[50px]">
                            <div className="flex flex-col justify-between gap-6">
                                <div className="text-white text-2xl sm:text-3xl md:text-4xl font-normal">
                                    Make Up To{' '}
                                    <span className="font-bold">
                                        $XXX In Funnel Sales
                                    </span>
                                </div>
                                <p className="text-xl sm:text-2xl md:text-[36px] font-bold bg-[linear-gradient(90deg,#95CAFF,#01DAEE)] bg-clip-text text-transparent">
                                    And: $5,000 In JV Cash Prizes
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 sm:gap-5">
                                <h4 className="font-bold text-white text-xl sm:text-2xl">
                                    Get Your JVZoo Affiliate Links & Grab Your
                                    Promo Tools
                                </h4>
                                <Input
                                    className="h-[41px] bg-white text-base sm:text-lg text-[#110d1a]"
                                    placeholder="Name"
                                />
                                <Input
                                    className="h-[41px] bg-white text-base sm:text-lg text-[#110d1a]"
                                    placeholder="Email"
                                />
                                <CustomButton className="h-[41px] bg-[#ee4c01] hover:bg-[#ee4c01]/90 font-bold text-base sm:text-lg">
                                    Subscribe
                                </CustomButton>
                                <p className="text-center text-white text-base sm:text-lg">
                                    Yes, My Subscribers Will Love VidMagnet
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="max-w-[1149px] mx-auto mt-20 bg-[#c8deff] rounded-[30px]">
                    <CardContent className="px-6 py-10 sm:p-[37px]">
                        <h3 className="font-bold text-[#110d1a] text-2xl sm:text-[42px] text-center">
                            Bottom Line:
                        </h3>
                        <div className="mt-6 sm:mt-[30px] text-[#110d1a] text-lg sm:text-[28px] text-center">
                            <p>
                                VidMagnet solves the #1 problem every beginner
                                faces — how to get traffic and leads without
                                creating content. It's the turnkey lead funnel
                                business your customers have been waiting for.
                                Zero learning curve, maximum results, HUGE
                                market appeal.
                            </p>
                            <p className="font-bold mt-4">
                                This is going to convert like crazy — don't miss
                                out!
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-center mt-16 pb-16">
                    <CustomButton className="w-full sm:w-[400px] md:w-[550px] lg:w-[722px] h-[70px] sm:h-[85px] lg:h-[99px] text-xl sm:text-2xl lg:text-[42px] px-8 rounded-[40px] font-bold">
                        Get Your JVZoo Affiliate Links
                    </CustomButton>
                </div>
            </div>

            <div className="w-full bg-[#c8deff] py-10 px-4">
                <div className="max-w-[854px] mx-auto text-center space-y-4">
                    <h3 className="font-bold text-[#110d1a] text-2xl sm:text-[40px]">
                        Affiliate promotion terms & conditions
                    </h3>
                    <p className="font-normal text-base sm:text-lg md:text-[18px] lg:text-[20px] text-[#110D1A]">
                        Disclaimer: Please note that this product does not
                        provide any guarantee of income or success. The results
                        achieved by the product owner or any other individuals
                        mentioned are not indicative of future success or
                        earnings. This website is not affiliated with FaceBook
                        or any of its associated entities. Once you navigate
                        away from FaceBook, the responsibility for the content
                        and its usage lies solely with the user. All content on
                        this website, including but not limited to text, images,
                        and multimedia, is protected by copyright law and the
                        Digital Millennium Copyright Act. Unauthorized copying,
                        duplication, modification, or theft, whether intentional
                        or unintentional, is strictly prohibited. Violators will
                        be prosecuted to the fullest extent of the law.
                    </p>
                    <p className="font-normal text-base sm:text-lg md:text-[18px] lg:text-[20px] text-[#110D1A]">
                        We want to clarify that JVZoo serves as the retailer for
                        the products featured on this site. JVZoo®️ is a
                        registered trademark of BBC Systems Inc., a Florida
                        corporation located at 1809 E. Broadway Street, Suite
                        125, Oviedo, FL 32765, USA, and is used with permission.
                        The role of JVZoo as a retailer does not constitute an
                        endorsement, approval, or review of these products or
                        any claims, statements, or opinions used in their
                        promotion.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
