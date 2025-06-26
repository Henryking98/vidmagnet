'use client';
import Image from 'next/image';
import { Button } from '../ui/button';

const people = [
    {
        profileImage: '/assets/images/rahim.png',
    },
    {
        profileImage: '/assets/images/vivek.png',
    },
];

const Welcome = () => {
    return (
        <section className="relative w-full bg-[#eff4ff] py-16 sm:py-20">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <h2 className="font-bold text-[32px] sm:text-[44px] md:text-[54px] leading-tight text-[#4550da]">
                    Hey,
                </h2>

                <p className="font-semibold text-[28px] sm:text-[34px] md:text-[48px] text-[#110d1a] leading-snug">
                    My name is Rahim Farhouni
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8 mb-8">
                    {people.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center w-full max-w-[305px] px-4 sm:px-0"
                        >
                            <div className="relative w-[180px] h-[180px] sm:w-[222px] sm:h-[222px] rounded-full overflow-hidden bg-white mb-4">
                                <Image
                                    src={person.profileImage}
                                    alt="person"
                                    fill
                                    className="object-cover rounded-full"
                                    priority
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-[#4550DA] font-semibold text-[20px] sm:text-[24px] md:text-[28px]">
                    & I&apos;d like to welcome you to...
                </p>
            </div>
        </section>
    );
};

export default Welcome;
