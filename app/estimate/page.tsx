import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Box from "@mui/material/Box";
import Image from "next/image";
import { colors } from "@/lib/colors";

export default function EstimatePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Free Estimate" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroBanner
          title="Get Free Estimate Now"
          breadcrumbs={breadcrumbs}
          backgroundImage="/mask-group.png"
          minHeight="260px"
        />

        {/* Introduction Section */}
        <Box className="w-full bg-white py-12 lg:py-16">
          <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3"
              style={{ color: colors.primary }}
            >
              Get Started With a Free Estimate Today
            </h2>
            <p
              className="text-xl md:text-2xl font-semibold mb-6"
              style={{ color: colors.primary }}
            >
              Thank you for choosing Simsan Fraser!
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: colors.text.primary }}>
              For a fast and accurate free estimate, simply complete the form below. Our team will review your request and get back to you shortly with all the details. If you need immediate support, feel free to call us at{" "}
              <a
                href="tel:+16048804476"
                className="hover:underline font-semibold"
                style={{ color: colors.primary }}
              >
                +1-604-880-4476
              </a>
              {", "}
              <a
                href="tel:+17782227988"
                className="hover:underline font-semibold"
                style={{ color: colors.primary }}
              >
                +1-778-222-7988
              </a>
              {" "}and one of our service specialists will be happy to assist you. We look forward to helping you with reliable, high-quality cleaning services!
            </p>
          </Box>
        </Box>

        {/* Two Column Section - Image Left, Form Right */}
        <Box className="w-full bg-white py-8 lg:py-12">
          <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
            <Box className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Column - Image with Logo Overlay */}
              <Box className="flex-1 relative">
                <Box className="relative w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden">
                  <Image
                    src="/home-about-img1.png"
                    alt="Simsan Fraser Maintenance Services"
                    fill
                    className="object-cover"
                  />
                  {/* Logo Overlay - Centered */}
                  <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-6 lg:p-8">
                    <Image
                      src="/icons/logo.svg"
                      alt="Simsan Fraser Maintenance Ltd."
                      width={200}
                      height={60}
                      className="mb-2 mx-auto"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <p className="text-white text-lg lg:text-xl font-semibold">
                      Simsan Fraser Maintenance Ltd.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* Right Column - Contact Form */}
              <Box className="flex-1">
                <Box
                  className="rounded-2xl p-8 lg:p-10"
                  style={{
                    backgroundColor: colors.primary,
                  }}
                >
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Get a Free Estimate
                  </h2>
                  <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
                    Have questions or need a service? We&apos;re here to help! Reach out to our team for quick support, bookings, or personalized assistance we&apos;d love to hear from you.
                  </p>

                  {/* Contact Form */}
                  <form className="w-full mt-4 grid grid-cols-1 gap-4">
                    {/* Name */}
                    <Box>
                      <label className="text-white block mb-2 font-bold text-[16px] text-left">
                        Name*
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-white"
                        placeholder="John Doe Adirha"
                      />
                    </Box>

                    {/* Email */}
                    <Box>
                      <label className="text-white block mb-2 font-bold text-[16px] text-left">
                        Email*
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-white"
                        placeholder="Johndemo@ymail.com"
                      />
                    </Box>

                    {/* Mobile Number */}
                    <Box>
                      <label className="text-white block mb-2 font-bold text-[16px] text-left">
                        Mobile Number*
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-white"
                        placeholder="+1 89659866666"
                      />
                    </Box>

                    {/* Select Service */}
                    <Box>
                      <label className="text-white block mb-2 font-bold text-[16px] text-left">
                        Select Service*
                      </label>
                      <Box className="relative">
                        <select
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-white appearance-none"
                          defaultValue="roof-gutter"
                        >
                          <option value="roof-gutter">Roof & Gutter Cleaning</option>
                          <option value="window">Window Washing</option>
                          <option value="pressure">Pressure Cleaning</option>
                          <option value="christmas">Christmas Lighting & Decoration</option>
                        </select>
                        <Box className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </Box>
                      </Box>
                    </Box>

                    {/* Message */}
                    <Box>
                      <label className="text-white block mb-2 font-bold text-[16px] text-left">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-white resize-none"
                        placeholder="Your message here..."
                      />
                    </Box>

                    {/* Submit Button */}
                    <Box className="flex items-start mt-6">
                      <button
                        type="submit"
                        className="px-10 py-4 rounded-full bg-white text-[18px] font-semibold hover:bg-gray-100 transition-colors"
                        style={{ color: colors.primary }}
                      >
                        Submit
                      </button>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}

