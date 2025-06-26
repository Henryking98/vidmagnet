'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { CustomButton } from '../CustomButton';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { text: 'JV Doc', href: '#' },
        { text: 'Swipes', href: '#' },
        { text: 'Bonus Page Generator', href: '#' },
    ];

    return (
        <header className="w-full bg-[#F3F4F6] shadow-md transition-all duration-300">
            <div className="container mx-auto py-6 flex justify-between items-center">
                <Link
                    href="/"
                    className="cursor-pointer max-w-[210px] w-full sm:max-w-[150px] md:max-w-[180px] lg:max-w-[210px]"
                >
                    <div className="relative w-full h-[46px] sm:h-[35px] md:h-[42px] lg:h-[46px]">
                        <Image
                            src="/assets/logo.svg"
                            alt="logo"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="font-normal text-[#191919] text-[18px] hover:text-blue-600 transition-colors"
                        >
                            {item.text}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="block lg:hidden">
                        <CustomButton
                            href="/https://www.jvzoo.com/affiliate/affiliateinfonew/index/420179"
                            className="py-2 px-4 text-sm"
                        >
                            Affiliate Link
                        </CustomButton>
                    </div>

                    <div className="hidden lg:block">
                        <CustomButton>Affiliate Link</CustomButton>
                    </div>

                    <button
                        className={`lg:hidden text-[#191919] text-3xl transition-transform duration-300 cursor-pointer ${
                            menuOpen ? 'rotate-90 scale-105' : 'rotate-0'
                        }`}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    menuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="flex flex-col gap-4 px-6 pb-6 pt-2">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className={`text-[18px] text-[#191919] pb-4 cursor-pointer ${
                                index !== navItems.length - 1
                                    ? 'border-b border-gray-300'
                                    : ''
                            }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.text}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { HiMenu, HiX } from 'react-icons/hi';
// import { CustomButton } from '../CustomButton';

// const Header = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const navItems = [
//         { text: 'JV Doc', href: '#' },
//         { text: 'Swipes', href: '#' },
//         { text: 'Bonus Page Generator', href: '#' },
//     ];

//     return (
//         <header className="w-full bg-[#F3F4F6] shadow-md transition-all duration-300">
//             <div className="container mx-auto py-6 flex justify-between items-center">
//                 <Link href="/" className="cursor-pointer">
//                     <Image
//                         src="/assets/logo.svg"
//                         width={210}
//                         height={46}
//                         alt="logo"
//                         priority
//                     />
//                 </Link>

//                 <nav className="hidden md:flex items-center gap-8">
//                     {navItems.map((item, index) => (
//                         <a
//                             key={index}
//                             href={item.href}
//                             className="font-normal text-[#191919] text-[18px] hover:text-blue-600 transition-colors"
//                         >
//                             {item.text}
//                         </a>
//                     ))}
//                 </nav>

//                 <div className="hidden md:block">
//                     <CustomButton>Affiliate Link</CustomButton>
//                 </div>

//                 <button
//                     className={`md:hidden text-[#191919] text-3xl transition-transform duration-300 cusor-pointer ${
//                         menuOpen ? 'rotate-90 scale-105' : 'rotate-0'
//                     }`}
//                     onClick={() => setMenuOpen((prev) => !prev)}
//                     aria-label="Toggle Menu"
//                 >
//                     {menuOpen ? <HiX /> : <HiMenu />}
//                 </button>
//             </div>

//             <div
//                 className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//                     menuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
//                 }`}
//             >
//                 <nav className="flex flex-col gap-4 px-6 pb-6 pt-2">
//                     {navItems.map((item, index) => (
//                         <a
//                             key={index}
//                             href={item.href}
//                             className="text-[18px] text-[#191919] border-b pb-2 cursur-pointer"
//                             onClick={() => setMenuOpen(false)}
//                         >
//                             {item.text}
//                         </a>
//                     ))}
//                     <CustomButton className="mt-4 w-full">
//                         Affiliate Link
//                     </CustomButton>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;
