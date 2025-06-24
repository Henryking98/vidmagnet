'use client';

const Reasons = () => {
    const ReasonsData = [
        { title: 'No Leads Coming In' },
        { title: 'Zero Traffic' },
        { title: 'Tech Confusion' },
        { title: 'Inconsistent Posting' },
        { title: 'Confusing Funnels' },
        { title: 'No Credibility or Authority' },
        { title: 'Shiny Object Syndrome' },
        { title: 'Lack of Time' },
        { title: 'Fear of Being on Camera' },
        { title: 'Social Media Overwhelm' },
        { title: 'Analysis Paralysis' },
        { title: 'And More…' },
    ];

    return (
        <section className="w-full relative bg-white bg-[url(/assets/images/abstract2.png)] bg-center bg-cover bg-no-repeat bg-center py-14 sm:py-20 lg:py-26">
            <div className="container relative mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-12 sm:mb-16 lg:mb-20 px-2">
                    <h3 className="font-medium text-[22px] sm:text-[28px] md:text-[32px] text-[#110d1a] mb-3">
                        Did you know that…
                    </h3>

                    <h2 className="font-bold text-[26px] sm:text-[34px] md:text-[42px] max-w-4xl mb-5 leading-tight bg-[linear-gradient(90deg,rgba(238,76,1,1)_0%,rgba(136,1,136,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent">
                        68% of new marketers FAIL to build a list or earn a
                        single sale in their first 6 months?
                    </h2>

                    <p className="font-normal text-[16px] sm:text-[20px] md:text-[24px] text-[#110d1a] mb-6 sm:mb-8">
                        (Most give up before they ever see results.)
                    </p>

                    <h4 className="font-extrabold text-[18px] sm:text-[22px] md:text-[26px] text-[#0548a9]">
                        The REAL Reasons Most Beginners Fail
                    </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
                    {ReasonsData.map((reason, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center px-2 sm:px-4"
                        >
                            <div className="w-[90px] sm:w-[120px] md:w-[140px] lg:w-[151px] h-[90px] sm:h-[120px] md:h-[140px] lg:h-[151px] bg-[#ffaf8a] rounded-full mb-4 sm:mb-6" />
                            <h5 className="font-bold text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#110d1a] max-w-[230px]">
                                {reason.title}
                            </h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reasons;
