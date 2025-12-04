import Box from "@mui/material/Box";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { colors } from "@/lib/colors";
import ZipCodeCta from "@/components/ZipCodeCta";

export default function Home() {
  return (
    <Box className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section with overlay gradient */}
      <Box
        className="relative w-full min-h-[520px] lg:min-h-[660px] flex flex-col justify-center"
        style={{ background: `url('/mask-group.png') right center/cover no-repeat`, position: 'relative' }}
      >
        {/* Gradient Overlay (left black to transparent right) */}
        <Box
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(20,20,20,0.98) 0%, rgba(20,20,20,0.9) 34%, rgba(20,20,20,0.7) 48%, rgba(20,20,20,0.3) 70%, rgba(0,0,0,0.0) 100%)'
          }}
        />
        <Box className="relative z-10 px-6 lg:px-16 py-16 flex-1 flex flex-col justify-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Your <span style={{ color: colors.primary }}>Trusted</span> Home Care Team
          </h1>
          <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
            Since 1985, Simsan Fraser Maintenace Cleaning has been committed to providing the best, most effective home services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee.
          </p>
          <button
            className="text-white font-semibold px-8 py-4 rounded-lg w-fit flex items-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base"
            style={{ background: colors.primary }}
          >
            REQUEST AN ESTIMATE
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Box>
      </Box>

      {/* Place the CTA with negative margin to overlap hero and white bg below */}
      <Box className="w-full flex justify-center" style={{ marginTop: '-64px', position: 'relative', zIndex: 20 }}>
        <ZipCodeCta />
      </Box>

      {/* Next section is just white bg for demonstration - remove if not needed */}
      <Box className="flex-1 bg-white min-h-[200px]" />

      <Footer />
    </Box>
  );
}
