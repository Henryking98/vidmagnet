'use client';

const Welcome = () => {
    return (
        <section className="relative w-full bg-[#eff4ff] py-16 sm:py-20 md:py-24">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                <div className="w-full sm:w-[300px] md:w-[430px] h-[300px] sm:h-[380px] md:h-[485px] bg-[#191919] rounded-[30px] sm:rounded-[36px] md:rounded-[40px] shadow-xl" />

                <div className="flex flex-col text-center md:text-left max-w-full sm:max-w-[400px] md:max-w-[343px] space-y-6 sm:space-y-10 md:space-y-12">
                    <h2 className="font-bold text-[36px] sm:text-[44px] md:text-[54px] leading-tight text-[#4550da]">
                        Hey,
                    </h2>

                    <p className="font-semibold text-[20px] sm:text-[24px] md:text-[28px] text-[#110d1a] leading-snug">
                        My name is{' '}
                        <span className="text-[#4550da]">Rahim Farhouni</span>{' '}
                        &amp; I&apos;d like to welcome you to
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Welcome;

// const Welcome = () => {
//     return (
//         <section className="relative w-full py-24 bg-[#eff4ff]">
//             <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
//                 <div className="w-[430px] h-[485px] bg-[#191919] rounded-[40px] border-none shadow-lg"></div>

//                 <div className="flex flex-col max-w-[343px] space-y-12">
//                     <h2 className="font-bold text-[#4550da] text-[54px]">
//                         Hey,
//                     </h2>

//                     <p className="font-semibold text-[#110d1a] text-[28px]">
//                         My Name is Rahim Farhouni &amp; I&apos;d like to welcome
//                         you to
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default Welcome;
