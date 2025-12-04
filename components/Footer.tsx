"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import { colors } from "@/lib/colors";
import { CONTACT_INFO } from "@/constants";

const companyLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

const services = [
  "Roof & Gutter Cleaning",
  "Window Cleaning",
  "Pressure Washing",
  "Christmas Light & Decoration",
];

export default function Footer() {
  return (
    <Box component="footer" className="w-full relative">
      {/* Top CTA Bar - Orange Pill */}
      <Box
        className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-8 lg:py-10 mx-auto max-w-7xl"
        style={{
          background: colors.primary,
          borderRadius: '100px',
          top: '65px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Box className="flex-1 mb-6 lg:mb-0 lg:mr-8">
          <Typography
            variant="h4"
            className="text-white font-bold mb-2 text-center lg:text-left"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
          >
            Call for a FREE Estimate
          </Typography>
          <Typography
            variant="body1"
            className="text-white text-center lg:text-left"
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
          >
            Not sure where to start? Get in touch with one of our pros today for a no-obligation estimate.
          </Typography>
        </Box>
        <Box className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <Box
            className="px-6 py-3 rounded-full bg-white text-center cursor-pointer hover:bg-gray-100 transition-colors"
            style={{ minWidth: '200px' }}
          >
            <Typography
              variant="body1"
              className="font-semibold"
              style={{ color: colors.text.primary }}
            >
              +1-778-222-7988
            </Typography>
          </Box>
          <Box
            className="px-6 py-3 rounded-full bg-white text-center cursor-pointer hover:bg-gray-100 transition-colors"
            style={{ minWidth: '200px' }}
          >
            <Typography
              variant="body1"
              className="font-semibold"
              style={{ color: colors.text.primary }}
            >
              +1-604-880-4476
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Main Footer Content - Dark Background */}
      <Box
        className="w-full px-6 lg:px-12 xl:px-16 py-12 lg:py-16"
        style={{ background: '#0a0a0a', borderTopLeftRadius: '50px', borderTopRightRadius: '50px' }}
      >
        <Box className="max-w-7xl mx-auto">
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-6">
            {/* Column 1: Logo & Company Info */}
            <Box className="flex flex-col">
              <Image
                src="/icons/logo.svg"
                alt="Simsan Fraser Maintenance Ltd."
                width={300}
                height={100}
                className="mb-4"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              {/* Social Media Icons - Placeholder */}
              <Box className="flex gap-3">
                <Box
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: colors.primary }}
                >
                  {/* Facebook icon placeholder */}
                </Box>
                <Box
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: colors.primary }}
                >
                  {/* Instagram icon placeholder */}
                </Box>
                <Box
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: colors.primary }}
                >
                  {/* YouTube icon placeholder */}
                </Box>
              </Box>
            </Box>

            {/* Column 2: Company Links */}
            <Box className="flex flex-col">
              <Typography
                variant="h6"
                className="text-white font-bold mb-4"
                style={{ fontSize: '1.125rem' }}
              >
                Company
              </Typography>
              <Box className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="text-white hover:text-gray-300 transition-colors no-underline"
                    style={{ fontSize: '0.9375rem' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Column 3: Services */}
            <Box className="flex flex-col">
              <Typography
                variant="h6"
                className="text-white font-bold mb-4"
                style={{ fontSize: '1.125rem' }}
              >
                Services
              </Typography>
              <Box className="flex flex-col gap-3">
                {services.map((service) => (
                  <Typography
                    key={service}
                    className="text-white hover:text-gray-300 transition-colors cursor-pointer"
                    style={{ fontSize: '0.9375rem' }}
                  >
                    {service}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Column 4: Contact Information */}
            <Box className="flex flex-col">
              <Typography
                variant="h6"
                className="text-white font-bold mb-4"
                style={{ fontSize: '1.125rem' }}
              >
                Contact Information
              </Typography>
              <Box className="flex flex-col gap-4">
                {/* Location */}
                <Box className="flex items-start gap-3">
                  <Box
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: colors.primary }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 0C3.24 0 1 2.24 1 5C1 8.5 6 12 6 12C6 12 11 8.5 11 5C11 2.24 8.76 0 6 0ZM6 6.5C5.17 6.5 4.5 5.83 4.5 5C4.5 4.17 5.17 3.5 6 3.5C6.83 3.5 7.5 4.17 7.5 5C7.5 5.83 6.83 6.5 6 6.5Z" fill="white"/>
                    </svg>
                  </Box>
                  <Typography className="text-white" style={{ fontSize: '0.9375rem' }}>
                    Office Location here
                  </Typography>
                </Box>

                {/* Phone 1 */}
                <Box className="flex items-start gap-3">
                  <Box
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: colors.primary }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 0.5C2.22 0.5 2 0.72 2 1V11C2 11.28 2.22 11.5 2.5 11.5H9.5C9.78 11.5 10 11.28 10 11V1C10 0.72 9.78 0.5 9.5 0.5H2.5ZM3 2H9V10H3V2Z" fill="white"/>
                    </svg>
                  </Box>
                  <Typography className="text-white" style={{ fontSize: '0.9375rem' }}>
                    +1-778-222-7988
                  </Typography>
                </Box>

                {/* Phone 2 */}
                <Box className="flex items-start gap-3">
                  <Box
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: colors.primary }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 0.5C2.22 0.5 2 0.72 2 1V11C2 11.28 2.22 11.5 2.5 11.5H9.5C9.78 11.5 10 11.28 10 11V1C10 0.72 9.78 0.5 9.5 0.5H2.5ZM3 2H9V10H3V2Z" fill="white"/>
                    </svg>
                  </Box>
                  <Typography className="text-white" style={{ fontSize: '0.9375rem' }}>
                    +1-604-880-4476
                  </Typography>
                </Box>

                {/* Email */}
                <Box className="flex items-start gap-3">
                  <Box
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: colors.primary }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 2L6 6.5L11 2V10H1V2ZM1 0H11C11.55 0 12 0.45 12 1V11C12 11.55 11.55 12 11 12H1C0.45 12 0 11.55 0 11V1C0 0.45 0.45 0 1 0Z" fill="white"/>
                    </svg>
                  </Box>
                  <Typography className="text-white" style={{ fontSize: '0.9375rem' }}>
                    {CONTACT_INFO.EMAIL}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Copyright Section */}
      <Box
        className="w-full px-6 lg:px-12 xl:px-16 py-6"
        style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}
      >
        <Box className="max-w-7xl mx-auto">
          <Typography
            variant="body2"
            className="text-white text-center"
            style={{ fontSize: '0.875rem' }}
          >
            © Copyright 2025 Simsan Fraser Maintenance Ltd. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
