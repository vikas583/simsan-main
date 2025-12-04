// Global color palette - shared between MUI and Tailwind
// Based on Simsan Fraser Maintenance Ltd. brand colors from design

export const colors = {
  // Primary brand color (orange-red) - for logo, active nav, CTA button
  primary: "#ff5722", // Orange-red
  
  // Secondary color (orange-yellow) - for left side of contact bar
  secondary: "#F68B21", // Orange-yellow
  
  // Text colors
  text: {
    primary: "#212121", // Black for navigation
    white: "#ffffff", // White for text on colored backgrounds
  },
  
  // Background colors
  background: {
    white: "#ffffff",
  },
  // Review card background color (orange, 7% opacity for highlight)
  reviewCard: 'rgba(241, 89, 42, 0.07)', // #F1592A at 7% opacity
} as const;

