"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { colors } from "@/lib/colors";
import React from "react";

const reviews = [
  {
    text:
      "I would highly recommend these gentlemen. Sandeep door knocked at the right time as we needed work done. The price was really reasonable and they cleaned the gutters, hand brushed the siding and windows.",
    author: "Wilson Rodrigues",
  },
  // Repeated for the sample; real reviews would be mapped here
  {
    text:
      "I would highly recommend these gentlemen. Sandeep door knocked at the right time as we needed work done. The price was really reasonable and they cleaned the gutters, hand brushed the siding and windows.",
    author: "Wilson Rodrigues",
  },
  {
    text:
      "I would highly recommend these gentlemen. Sandeep door knocked at the right time as we needed work done. The price was really reasonable and they cleaned the gutters, hand brushed the siding and windows.",
    author: "Wilson Rodrigues",
  },
];

export default function CustomerReviews() {
  return (
    <Box
      className="w-full py-12 lg:py-16 flex flex-col items-center justify-center"
      style={{ background: colors.background.white }}
    >
      <Typography
        variant="h4"
        className="text-center font-bold mb-4"
        style={{ color: colors.primary, fontSize: "2rem" }}
      >
        Customer Reviews
      </Typography>
      <Typography
        variant="body1"
        className="text-center mb-8"
        style={{ fontSize: '1.1rem', color: colors.text.primary }}
      >
        See What Our Customers Say About Working With Us
      </Typography>
      <Box
        className="flex flex-col md:flex-row gap-6 lg:gap-8 max-w-7xl w-full px-4 md:px-8 lg:px-0 justify-center"
      >
        {reviews.map((rev, idx) => (
          <Box
            key={idx}
            className="flex-1 p-6 md:p-8 rounded-2xl border shadow-sm flex flex-col items-start relative border-[1.8px]"
            style={{
              borderColor: colors.primary,
              minWidth: 0,
              maxWidth: 410,
              minHeight: 280,
              background: colors.reviewCard,
            }}
          >
            {/* Quote icon - top right */}
            <Box
              className="absolute top-4 right-4 text-[42px] md:text-[50px]"
              style={{ color: colors.primary }}
            >
              <svg viewBox="0 0 48 48" width="1em" height="1em">
                <g fill="currentColor">
                  <path d="M19.5,18c0,3.3-2.7,6-6,6c-0.8,0-1.5-0.7-1.5-1.5v-3c0-0.8,0.7-1.5,1.5-1.5h2v-3c0-2.5,2-4.5,4.5-4.5S25,13.5,25,16v18c0,0.8-0.7,1.5-1.5,1.5h-3A1.5,1.5,0,0,1,19,34.5V18z"></path>
                </g>
              </svg>
            </Box>
            {/* Review text */}
            <Typography
              variant="body1"
              component="p"
              className="italic mb-8 mt-8"
              style={{ fontSize: '1.08rem', color: colors.text.primary, fontStyle: 'italic', lineHeight: 1.65 }}
            >
              {`"${rev.text}"`}
            </Typography>
            {/* Author Name */}
            <Typography
              variant="subtitle1"
              component="span"
              className="font-bold mt-auto text-[18px]"
              style={{ color: colors.primary }}
            >
              {rev.author}
            </Typography>
          </Box>
        ))}
      </Box>
      {/* Slider Dots */}
      <Box className="flex gap-2 mt-8">
        {[0, 1, 2].map((n) => (
          <span
            key={n}
            className={"w-3 h-3 rounded-full inline-block"}
            style={n === 0 ? { background: colors.primary } : { background: '#e5e7eb' }}
          ></span>
        ))}
      </Box>
    </Box>
  );
}
