'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            onClick={scrollToTop}
            className={`fixed bottom-[30px] right-[20px] w-[50px] h-[50px] z-[1000] cursor-pointer rounded-full flex items-center justify-center
                bg-gradient-to-r from-[#EE4C01] to-[#F4B005]
                shadow-[0_0_15px_rgba(244,176,5,0.5)]
                transition-all duration-300 ease-in-out
                ${
                    visible
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible translate-y-4'
                }
            `}
        >
            <FaArrowUp className="text-white text-[18px]" />
        </div>
    );
};

export default GoToTop;
