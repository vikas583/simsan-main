"use client";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { colors } from "@/lib/colors";

export default function OurServices() {
  return (
    <Box className="w-full bg-white py-16 lg:py-24">
      <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
        {/* Header */}
        <Box className="text-center mb-12 lg:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: colors.primary }}
          >
            Our Services
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto"
            style={{ color: colors.text.primary }}
          >
            We provide complete home cleaning and enhancement solutions, including roof &amp; gutter cleaning, window washing, and high-quality pressure cleaning to restore your property&apos;s shine. Along with this, we also offer beautiful and safe Christmas lighting &amp; decoration services to make your home look festive and welcoming.
          </p>
        </Box>

        {/* Services Grid - Single Row (4 columns) */}
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {/* Service Card 1: Roof & Gutter Cleaning */}
          <Box className="overflow-visible rounded-t-[32px] flex flex-col">
            <Box className="relative overflow-visible">
              <Image
                src="/home-about-imp2.png"
                alt="Roof & Gutter Cleaning"
                width={700}
                height={510}
                className="w-full h-[260px] object-cover rounded-t-[32px] rounded-b-none"
                priority
              />
              {/* Icon overlap: squircle badge */}
              <Box className="absolute -top-4 sm:-top-6 lg:-top-8 -right-4 sm:-right-6 lg:-right-8 w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] lg:w-[70px] lg:h-[70px] rounded-[24px] sm:rounded-[26px] lg:rounded-[28px] flex items-center justify-center shadow-lg z-10 border border-gray-100 bg-white">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </Box>
            </Box>
            <Box 
              className="bg-white px-8 pt-6 pb-8 flex flex-col flex-1"
              style={{ 
                borderRadius: '32px',
                width: '95%',
                bottom: '25px',
                position: 'relative'
              }}
            >
              <h3 className="text-2xl font-extrabold mb-3 leading-snug" style={{ color: colors.primary }}>
                Roof &amp; Gutter<br/>Cleaning
              </h3>
              <p className="text-gray-600 md:text-lg mb-5 flex-1" style={{ color: colors.text.primary }}>
                We have all the modern tools to help you keep your roof &amp; gutter clean and shiny. We use soft brushes, which are safe and are more efficient to remove...
              </p>
              <Link href="/services/roof-gutter-cleaning" className="font-bold text-lg block w-full pt-3 pb-1 mt-auto no-underline" style={{ color: colors.primary, background: 'none' }}>
                LEARN MORE <span className="inline-block align-middle"><svg className="w-5 h-5 inline ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </Link>
            </Box>
          </Box>

          {/* Service Card 2: Window Washing */}
          <Box className="overflow-visible rounded-t-[32px] flex flex-col">
            <Box className="relative overflow-visible">
              <Image
                src="/home-about-img1.png"
                alt="Window Washing"
                width={700}
                height={510}
                className="w-full h-[260px] object-cover rounded-t-[32px] rounded-b-none"
              />
              {/* Icon overlap: squircle badge */}
              <Box className="absolute -top-4 sm:-top-6 lg:-top-8 -right-4 sm:-right-6 lg:-right-8 w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] lg:w-[70px] lg:h-[70px] rounded-[24px] sm:rounded-[26px] lg:rounded-[28px] flex items-center justify-center shadow-lg z-10 border border-gray-100 bg-white">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="9" height="10" rx="1" />
                  <rect x="13" y="4" width="9" height="10" rx="1" />
                  <line x1="2" y1="9" x2="11" y2="9" />
                  <line x1="13" y1="9" x2="22" y2="9" />
                </svg>
              </Box>
            </Box>
            <Box 
              className="bg-white px-8 pt-6 pb-8 flex flex-col flex-1"
              style={{ 
                borderRadius: '32px',
                width: '95%',
                bottom: '25px',
                position: 'relative'
              }}
            >
              <h3 className="text-2xl font-extrabold mb-3 leading-snug" style={{ color: colors.primary }}>
                Window Washing
              </h3>
              <p className="text-gray-600 md:text-lg mb-5 flex-1" style={{ color: colors.text.primary }}>
                Want your house to shine bright? Call us and get your windows cleaned quickly! We don&apos;t use any chemicals or soaps to clean windows.
              </p>
              <Link href="/services/window-washing" className="font-bold text-lg block w-full pt-3 pb-1 mt-auto no-underline" style={{ color: colors.primary, background: 'none' }}>
                LEARN MORE <span className="inline-block align-middle"><svg className="w-5 h-5 inline ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </Link>
            </Box>
          </Box>

          {/* Service Card 3: Pressure Cleaning */}
          <Box className="overflow-visible rounded-t-[32px] flex flex-col">
            <Box className="relative overflow-visible">
              <Image
                src="/home-about-img1.png"
                alt="Pressure Cleaning"
                width={700}
                height={510}
                className="w-full h-[260px] object-cover rounded-t-[32px] rounded-b-none"
              />
              {/* Icon overlap: squircle badge */}
              <Box className="absolute -top-4 sm:-top-6 lg:-top-8 -right-4 sm:-right-6 lg:-right-8 w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] lg:w-[70px] lg:h-[70px] rounded-[24px] sm:rounded-[26px] lg:rounded-[28px] flex items-center justify-center shadow-lg z-10 border border-gray-100 bg-white">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12h8M8 12L4 8M8 12L4 16M16 12l4-4M16 12l4 4" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M12 4v4M12 16v4" />
                </svg>
              </Box>
            </Box>
            <Box 
              className="bg-white px-8 pt-6 pb-8 flex flex-col flex-1"
              style={{ 
                borderRadius: '32px',
                width: '95%',
                bottom: '25px',
                position: 'relative'
              }}
            >
              <h3 className="text-2xl font-extrabold mb-3 leading-snug" style={{ color: colors.primary }}>
                Pressure Cleaning
              </h3>
              <p className="text-gray-600 md:text-lg mb-5 flex-1" style={{ color: colors.text.primary }}>
                Pressure washing or power washing is the use of high-pressure water spray to remove loose paint, mold, grime, dust
              </p>
              <Link href="/services/pressure-cleaning" className="font-bold text-lg block w-full pt-3 pb-1 mt-auto no-underline" style={{ color: colors.primary, background: 'none' }}>
                LEARN MORE <span className="inline-block align-middle"><svg className="w-5 h-5 inline ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </Link>
            </Box>
          </Box>

          {/* Service Card 4: Christmas Lighting & Decoration */}
          <Box className="overflow-visible rounded-t-[32px] flex flex-col">
            <Box className="relative overflow-visible">
              <Image
                src="/home-about-imp2.png"
                alt="Christmas Lighting & Decoration"
                width={700}
                height={510}
                className="w-full h-[260px] object-cover rounded-t-[32px] rounded-b-none"
              />
              {/* Icon overlap: squircle badge */}
              <Box className="absolute -top-4 sm:-top-6 lg:-top-8 -right-4 sm:-right-6 lg:-right-8 w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] lg:w-[70px] lg:h-[70px] rounded-[24px] sm:rounded-[26px] lg:rounded-[28px] flex items-center justify-center shadow-lg z-10 border border-gray-100 bg-white">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L8 8h8l-4-6z" />
                  <path d="M10 8L6 14h8l-4-6z" />
                  <path d="M8 14L4 20h16l-4-6z" />
                  <path d="M12 20v2" />
                </svg>
              </Box>
            </Box>
            <Box 
              className="bg-white px-8 pt-6 pb-8 flex flex-col flex-1"
              style={{ 
                borderRadius: '32px',
                width: '95%',
                bottom: '25px',
                position: 'relative'
              }}
            >
              <h3 className="text-2xl font-extrabold mb-3 leading-snug" style={{ color: colors.primary }}>
                Christmas Lighting<br/>&amp; Decoration
              </h3>
              <p className="text-gray-600 md:text-lg mb-5 flex-1" style={{ color: colors.text.primary }}>
                Nothing we love more than helping a family with a Christmas tree or a holiday look that will be cherished for years to come.
              </p>
              <Link href="/services/christmas-lighting-decoration" className="font-bold text-lg block w-full pt-3 pb-1 mt-auto no-underline" style={{ color: colors.primary, background: 'none' }}>
                LEARN MORE <span className="inline-block align-middle"><svg className="w-5 h-5 inline ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

