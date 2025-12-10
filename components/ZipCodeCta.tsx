"use client";
import Box from "@mui/material/Box";
import { colors } from "@/lib/colors";
import React from "react";

interface ZipCodeCtaProps {
  className?: string;
  wrapperStyle?: React.CSSProperties;
}

export default function ZipCodeCta({ 
  className = "", 
  wrapperStyle = {}
}: ZipCodeCtaProps = {}) {
  return (
    <Box
      className={`max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-7 md:py-8 ${className}`}
      style={{ 
        background: colors.primary, 
        borderRadius: '50px', 
        boxShadow: '0 8px 48px 0 rgba(46,31,11,0.12)',
        ...wrapperStyle
      }}
      sx={{
        '@media (min-width: 1024px)': {
          borderRadius: '100px',
        },
      }}
    >
      <span
        className="block font-extrabold text-white text-center lg:text-left text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-4 lg:mb-0 flex-shrink-0 leading-tight lg:leading-none w-full lg:w-auto"
        style={{ lineHeight: '1.2', fontWeight: 800 }}
      >
        See If We Serve Your Neighborhood
      </span>
      <form
        className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 flex-shrink-0"
        autoComplete="off"
        action="#"
        onSubmit={e => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Enter Zip Code"
          className="flex-1 min-w-[160px] sm:min-w-[180px] px-4 sm:px-6 md:px-6 lg:px-8 py-3 sm:py-3.5 md:py-3.5 lg:py-4 text-base sm:text-lg md:text-lg lg:text-xl placeholder-gray-400 bg-white rounded-full border-none outline-none focus:ring-2 focus:ring-white text-gray-700 font-semibold"
          style={{ fontFamily: 'inherit' }}
        />
        <button
          type="submit"
          className="px-6 sm:px-8 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-3.5 lg:py-4 text-base sm:text-lg md:text-lg lg:text-xl font-extrabold rounded-full bg-white hover:bg-gray-100 border-none outline-none flex items-center justify-center transition-colors duration-200 whitespace-nowrap"
          style={{ color: colors.primary, fontFamily: 'inherit' }}
        >
          Go
        </button>
      </form>
    </Box>
  );
}
