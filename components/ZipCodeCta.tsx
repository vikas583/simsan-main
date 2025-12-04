"use client";
import Box from "@mui/material/Box";
import { colors } from "@/lib/colors";
import React from "react";

export default function ZipCodeCta() {
  return (
    <Box
      className="max-w-6xl w-full flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 py-8"
      style={{ background: colors.primary, borderRadius: '100px', boxShadow: '0 8px 48px 0 rgba(46,31,11,0.12)' }}
    >
      <span
        className="block font-extrabold text-white text-center sm:text-left text-2xl sm:text-3xl mb-4 sm:mb-0 flex-shrink-0 leading-none"
        style={{ lineHeight: '1.2', fontWeight: 800 }}
      >
        See If We Serve Your Neighborhood
      </span>
      <form
        className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4"
        autoComplete="off"
        action="#"
        onSubmit={e => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Enter Zip Code"
          className="flex-1 min-w-[180px] h-16 px-8 text-lg sm:text-2xl placeholder-gray-400 bg-white rounded-full border-none outline-none focus:ring-2 focus:ring-white text-gray-700 font-semibold"
          style={{ fontFamily: 'inherit' }}
        />
        <button
          type="submit"
          className="h-16 px-10 text-lg sm:text-2xl font-extrabold rounded-full bg-white hover:bg-gray-100 border-none outline-none flex items-center justify-center"
          style={{ color: colors.primary, fontFamily: 'inherit' }}
        >
          Go
        </button>
      </form>
    </Box>
  );
}
