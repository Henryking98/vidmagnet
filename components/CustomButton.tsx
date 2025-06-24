import { Button } from '@/components/ui/button'; // shadcn Button
import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export const CustomButton = ({
    children,
    href,
    onClick,
    className = '',
    type = 'button',
}: CustomButtonProps) => {
    const baseClass =
        'rounded-[27px] px-6 py-6 bg-gradient-to-r from-[#EE4C01] to-[#F4B005] border border-white text-white text-[22px] font-bold font-outfit transition-all hover:opacity-90 cursor-pointer';

    if (href) {
        return (
            <Link href={href} passHref>
                <Button asChild className={cn(baseClass, className)}>
                    <span>{children}</span>
                </Button>
            </Link>
        );
    }

    return (
        <Button
            type={type}
            onClick={onClick}
            className={cn(baseClass, className)}
        >
            {children}
        </Button>
    );
};
