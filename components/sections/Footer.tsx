import React from 'react';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { CustomButton } from '../CustomButton';
import Image from 'next/image';

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

                <div className="flex flex-col items-center mt-10">
                    <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] bg-white rounded-full flex justify-center items-center">
                        <div className="text-4xl font-bold">RF</div>
                    </div>
                    <h3 className="mt-2 font-bold text-white text-3xl sm:text-4xl md:text-[58px] text-center">
                        Rahim Farhouni
                    </h3>
                </div>

                <div className="max-w-[750px] mx-auto mt-6">
                    <div className="rounded-[69px] bg-gradient-to-r from-[#0548aa] to-[#217bff] px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] flex-shrink-0">
                            <Image
                                src="/assets/images/3d-rocket.png"
                                alt="Rocket"
                                width={150}
                                height={150}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <p className="text-white text-xl md:text-3xl font-normal">
                                Launching On
                            </p>
                            <p className="text-white text-xl md:text-3xl font-bold">
                                4th July 2025 At 11 AM ET/NY
                            </p>
                        </div>
                    </div>
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
                    <CustomButton className="w-full sm:w-[400px] md:w-[550px] lg:w-[722px] h-[70px] sm:h-[85px] lg:h-[99px] text-xl sm:text-2xl lg:text-[42px] px-8 rounded-[40px] bg-[linear-gradient(40deg,#ee4c01,#ffa912)] hover:opacity-90 text-white font-bold">
                        Get Your JVZoo Affiliate Links
                    </CustomButton>
                </div>
            </div>

            <div className="w-full bg-[#c8deff] py-10 sm:py-[72px] px-4">
                <div className="max-w-[854px] mx-auto text-center">
                    <h3 className="font-bold text-[#110d1a] text-2xl sm:text-[40px]">
                        Affiliate promotion terms & conditions
                    </h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
