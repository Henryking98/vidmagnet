'use client';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { FaPlay } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

const VideoAction = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="w-full py-16 sm:py-20 md:py-24 bg-[#110d1a] relative bg-[url(/assets/images/abstract-purple-blue-wavy.png)] bg-center bg-cover bg-cover bg-center">
            <div className="relative container z-10 px-4 text-center">
                <h2 className="text-[32px] sm:text-[42px] md:text-[58px] font-bold bg-gradient-to-r from-white to-[#c8deff] bg-clip-text text-transparent leading-tight">
                    Watch VidMagnet In Action
                </h2>

                <div className="mx-auto rounded-[30px] overflow-hidden shadow-[0px_4px_100px_#00000040] max-w-7xl mt-6 sm:mt-8">
                    <div className="relative w-full h-[220px] sm:h-[380px] md:h-[630px]">
                        <Image
                            src="/assets/images/video-img.png"
                            alt="Video Background"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />

                        <div
                            className={cn(
                                'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer',
                                'w-[60px] sm:w-[80px] md:w-[100px] h-[60px] sm:h-[80px] md:h-[100px]',
                                'rounded-full bg-[#2068D2] flex items-center justify-center',
                                'shadow-lg hover:bg-blue-700 transition-colors duration-200'
                            )}
                            aria-label="Play Video"
                            onClick={() => setIsOpen(true)}
                        >
                            <FaPlay className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10" />
                        </div>
                    </div>
                </div>
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="dQw4w9WgXcQ"
                    onClose={() => setIsOpen(false)}
                />
            </div>
        </section>
    );
};

export default VideoAction;
