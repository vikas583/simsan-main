"use client";

import Box from "@mui/material/Box";
import Link from "next/link";
import { colors } from "@/lib/colors";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
  minHeight?: string;
}

export default function HeroBanner({
  title,
  breadcrumbs,
  backgroundImage = "/homepage1.png",
  minHeight = "260px",
}: HeroBannerProps) {
  return (
    <Box
      className="relative w-full flex flex-col justify-center"
      style={{
        background: `url('${backgroundImage}') center center/cover no-repeat`,
        position: "relative",
        borderBottomLeftRadius: "44px",
        borderBottomRightRadius: "44px",
        overflow: "hidden",
        minHeight: minHeight,
      }}
    >
      {/* Dark Overlay */}
      <Box
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Content */}
      <Box className="relative z-10 sm:py-16 py-0 sm:px-10 px-15 flex-1 flex flex-col justify-center sm:items-start items-center max-w-6xl mx-auto w-full">
        {/* Title - Always left-aligned, white, bold */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-white text-left">
          {title}
        </h1>

        {/* Breadcrumbs - Always left-aligned, active in primary color, rest white */}
        <nav aria-label="Breadcrumb" className=" flex justify-start">
          <ol className="flex items-center space-x-2 text-sm sm:text-base">
            {breadcrumbs.map((item, index) => (
              <li key={item.label} className="flex items-center">
                {index > 0 && <span className="mx-2 text-white">-</span>}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:underline font-medium text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium" style={{ color: colors.primary }}>
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Box>
    </Box>
  );
}

