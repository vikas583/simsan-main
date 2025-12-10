import Box from "@mui/material/Box";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { colors } from "@/lib/colors";
import ZipCodeCta from "@/components/ZipCodeCta";
import Image from "next/image";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactUs from "@/components/ContactUs";
import CustomerReviews from "@/components/CustomerReviews";
import OurWorkCarousel from "@/components/OurWorkCarousel";

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
          <a
            href="/estimate"
            className="text-white font-semibold px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-md md:rounded-lg w-fit flex items-center gap-2 transition-colors duration-200 uppercase tracking-wide text-xs md:text-sm lg:text-base no-underline"
            style={{ background: colors.primary }}
          >
            REQUEST AN ESTIMATE
            <svg className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </Box>
      </Box>

      {/* Place the CTA with negative margin to overlap hero and white bg below */}
      <Box className="w-full flex justify-center" style={{ marginTop: '-64px', position: 'relative', zIndex: 20 }}>
        <ZipCodeCta />
      </Box>

      {/* About Section */}
      <Box className="flex-1 bg-white">
        <Box className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8 xl:px-0 py-20 lg:py-24 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left Content */}
          <Box className="flex-1 max-w-xl px-6 sm:px-0">
            <p className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: colors.primary }}>
              About Us
            </p>
            <h2 className="text-xl md:text-xl lg:text-xl font-extrabold leading-snug mb-4" style={{ color: colors.secondary }}>
              Professional Window, Gutter, & Roof Cleaning
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              We are your trusted cleaning and maintenance experts, offering complete solutions to keep your
              home and property looking its best. From Roof &amp; Gutter Cleaning to Window Washing, we
              ensure every corner shines with perfection.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              Our Pressure Cleaning service restores surfaces to their original beauty removing dirt, grime,
              and stains with precision and care.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              We also bring festive joy to your home with professional Christmas Lighting &amp; Decoration,
              creating beautiful, safe, and eye catching displays for the holiday season.
            </p>
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm md:text-base font-semibold text-white shadow-lg transition-colors duration-200"
              style={{ backgroundColor: colors.primary }}
            >
              LEARN MORE
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Box>

          {/* Right Images - Full width on mobile, side by side on desktop */}
          <Box className="w-full lg:flex-1 flex flex-col sm:flex-row gap-6 justify-center items-center sm:items-start px-6 sm:px-0">
            <Box className="w-full sm:flex-1">
              <Image
                src="/home-about-img1.png"
                alt="Roof cleaning service"
                width={320}
                height={400}
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />
            </Box>
            <Box className="w-full sm:flex-1 max-w-none sm:max-w-[280px] lg:max-w-[320px] mt-0 sm:mt-12 lg:mt-[120px]">
              <Image
                src="/home-about-imp2.png"
                alt="Gutter cleaning service"
                width={320}
                height={400}
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Our Services Section */}
      <OurServices />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Our Work Carousel Section */}
      <OurWorkCarousel />

      {/* Contact Us Section */}
      <ContactUs />

      {/* Customer Reviews Section */}
      <CustomerReviews />

      <Footer />
    </Box>
  );
}
