"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import { colors } from "@/lib/colors";
import { CONTACT_INFO } from "@/constants";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  introText?: string;
  items: FAQItem[];
  showFooterCTA?: boolean;
}

export default function FAQ({ 
  title = "Frequently Asked Questions",
  introText,
  items,
  showFooterCTA = true
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box className="w-full bg-white py-12 md:py-16 lg:py-20">
      <Box className="max-w-4xl mx-auto px-6 lg:px-8 xl:px-0">
        {/* Header */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center"
          style={{ color: colors.primary }}
        >
          {title}
        </h2>

        {/* Introductory Text */}
        {introText && (
          <p 
            className="text-base md:text-lg leading-relaxed mb-8 md:mb-10 text-center max-w-3xl mx-auto"
            style={{ color: "#212121" }}
          >
            {introText}
          </p>
        )}

        {/* FAQ Items */}
        <Box className="space-y-0">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Box
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between py-5 md:py-6 text-left focus:outline-none transition-colors duration-200 hover:bg-gray-50 px-2"
                  aria-expanded={isOpen}
                >
                  <h3
                    className="text-lg md:text-xl lg:text-2xl font-semibold pr-4 flex-1"
                    style={{ color: colors.primary }}
                  >
                    {item.question}
                  </h3>
                  
                  {/* Plus/Minus Icon */}
                  <Box
                    className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-transform duration-200"
                    style={{ 
                      backgroundColor: colors.primary,
                      transform: isOpen ? 'rotate(0deg)' : 'rotate(0deg)'
                    }}
                  >
                    {isOpen ? (
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="md:w-5 md:h-5"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    ) : (
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="md:w-5 md:h-5"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    )}
                  </Box>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <Box className="px-2 pb-5 md:pb-6">
                    <p 
                      className="text-base md:text-lg leading-relaxed"
                      style={{ color: "#212121" }}
                    >
                      {item.answer}
                    </p>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>

        {/* Footer CTA */}
        {showFooterCTA && (
          <Box className="mt-10 md:mt-12 pt-8 border-t border-gray-200">
            <Box className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p 
                className="text-base md:text-lg text-center sm:text-left"
                style={{ color: "#212121" }}
              >
                Get Started Today! Call us at{" "}
                <a 
                  href={`tel:${CONTACT_INFO.PHONE.split(' | ')[0]}`}
                  className="font-bold hover:underline"
                  style={{ color: colors.primary }}
                >
                  {CONTACT_INFO.PHONE.split(' | ')[0]}
                </a>
              </p>
              <Link
                href="/estimate"
                className="text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg w-full sm:w-fit flex items-center justify-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm md:text-base whitespace-nowrap no-underline"
                style={{ background: colors.primary }}
              >
                GET ESTIMATE NOW
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

