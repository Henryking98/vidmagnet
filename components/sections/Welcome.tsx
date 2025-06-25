'use client';
import Image from 'next/image';

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

                <div
                    className="w-full max-w-[368px] aspect-square mb-[20px] mt-[10px] rounded-full p-[20px] sm:p-[28px] md:p-[34px] shadow-[0px_15.92px_39.81px_0px_rgba(0,0,0,0.2)]"
                    style={{
                        background: 'linear-gradient(135deg, #01EEC6, #01A0EE)',
                    }}
                >
                    <div className="w-full h-full relative rounded-full overflow-hidden bg-white">
                        <Image
                            src="/assets/images/person.png"
                            alt="Rahim Farhouni"
                            fill
                            className="object-cover rounded-full"
                            priority
                        />
                    </div>
                </div>

                <p className="text-[#4550DA] font-semibold text-[20px] sm:text-[24px] md:text-[28px]">
                    & I&apos;d like to welcome you to...
                </p>
            </div>
        </section>
    );
};

export default Welcome;
