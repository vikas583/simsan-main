'use client';

import { ReactNode } from "react";
import Link from "next/link";
import { colors } from "@/lib/colors";

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    slug: string;
    onLearnMore?: () => void;
}

const ServiceCard = ({ icon, title, description, slug, onLearnMore }: ServiceCardProps) => {
    const handleClick = () => {
        if (onLearnMore) {
            onLearnMore();
        }
    };

    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-6 md:gap-8 py-8 sm:py-10 md:py-12 border-b border-gray-200 last:border-b-0">
            {/* Icon Circle - Centered on Mobile, Left on Tablet+ */}
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
                <div 
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full flex items-center justify-center"
                    style={{ 
                        backgroundColor: colors.primary,
                        boxShadow: '0 4px 16px rgba(255, 87, 34, 0.2)'
                    }}
                >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white">
                        {icon}
                    </div>
                </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 space-y-4 sm:space-y-4 md:space-y-5 text-center sm:text-left">
                <h3 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
                    style={{ color: colors.primary }}
                >
                    {title}
                </h3>
                <p 
                    className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-none sm:max-w-2xl"
                    style={{ color: '#666666' }}
                >
                    {description}
                </p>
                <div className="flex justify-center sm:justify-start">
                    <Link
                        href={`/services/${slug}`}
                        onClick={handleClick}
                        className="group inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all duration-200 hover:opacity-90 no-underline"
                        style={{ 
                            backgroundColor: colors.primary,
                            color: '#ffffff'
                        }}
                    >
                        LEARN MORE
                        <svg 
                            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
