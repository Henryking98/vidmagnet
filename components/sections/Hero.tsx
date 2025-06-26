'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { CustomButton } from '../CustomButton';
import { Input } from '../ui/input';
import { FaPlay } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="relative z-20 w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 bg-[url(/assets/images/bg-gradient.jpg)] bg-center bg-cover">
            <div className="relative container">
                <div className="max-w-[1000px] mx-auto text-center">
                    <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-2 leading-snug bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(200,222,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent">
                        First Ever Viral Video → Lead Funnel Automation Suite
                    </h2>
                    <h1 className="font-extrabold text-[36px] sm:text-[48px] md:text-[58px] leading-tight bg-[linear-gradient(270deg,#007FFF_0%,#01EE7B_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent">
                        Turns ANY Viral YouTube Video Into Done-For-You Lead
                        Funnels &amp; Traffic Generators
                    </h1>

                    <p className="text-[18px] sm:text-[20px] md:text-[22px] font-normal text-[#c8deff] mb-10 leading-relaxed max-w-[690px] mx-auto">
                        Let AI Find High-Converting Videos, Build Instant Lead
                        Funnels, &amp; Drive Traffic &amp; Opt-ins — All Without
                        Creating a Single Video Yourself.
                    </p>
                </div>

                <div className="mx-auto rounded-[30px] overflow-hidden shadow-[0px_4px_100px_#00000040] max-w-7xl">
                    <div className="relative h-[300px] sm:h-[450px] md:h-[630px] w-full">
                        <Image
                            src="/assets/images/video-img.png"
                            alt="Video Background"
                            fill
                            className="object-cover"
                            priority
                        />

                        <div
                            className={cn(
                                'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer',
                                'w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-full bg-[#2068D2] flex items-center justify-center',
                                'shadow-lg hover:bg-blue-700 transition-colors duration-200'
                            )}
                            aria-label="Play Video"
                            onClick={() => setIsOpen(true)}
                        >
                            <FaPlay className="text-white w-6 h-6 sm:w-10 sm:h-10" />
                        </div>
                    </div>
                </div>

                <div className="text-white pt-14">
                    <h2 className="text-center font-bold text-white text-[28px] sm:text-[34px] md:text-[40px] mb-6">
                        Launching On 4th JULY 2025 At 11 AM ET/NY
                    </h2>

                    <div className="mx-auto max-w-[854px] bg-[#217bff4c] rounded-[30px] mb-16 border">
                        <div className="p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-left">
                            <div className="w-full md:w-1/2">
                                <h3 className="font-outfit font-bold text-[26px] sm:text-[32px] md:text-4xl mb-8">
                                    Make Up To $XXX In Funnel Sales
                                </h3>

                                <CustomButton
                                    href="/https://www.jvzoo.com/affiliate/affiliateinfonew/index/420179"
                                    className="w-full md:w-[238px] h-[54px] rounded-[27px] border border-white bg-gradient-to-r from-[#EE4C01] to-[#F4B005] font-outfit font-bold text-[20px] md:text-[22px]"
                                >
                                    Get Affiliate Link
                                </CustomButton>
                            </div>

                            <div className="w-full md:w-1/2">
                                <h3 className="font-outfit font-bold text-[20px] sm:text-[24px] md:text-2xl mb-4">
                                    Get Your JVZoo Affiliate Links & Grab Your
                                    Promo Tools
                                </h3>

                                <div className="space-y-4">
                                    <Input
                                        placeholder="Name"
                                        className="w-full h-[41px] bg-white font-outfit text-[#191919] text-lg"
                                    />
                                    <Input
                                        placeholder="Email"
                                        className="w-full h-[41px] bg-white font-outfit text-[#191919] text-lg"
                                    />
                                    <Button className="w-full py-4 bg-[#ee5b01] rounded-[5px] font-outfit font-bold text-white text-lg cursor-pointer">
                                        Join Notification List
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
                    <div className="w-full md:w-[418px] rounded-[30px] bg-[linear-gradient(90deg,#64F9E0_10%,#007FFF_90%)] shadow-none">
                        <div className="flex items-center p-4 h-full w-full">
                            <div className="relative w-[90px] sm:w-[115px] h-[110px] sm:h-[155px] -mt-4">
                                <Image
                                    src="/assets/icons/money-bag.svg"
                                    alt="money bag"
                                    fill
                                    sizes="(max-width: 768px) 90px, 115px"
                                    className="object-contain"
                                />
                            </div>
                            <div className="ml-auto text-white text-[20px] sm:text-[24px] md:text-[28px] font-outfit font-normal text-right leading-tight">
                                And: <span className="font-bold">$5,000</span>
                                <br />
                                In{' '}
                                <span className="font-bold">
                                    JV Cash Prizes
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-[418px] rounded-[30px] bg-[linear-gradient(90deg,#B30284_10%,#007FFF_90%)] shadow-none">
                        <div className="flex items-center p-4 h-full gap-[20px]">
                            <div className="relative w-[110px] sm:w-[158px] h-[110px] sm:h-full -mt-4">
                                <Image
                                    src="/assets/icons/love.svg"
                                    alt="Love"
                                    fill
                                    sizes="(max-width: 768px) 110px, 158px"
                                    className="object-contain scale-[1.5]"
                                />
                            </div>
                            <div className="ml-auto text-white text-[20px] sm:text-[24px] md:text-[28px] font-outfit font-bold text-left leading-tight">
                                Yes, My Subscribers Will Love VidMagnet
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="dQw4w9WgXcQ"
                    onClose={() => setIsOpen(false)}
                />

                <Image
                    src="/assets/icons/play.png"
                    alt="play illustration"
                    width={95}
                    height={95}
                    className="object-contain top-0 right-0 absolute -z-[1px]"
                />
                <Image
                    src="/assets/icons/microphone.png"
                    alt="micro illustration"
                    width={95}
                    height={95}
                    className="object-contain top-[14rem] left-0 absolute -z-[1px]"
                />
                <Image
                    src="/assets/icons/bubble.png"
                    alt="bubble illustration"
                    width={95}
                    height={95}
                    className="object-contain top-[68rem] right-0 absolute -z-[1px]"
                />
                <Image
                    src="/assets/icons/envelop.png"
                    alt="envelop illustration"
                    width={95}
                    height={95}
                    className="object-contain top-[88rem] left-0 absolute -z-[1px]"
                />
            </div>
        </section>
    );
};

export default Hero;
